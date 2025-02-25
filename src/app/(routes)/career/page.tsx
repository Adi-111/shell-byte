import ApplyNow from "@/components/AppltyNow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Career() {
    return (
        <div className="bg-black ">
            <Navbar />
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-80 md:h-96"
                style={{ backgroundImage: "url('/career-banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Build Your Future With Us</h1>
                    <p className="mt-4 text-md md:text-xl">
                        Discover rewarding career opportunities at Shell Byte INC
                    </p>
                </div>
            </section>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto pt-12 px-6">
                <ApplyNow />
            </main>
            <Footer />
        </div>
    );
};


