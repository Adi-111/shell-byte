
import { BriefcaseBusiness, Users, Timer, BarChart3, Handshake, ShieldCheck, LucideProps } from "lucide-react";


interface NavItemInterface {
    label: string;
    href: string;
}
interface FeatureInterface {
    icon: (props: LucideProps) => React.ReactNode;
    title: string;
    description: string;
}
export const navItems: NavItemInterface[] = [
    { label: "About Us", href: "/about_us" },
    { label: "Career", href: "/career" },
    { label: "Why Us", href: "/why_us" },
    { label: "Contact Us", href: "/contact_us" },
];


export const features: FeatureInterface[] = [
    {
        icon: BriefcaseBusiness,
        title: "Flexible Hiring",
        description: "Scale your workforce up or down based on your business needs.",
    },
    {
        icon: Users,
        title: "Top-Tier Talent",
        description: "Access a network of skilled professionals across various industries.",
    },
    {
        icon: Timer,
        title: "Fast & Efficient Matching",
        description: "We quickly connect you with the right candidates for urgent roles.",
    },
    {
        icon: BarChart3,
        title: "Industry Expertise",
        description: "We specialize in staffing solutions tailored to your sector's needs.",
    },
    {
        icon: Handshake,
        title: "Personalized Service",
        description: "We prioritize your unique hiring requirements for a seamless experience.",
    },
    {
        icon: ShieldCheck,
        title: "Quality & Compliance",
        description: "We ensure every candidate meets high-quality standards and compliance regulations.",
    },
]

export const footerContent = {
    quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about_us" },
        { label: "Career", href: "/career" },
        { label: "Why Us", href: "/why_us" },

    ],
    // servicesLinks: [
    //   { label: "IT Recruitment", href: "/services/it_recruitment" },
    //   { label: "Project Consulting", href: "/services/project_consulting" },
    //   { label: "Cloud Computing", href: "/services/cloud_computing" },
    //   { label: "Software Testing (QA)", href: "/services/software_testing" },
    //   { label: "RPO", href: "/services/rpo" },
    //   { label: "Staffing Solutions", href: "/services/staffing_solutions" },
    // ],
    contactInfo: {

        email: "admin@shell-byte.com",
    },
    subscriptionText: "Subscribe to our newsletter for the latest updates.",
    copyright: "© 2025 ShellByte INC. All rights reserved.",
};

export const about_us_features = [
    {
        icon: BriefcaseBusiness,
        title: "Permanent Positions",
        description: "We help businesses find long-term employees who contribute to sustained growth and success.",
    },
    {
        icon: Users,
        title: "Contract-to-Hire",
        description: "Need flexibility? We offer contract-based staffing solutions that allow you to evaluate potential hires before making a long-term commitment.",
    },
    {
        icon: Timer,
        title: "Project-Based Hiring",
        description: "Short-term projects require specialized talent. We provide skilled professionals on-demand to meet your project needs.",
    },
    {
        icon: BarChart3,
        title: "Find the Right Job",
        description: "Job seekers can rely on us to match them with the right opportunities that align with their skills and career aspirations.",
    },
];
export const industries = [
    "Accounting",
    "Airlines/Aviation",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel/Fashion",
    "Architecture/Planning",
    "Arts/Crafts",
    "Automotive",
    "Aviation/Aerospace",
    "Banking/Mortgage",
    "Staffing/Recruiting"
].map((industry) => ({
    value: industry.toLowerCase().replace(/[^a-z]/g, "-"), // Convert to lowercase and replace spaces with hyphens
    label: industry,
}));


