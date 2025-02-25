"use client";
import { useState } from "react";
import { industries } from "../constants";
import { z } from "zod";

// Define the schema for form validation
const applicationSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[A-Za-z ,]+$/, "Name can only contain letters and spaces"),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9+ ]+$/, "Phone number can only contain numbers and +"),
    industry: z.string().min(1, "Industry is required"),
    qualification: z
        .string()
        .regex(/^[A-Za-z ,]+$/, "Qualification can only contain letters and spaces")
        .optional(),
    apl_year: z.string().min(1, "Years of experience are required"),
    apl_month: z.string().min(1, "Months of experience are required"),
    resume: z
        .instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
        .refine(
            (file) =>
                [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ].includes(file.type),
            "File must be a PDF or DOCX"
        ),
});

type FormData = {
    name: string;
    email: string;
    phone: string;
    industry: string;
    qualification: string;
    apl_year: string;
    apl_month: string;
    resume: File | null;
};

type Errors = Record<string, string>;

// Reusable InputField component
type InputFieldProps = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

const InputField = ({ type, name, placeholder, value, onChange, error }: InputFieldProps) => (
    <div>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full p-3 border ${error ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
            <p id={`${name}-error`} className="text-sm text-red-500 mt-1">
                {error}
            </p>
        )}
    </div>
);

// Reusable SelectField component
type SelectFieldProps = {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{ value: string | number; label: string }>;
    placeholder: string;
    error?: string;
};

const SelectField = ({ name, value, onChange, options, placeholder, error }: SelectFieldProps) => (
    <div>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full p-3 border ${error ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {error && (
            <p id={`${name}-error`} className="text-sm text-red-500 mt-1">
                {error}
            </p>
        )}
    </div>
);

// Reusable FileInput component
type FileInputProps = {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

const FileInput = ({ name, onChange, error }: FileInputProps) => (
    <div>
        <input
            type="file"
            name={name}
            onChange={onChange}
            className={`w-full p-3 border ${error ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
            <p id={`${name}-error`} className="text-sm text-red-500 mt-1">
                {error}
            </p>
        )}
    </div>
);

const ApplyNow = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        industry: "",
        qualification: "",
        apl_year: "",
        apl_month: "",
        resume: null,
    });

    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
            setErrors((prev) => ({ ...prev, resume: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Validate form data using Zod
            const validatedData = applicationSchema.parse({
                ...formData,
                resume: formData.resume as File, // Cast to File for Zod validation
            });

            // Prepare FormData for submission
            const formPayload = new FormData();
            Object.entries(validatedData).forEach(([key, value]) => {
                if (value !== null && value !== "") {
                    formPayload.append(key, value);
                }
            });

            // Send data to the API route
            const response = await fetch("/api/send-application", {
                method: "POST",
                body: formPayload,
            });

            if (response.ok) {
                setSubmitStatus("success");
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    industry: "",
                    qualification: "",
                    apl_year: "",
                    apl_month: "",
                    resume: null,
                });
            } else {
                setSubmitStatus("error");
                console.error("Submission error:", await response.text());
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Handle Zod validation errors
                const fieldErrors: Errors = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        fieldErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(fieldErrors);
            } else {
                console.error("Submission error:", error);
                setSubmitStatus("error");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-5xl w-full">
                <div className="p-10">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
                        Apply Now
                    </h2>

                    {/* Submission status messages */}
                    {submitStatus === "success" && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                            Application submitted successfully!
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                            Failed to submit application. Please try again.
                        </div>
                    )}

                    {/* Application form */}
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6 text-black">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left column */}
                            <div className="space-y-4">
                                <InputField
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <SelectField
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    options={industries}
                                    placeholder="Select Industry *"
                                    error={errors.industry}
                                />
                                <InputField
                                    type="text"
                                    name="qualification"
                                    placeholder="Qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    error={errors.qualification}
                                />
                                <FileInput
                                    name="resume"
                                    onChange={handleFileChange}
                                    error={errors.resume}
                                />
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                <InputField
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />
                                <div className="flex gap-4">
                                    <SelectField
                                        name="apl_year"
                                        value={formData.apl_year}
                                        onChange={handleChange}
                                        options={Array.from({ length: 15 }, (_, i) => ({
                                            value: i + 1,
                                            label: `${i + 1} Year${i + 1 > 1 ? "s" : ""}`,
                                        }))}
                                        placeholder="Years *"
                                        error={errors.apl_year}
                                    />
                                    <SelectField
                                        name="apl_month"
                                        value={formData.apl_month}
                                        onChange={handleChange}
                                        options={Array.from({ length: 12 }, (_, i) => ({
                                            value: i + 1,
                                            label: `${i + 1} Month${i + 1 > 1 ? "s" : ""}`,
                                        }))}
                                        placeholder="Months *"
                                        error={errors.apl_month}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition duration-300 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyNow;