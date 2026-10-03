import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations/enquiry';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = enquirySchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;
    let emailStatus = 'simulated';

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        // 1. Send confirmation email to customer
        await resend.emails.send({
          from: 'Lenzo Captures <concierge@lenzocaptures.com>',
          to: [validatedData.email],
          subject: 'Thank You for Contacting Lenzo Captures | Consultation Received',
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #0a0a0a; color: #f5f5f5; padding: 40px; border-radius: 8px;">
              <h2 style="color: #d4af37; letter-spacing: 2px; text-transform: uppercase;">LENZO CAPTURES</h2>
              <p style="font-size: 16px;">Dear ${validatedData.name},</p>
              <p style="color: #cccccc; line-height: 1.6;">
                Thank you for reaching out to Lenzo Captures. We have received your inquiry for your upcoming <strong>${validatedData.eventType}</strong> on <strong>${validatedData.weddingDate}</strong> at <strong>${validatedData.venueLocation}</strong>.
              </p>
              <div style="background: #141414; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0;">
                <p style="margin: 0; color: #a3a3a3; font-size: 14px;"><strong>Requested Event:</strong> ${validatedData.eventType}</p>
                <p style="margin: 5px 0 0; color: #a3a3a3; font-size: 14px;"><strong>Estimated Budget:</strong> ${validatedData.budget}</p>
              </div>
              <p style="color: #cccccc;">Our senior studio director will review your details and connect with you within 24 hours to schedule your private consultation.</p>
              <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;" />
              <p style="color: #888888; font-size: 12px;">Lenzo Captures Studio &bull; Luxury Fine-Art Photography & Cinema</p>
            </div>
          `,
        });

        // 2. Send notification email to Admin
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@lenzocaptures.com';
        await resend.emails.send({
          from: 'Lenzo Captures Web <notifications@lenzocaptures.com>',
          to: [adminEmail],
          subject: `NEW ENQUIRY: ${validatedData.name} - ${validatedData.eventType}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
              <h2 style="color: #aa7c11;">New Studio Consultation Enquiry</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td>${validatedData.name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td>${validatedData.email}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td>${validatedData.phone}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Event Date:</td><td>${validatedData.weddingDate}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Venue:</td><td>${validatedData.venueLocation}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Event Type:</td><td>${validatedData.eventType}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td>${validatedData.budget}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td>${validatedData.message}</td></tr>
              </table>
            </div>
          `,
        });

        emailStatus = 'sent';
      } catch (emailErr) {
        console.warn('Resend email dispatch error:', emailErr);
      }
    } else {
      console.log('--- MOCK EMAIL DISPATCH ---');
      console.log(`[CUSTOMER EMAIL TO ${validatedData.email}]: Thank you ${validatedData.name} for choosing Lenzo Captures.`);
      console.log(`[ADMIN NOTIFICATION]: New lead received for ${validatedData.eventType} on ${validatedData.weddingDate}.`);
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully! Our team will contact you shortly.',
      emailStatus,
      data: validatedData,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Server error processing enquiry' },
      { status: 500 }
    );
  }
}
