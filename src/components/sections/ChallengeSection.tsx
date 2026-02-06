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

  // Dynamic Date Calculation
  const today = new Date();
  const currentMonthStr = today.toLocaleString('default', { month: 'short' });
  const currentYearStr = today.getFullYear().toString().slice(-2);

  // Calculate months until Nov 1, 2026
  const deadlineDate = new Date("2026-11-01");
  const monthsRemaining = (deadlineDate.getFullYear() - today.getFullYear()) * 12 + (deadlineDate.getMonth() - today.getMonth());
  const displayMonths = Math.max(0, monthsRemaining);

  const timelineEvents = [
    {
      date: "Nov '25",
      description: "MT Format refused for payment messages.",
      color: "bg-blue-400",
      textColor: "text-navy-900",
      borderColor: "border-blue-400"
    },
    {
      date: `${currentMonthStr} '${currentYearStr} (NOW)`,
      description: `Start of the ${displayMonths}-Month Critical Implementation Window.`,
      color: "bg-blue-600",
      textColor: "text-blue-700",
      borderColor: "border-blue-600",
      highlight: true
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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: November 1, 2026
    const targetDate = new Date("2026-11-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <section ref={containerRef} className="bg-surface-2 min-h-screen flex flex-col justify-center py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-20 text-center relative z-10">
            {/*<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm border border-blue-200">
              <AlertTriangle className="h-4 w-4" />
              The "Financial Y2K" Challenge
            </div>*/}
            <h2 className="mb-8 text-4xl font-bold text-navy-950 md:text-5xl lg:text-6xl leading-tight">
              The Clock is Ticking: <br className="hidden md:block" />
              You Are Entering the <span className="text-blue-600 bg-blue-50 px-2 rounded-lg">{displayMonths}-Month Window.</span>
            </h2>

            {/* Dynamic Flip Counter */}
            <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-300">
              <FlipClock
                days={timeLeft.days}
                hours={timeLeft.hours}
                minutes={timeLeft.minutes}
                seconds={timeLeft.seconds}
              />
            </div>
          </div>

          {/* Rope Timeline Container */}
          <div className="relative pt-12 pb-24 px-4 min-h-[500px]">

            {/* SVG Zig Zag Rope (Desktop) */}
            <svg
              className="absolute top-0 left-0 w-full h-[500px] pointer-events-none hidden md:block z-0 overflow-visible"
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
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-navy-900/10 rounded-full md:hidden"></div>

            <div className="grid md:grid-cols-4 gap-4 md:gap-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative pl-20 md:pl-0",
                    // Stagger vertical position: 
                    // Index 0, 2 (Odd visual): pt-0 (aligns with y=12%)
                    // Index 1, 3 (Even visual): pt-[190px] (aligns with y=50% -> 250px - 60px offset approx)
                    index % 2 === 0 ? "md:pt-0" : "md:pt-[190px]"
                  )}
                >
                  {/* The Hanging Card Module */}
                  <div
                    ref={el => cardsRef.current[index] = el}
                    className="origin-top relative"
                  >
                    {/* Mobile Connector */}
                    <div className="md:hidden absolute left-[-2.65rem] top-6 w-8 h-0.5 bg-navy-900/20"></div>
                    <div className={cn("md:hidden absolute left-[-3rem] top-[1.35rem] w-3 h-3 rounded-full border-2 border-white shadow-sm z-10", event.color)}></div>

                    {/* The Card Content */}
                    <div className={cn(
                      "relative bg-white rounded-xl p-6 shadow-xl border-t-4 transition-shadow hover:shadow-2xl",
                      event.borderColor,
                      event.highlight ? "ring-4 ring-blue-100 scale-105 z-10" : ""
                    )}>
                      {/* Hook / Knot Graphic on top of card */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                        {/* The "Knot" wrapping the rope */}
                        <div className="w-6 h-6 rounded-full bg-navy-900 border-4 border-white shadow-md flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>
                      </div>

                      <h4 className={cn("font-bold text-xl mb-2 text-center mt-2", event.textColor)}>
                        {event.date}
                      </h4>
                      <p className="text-sm text-text-muted text-center leading-relaxed">
                        {event.description}
                      </p>
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
