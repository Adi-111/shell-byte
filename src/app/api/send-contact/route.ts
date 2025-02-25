import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error("EMAIL_USER and EMAIL_PASSWORD environment variables are required.");
}

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email address." },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: `"Shell Byte Contact" <${process.env.EMAIL_USER}>`,
            to: "admin@shell-byte.com", // Replace with your admin email
            subject: `New Contact: ${subject}`,
            html: `
                <h1>New Contact Message Received</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email send error:", error);

        // Avoid exposing sensitive error details to the client
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "Failed to send email", error: error.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { message: "Failed to send email" },
                { status: 500 }
            );
        }
    }
}