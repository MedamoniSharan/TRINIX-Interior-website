"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { PortfolioItem } from "@/lib/types";

export function PortfolioPreview({ items }: { items: PortfolioItem[] }) {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f0f0f0] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/20 to-transparent" />

      <div className="mx-auto max-w-[1200px]">
        <Reveal direction="up" className="mb-10 md:mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b7280]">
              <span className="inline-block h-px w-8 bg-[#c17f3a]" aria-hidden />
              Selected work
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.05] tracking-tight text-[#1a2332]"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
              }}
            >
              Get a glimpse of TRINEX projects
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#6b7280]">
              Latest interior and commercial projects delivered the hassle-free way.
            </p>
          </div>

          <Link
            href="/contact/"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#1e3a5f]/20 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#1e3a5f] backdrop-blur-sm transition hover:border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white md:self-auto"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
          stagger={0.08}
        >
          {items.map((item, index) => {
            const featured = index === 0;
            const tall = index === 3 || index === 4;
            const span = featured
              ? "lg:col-span-7 lg:row-span-2"
              : index === 1 || index === 2
                ? "lg:col-span-5"
                : "lg:col-span-4";

            return (
              <StaggerItem
                key={item.slug}
                as="article"
                direction={index % 2 === 0 ? "up" : "scale"}
                className={span}
              >
                <motion.a
                  href="/contact/"
                  className={`group relative block overflow-hidden rounded-[1.25rem] bg-[#e8ecf1] ${
                    featured
                      ? "min-h-[340px] md:min-h-[420px] lg:min-h-full lg:h-full"
                      : tall
                        ? "aspect-[4/5] sm:aspect-[5/6]"
                        : "aspect-[16/11]"
                  }`}
                  whileHover="hover"
                  initial="rest"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.06 },
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-[#0b1220]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        {item.location}
                      </p>
                      <h3
                        className={`font-normal leading-tight text-white ${
                          featured
                            ? "text-2xl md:text-3xl"
                            : "text-lg md:text-xl"
                        }`}
                        style={{
                          fontFamily:
                            '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <motion.span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md"
                      variants={{
                        rest: { opacity: 0.7, y: 6 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.35 }}
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>

                  <motion.span
                    className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md md:left-6 md:top-6"
                    variants={{
                      rest: { opacity: 0, y: -8 },
                      hover: { opacity: 1, y: 0 },
                    }}
                  >
                    View project
                  </motion.span>
                </motion.a>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal direction="up" delay={0.1} className="mt-10 flex justify-center md:mt-14">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-md bg-[#1e3a5f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#2d5080]"
            style={{ color: "#ffffff" }}
          >
            Get Free Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
