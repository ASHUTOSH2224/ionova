import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { FlipClock } from "@/components/ui/FlipClock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ChallengeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentMarkerDate, setCurrentMarkerDate] = useState("Now");
  const [displayMonths, setDisplayMonths] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
  });

  useEffect(() => {
    const currentDate = new Date();
    const monthStr = currentDate.toLocaleString('en-US', { month: 'short' });
    const yearStr = currentDate.getFullYear().toString().slice(-2);
    setCurrentMarkerDate(`${monthStr} '${yearStr}`);

    const deadlineDate = new Date("2026-11-01");
    const monthsRemaining =
      (deadlineDate.getFullYear() - currentDate.getFullYear()) * 12 +
      (deadlineDate.getMonth() - currentDate.getMonth());
    setDisplayMonths(Math.max(0, monthsRemaining));

    // Target date: November 1, 2026
    const targetDate = new Date("2026-11-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        });
      }
    };

    calculateTimeLeft();
    // Update every minute instead of every second since we only show days
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    {
      date: "Nov '25",
      description: "MT Format refused for payment messages.",
      color: "bg-blue-400",
      textColor: "text-navy-900",
      borderColor: "border-blue-400"
    },
    {
      date: currentMarkerDate,
      // description removed
      color: "bg-blue-600",
      textColor: "text-blue-700",
      borderColor: "border-blue-600",
      highlight: true,
      minimalLayout: true
    },
    {
      date: "Nov '26",
      description: "DEADLINE. Unstructured addresses refused by SEPA and SWIFT.",
      color: "bg-navy-950",
      textColor: "text-navy-950",
      borderColor: "border-navy-950"
    },
    {
      date: "Nov '27",
      description: "E&I Mandate.",
      color: "bg-slate-400",
      textColor: "text-slate-500",
      borderColor: "border-slate-400"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the zig-zag rope drawing
      const ropePath = document.querySelector(".rope-path") as SVGPathElement;
      if (ropePath) {
        const length = ropePath.getTotalLength();
        gsap.set(ropePath, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(ropePath, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        });
      }

      // Animate cards swinging in
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card,
          {
            rotation: index % 2 === 0 ? 10 : -10, // Alternate starting swing
            opacity: 0,
            y: index % 2 === 0 ? -20 : 20 // Alternate starting height
          },
          {
            rotation: 0,
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "elastic.out(1, 0.3)",
            delay: index * 0.15 + 0.5, // Start after rope begins
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            }
          }
        );

        // Add hover physics
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            rotation: index % 2 === 0 ? 3 : -3,
            duration: 0.3,
            ease: "power1.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-surface-2 flex flex-col justify-center overflow-hidden relative" style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="landing-section-header mb-0 md:mb-8 text-center relative z-10 w-full">
            <h2 className="landing-section-title mb-4">
              The Clock is Ticking: <br className="hidden md:block" />
              You Are Entering the <span className="text-gradient">{displayMonths}-Month Window</span>
            </h2>

            {/* Dynamic Flip Counter */}
            <div className="flex justify-center mb-0 transform scale-90 md:scale-100 hover:scale-105 transition-transform duration-300">
              <FlipClock
                days={timeLeft.days}
              />
            </div>
          </div>

          {/* Rope Timeline Container */}
          <div className="relative pt-8 pb-12 px-4 min-h-[250px]">

            {/* SVG Zig Zag Rope (Desktop) */}
            <svg
              className="absolute top-0 left-0 w-full h-[250px] pointer-events-none hidden md:block z-0 overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M -5,12 C 5,12 12.5,12 12.5,12 S 30,50 37.5,50 S 55,12 62.5,12 S 80,50 87.5,50 S 105,50 110,50"
                fill="none"
                stroke="#0E1935"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="static-rope-path"
              />
            </svg>

            {/* Mobile Vertical Line */}
            <div className="absolute top-0 bottom-0 left-4 w-1 bg-navy-900/10 rounded-full md:hidden"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative pl-12 md:pl-0",
                    // Stagger vertical position: 
                    // Index 0, 2 (Odd visual): pt-0
                    // Index 1, 3 (Even visual): pt-[90px] (Reduced offset for 250px rope)
                    index % 2 === 0 ? "md:pt-0" : "md:pt-[90px]"
                  )}
                >
                  {/* The Hanging Card Module */}
                  <div
                    ref={el => cardsRef.current[index] = el}
                    className="origin-top relative"
                  >
                    {/* Mobile Connector */}
                    <div className="md:hidden absolute left-[-2rem] top-8 w-8 h-0.5 bg-navy-900/20"></div>
                    <div className={cn("md:hidden absolute left-[-2.25rem] top-[1.85rem] w-3 h-3 rounded-full border-2 border-white shadow-sm z-10", event.color)}></div>

                    {/* The Card Content */}
                    <div className={cn(
                      "relative transition-all",
                      // Custom minimal layout for "We Are Here" to remove card background
                      event.minimalLayout
                        ? "bg-transparent shadow-none border-none flex flex-col items-start md:items-center pt-2"
                        : "bg-white shadow-xl hover:shadow-2xl rounded-xl p-5 border-l-4 border-t-0 md:border-l-0 md:border-t-4",

                      !event.minimalLayout && event.borderColor,
                      !event.minimalLayout && event.highlight ? "ring-4 ring-blue-100 scale-105 z-10" : ""
                    )}>
                      {/* Hook / Knot Graphic on top of card (Desktop Only) */}
                      <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 flex-col items-center z-10">
                        {/* The "Knot" wrapping the rope */}
                        <div className={cn(
                          "w-6 h-6 rounded-full border-4 shadow-md flex items-center justify-center transition-all duration-300",
                          event.highlight ? "bg-blue-600 border-white scale-110" : "bg-navy-900 border-white"
                        )}>
                          <div className={cn("w-1.5 h-1.5 rounded-full", event.highlight ? "bg-white animate-pulse" : "bg-white")}></div>
                        </div>
                      </div>

                      {/* "We are Here" Badge for current item - Desktop only (above knot) */}
                      {event.highlight && (
                        <div className="hidden md:block absolute -top-12 left-1/2 right-auto -translate-x-1/2 whitespace-nowrap z-20">
                          <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white animate-bounce">
                            WE ARE HERE
                          </div>
                          {/* Little triangle arrow */}
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-blue-600 absolute left-1/2 -translate-x-1/2 -bottom-1.5"></div>
                        </div>
                      )}

                      <h3 className={cn("font-bold text-lg text-left md:text-center flex items-center gap-2 md:block", event.textColor, event.description ? "mb-1 mt-1" : "m-0")}>
                        {event.date}
                        {/* "We are Here" Badge - Mobile only (inline with date) */}
                        {event.highlight && (
                          <span className="md:hidden bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md border border-white">
                            WE ARE HERE
                          </span>
                        )}
                      </h3>
                      {event.description && (
                        <p className="text-xs text-text-muted text-left md:text-center leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
