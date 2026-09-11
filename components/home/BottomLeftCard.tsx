"use client";

import { forwardRef, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export const BottomLeftCard = forwardRef<HTMLDivElement>(
  function BottomLeftCard(_, ref) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const arrowWrapRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const localRef = useRef<HTMLDivElement | null>(null);

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    useEffect(() => {
      const countEl = countRef.current;
      const node = localRef.current;
      if (!countEl || !node) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let floatTween: gsap.core.Tween | null = null;
      let countTween: gsap.core.Tween | null = null;

      const playCount = () => {
        countTween?.kill();
        if (reduced) {
          countEl.textContent = "120+";
          return;
        }
        const counter = { value: 0 };
        countEl.textContent = "0+";
        countTween = gsap.to(counter, {
          value: 120,
          duration: 1.9,
          ease: "power2.out",
          onUpdate: () => {
            countEl.textContent = `${Math.round(counter.value)}+`;
          },
        });
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playCount();
            if (!reduced && !floatTween && localRef.current) {
              floatTween = gsap.to(localRef.current, {
                y: -6,
                duration: 2.4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
              });
            }
          } else {
            countTween?.kill();
            countEl.textContent = "0+";
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(node);
      return () => {
        observer.disconnect();
        countTween?.kill();
        floatTween?.kill();
      };
    }, []);

    const scaleTo = (value: number) => {
      if (!buttonRef.current) return;
      gsap.to(buttonRef.current, {
        scale: value,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const nudgeArrow = (x: number, y: number) => {
      if (!arrowWrapRef.current) return;
      gsap.to(arrowWrapRef.current, {
        x,
        y,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    return (
      <div
        ref={setRefs}
        className="absolute bottom-24 left-3 right-auto sm:bottom-28 md:left-6 md:bottom-6 lg:bottom-10 lg:left-10 p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-[1.1rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit max-w-[46%] will-change-transform"
      >
        <div className="flex flex-col">
          <span
            ref={countRef}
            className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight tabular-nums"
          >
            0+
          </span>
          <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider">
            Spaces Delivered
          </span>
        </div>

        <Link
          ref={buttonRef}
          href="/#portfolio"
          onMouseEnter={() => {
            scaleTo(1.04);
            nudgeArrow(2, -2);
          }}
          onMouseLeave={() => {
            scaleTo(1);
            nudgeArrow(0, 0);
          }}
          onMouseDown={() => scaleTo(0.97)}
          onMouseUp={() => scaleTo(1.04)}
          className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group will-change-transform"
        >
          <div
            ref={arrowWrapRef}
            className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center will-change-transform"
          >
            <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
          </div>
          <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
            View Portfolio
          </span>
        </Link>
      </div>
    );
  },
);
