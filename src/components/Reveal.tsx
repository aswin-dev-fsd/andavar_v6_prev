"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** CSS selector, relative to the wrapper, for the items to stagger in. Defaults to direct children. */
  targets?: string;
  stagger?: number;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  targets = ":scope > *",
  stagger = 0.09,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(targets);
    const revealTargets = items.length ? items : [el];

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(revealTargets, { opacity: 1, y: 0, filter: "none" });
      return;
    }

    gsap.set(revealTargets, { opacity: 0, y: 26, filter: "blur(6px)" });

    const ctx = gsap.context(() => {
      gsap.to(revealTargets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        delay,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        stagger: Math.min(stagger, 0.5),
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [targets, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
