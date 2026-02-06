import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { FlipClock } from "@/components/ui/FlipClock";

export function ChallengeSection() {
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

  return (
    <section className="bg-surface-2 min-h-screen flex flex-col justify-center py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <AlertTriangle className="h-4 w-4" />
              The "Financial Y2K" Challenge
            </div>
            <h2 className="mb-8 text-4xl font-bold text-navy-950 md:text-5xl lg:text-5xl leading-tight">
              The Clock is Ticking: <br className="hidden md:block" />
              You Are Entering the <span className="text-blue-600">9-Month Implementation Window.</span>
            </h2>

            {/* Dynamic Flip Counter */}
            <div className="flex justify-center">
              <FlipClock
                days={timeLeft.days}
                hours={timeLeft.hours}
                minutes={timeLeft.minutes}
                seconds={timeLeft.seconds}
              />
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="relative border-l-4 border-blue-200 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-4 md:pt-12 grid md:grid-cols-4 gap-8">
            <div className="relative pl-8 md:pl-0 md:text-center">
              <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
              <h4 className="font-bold text-lg text-navy-950">Nov '25</h4>
              <p className="text-sm text-text-body mt-2">MT Format refused for payment messages.</p>
            </div>
            <div className="relative pl-8 md:pl-0 md:text-center">
              <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow animate-pulse"></div>
              <h4 className="font-bold text-lg text-blue-600">Feb '26 (NOW)</h4>
              <p className="text-sm text-text-body mt-2 font-medium">Start of the 9-Month Critical Implementation Window.</p>
            </div>
            <div className="relative pl-8 md:pl-0 md:text-center">
              <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-navy-950 border-4 border-white shadow"></div>
              <h4 className="font-bold text-lg text-navy-950">Nov '26</h4>
              <p className="text-sm text-text-body mt-2 font-bold">DEADLINE. Unstructured addresses refused by SEPA and SWIFT.</p>
            </div>
            <div className="relative pl-8 md:pl-0 md:text-center">
              <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow"></div>
              <h4 className="font-bold text-lg text-slate-500">Nov '27</h4>
              <p className="text-sm text-text-body mt-2">E&I Mandate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
