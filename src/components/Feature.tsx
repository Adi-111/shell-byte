import { features } from "../constants";

const FeatureSection = () => {
    return (
        <div className="relative mt-20 ">
            <div className="text-center">
                <span className="bg-neutral-900 text-green-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Easily build{" "}
                    <span className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">
                        your team
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => {
                    const Icon = feature.icon; // Extract the icon component
                    return (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                            <div className="flex">
                                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-300 justify-center items-center rounded-full">
                                    <Icon className="w-6 h-6" /> {/* Correct way to render Lucide icons */}
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-6 text-xl">{feature.title}</h5>
                                    <p className="text-md p-2 mb-20 text-neutral-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeatureSection;
