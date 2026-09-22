'use client'

import { useEffect, useRef, useState } from 'react'

type ChatOption = { label: string; next: string }
type ChatNode = { bot: string; options: ChatOption[] }

const WHATSAPP_NUMBER = '33684234852'
const MAX_AI_MESSAGES_PER_SESSION = 15
const OFF_TOPIC_TAG = '[HORS-SUJET]'
const MAX_OFF_TOPIC = 3

// Arbre scripté v1 (zéro coût, zéro dépendance). Pour brancher une vraie IA plus tard :
// remplacer `choose()` par un appel à une route /api/chat qui renvoie { bot, options }
// au lieu de lire NODES[opt.next] — la forme des messages reste la même.
const NODES: Record<string, ChatNode> = {
  root: {
    bot: "Bonjour ! Posez-moi votre question directement, ou échangez avec Stéphane s'il est disponible. C'est vous qui choisissez.",
    options: [
      { label: 'Combien ça coûte ?', next: 'pricing' },
      { label: 'Combien de temps ça prend ?', next: 'timeline' },
      { label: 'Comment se déroule un projet ?', next: 'process' },
      { label: 'Et si le résultat ne convient pas ?', next: 'guarantee' },
      { label: 'Discuter avec Stéphane', next: 'contact' }
    ]
  },
  pricing: {
    bot: "Chaque offre a un périmètre et un prix annoncés avant de démarrer — pas de facturation à l'heure sans visibilité. ThunderStart (cadrage), ThunderBuild (produit complet) ou ThunderBrain (agents IA) : le prix exact se cadre lors du premier échange, gratuit et sans engagement.",
    options: [
      { label: 'Voir les offres', next: '#offres' },
      { label: 'Discuter avec Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  timeline: {
    bot: "Quelques jours pour un cadrage (ThunderStart), plusieurs semaines pour un produit complet (ThunderBuild). Les agents IA permettent de réduire les délais d'environ 30 % par rapport à un développement classique.",
    options: [
      { label: 'Discuter avec Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  process: {
    bot: "Un seul interlocuteur du cadrage à la mise en production : design, développement et IA sous la même direction. Pas de cahier des charges à traduire ni d'allers-retours entre équipes — un plan clair dès le départ.",
    options: [
      { label: 'Discuter avec Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  guarantee: {
    bot: "Le premier échange est un audit gratuit et sans engagement : on évalue ensemble la faisabilité et le périmètre avant que quoi que ce soit ne soit facturé. Si ça ne correspond pas à votre besoin, aucune obligation de donner suite.",
    options: [
      { label: 'Discuter avec Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  contact: {
    bot: "Comment préférez-vous échanger ?",
    options: [
      { label: 'WhatsApp', next: 'whatsapp' },
      { label: 'Formulaire de contact', next: '#contact' },
      { label: '← Retour', next: 'root' }
    ]
  }
}

type Message = { from: 'bot' | 'user'; text: string; pending?: boolean }

const OFF_TOPIC_BLOCK_KEY = 'is-chat-offtopic-block'
const OFF_TOPIC_BLOCK_MS = 24 * 60 * 60 * 1000

function isOffTopicBlockActive() {
  try {
    const raw = localStorage.getItem(OFF_TOPIC_BLOCK_KEY)
    if (!raw) return false
    const { blockedAt } = JSON.parse(raw)
    if (Date.now() - blockedAt < OFF_TOPIC_BLOCK_MS) return true
    localStorage.removeItem(OFF_TOPIC_BLOCK_KEY)
    return false
  } catch {
    return false
  }
}

function setOffTopicBlock() {
  try {
    localStorage.setItem(OFF_TOPIC_BLOCK_KEY, JSON.stringify({ blockedAt: Date.now() }))
  } catch {
    // localStorage indisponible (navigation privée...) — le blocage reste actif pour la session en cours seulement
  }
}

function getSessionId() {
  try {
    const existing = sessionStorage.getItem('is-chat-session')
    if (existing) return existing
    const id = crypto.randomUUID()
    sessionStorage.setItem('is-chat-session', id)
    return id
  } catch {
    return crypto.randomUUID()
  }
}

function isStephaneAvailable() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris', hour: 'numeric', hour12: false, weekday: 'short'
  }).formatToParts(new Date())
  const weekday = parts.find(p => p.type === 'weekday')?.value
  const hour = Number(parts.find(p => p.type === 'hour')?.value)
  const isWeekday = weekday !== 'Sat' && weekday !== 'Sun'
  return isWeekday && hour >= 9 && hour < 19
}

function buildWhatsAppUrl(messages: Message[]) {
  const transcript = messages
    .map(m => (m.from === 'user' ? '➤ ' : '') + m.text)
    .join('\n')
  const text = messages.length
    ? "Bonjour, je viens du site Indiana Studio. Résumé de mon échange avec l'assistant :\n\n" + transcript
    : 'Bonjour, je viens du site Indiana Studio.'
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text)
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [nodeId, setNodeId] = useState('root')
  const [messages, setMessages] = useState<Message[]>([])
  const [available, setAvailable] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [sending, setSending] = useState(false)
  const [aiDown, setAiDown] = useState(false)
  const sessionIdRef = useRef('')
  const aiMessageCountRef = useRef(0)
  const offTopicCountRef = useRef(0)
  const threadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setAvailable(isStephaneAvailable())
    sessionIdRef.current = getSessionId()
    if (isOffTopicBlockActive()) setAiDown(true)
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: NODES.root.bot }])
    }
  }, [open, messages.length])

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const choose = (opt: ChatOption) => {
    if (opt.next === 'whatsapp') {
      window.open(buildWhatsAppUrl(messages), '_blank', 'noopener,noreferrer')
      setMessages(m => [...m, { from: 'user', text: opt.label }])
      return
    }
    setMessages(m => [...m, { from: 'user', text: opt.label }])
    if (opt.next.startsWith('#')) {
      setOpen(false)
      requestAnimationFrame(() => {
        document.querySelector(opt.next)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    const node = NODES[opt.next]
    setNodeId(opt.next)
    setMessages(m => [...m, { from: 'bot', text: node.bot }])
  }

  const sendFreeText = async (raw: string) => {
    const text = raw.trim()
    if (!text || sending || aiDown) return

    if (aiMessageCountRef.current >= MAX_AI_MESSAGES_PER_SESSION) {
      setAiDown(true)
      setNodeId('root')
      setMessages(m => [...m,
        { from: 'user', text },
        { from: 'bot', text: "Vous avez atteint la limite de questions pour cette session. Je repasse sur les réponses rapides ci-dessous, ou contactez Stéphane directement." },
        { from: 'bot', text: NODES.root.bot }
      ])
      setInputValue('')
      return
    }

    aiMessageCountRef.current += 1
    setInputValue('')
    setMessages(m => [...m, { from: 'user', text }, { from: 'bot', text: '···', pending: true }])
    setSending(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, message: text })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'AI unavailable')

      const isOffTopic = typeof data.reply === 'string' && data.reply.startsWith(OFF_TOPIC_TAG)
      if (isOffTopic) offTopicCountRef.current += 1

      if (isOffTopic && offTopicCountRef.current >= MAX_OFF_TOPIC) {
        setAiDown(true)
        setOffTopicBlock()
        setNodeId('root')
        setMessages(m => {
          const next = m.slice(0, -1)
          return [...next,
            { from: 'bot', text: "Je suis là pour vous aider sur les services d'Indiana Studio — pour toute autre question, contactez Stéphane directement. Je repasse sur les réponses rapides ci-dessous." },
            { from: 'bot', text: NODES.root.bot }
          ]
        })
        return
      }

      const reply = isOffTopic ? data.reply.slice(OFF_TOPIC_TAG.length).trim() : data.reply
      setMessages(m => {
        const next = m.slice(0, -1)
        return [...next, { from: 'bot', text: reply }]
      })
    } catch {
      setAiDown(true)
      setNodeId('root')
      setMessages(m => {
        const next = m.slice(0, -1)
        return [...next, { from: 'bot', text: "L'assistant IA est momentanément indisponible — je repasse sur les réponses rapides ci-dessous." }, { from: 'bot', text: NODES.root.bot }]
      })
    } finally {
      setSending(false)
    }
  }

  const current = NODES[nodeId]
  const hideFaqShortcuts = !aiDown && nodeId === 'root'

  return (
    <>
      {!open && (
        <>
          <span
            data-chat-pulse=""
            aria-hidden="true"
            style={{
              position: 'fixed', right: '24px', bottom: '24px', zIndex: 99,
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(56,69,225,.75)', pointerEvents: 'none'
            }}
          />
          <span
            data-chat-pulse=""
            aria-hidden="true"
            style={{
              position: 'fixed', right: '24px', bottom: '24px', zIndex: 99,
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(56,69,225,.75)', pointerEvents: 'none',
              animationDelay: '1s'
            }}
          />
        </>
      )}
      <button
        type="button"
        data-chat-toggle=""
        data-float={open ? undefined : ''}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', right: '24px', bottom: '24px', zIndex: 100,
          width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(30,31,34,.6)',
          background: '#3845e1', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 30px rgba(56,69,225,.45)', transition: 'transform .25s'
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg width="34" height="34" viewBox="0 0 554 554" fill="#fff">
            <path d="M205.32,465.99c-8.24,0-13.99-5.55-16.59-11.18-2.82-6.1-3.31-15.11,1.95-20.39l79.56-79.9-115.01-149.18-10.03,24.13,54.01,62.7c5.41,6.28,2.46,16.32-3.07,20.21-7.34,5.15-15.19,3.05-20.74-3.37l-42.62-49.31-7.68,17.77,36.97,43.73c5.43,6.42,2.13,16.02-3.3,19.89-6.87,4.9-14.96,3.28-20.38-3.08l-25.71-30.14-6.09,14.66c-3.09,7.43-11.35,10.54-18.29,8.02-7.52-2.73-11.95-11.01-8.56-19.17l57.61-138.95c1.35-11.07,9.48-18.25,20.52-18.62l70.9-.03c5.07-10.3,10.27-19.9,14.56-30.15,2.51-5.99-1.64-13.55-6.65-15.68-6.69-2.85-13.13-1.04-18.51,2.79-4.42-14.45,2.03-29.12,16.66-33.39l78.91-1.81c5.46-.13,10.17,3.55,11.77,8.51l22.38,69.75,59.87-.02c11.15,0,19.81,6.83,22.01,17.97l57.44,138.38c3.16,7.62,1.1,15.58-6.04,19.49-6.32,3.46-16.28,1.74-19.53-5.74l-6.97-16.04-25.61,30.06c-5.44,6.38-13.47,8.05-20.34,3.15-5.65-4.03-8.8-13.61-3.41-19.96l36.89-43.47-7.55-18.09-43.03,49.94c-5.61,6.51-14.85,7.73-21.19,2.14-6.8-5.99-6.35-14.97-.43-21.81l52.22-60.39-10.29-24.52-114.03,147.88,81.04,81.54c5.43,5.46,5.06,14.2,2.05,20.69-2.53,5.47-8.6,10.94-16.35,10.94h-159.32ZM288.53,99.54c0-5.85-4.75-10.6-10.6-10.6s-10.6,4.75-10.6,10.6,4.75,10.6,10.6,10.6,10.6-4.75,10.6-10.6ZM358.96,215.54c4.57-5.91,3.22-13.83.05-19.34-2.78-4.83-8.36-9.96-15.29-9.96h-119.91c-8.05.01-14.4,6.58-16.67,12.38-3.1,7.93-.83,14.52,3.97,20.76l56.56,73.42c6.91,8.96,21.86,12.55,29.77,2.31l61.52-79.58ZM308.39,441.11c3.35,0,6.36-2.83,7.32-5.03,1.04-2.37.64-5.9-1.12-8.19l-23.94-31.16c-1.6-2.09-4.9-4.08-7.25-3.89-2.67.21-5.33,2.18-7.03,4.38l-23.54,30.6c-2.05,2.67-2.12,6.38-.73,9.04,1.25,2.4,4.49,4.29,7.57,4.29l48.72-.04Z" />
            <polygon points="312.71 247.58 254.51 247.59 283.61 198.26 312.71 247.58" />
          </svg>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Assistant Indiana Studio"
          style={{
            position: 'fixed', right: '24px', bottom: '92px', zIndex: 100,
            width: 'min(340px, calc(100vw - 48px))', maxHeight: '70vh',
            display: 'flex', flexDirection: 'column',
            background: '#232428', border: '1px solid rgba(56,69,225,.55)',
            borderRadius: '20px', boxShadow: '0 26px 60px rgba(0,0,0,.5)', overflow: 'hidden'
          }}
        >
          <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(244,244,245,.14)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg viewBox="0 0 24 21" style={{ width: '13px', height: '11px', flex: 'none', marginTop: '3px' }}><path d="M12 0 24 21H0Z" fill="#3845e1" /></svg>
            <div>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#f4f4f5' }}>Assistant Indiana Studio</p>
              <p style={{ margin: 0, fontSize: '11px', color: 'rgba(244,244,245,.5)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span aria-hidden="true" style={{ width: '7px', height: '7px', borderRadius: '50%', flex: 'none', background: available ? '#22c55e' : 'rgba(244,244,245,.35)' }} />
                {available ? 'Stéphane est disponible' : 'Stéphane est absent pour le moment'}
              </p>
            </div>
          </div>

          <div ref={threadRef} aria-live="polite" style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} data-chat-pending={m.pending ? '' : undefined} style={{
                alignSelf: m.from === 'bot' ? 'flex-start' : 'flex-end',
                maxWidth: '85%', padding: '10px 14px', borderRadius: '14px',
                fontSize: '13.5px', lineHeight: 1.4,
                background: m.from === 'bot' ? 'rgba(244,244,245,.08)' : '#3845e1',
                color: m.from === 'bot' ? 'rgba(244,244,245,.88)' : '#fff'
              }}>
                {m.text}
              </div>
            ))}
          </div>

          {aiDown ? (
            <p style={{ margin: 0, padding: '12px 18px 0', fontSize: '11.5px', color: 'rgba(244,244,245,.45)' }}>
              Assistant IA indisponible pour le moment · réponses rapides ci-dessous
            </p>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); sendFreeText(inputValue) }}
              style={{ padding: '12px 14px 0', display: 'flex', gap: '8px' }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                disabled={sending}
                placeholder="Posez votre question…"
                style={{
                  flex: 1, minWidth: 0, padding: '10px 14px', borderRadius: '999px',
                  border: '1px solid rgba(244,244,245,.2)', background: 'rgba(244,244,245,.06)',
                  color: '#f4f4f5', fontSize: '13px', outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={sending || !inputValue.trim()}
                aria-label="Envoyer"
                style={{
                  flex: 'none', width: '38px', height: '38px', borderRadius: '50%', border: '0',
                  background: '#3845e1', color: '#fff', cursor: sending ? 'default' : 'pointer',
                  opacity: sending || !inputValue.trim() ? 0.5 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
          )}

          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(244,244,245,.14)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {current.options
              .filter(opt => !hideFaqShortcuts || opt.next === 'contact')
              .map(opt => {
                const isContact = opt.next === 'contact'
                return (
                  <button
                    key={opt.label}
                    type="button"
                    data-chat-option=""
                    disabled={sending}
                    onClick={() => choose(opt)}
                    style={isContact ? {
                      textAlign: 'left', padding: '10px 14px', borderRadius: '12px',
                      border: '1px solid rgba(56,69,225,.6)', background: '#3845e1',
                      color: '#fff', fontSize: '13px', fontWeight: 700, cursor: sending ? 'default' : 'pointer',
                      opacity: sending ? 0.5 : 1,
                      display: 'flex', alignItems: 'center', gap: '8px',
                      transition: 'background .2s,border-color .2s'
                    } : {
                      textAlign: 'left', padding: '10px 14px', borderRadius: '12px',
                      border: '1px solid rgba(244,244,245,.2)', background: 'rgba(244,244,245,.04)',
                      color: '#f4f4f5', fontSize: '13px', fontWeight: 600, cursor: sending ? 'default' : 'pointer',
                      opacity: sending ? 0.5 : 1,
                      transition: 'background .2s,border-color .2s'
                    }}
                  >
                    {isContact && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flex: 'none' }}>
                        <path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    )}
                    {opt.label}
                  </button>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}
