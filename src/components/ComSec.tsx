const CommitmentSection = () => {
    return (
        <div className="relative mt-20 py-20 px-6 lg:px-20 bg-neutral-900 text-white rounded-3xl shadow-lg">
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-wide">
                    Our <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Commitment to Excellence</span>
                </h2>
                <p className="mt-6 text-lg text-neutral-300 max-w-3xl mx-auto">
                    At Shell Byte INC, we go beyond staffing. We build long-term partnerships by understanding the unique requirements of each client and delivering customized workforce solutions.
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-12 gap-8">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-6 bg-neutral-800 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-green-400">Talent Acquisition</h3>
                    <p className="mt-3 text-neutral-400">Seamless hiring processes to connect businesses with top-tier professionals.</p>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 p-6 bg-neutral-800 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-green-400">Workforce Optimization</h3>
                    <p className="mt-3 text-neutral-400">Enhancing efficiency with strategic staffing solutions tailored for your needs.</p>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 p-6 bg-neutral-800 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-green-400">Business Growth</h3>
                    <p className="mt-3 text-neutral-400">Providing the right talent to scale businesses and drive long-term success.</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg text-neutral-300">
                    📌 Whether you&apos;re looking for top talent or the perfect job,
                    <span className="text-green-400 font-semibold"> Shell Byte INC</span> is here to make it happen!
                </p>
            </div>
        </div>
    );
};

export default CommitmentSection;
