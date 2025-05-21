"use client";

import React, { useEffect, useRef,useState } from "react";
// import { cn } from "@/lib/utils";
// import { CheckCircle, Circle } from "lucide-react";
type Step = {
  title: string;
  description?: string;
  completed: boolean;
  current: boolean;
};

const steps: Step[] = [
  {
    title: "Step 1",
    description: "Register your account",
    completed: true,
    current: false,
  },
  {
    title: "Step 2",
    description: "KYC",
    completed: true,
    current: false,
  },
  {
    title: "Step 3",
    description: "Deposit funds",
    completed: false,
    current: true,
  },
];

export default function RegistrationStepper() {
   // Create a mutable ref to store step element references.
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
 // Store the currently visible (active) step.
  const [activeStep, setActiveStep] = useState<number | null>(null);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Loop through each step ref and observe visibility.
    stepRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // Set this step as active.
              setActiveStep(idx);
              // Log the visible step number.
              // console.log(`Step ${idx + 1} is visible`);
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold as needed.
      );
      observer.observe(ref);
      observers.push(observer);
    });

    // Cleanup observers on unmount.
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <section
      className="w-full sm:px-6 flex justify-center  flex-col items-center gap-1 py-[100px]"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #000 55%, rgb(116,84,158) 78.7%, #18141c 79%, #000 79.1%)"
      }}
    >
      <span
        className="px-6 py-3 border border-white/25 rounded-[20px] font-semibold text-[#b195f0]"
        style={{
          fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "16px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.25)",
          opacity: 1,
        }}
      >
        Our Process
      </span>
      <h1
        className="text-center font-medium"
        style={{
          fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 500,
          letterSpacing: "-0.05em",
          lineHeight: "40px",
          color: "#fff",
          textTransform: "none",
          textDecoration: "none",
        }}
      >
        Become a{" "}
        <span
          className="bg-gradient-to-r from-[#a35ca2] to-[#a35ca2] bg-clip-text text-transparent font-bold"
          style={{
            fontWeight: 500,
            fontStyle: "normal",
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          }}
        >
          Abcd Pro
        </span>
        <br />
        in sec...
      </h1>
      <div className="flex items-center gap-2">
        <span role="img" aria-label="rocket">
          🚀
        </span>
        <span
          className="font-medium text-center"
          style={{
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            letterSpacing: "-0.01em",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "16px", // Adjust if you want a different size
            textAlign: "center",
            fontWeight: 500,
            textTransform: "none",
            textDecoration: "none",
            WebkitTextStrokeWidth: "initial",
            WebkitTextStrokeColor: "initial",
            fontFeatureSettings: "initial",
            fontVariationSettings: "normal",
          }}
        >
          Sign up. Fund. Trade.
        </span>
      </div>
      {/* Progress Bar Content */}
      <div className="mt-12 flex flex-col max-w-xl mx-auto">
        {steps.map((step, idx) => (
          <div key={step.title} 
           className="flex flex-row items-start"
           ref={(el) => {
              stepRefs.current[idx] = el;
            }}
          >
            {/* Empty space for alignment */}
            <div className="w-8 sm:w-12"></div>

            {/* Step number and vertical line */}
            <div className="flex flex-col items-center">
              <div
                className="font-bold text-white"
                style={{
                  fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                  fontSize: "42px",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: "51px",
                  color: "rgb(255,255,255)",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              {/* Vertical line except for last step */}
              {<div className={`w-1 h-[20em] ${
                    idx === activeStep ? "bg-white opacity-100" : "bg-white opacity-40"
                  }`}></div>}
            </div>

            {/* Step content */}
            <div className="ml-6 flex flex-col justify-center">
              <p
                className="mb-1"
                style={{
                  fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  padding: 0,
                }}
              >
                {step.title}
              </p>
              <h4
                className="font-semibold"
                style={{
                  fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.05em",
                  lineHeight: "28px",
                  color: "#fff",
                  margin: 0,
                  padding: 0,
                }}
              >
                {step.description}
              </h4>
            </div>
          </div>
        ))}
        {/* Animated Button Row */}
        <div className="flex flex-row items-start mt-0">
          {/* Button column */}
          <div className="ml-6 flex flex-1 justify-end">
            <button className="relative px-6 py-3 rounded-xl text-white font-medium bg-[#7c5fe6] overflow-hidden border-2 border-[#b195f0] group">
              <span className="relative z-10" >Open FREE Account &rarr;</span>
              {/* Animated border */}
              <span className="absolute inset-0 rounded-xl border-2 border-[#b195f0] animate-border-travel pointer-events-none"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
