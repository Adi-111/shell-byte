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
        const formData = await request.json();
        const { name, email, phone, industry, qualification, apl_year, apl_month, resume } = formData;

        // Validate required fields
        if (!name || !email || !phone || !industry || !qualification || !apl_year || !apl_month) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: `"Shell Byte Careers" <${process.env.EMAIL_USER}>`,
            to: "admin@shell-byte.com", // Replace with your admin email
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