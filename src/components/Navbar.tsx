"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../constants";
import Image from "next/image";

interface OptionalProp {
    className?: string;
}
const Navbar = (OptionalProp: OptionalProp) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const pathname = usePathname();

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ${OptionalProp.className}`}>
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="flex h-10 items-center flex-shrink-0">
                            <Image width={170} height={170} className="mr-2  rounded-xl overflow-hidden" src="/mainLogo.png" alt="Logo" />
                        </div>
                    </Link>

                    <ul className="hidden lg:flex ml-14 space-x-12 font-extrabold">
                        {navItems.map((item, index) => (
                            <li className="hover:text-green-400" key={index}>
                                <Link
                                    className={pathname === item.href ? "text-green-400" : ""}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;