import { useState, useEffect } from 'react';

// Single Digit Flip Component
function FlipDigit({ digit }: { digit: string }) {
    // We need to track the *previous* digit to show it flipping away
    const [prevDigit, setPrevDigit] = useState(digit);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (digit !== prevDigit) {
            setIsFlipping(true);

            const timer = setTimeout(() => {
                setIsFlipping(false);
                setPrevDigit(digit);
            }, 600); // match CSS duration

            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    return (
        <div className="relative w-8 h-12 md:w-14 md:h-20 bg-navy-800 rounded-md shadow-xl perspective-300">
            {/* Static Top (Next digit) */}
            <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden bg-navy-800 rounded-t-md z-0 border-b border-white/10">
                <span className="absolute top-0 left-0 w-full h-[200%] flex items-center justify-center text-2xl md:text-4xl font-mono font-bold text-white">
                    {digit}
                </span>
            </div>

            {/* Static Bottom (Prev digit) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden bg-navy-800 rounded-b-md z-0 flex items-end justify-center">
                <span className="absolute top-[-100%] left-0 w-full h-[200%] flex items-center justify-center text-2xl md:text-4xl font-mono font-bold text-white">
                    {isFlipping ? prevDigit : digit}
                </span>
            </div>

            {/* Flapping Top (Prev digit) -> Flips down to become Bottom */}
            {isFlipping && (
                <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden bg-navy-800 rounded-t-md z-20 origin-bottom animate-flip-top border-b border-white/10 backface-hidden">
                    <span className="absolute top-0 left-0 w-full h-[200%] flex items-center justify-center text-2xl md:text-4xl font-mono font-bold text-white">
                        {prevDigit}
                    </span>
                </div>
            )}

            {/* Flapping Bottom (Next digit) -> Flips down from Top */}
            {isFlipping && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden bg-navy-800 rounded-b-md z-20 origin-top animate-flip-bottom flex items-end justify-center backface-hidden">
                    <span className="absolute top-[-100%] left-0 w-full h-[200%] flex items-center justify-center text-2xl md:text-4xl font-mono font-bold text-white">
                        {digit}
                    </span>
                </div>
            )}

            {/* Split Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/40 z-30 shadow-sm" />
        </div>
    );
}

// Group Component (e.g. "09" Days)
function FlipGroup({ value, label, digits = 2 }: { value: number, label: string, digits?: number }) {
    const valueStr = String(value).padStart(digits, '0');
    const digitArr = valueStr.split('');

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 md:gap-1.5 p-1 rounded-lg">
                {digitArr.map((d, i) => (
                    <FlipDigit key={`${label}-${i}`} digit={d} />
                ))}
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-navy-900/60 uppercase tracking-widest">{label}</span>
        </div>
    );
}

export function FlipClock({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }) {
    return (
        <div className="inline-flex gap-2 md:gap-4 items-center">
            <FlipGroup value={days} label="Days" digits={3} />
            <div className="text-xl md:text-2xl font-mono font-bold text-navy-950/20 mb-6">:</div>
            <FlipGroup value={hours} label="Hours" />
            <div className="text-xl md:text-2xl font-mono font-bold text-navy-950/20 mb-6">:</div>
            <FlipGroup value={minutes} label="Mins" />
            <div className="hidden sm:block text-xl md:text-2xl font-mono font-bold text-navy-950/20 mb-6">:</div>
            <div className="hidden sm:block">
                <FlipGroup value={seconds} label="Secs" />
            </div>
        </div>
    )
}
