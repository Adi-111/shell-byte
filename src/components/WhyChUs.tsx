import { about_us_features as features } from "../constants";
const WhyChooseUs = () => {
    return (
        <div className="relative mt-20  ">
            <div className="text-center">
                <span className="bg-neutral-900 text-green-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    The best way to{" "}
                    <span className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">
                        build your team
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4">
                            <div className="flex items-start">
                                <div className="flex mx-6 h-12 w-12 p-3 bg-neutral-900 text-green-300 justify-center items-center rounded-full">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="mt-1 text-xl font-semibold">{feature.title}</h5>
                                    <p className="text-md text-neutral-500">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChooseUs;