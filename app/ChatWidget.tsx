'use client'

import { useEffect, useRef, useState } from 'react'

type ChatOption = { label: string; next: string }
type ChatNode = { bot: string; options: ChatOption[] }

// Arbre scripté v1 (zéro coût, zéro dépendance). Pour brancher une vraie IA plus tard :
// remplacer `choose()` par un appel à une route /api/chat qui renvoie { bot, options }
// au lieu de lire NODES[opt.next] — la forme des messages reste la même.
const NODES: Record<string, ChatNode> = {
  root: {
    bot: "Bonjour ! Je peux répondre à quelques questions fréquentes, ou vous mettre en contact directement avec Stéphane.",
    options: [
      { label: 'Combien ça coûte ?', next: 'pricing' },
      { label: 'Combien de temps ça prend ?', next: 'timeline' },
      { label: 'Comment se déroule un projet ?', next: 'process' },
      { label: 'Et si le résultat ne convient pas ?', next: 'guarantee' },
      { label: 'Parler à Stéphane', next: 'contact' }
    ]
  },
  pricing: {
    bot: "Le tarif dépend du périmètre : cadrage (Thunderstart), produit complet (Thunderbuild) ou agents IA (Thunderbrain). Le premier échange sert justement à cadrer un prix précis — il est gratuit et sans engagement.",
    options: [
      { label: 'Voir les offres', next: '#offres' },
      { label: 'Parler à Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  timeline: {
    bot: "De quelques jours pour un cadrage à plusieurs semaines pour un produit complet — précisé dès le premier échange selon votre besoin.",
    options: [
      { label: 'Parler à Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  process: {
    bot: "Un seul interlocuteur du début à la fin : cadrage, design, développement puis mise en production — sans intermédiaires ni allers-retours entre équipes.",
    options: [
      { label: 'Parler à Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  guarantee: {
    bot: "Le premier échange est un audit gratuit et sans engagement, justement pour vérifier ensemble que c'est le bon fit avant de démarrer quoi que ce soit.",
    options: [
      { label: 'Parler à Stéphane', next: 'contact' },
      { label: '← Retour', next: 'root' }
    ]
  },
  contact: {
    bot: "Parfait, je vous amène au formulaire de contact.",
    options: [
      { label: '← Retour', next: 'root' }
    ]
  }
}

type Message = { from: 'bot' | 'user'; text: string }

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [nodeId, setNodeId] = useState('root')
  const [messages, setMessages] = useState<Message[]>([])
  const threadRef = useRef<HTMLDivElement>(null)

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

  const current = NODES[nodeId]

  return (
    <>
      <button
        type="button"
        data-chat-toggle=""
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', right: '24px', bottom: '24px', zIndex: 100,
          width: '56px', height: '56px', borderRadius: '50%', border: '0',
          background: '#3845e1', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 30px rgba(56,69,225,.45)', transition: 'transform .25s'
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
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
            background: '#232428', border: '1px solid rgba(244,244,245,.14)',
            borderRadius: '20px', boxShadow: '0 26px 60px rgba(0,0,0,.5)', overflow: 'hidden'
          }}
        >
          <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(244,244,245,.14)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg viewBox="0 0 24 21" style={{ width: '13px', height: '11px', flex: 'none' }}><path d="M12 0 24 21H0Z" fill="#3845e1" /></svg>
            <div>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#f4f4f5' }}>Assistant Indiana Studio</p>
              <p style={{ margin: 0, fontSize: '11px', color: 'rgba(244,244,245,.5)' }}>Réponse instantanée</p>
            </div>
          </div>

          <div ref={threadRef} aria-live="polite" style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
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

          <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(244,244,245,.14)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {current.options.map(opt => (
              <button
                key={opt.label}
                type="button"
                data-chat-option=""
                onClick={() => choose(opt)}
                style={{
                  textAlign: 'left', padding: '10px 14px', borderRadius: '12px',
                  border: '1px solid rgba(244,244,245,.2)', background: 'rgba(244,244,245,.04)',
                  color: '#f4f4f5', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                  transition: 'background .2s,border-color .2s'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
