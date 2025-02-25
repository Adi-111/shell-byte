import { AbUsHero } from "@/components/AbUsHero"
import CommitmentSection from "@/components/ComSec"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WhyChooseUs from "@/components/WhyChUs"


export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <AbUsHero />
                <WhyChooseUs />
                <CommitmentSection />
            </div>
            <Footer />
        </>
    )
}
