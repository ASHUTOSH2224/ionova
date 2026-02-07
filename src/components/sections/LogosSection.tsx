export function LogosSection() {
    // All logos from the public/Logo directory
    const logos = [
        "/Logo/1.webp",
        "/Logo/image copy.webp",
        "/Logo/image copy 2.webp",
        "/Logo/image copy 3.webp",
        "/Logo/image copy 4.webp",
        "/Logo/image copy 5.webp",
        "/Logo/image copy 6.webp",
        "/Logo/image copy 7.webp",
        "/Logo/image copy 8.webp",
        "/Logo/image copy 9.webp",
        "/Logo/image copy 10.webp",
        "/Logo/image.webp",
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20 overflow-hidden">
            <div className="container">
                {/* Section header */}
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-navy-950 md:text-3xl lg:text-4xl">
                        Our team has eliminated Payment Failures for{" "}
                        <span className="text-gradient">the Industry's Best</span>
                    </h2>
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
                    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent"></div>
                    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent"></div>

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
