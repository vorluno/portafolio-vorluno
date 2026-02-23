import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: 'Portfolio Contact',
          email: process.env.CONTACT_FROM_EMAIL || 'contacto@vorluno.dev',
        },
        to: [{ email: process.env.CONTACT_TO_EMAIL || 'contacto@vorluno.dev' }],
        replyTo: { email, name },
        subject: `[Portfolio] Nuevo mensaje de ${name}`,
        htmlContent: `
          <div style="font-family: monospace; background: #020817; color: #e2e8f0; padding: 28px; max-width: 560px;">
            <div style="border-bottom: 1px solid rgba(37,99,235,0.4); padding-bottom: 12px; margin-bottom: 20px;">
              <span style="color: #38BDF8; font-size: 13px; letter-spacing: 2px;">// NUEVO CONTACTO — vorluno.dev</span>
            </div>
            <p style="margin: 8px 0;">
              <span style="color: #7dd3fc; font-size: 11px;">▸ NOMBRE</span><br/>
              <span style="color: #e2e8f0;">${name}</span>
            </p>
            <p style="margin: 8px 0;">
              <span style="color: #7dd3fc; font-size: 11px;">▸ EMAIL</span><br/>
              <a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a>
            </p>
            <div style="margin-top: 16px; border-left: 2px solid rgba(37,99,235,0.5); padding-left: 14px;">
              <span style="color: #7dd3fc; font-size: 11px;">▸ MENSAJE</span>
              <p style="color: #cbd5e1; margin: 8px 0 0; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="color: rgba(148,163,184,0.4); font-size: 10px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px;">
              ${new Date().toISOString()} · vorluno.dev
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[contact/route] Brevo error:', err);
      return NextResponse.json({ error: 'Email failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
