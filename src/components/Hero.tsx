
export const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Get the right talent, at the right time, with our <span className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">Staffing Solutions</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                At Shell Byte INC, we connect businesses with top-tier professionals through flexible staffing solutions that fit your needs.
                Whether you require temporary, contract, or permanent hires,
                we provide skilled talent across various industries to keep your business running smoothly.
            </p>
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400  mx-2 my-4"
                >
                    <source src={"/v11.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400  mx-2 my-4"
                >
                    <source src={"/v2.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
