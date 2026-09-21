export const runtime = 'nodejs';

const N8N_WEBHOOK_URL = process.env.N8N_CHAT_WEBHOOK_URL || 'https://n8n.indianastudio.io/webhook/indiana-studio-chat';

export async function POST(request: Request) {
  let payload: { sessionId?: unknown; message?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const sessionId = String(payload.sessionId ?? '').slice(0, 100);
  const message = String(payload.message ?? '').trim().slice(0, 2000);

  if (!sessionId || !message) {
    return Response.json({ error: 'Message manquant.' }, { status: 422 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, message }),
      signal: controller.signal
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const reply = String(data.reply ?? '').trim();
    if (!reply) throw new Error('Réponse vide');
    return Response.json({ reply });
  } catch (err) {
    console.error('appel webhook n8n échoué', err);
    return Response.json(
      { error: "Je n'ai pas pu joindre l'assistant IA. Réessayez dans un instant, ou choisissez « Discuter avec Stéphane »." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
