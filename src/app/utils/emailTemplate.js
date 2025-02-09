export function createEmailTemplate(name, email, message) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            padding: 20px;
          }
          h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
          }
          .message-details {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            padding: 15px;
            margin-top: 20px;
          }
          .label {
            font-weight: bold;
            color: #2c3e50;
          }
          .value {
            margin-bottom: 10px;
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #7f8c8d;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Form Message</h1>
          <p>You have received a new message from your website's contact form.</p>
          
          <div class="message-details">
            <p><span class="label">Name:</span> <span class="value">${name}</span></p>
            <p><span class="label">Email:</span> <span class="value">${email}</span></p>
            <p><span class="label">Message:</span></p>
            <p class="value">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div class="footer">
            <p>This is an automated email sent from your website's contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;
}
