import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { message, contactMethod, contactInfo } = await request.json();

    // Validate required fields
    if (!message || !contactMethod || !contactInfo) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'contact@clifford-it.com', // Replace with your verified domain
      to: 'kasey.purvor@gmail.com',
      subject: `New Project Inquiry - ${contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1)} Contact`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Contact Info:</strong> ${contactInfo}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><em>This message was sent from your Clifford IT contact form.</em></p>
      `,
    });

    return NextResponse.json({ success: true, id: emailData.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 