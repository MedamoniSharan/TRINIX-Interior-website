"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

const offset = 56;

const hiddenFor = (direction: RevealDirection) => {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -offset, y: 0, scale: 1 };
    case "right":
      return { opacity: 0, x: offset, y: 0, scale: 1 };
    case "down":
      return { opacity: 0, x: 0, y: -offset, scale: 1 };
    case "fade":
      return { opacity: 0, x: 0, y: 0, scale: 1 };
    case "scale":
      return { opacity: 0, x: 0, y: 24, scale: 0.94 };
    case "up":
    default:
      return { opacity: 0, x: 0, y: offset, scale: 1 };
  }
};

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  className,
  once = false,
  amount = 0.22,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: {
      ...(reduced ? { opacity: 1, x: 0, y: 0, scale: 1 } : hiddenFor(direction)),
      transition: {
        duration: reduced ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  once = false,
  amount = 0.18,
}: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = (direction: RevealDirection = "up"): Variants => ({
  hidden: {
    ...hiddenFor(direction),
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
});

type StaggerItemProps = {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  as?: "div" | "article" | "li" | "blockquote";
};

export function StaggerItem({
  children,
  direction = "up",
  className,
  as = "div",
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];
  const variants = reduced
    ? {
        hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      }
    : staggerItem(direction);

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px across the scroll range. Positive moves down as you scroll. */
  y?: number;
  /** Horizontal travel in px. Positive moves right as you scroll. */
  x?: number;
  scale?: [number, number];
  opacity?: [number, number];
  style?: MotionStyle;
};

/** Scroll-linked parallax wrapper. Soft by default so it supports hierarchy without noise. */
export function Parallax({
  children,
  className,
  y = 48,
  x = 0,
  scale,
  opacity,
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yMotion = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-y, y]);
  const xMotion = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-x, x]);
  const scaleMotion = useTransform(
    scrollYProgress,
    [0, 1],
    reduced || !scale ? [1, 1] : scale,
  );
  const opacityMotion = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    reduced || !opacity ? [1, 1, 1, 1] : opacity,
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        style={{
          y: yMotion,
          x: xMotion,
          scale: scaleMotion,
          opacity: opacityMotion,
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
