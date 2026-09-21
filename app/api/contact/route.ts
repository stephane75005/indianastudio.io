import { Resend } from 'resend';

export const runtime = 'nodejs';

const TO = process.env.CONTACT_TO || 'hello@indianastudio.io';
const FROM = process.env.CONTACT_FROM || 'Indiana Studio <hello@indianastudio.io>';

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? '').replace(/[\r\n\0]/g, ' ').trim().slice(0, max);

const bad = (error: string, status: number) =>
  Response.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return bad('Requête invalide.', 400);
  }

  // Honeypot : rempli uniquement par les robots
  if (clean(data.get('site_web'), 200)) return Response.json({ ok: true });

  const nom = clean(data.get('nom'), 120);
  const email = clean(data.get('email'), 160);
  const entreprise = clean(data.get('entreprise'), 120);
  const telephone = clean(data.get('telephone'), 40);
  const offre = clean(data.get('offre'), 120);
  const message = String(data.get('message') ?? '').trim().slice(0, 4000);

  if (!nom || !entreprise || !telephone || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return bad('Merci de renseigner votre nom, votre entreprise, votre téléphone, un email valide et votre projet.', 422);
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante');
    return bad("L'envoi est momentanément indisponible. Écrivez-moi directement.", 500);
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = [
    'Nouvelle demande depuis indianastudio.io',
    '',
    'Nom        : ' + nom,
    'Entreprise : ' + (entreprise || 'non précisé'),
    'Téléphone  : ' + (telephone || 'non précisé'),
    'Email      : ' + email,
    'Besoin     : ' + (offre || 'non précisé'),
    'Date       : ' + new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
    '',
    'Projet :',
    message
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: 'Nouvelle demande — ' + nom,
      text: body
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error('envoi Resend échoué', err);
    return bad("L'envoi a échoué. Merci de réessayer dans un instant.", 500);
  }

  return Response.json({ ok: true });
}
