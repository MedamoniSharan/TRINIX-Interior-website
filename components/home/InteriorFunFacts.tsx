"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface FunFact {
  id: string;
  value: number;
  label: string;
}

const funFacts: FunFact[] = [
  {
    id: "interior",
    value: 120,
    label: "OF INTERIOR",
  },
  {
    id: "experience",
    value: 12,
    label: "YEARS OF EXPERIENCE",
  },
  {
    id: "team",
    value: 25,
    label: "PROFESSIONAL TEAM",
  },
  {
    id: "awards",
    value: 15,
    label: "BEST INTERIOR AWARDS",
  },
];

function CountUpNumber({
  value,
  active,
  playId,
}: {
  value: number;
  active: boolean;
  playId: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (playId === 0) {
      el.textContent = "0";
      return;
    }
    if (reduced) {
      el.textContent = String(value);
      return;
    }

    const counter = { n: 0 };
    el.textContent = "0";
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = String(Math.round(counter.n));
      },
    });

    return () => {
      tween.kill();
    };
  }, [playId, value]);

  return (
    <strong
      className="interior-facts__number"
      data-active={active ? "true" : "false"}
    >
      <span ref={spanRef}>0</span>+
    </strong>
  );
}

export function InteriorFunFacts() {
  const [activeId, setActiveId] = useState("experience");
  const [playId, setPlayId] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayId((id) => id + 1);
        } else {
          setPlayId(0);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="interior-facts"
      aria-labelledby="facts-title"
    >
      <h2 id="facts-title" className="sr-only">
        Interior design studio achievements
      </h2>
      <style>{`
        .interior-facts {
          --fact-gold: var(--color-accent, #c17f3a);
          width: 100%;
          overflow: hidden;
          padding: 100px 0 70px;
          background: #fff;
          color: #000;
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
          box-sizing: border-box;
        }
        .interior-facts *,
        .interior-facts *::before,
        .interior-facts *::after {
          box-sizing: border-box;
        }
        .interior-facts__container {
          width: min(100%, 1520px);
          padding: 0 12px;
          margin: 0 auto;
        }
        .interior-facts__list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .interior-facts__item {
          flex: 1 1 0;
          min-width: 0;
          padding: 0;
          border: 0;
          background: transparent;
          color: #000;
          text-align: center;
          cursor: pointer;
          appearance: none;
          transition: transform 0.4s ease;
        }
        .interior-facts__item:hover,
        .interior-facts__item:focus-visible {
          transform: translateY(-5px);
        }
        .interior-facts__item:focus-visible {
          outline: 2px solid var(--fact-gold);
          outline-offset: 8px;
        }
        .interior-facts__number {
          display: block;
          margin: 0;
          color: var(--fact-gold);
          font-family: var(--serif, "Iowan Old Style", Georgia, serif);
          font-size: clamp(66px, 8.35vw, 120px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.06em;
          opacity: 0.2;
          transition: opacity 0.4s ease, transform 0.4s ease;
          font-variant-numeric: tabular-nums;
        }
        .interior-facts__item[aria-pressed="true"] .interior-facts__number,
        .interior-facts__number[data-active="true"] {
          opacity: 1;
          transform: scale(1.02);
        }
        .interior-facts__label {
          display: inline-block;
          margin: 18px 0 0;
          padding-bottom: 6px;
          border-bottom: 2px solid var(--fact-gold);
          color: #000;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.015em;
          white-space: nowrap;
        }
        .interior-facts .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 760px) {
          .interior-facts {
            padding: 68px 0 52px;
          }
          .interior-facts__list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 48px 12px;
          }
          .interior-facts__number {
            font-size: clamp(42px, 14vw, 72px);
          }
          .interior-facts__label {
            margin-top: 12px;
            font-size: 10px;
            white-space: normal;
            line-height: 1.35;
            max-width: 9.5rem;
          }
        }
        @media (max-width: 380px) {
          .interior-facts__list {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .interior-facts__label {
            font-size: 11px;
            letter-spacing: 0;
            max-width: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .interior-facts__item,
          .interior-facts__number {
            transition: none;
          }
        }
      `}</style>
      <div className="interior-facts__container">
        <div
          className="interior-facts__list"
          role="group"
          aria-label="Studio statistics"
        >
          {funFacts.map((fact) => (
            <button
              className="interior-facts__item"
              key={fact.id}
              type="button"
              aria-pressed={activeId === fact.id}
              aria-label={`${fact.value}+ ${fact.label}`}
              onClick={() => setActiveId(fact.id)}
            >
              <CountUpNumber
                value={fact.value}
                active={activeId === fact.id}
                playId={playId}
              />
              <span className="interior-facts__label">{fact.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
