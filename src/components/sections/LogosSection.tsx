export function LogosSection() {
    // All logos from the public/Logo directory
    const logos = [
        "/Logo/webp/1.webp",
        "/Logo/webp/2.webp",
        "/Logo/webp/3.webp",
        "/Logo/webp/4.webp",
        "/Logo/webp/5.webp",
        "/Logo/webp/6.webp",
        "/Logo/webp/7.webp",
        "/Logo/webp/8.webp",
        "/Logo/webp/9.webp",
        "/Logo/webp/10.webp",
        "/Logo/webp/11.webp",
        "/Logo/webp/12.webp",
    ];

    return (
        <section className="bg-surface-2 pt-8 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
            <div className="container">
                {/* Section header */}
                <div className="mb-8 text-center">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider md:text-base">
                        Our team has eliminated Payment Failures for{" "}
                        <span className="text-blue-600 font-semibold">the Industry's Best</span>
                    </p>
                </div>

                {/* Mobile Grid Layout */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:hidden px-6 place-items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={`logo-mobile-${index}`}
                            className="flex h-12 w-32 items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                width={128}
                                height={48}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Logos marquee container */}
                <div className="relative hidden md:block">
                    {/* Gradient overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-surface-2 to-transparent"></div>
                    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-surface-2 to-transparent"></div>

                    {/* Marquee wrapper */}
                    <div className="flex overflow-hidden">
                        {/* First set of logos */}
                        <div className="animate-marquee flex shrink-0 items-center justify-around gap-12 px-6">
                            {logos.map((logo, index) => (
                                <div
                                    key={`logo-1-${index}`}
                                    className="flex items-center justify-center transition-all duration-300 hover:scale-110 h-16 w-40 lg:h-20 lg:w-48"
                                >
                                    <img
                                        src={logo}
                                        alt={`Partner logo ${index + 1}`}
                                        width={192}
                                        height={80}
                                        loading="lazy"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Second set of logos for seamless loop */}
                        <div className="animate-marquee flex shrink-0 items-center justify-around gap-12 px-6" aria-hidden="true">
                            {logos.map((logo, index) => (
                                <div
                                    key={`logo-2-${index}`}
                                    className="flex items-center justify-center transition-all duration-300 hover:scale-110 h-16 w-40 lg:h-20 lg:w-48"
                                >
                                    <img
                                        src={logo}
                                        alt={`Partner logo ${index + 1}`}
                                        width={192}
                                        height={80}
                                        loading="lazy"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
