import { z } from "zod";

// Define the schema for form validation
const applicationSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[A-Za-z ,]+$/, "Name can only contain letters and spaces"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9+ ]+$/, "Phone number can only contain numbers and +"),
    industry: z.string().min(1, "Industry is required"),
    qualification: z.string()
        .regex(/^[A-Za-z ,]+$/, "Qualification can only contain letters and spaces")
        .optional(),
    apl_year: z.string().min(1, "Years of experience are required"),
    apl_month: z.string().min(1, "Months of experience are required"),
    resume: z.instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
        .refine((file) => ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type), "File must be a PDF or DOCX"),
});

export { applicationSchema }