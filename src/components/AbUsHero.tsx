import Image from "next/image";

export const AbUsHero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                About{" "}
                <span className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">
                    ShellByte INC
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                ShellByte, Inc. is a dynamic leader in Staffing & Recruiting and IT Services & Consulting, dedicated to
                helping businesses build high-performing teams while driving digital transformation. We understand that an
                organization&apos;s success relies on having the right people in the right roles, which is why we provide
                tailored hiring solutions, including permanent placements, contract-to-hire, and project-based staffing.
                By leveraging industry expertise and advanced recruitment strategies, we ensure a seamless hiring process
                that aligns with your company&apos;s goals. Beyond staffing, we specialize in cutting-edge IT services,
                including software development, cloud computing, cybersecurity, and digital transformation. Our team of
                experts delivers innovative, technology-driven solutions that enhance efficiency, security, and
                scalability for businesses across industries. With a strong commitment to quality, innovation, and
                customer success, ShellByte, Inc. bridges the gap between talent and technology, empowering organizations
                to thrive in a competitive digital landscape.
            </p>
            <div className="flex mt-10 justify-center">
                <div className="relative w-full md:w-1/2 h-96 mx-2 my-4">
                    <Image
                        src="/10162.jpg"
                        alt="About Shell Byte INC"
                        fill
                        className="rounded-lg border border-green-700 shadow-sm shadow-green-400 object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};