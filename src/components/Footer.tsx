import { footerContent } from "../constants";

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 bg-gray-900  text-black border-neutral-700 px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 text-white gap-8">
                {/* Quick Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {footerContent.quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-md font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-neutral-300">

                        <li>Email: <a href={`mailto:${footerContent.contactInfo.email}`} className="hover:text-white">{footerContent.contactInfo.email}</a></li>
                    </ul>
                </div>

                {/* Subscription */}
                <div>
                    <h3 className="text-md font-semibold mb-4">Stay Updated</h3>
                    <p className="text-neutral-300 mb-4">{footerContent.subscriptionText}</p>
                    <form>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="mt-3 w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center mt-10 text-neutral-500">
                {footerContent.copyright}
            </div>
        </footer>
    );
};

export default Footer;
