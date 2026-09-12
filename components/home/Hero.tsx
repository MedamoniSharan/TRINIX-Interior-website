"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { BottomLeftCard } from "./BottomLeftCard";
import { BottomRightCorner } from "./BottomRightCorner";
import { HeroBadge } from "./HeroBadge";
import { Navbar } from "./Navbar";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 140]);
  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduced ? 1 : 1.12],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, reduced ? 1 : 0.15],
  );

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
          { opacity: 1, duration: 0.8 },
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
    <div
      ref={rootRef}
      className="w-full min-h-[100svh] h-[100svh] flex items-center justify-center p-2 sm:p-3 md:p-5 bg-[#f0f0f0]"
    >
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{ y: videoY, scale: videoScale }}
          className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover object-[65%] lg:object-center z-0 will-change-transform"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </motion.video>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[55%] bg-gradient-to-b from-white/70 via-white/35 to-transparent"
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 w-full h-full flex flex-col items-center will-change-transform"
        >
          <Navbar ref={navRef} />

          <div className="w-full flex flex-col items-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 text-center max-w-4xl">
            <HeroBadge ref={badgeRef} />
            <p
              ref={titleRef}
              className="text-[clamp(1.05rem,3.6vw,1.75rem)] md:text-2xl lg:text-[1.85rem] font-medium text-[#1a2332]/90 mb-3 tracking-tight leading-snug [text-shadow:0_1px_18px_rgba(255,255,255,0.55)]"
            >
              Spaces, Designed Fully
            </p>
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg text-[#1a2332]/85 leading-relaxed max-w-xl font-normal px-1 [text-shadow:0_1px_18px_rgba(255,255,255,0.65)]"
            >
              From 3D visualization to turnkey execution — residential and
              commercial interiors in Hyderabad, planned and finished under one
              roof.
            </p>
          </div>

          <BottomLeftCard ref={leftCardRef} />
          <BottomRightCorner ref={rightCardRef} />
        </motion.div>
      </section>
    </div>
  );
}
