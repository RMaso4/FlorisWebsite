// src/app/lib/email.ts
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send contact form email to Floris
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nieuw contactformulier: ${data.subject}`,
      html: `
        <h2>Nieuw bericht van ${data.name}</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefoon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Onderwerp:</strong> ${data.subject}</p>
        <h3>Bericht:</h3>
        <p>${data.message}</p>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: 'Uw bericht is ontvangen',
      html: `
        <h2>Beste ${data.name},</h2>
        <p>Wij hebben uw bericht ontvangen en nemen zo spoedig mogelijk contact met u op.</p>
        <p>Met vriendelijke groet,<br>Floris Accountancy & Advies</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Send newsletter signup confirmation
export async function sendNewsletterSignupEmail(data: {
  name: string;
  email: string;
  type: string;
}) {
  try {
    // Email to Floris about new signup
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Nieuwe nieuwsbrief inschrijving',
      html: `
        <h2>Nieuwe nieuwsbrief inschrijving</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Type nieuwsbrief:</strong> ${data.type}</p>
      `,
    });

    // Confirmation email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: 'Bevestiging nieuwsbrief inschrijving',
      html: `
        <h2>Beste ${data.name},</h2>
        <p>U bent succesvol ingeschreven voor de ${data.type === 'agro' ? 'Agro-' : 'Algemene'} nieuwsbrief.</p>
        <p>U ontvangt binnenkort onze nieuwsbrief.</p>
        <p>Met vriendelijke groet,<br>Floris Accountancy & Advies</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Error sending newsletter signup email:', error);
    return false;
  }
}