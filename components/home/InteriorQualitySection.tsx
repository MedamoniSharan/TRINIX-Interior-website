"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Home, LampCeiling, Sofa } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export interface InteriorQualitySectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
}

const featureItems = [
  { label: "Residential Interiors", icon: Home },
  { label: "Commercial Projects", icon: Building2 },
  { label: "Turnkey Delivery", icon: Sofa },
  { label: "Lighting & Finishes", icon: LampCeiling },
];

export function InteriorQualitySection({
  eyebrow = "Why choose us",
  title = "Providing quality Interior services",
  description = "TRINEX delivers complete design-to-execution solutions for residential and commercial spaces — from architectural planning and interiors to construction, turnkey delivery, and project management in Hyderabad.",
  imageSrc = "/images/featured/living.jpg",
}: InteriorQualitySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="interior-quality" aria-labelledby="interior-quality-title">
      <style>{`
        .interior-quality {
          --ink: #1a2332;
          --muted: #6b7280;
          --sand: #c17f3a;
          --paper: #f0f0f0;
          --line: #ded9d0;
          box-sizing: border-box;
          width: 100%;
          min-height: 680px;
          padding: 104px clamp(24px, 7vw, 118px) 108px;
          color: var(--ink);
          background: var(--paper);
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
          overflow: hidden;
        }
        .interior-quality *, .interior-quality *::before, .interior-quality *::after { box-sizing: border-box; }
        .interior-quality__grid {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(48px, 7vw, 110px);
          align-items: center;
        }
        .interior-quality__content { max-width: 555px; }
        .interior-quality__eyebrow {
          margin: 0 0 18px;
          color: var(--sand);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .interior-quality h2 {
          max-width: 560px;
          margin: 0;
          color: var(--ink);
          font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 4.2vw, 64px);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -.045em;
          text-transform: none;
        }
        .interior-quality__description {
          max-width: 530px;
          margin: 27px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }
        .interior-quality__extra {
          max-width: 530px;
          margin: 16px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }
        .interior-quality__features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          max-width: 550px;
          margin: 37px 0 44px;
          padding: 0;
          list-style: none;
        }
        .interior-quality__feature {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 58px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }
        .interior-quality__feature-icon {
          display: grid;
          flex: 0 0 43px;
          width: 43px;
          height: 43px;
          place-items: center;
          color: var(--sand);
          border: 1px solid rgba(193,127,58,.55);
          border-radius: 50%;
        }
        .interior-quality__feature span { font-size: 15px; font-weight: 700; line-height: 1.35; }
        .interior-quality__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .interior-quality__link {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          min-height: 49px;
          padding: 0 21px 0 24px;
          color: #fff;
          background: var(--ink);
          border: 1px solid var(--ink);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-decoration: none;
          text-transform: uppercase;
          cursor: pointer;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }
        .interior-quality__link:hover, .interior-quality__link:focus-visible {
          color: var(--ink);
          background: transparent;
          outline: none;
          transform: translateY(-2px);
        }
        .interior-quality__link svg { transition: transform .25s ease; }
        .interior-quality__link:hover svg, .interior-quality__link:focus-visible svg { transform: translateX(4px); }
        .interior-quality__visual { min-width: 0; }
        .interior-quality__figure { margin: 0; }
        .interior-quality__image-wrap { position: relative; overflow: hidden; background: #dfdad1; }
        .interior-quality__image-wrap::after {
          content: '';
          position: absolute;
          inset: 18px;
          border: 1px solid rgba(255,255,255,.55);
          pointer-events: none;
        }
        .interior-quality__image { display: block; width: 100%; aspect-ratio: 1.02 / 1; object-fit: cover; }
        .interior-quality__caption {
          margin: -17px 0 0 0;
          color: transparent;
          font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
          font-size: clamp(68px, 8.5vw, 132px);
          font-weight: 700;
          line-height: .9;
          letter-spacing: .04em;
          text-transform: uppercase;
          -webkit-text-stroke: 1px rgba(26,35,50,.28);
          text-align: left;
        }
        .interior-quality__note {
          margin: 19px 0 0 0;
          color: var(--muted);
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-align: left;
        }
        @media (max-width: 820px) {
          .interior-quality { padding-top: 76px; padding-bottom: 80px; }
          .interior-quality__grid { grid-template-columns: 1fr; gap: 64px; }
          .interior-quality__content { max-width: none; }
          .interior-quality__visual { width: min(680px, 100%); margin: 0 auto; }
        }
        @media (max-width: 520px) {
          .interior-quality { padding: 58px 20px 64px; }
          .interior-quality h2 { font-size: 43px; }
          .interior-quality__description { font-size: 14px; line-height: 1.75; }
          .interior-quality__features { grid-template-columns: 1fr; gap: 10px; margin-top: 29px; margin-bottom: 34px; }
          .interior-quality__caption { margin-left: 0; font-size: 18vw; }
        }
      `}</style>

      <div className="interior-quality__grid">
        <Reveal direction="left" className="interior-quality__content">
          <p className="interior-quality__eyebrow">{eyebrow}</p>
          <h2 id="interior-quality-title">{title}</h2>
          <p className="interior-quality__description">{description}</p>
          {isExpanded ? (
            <p className="interior-quality__extra">
              Our core approach is Design → Plan → Visualize → Execute → Finish →
              Handover. Whether you need architectural services, structural design,
              residential or commercial interiors, construction support, or full
              turnkey project management — TRINEX coordinates every stage with
              clear communication and quality finishes.
            </p>
          ) : null}
          <ul className="interior-quality__features" aria-label="Our specialties">
            {featureItems.map(({ label, icon: Icon }) => (
              <li className="interior-quality__feature" key={label}>
                <span className="interior-quality__feature-icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.5} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="interior-quality__actions">
            <button
              type="button"
              className="interior-quality__link"
              aria-expanded={isExpanded}
              aria-label={
                isExpanded
                  ? "Read less about our services"
                  : "Read more about our services"
              }
              onClick={() => setIsExpanded((value) => !value)}
            >
              <span>{isExpanded ? "Read less" : "Read more"}</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
            <Link href="/services/" className="interior-quality__link">
              <span>Our services</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <Reveal direction="right" className="interior-quality__visual">
          <figure className="interior-quality__figure">
            <div className="interior-quality__image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="interior-quality__image"
                src={imageSrc}
                alt="Warm contemporary interior with sculptural furniture and natural materials"
              />
            </div>
            <figcaption className="interior-quality__caption">Interior</figcaption>
            <p className="interior-quality__note">
              Thoughtful spaces · considered details
            </p>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default InteriorQualitySection;
