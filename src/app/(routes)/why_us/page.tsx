import FeatureSection from "@/components/Feature";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WhyUS = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Why Choose  <span className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">ShellByte INC</span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> Our comprehensive services are designed to elevate your business.</p>
                <FeatureSection />
            </div>
            <Footer />
        </>
    );
}


export default WhyUS;