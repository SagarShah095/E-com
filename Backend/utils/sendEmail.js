const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or your email service (e.g. "hotmail", "yahoo")
    auth: {
      user: process.env.EMAIL_USER,  // your email address
      pass: process.env.EMAIL_PASS,  // your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
  await transporter.sendMail(mailOptions);
  console.log(`✅ Email sent to ${to}`);
} catch (err) {
  console.error("❌ Failed to send email:", err);
}
};

module.exports = sendEmail;
