"use client";

import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { getCompany } from "@/lib/content";
import workImages from "@/data/work.json";

type WorkImage = {
  src: string;
  alt: string;
  orient: "portrait" | "landscape" | "square";
};

const PREVIEW_COUNT = 6;
const images = workImages as WorkImage[];

export function HowWeWork() {
  const { processSteps } = getCompany();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, PREVIEW_COUNT);
  const remaining = images.length - PREVIEW_COUNT;

  return (
    <section
      id="how-we-work"
      className="how-work"
      aria-labelledby="how-work-title"
    >
      <style>{`
        .how-work {
          --ink: #1a2332;
          --muted: #6b7280;
          --sand: #c17f3a;
          --paper: #f0f0f0;
          --line: #ded9d0;
          box-sizing: border-box;
          width: 100%;
          padding: 5rem 1.25rem 5.5rem;
          background:
            radial-gradient(ellipse 70% 45% at 0% 0%, rgba(193, 127, 58, 0.07), transparent 55%),
            var(--paper);
          color: var(--ink);
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
        }
        .how-work *,
        .how-work *::before,
        .how-work *::after {
          box-sizing: border-box;
        }
        .how-work__shell {
          width: min(100%, 1240px);
          margin: 0 auto;
        }
        .how-work__kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          margin: 0 0 0.85rem;
          color: var(--muted);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .how-work__kicker::before {
          content: "";
          display: block;
          width: 2.2rem;
          height: 1px;
          background: var(--sand);
        }
        .how-work__title {
          margin: 0 0 0.65rem;
          font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 1.05;
          text-transform: uppercase;
        }
        .how-work__lead {
          margin: 0 0 2rem;
          max-width: 36rem;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
        }
        .how-work__steps {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 2.75rem;
        }
        .how-work__step {
          padding: 1rem 0.85rem;
          border-top: 2px solid var(--sand);
          background: rgba(255, 255, 255, 0.55);
        }
        .how-work__step strong {
          display: block;
          margin-bottom: 0.35rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .how-work__step span {
          display: block;
          color: var(--muted);
          font-size: 0.78rem;
          line-height: 1.45;
        }
        .how-work__grid {
          columns: 3;
          column-gap: 0.85rem;
        }
        .how-work__item {
          break-inside: avoid;
          margin: 0 0 0.85rem;
          overflow: hidden;
          border-radius: 4px;
          background: #e8ecf1;
          position: relative;
        }
        .how-work__item--portrait {
          aspect-ratio: 3 / 4;
        }
        .how-work__item--landscape {
          aspect-ratio: 16 / 10;
        }
        .how-work__item--square {
          aspect-ratio: 1;
        }
        .how-work__item img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .how-work__item:hover img {
          transform: scale(1.04);
        }
        .how-work__more {
          display: flex;
          justify-content: center;
          margin-top: 1.75rem;
        }
        .how-work__more-btn {
          appearance: none;
          border: 1px solid rgba(30, 58, 95, 0.22);
          background: #fff;
          color: #1e3a5f;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .how-work__more-btn:hover {
          background: #1e3a5f;
          border-color: #1e3a5f;
          color: #fff;
        }
        .how-work__more-btn:focus-visible {
          outline: 2px solid var(--sand);
          outline-offset: 3px;
        }
        @media (max-width: 900px) {
          .how-work__steps {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .how-work__grid {
            columns: 2;
          }
        }
        @media (max-width: 560px) {
          .how-work {
            padding: 3.5rem 1.1rem 4rem;
          }
          .how-work__steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .how-work__grid {
            columns: 1;
          }
          .how-work__item--portrait,
          .how-work__item--landscape,
          .how-work__item--square {
            aspect-ratio: 4 / 3;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .how-work__item img {
            transition: none;
          }
        }
      `}</style>

      <div className="how-work__shell">
        <Reveal>
          <p className="how-work__kicker">Our process</p>
          <h2 id="how-work-title" className="how-work__title">
            How we work
          </h2>
          <p className="how-work__lead">
            From first concept to final handover — coordinated design and
            on-site execution across every TRINEX project.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ol className="how-work__steps">
            {processSteps.map((step) => (
              <li key={step.step} className="how-work__step">
                <strong>{step.step}</strong>
                <span>{step.desc}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Stagger className="how-work__grid" stagger={0.04} amount={0.08}>
          {visible.map((image, index) => (
            <StaggerItem
              key={image.src}
              direction={index % 2 === 0 ? "up" : "scale"}
              className={`how-work__item how-work__item--${image.orient}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading={index < PREVIEW_COUNT ? "eager" : "lazy"}
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  maxWidth: "none",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {remaining > 0 && (
          <div className="how-work__more">
            <button
              type="button"
              className="how-work__more-btn"
              aria-expanded={showAll}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : `View more (${remaining})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
