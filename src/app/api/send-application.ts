import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, phone, industry, qualification, apl_year, apl_month, resume } = req.body;

        const mailOptions = {
            from: `"Shell Byte Careers" <${process.env.EMAIL_USER}>`,
            to: "admin@shell-byte.com",
            subject: `New Application: ${name}`,
            html: `
                <h1>New Job Application Received</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <p><strong>Qualification:</strong> ${qualification}</p>
                <p><strong>Experience:</strong> ${apl_year} years ${apl_month} months</p>
            `,
            attachments: resume ? [{ filename: resume.name, content: resume.data }] : [],
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ message: "Failed to send email", error });
    }
}