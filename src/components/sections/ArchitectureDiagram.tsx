import React, { useEffect, useRef, useState } from 'react';
import { Brain, Zap, RefreshCw, FileText, CheckCircle, UserCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ArchitectureDiagram = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Node Data
    const nodes = {
        input: {
            id: 'input',
            title: 'Input Text',
            icon: FileText,
            color: 'slate',
            desc: 'Ingests raw text from documents, logs, or messaging streams.',
        },
        runtime: {
            id: 'runtime',
            title: 'Address Resolution Engine',
            subtitle: '(Runtime)',
            icon: Zap,
            color: 'blue',
            desc: 'A deterministic, high-speed engine processing data against a crystallized rule set.',
            outcome: 'Outcome: Straight Through Processing (High confidence, zero hallucination).',
        },
        workbench: {
            id: 'workbench',
            title: 'Agentic Workbench',
            subtitle: '(The Exception Handler)',
            icon: Brain,
            color: 'purple',
            desc: 'When the engine encounters a "2% Exception" (unknown pattern), context-aware LLMs analyze the exception to understand intent and propose a fix.',
            subtext: 'Human-in-the-Loop: An expert validates the agent\'s logic.',
        },
        learning: {
            id: 'learning',
            title: 'Autonomous Learning System',
            icon: RefreshCw,
            color: 'cyan',
            desc: 'The system performs Semi-Autonomous Updates to the core algorithm.',
            outcome: 'Result: The exception becomes a rule. The next time this pattern appears, it is handled automatically.',
        }
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%", // Start when top of diagram hits 60% of viewport
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                defaults: { ease: "power2.inOut" }
            });

            // Reset
            gsap.set(".flow-particle", { opacity: 0, scale: 0 });
            gsap.set(".node-card", { opacity: 0.5, scale: 0.95, filter: "grayscale(100%)" });
            gsap.set(".connection-path", { strokeDasharray: "10, 10", strokeDashoffset: 0, opacity: 0.3 });
            gsap.set("#input-file-icon", { y: -50, opacity: 0 });

            // Step 1: Input Drops In
            tl.to("#node-input", { opacity: 1, scale: 1, filter: "grayscale(0%)", duration: 0.3, onStart: () => setActiveStep(1) })
              .to("#input-file-icon", { y: 0, opacity: 1, duration: 0.3, ease: "bounce.out" }, "-=0.15");

            // Step 2: Flow to Runtime (path ends with gap above Runtime)
            tl.to("#path-input-runtime", { opacity: 1, strokeDashoffset: -20, duration: 0.5, repeat: 1, yoyo: true }, "+=0.05")
              .to("#particle-input-runtime", { 
                  motionPath: { path: "#path-input-runtime-curve", align: "#path-input-runtime-curve", alignOrigin: [0.5, 0.5] }, 
                  duration: 0.8, 
                  opacity: 1, 
                  scale: 1,
                  ease: "power1.inOut"
              }, "<");

            // Step 3: Runtime Activates
            tl.to("#node-runtime", { opacity: 1, scale: 1, filter: "grayscale(0%)", duration: 0.3, onStart: () => setActiveStep(2) })
              .to("#node-runtime .pulse-ring", { scale: 1.5, opacity: 0, duration: 0.5, repeat: 1 });

            // Step 4: Loop — Runtime -> Agentic Workbench
            tl.to("#path-runtime-workbench", { opacity: 1, duration: 0.3 }, "+=0.1")
              .to("#particle-runtime-workbench", { 
                  motionPath: { path: "#path-runtime-workbench-curve", align: "#path-runtime-workbench-curve", alignOrigin: [0.5, 0.5] }, 
                  duration: 0.8, 
                  opacity: 1, 
                  scale: 1 
              }, "<")
              .to("#node-workbench", { opacity: 1, scale: 1, filter: "grayscale(0%)", duration: 0.3, onStart: () => setActiveStep(3) }, "-=0.4");

            // Step 5: Workbench -> Autonomous Learning System
            tl.to("#path-workbench-learning", { opacity: 1, duration: 0.3 }, "+=0.25")
              .to("#particle-workbench-learning", { 
                  motionPath: { path: "#path-workbench-learning-curve", align: "#path-workbench-learning-curve", alignOrigin: [0.5, 0.5] }, 
                  duration: 0.8, 
                  opacity: 1, 
                  scale: 1 
              }, "<")
              .to("#node-learning", { opacity: 1, scale: 1, filter: "grayscale(0%)", duration: 0.3, onStart: () => setActiveStep(4) }, "-=0.4");

            // Step 6: Learning -> back to Address Resolution Engine (loop closed)
            tl.to("#path-learning-runtime", { opacity: 1, duration: 0.3 }, "+=0.25")
              .to("#particle-learning-runtime", { 
                  motionPath: { path: "#path-learning-runtime-curve", align: "#path-learning-runtime-curve", alignOrigin: [0.5, 0.5] }, 
                  duration: 0.8, 
                  opacity: 1, 
                  scale: 1 
              }, "<")
              .to("#node-runtime", { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 });

            // Continuous flow after sequence
            tl.add(() => {
                gsap.to(".flow-particle", { opacity: 0, duration: 0.3 });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const getNodeClasses = (id: string, color: string) => {
        const isHovered = hoveredNode === id;
        
        let colorClasses = "";
        if (color === 'slate') colorClasses = "border-slate-200 shadow-slate-100";
        if (color === 'blue') colorClasses = "border-blue-200 shadow-blue-100";
        if (color === 'purple') colorClasses = "border-purple-200 shadow-purple-100";
        if (color === 'cyan') colorClasses = "border-cyan-200 shadow-cyan-100";

        return `node-card relative bg-white rounded-xl shadow-lg border-2 p-4 transition-all duration-500 cursor-pointer z-10 ${colorClasses} ${isHovered ? 'scale-105 z-20 shadow-xl' : ''}`;
    };

    return (
        <div ref={containerRef} className="relative w-full h-[800px] md:h-[700px] bg-slate-50/50 rounded-3xl border border-slate-200 shadow-inner overflow-hidden select-none">
            {/* Isometric Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', 
                     backgroundSize: '40px 40px',
                     transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(1.5)',
                     transformOrigin: 'top center'
                 }}>
            </div>

            {/* SVG Layer for Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <marker id="arrowhead-blue" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
                    </marker>
                    <marker id="arrowhead-purple" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#a855f7" />
                    </marker>
                    <marker id="arrowhead-cyan" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#06b6d4" />
                    </marker>
                </defs>

                {/* Path 1: Input -> Runtime (ends with vertical gap above Runtime) */}
                <path id="path-input-runtime-curve" d="M500,120 L500,258" fill="none" />
                <path id="path-input-runtime" d="M500,120 L500,258" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4" fill="none" markerEnd="url(#arrowhead-blue)" className="connection-path" />
                <circle id="particle-input-runtime" r="6" fill="#3b82f6" className="flow-particle" />

                {/* Path 2: Runtime -> Workbench (Smooth Curve) */}
                <path id="path-runtime-workbench-curve" d="M660,340 C750,340 750,340 750,420" fill="none" />
                <path id="path-runtime-workbench" d="M660,340 C750,340 750,340 750,420" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 4" fill="none" markerEnd="url(#arrowhead-purple)" className="connection-path" />
                <circle id="particle-runtime-workbench" r="6" fill="#a855f7" className="flow-particle" />

                {/* Path 3: Workbench -> Learning (Smooth Curve) */}
                <path id="path-workbench-learning-curve" d="M630,500 L370,500" fill="none" />
                <path id="path-workbench-learning" d="M630,500 L370,500" stroke="#06b6d4" strokeWidth="2" strokeDasharray="8 4" fill="none" markerEnd="url(#arrowhead-cyan)" className="connection-path" />
                <circle id="particle-workbench-learning" r="6" fill="#06b6d4" className="flow-particle" />

                {/* Path 4: Learning -> Runtime (Smooth Curve) */}
                <path id="path-learning-runtime-curve" d="M250,420 C250,340 250,340 340,340" fill="none" />
                <path id="path-learning-runtime" d="M250,420 C250,340 250,340 340,340" stroke="#06b6d4" strokeWidth="2" strokeDasharray="8 4" fill="none" markerEnd="url(#arrowhead-cyan)" className="connection-path" />
                <circle id="particle-learning-runtime" r="6" fill="#06b6d4" className="flow-particle" />
            </svg>

            {/* Nodes Layer */}
            <div className="relative w-full h-full z-10">
                
                {/* 1. Input Node */}
                <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-64"
                     onMouseEnter={() => setHoveredNode('input')}
                     onMouseLeave={() => setHoveredNode(null)}>
                    <div id="node-input" className={getNodeClasses('input', 'slate')}>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="relative">
                                <div className="p-3 bg-slate-100 rounded-full">
                                    <nodes.input.icon className="h-6 w-6 text-slate-600" />
                                </div>
                                {/* Dropping File Icon */}
                                <div id="input-file-icon" className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-1 rounded shadow-sm border border-slate-200">
                                    <FileText className="h-4 w-4 text-blue-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-navy-950">{nodes.input.title}</h3>
                                <p className={`text-xs text-slate-500 transition-all duration-300 ${hoveredNode === 'input' ? 'opacity-100 max-h-20' : 'opacity-70 max-h-10 line-clamp-2'}`}>
                                    {nodes.input.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Runtime Node (positioned lower for clear gap below Input) */}
                <div className="absolute top-[340px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80"
                     onMouseEnter={() => setHoveredNode('runtime')}
                     onMouseLeave={() => setHoveredNode(null)}>
                    <div id="node-runtime" className={`${getNodeClasses('runtime', 'blue')} border-blue-500`}>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm z-20">
                            Runtime Core
                        </div>
                        {/* Pulse Ring */}
                        <div className="pulse-ring absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 pointer-events-none"></div>
                        
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <nodes.runtime.icon className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy-950 text-lg">{nodes.runtime.title}</h3>
                                <p className="text-xs text-blue-600 font-semibold mb-2">{nodes.runtime.subtitle}</p>
                                <p className={`text-xs text-slate-600 transition-all duration-300 ${hoveredNode === 'runtime' ? 'block' : 'hidden'}`}>
                                    {nodes.runtime.desc}
                                </p>
                            </div>
                            <div id="success-badge" className="mt-2 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-xs font-bold text-green-700">Straight Through Processing</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Workbench Node (same line as Learning, below Runtime) */}
                <div className="absolute top-[500px] right-[12%] -translate-y-1/2 w-72"
                     onMouseEnter={() => setHoveredNode('workbench')}
                     onMouseLeave={() => setHoveredNode(null)}>
                    <div id="node-workbench" className={getNodeClasses('workbench', 'purple')}>
                        <div className="absolute -top-3 left-4 bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold border border-purple-200">
                            2% Exception
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <nodes.workbench.icon className="h-5 w-5 text-purple-600" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-navy-950 text-sm">{nodes.workbench.title}</h3>
                                    <p className="text-[10px] text-purple-600 font-medium">{nodes.workbench.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {nodes.workbench.desc}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                                <UserCheck className="h-3 w-3 text-purple-600" />
                                {nodes.workbench.subtext}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Learning Node (same line as Workbench, below Runtime) */}
                <div className="absolute top-[500px] left-[12%] -translate-y-1/2 w-72"
                     onMouseEnter={() => setHoveredNode('learning')}
                     onMouseLeave={() => setHoveredNode(null)}>
                    <div id="node-learning" className={getNodeClasses('learning', 'cyan')}>
                        <div className="absolute -top-3 right-4 bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs font-bold border border-cyan-200">
                            Feedback Loop
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cyan-100 rounded-lg">
                                    <nodes.learning.icon className="h-5 w-5 text-cyan-600" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-navy-950 text-sm">{nodes.learning.title}</h3>
                                </div>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {nodes.learning.desc}
                            </p>
                            <div className="bg-cyan-50 p-2 rounded border border-cyan-100 text-[10px] text-cyan-800 font-medium">
                                {nodes.learning.outcome}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArchitectureDiagram;
