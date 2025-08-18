import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config(); // Load .env config

const app = express();
const PORT = 5000;
app.use(cors({
  origin: ["http://jaylakhani.tech","https://jaylakhani.tech","http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); 


app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Check required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // Configure mail transporter
  const transporter = nodemailer.createTransport({  
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.SMTP_EMAIL, // safer to use your own SMTP email
    replyTo: email,
    to: "jaylakhani2403@gmail.com",
    subject: `Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email sending failed:", err);
    res.status(500).json({ success: false, message: "Email failed to send", error: err.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
