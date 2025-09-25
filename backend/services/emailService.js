import nodemailer from 'nodemailer';

// Email configuration (you'll need to set up your email service)
const createTransporter = () => {
  // For development, you can use a service like Gmail, SendGrid, or Mailgun
  // In production, always use environment variables for sensitive data
  
  if (process.env.NODE_ENV === 'production') {
    // Production email configuration
    return nodemailer.createTransporter({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Development - use Ethereal Email for testing
    return nodemailer.createTransporter({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'ethereal.password',
      },
    });
  }
};

export const sendContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    
    // Email to yourself (portfolio owner)
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'portfolio@example.com',
      to: process.env.EMAIL_TO || 'john@example.com',
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Submitted:</strong> ${formData.timestamp}</p>
            <p><strong>IP Address:</strong> ${formData.ip}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${formData.message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Submitted: ${formData.timestamp}
        IP Address: ${formData.ip}

        Message:
        ${formData.message}
      `,
    };

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM || 'portfolio@example.com',
      to: formData.email,
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for your message!</h2>
          <p>Hi ${formData.name},</p>
          <p>Thank you for reaching out through my portfolio. I've received your message about "${formData.subject}" and will get back to you as soon as possible.</p>
          <p>I typically respond within 24 hours during business days.</p>
          <p>Best regards,<br>John Doe</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6b7280; font-size: 12px;">
            <p>This is an automated response from john@example.com</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    console.log('📧 Contact emails sent successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to send contact email:', error);
    return false;
  }
};