"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BottomLeftCard } from "./BottomLeftCard";
import { BottomRightCorner } from "./BottomRightCorner";
import { HeroBadge } from "./HeroBadge";
import { HeroCanvas } from "./HeroCanvas";
import { Navbar } from "./Navbar";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4";

export function Hero() {
  const navRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const targets = [
      navRef.current,
      badgeRef.current,
      titleRef.current,
      subtitleRef.current,
      leftCardRef.current,
      rightCardRef.current,
    ].filter(Boolean);

    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.7 },
        );
      }
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.35",
        );
      }
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.35",
        );
      }
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0 },
          { opacity: 0.8, duration: 0.8 },
          "-=0.5",
        );
      }
      if (leftCardRef.current) {
        tl.fromTo(
          leftCardRef.current,
          { opacity: 0, y: 28, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          "-=0.45",
        );
      }
      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.65",
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <HeroCanvas />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar ref={navRef} />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge ref={badgeRef} />
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]"
            >
              Spaces, Designed Fully
            </h1>
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
            >
              From 3D visualization to turnkey execution — residential and
              commercial interiors in Hyderabad, planned and finished under one
              roof.
            </p>
          </div>

          <BottomLeftCard ref={leftCardRef} />
          <BottomRightCorner ref={rightCardRef} />
        </div>
      </section>
    </div>
  );
}
