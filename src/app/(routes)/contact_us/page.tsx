"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Send data to the API route
            const response = await fetch("/api/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check if the response is JSON
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response from server");
            }

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
                console.error("Submission error:", result.error);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="bg-black ">
                <Navbar className=" " />
                <section
                    className="relative bg-cover bg-center h-80 md:h-96"
                    style={{ backgroundImage: "url('/career-banner.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg text-white">
                            We&apos;re here to help. Get in touch with us today!
                        </p>
                    </div>
                </section>
                <div className="container mx-auto pt-20 px-4">
                    {/* Hero Section */}


                    {/* Contact Info & Form Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information Cards */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transition hover:shadow-xl">
                                <MapPin className="w-8 h-8 text-green-600" />
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-800">
                                        Address
                                    </h3>
                                    <p className="text-neutral-600">
                                        123 Shell Byte Street, Innovation City, Country
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transition hover:shadow-xl">
                                <Phone className="w-8 h-8 text-green-600" />
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-800">
                                        Phone
                                    </h3>
                                    <p className="text-neutral-600">+1 (123) 456-7890</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg transition hover:shadow-xl">
                                <Mail className="w-8 h-8 text-green-600" />
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-800">
                                        Email
                                    </h3>
                                    <p className="text-neutral-600">info@shellbyteinc.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transition hover:shadow-xl">
                            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                                Send Us a Message
                            </h2>
                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Message sent successfully!
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {["name", "email", "subject"].map((field) => (
                                    <div key={field}>
                                        <label
                                            htmlFor={field}
                                            className="block text-sm font-medium text-neutral-800 capitalize"
                                        >
                                            {field}
                                        </label>
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            id={field}
                                            name={field}
                                            placeholder={`Enter your ${field}`}
                                            value={formData[field as keyof typeof formData]} // Corrected this line
                                            onChange={handleChange}
                                            required
                                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-green-500 transition"
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-neutral-800"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ContactUs;