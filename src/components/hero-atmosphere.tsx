"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroAtmosphere() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const motions: gsap.core.Timeline[] = [];
        const blobs = gsap.utils.toArray<HTMLElement>(
          ".ambient-blob",
          root.current,
        );

        blobs.forEach((blob, index) => {
          // Soft, overlapping lobes morph through transforms instead of repainting
          // a fullscreen blur filter. Each long cycle gets new random waypoints.
          const drift = gsap.timeline({ repeat: -1, repeatRefresh: true });
          for (let waypoint = 0; waypoint < 4; waypoint++) {
            drift.to(blob, {
              xPercent: () => gsap.utils.random(-28, 28),
              yPercent: () => gsap.utils.random(-22, 22),
              rotation: () => gsap.utils.random(-40, 40),
              scaleX: () => gsap.utils.random(0.8, 1.28),
              scaleY: () => gsap.utils.random(0.78, 1.2),
              duration: () => gsap.utils.random(10, 18),
              ease: "sine.inOut",
            });
          }
          // Return gently to the authored composition so repeat refresh has no jump.
          drift.to(blob, {
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 16,
            ease: "sine.inOut",
          });
          motions.push(drift);

          blob
            .querySelectorAll<HTMLElement>(".ambient-lobe")
            .forEach((lobe, lobeIndex) => {
              const morph = gsap.timeline({
                repeat: -1,
                yoyo: true,
                repeatRefresh: true,
              });
              morph.to(lobe, {
                xPercent: () => gsap.utils.random(-16, 16),
                yPercent: () => gsap.utils.random(-18, 18),
                scaleX: () => gsap.utils.random(0.7, 1.35),
                scaleY: () => gsap.utils.random(0.75, 1.3),
                rotation: () => gsap.utils.random(-30, 30),
                duration: 9 + index * 2.1 + lobeIndex * 1.7,
                ease: "sine.inOut",
              });
              motions.push(morph);
            });
        });

        let inView = true;
        const updatePlayback = () =>
          motions.forEach((motion) =>
            motion.paused(!inView || document.hidden),
          );
        const observer = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          updatePlayback();
        });
        observer.observe(root.current!);
        document.addEventListener("visibilitychange", updatePlayback);
        updatePlayback();
        return () => {
          observer.disconnect();
          document.removeEventListener("visibilitychange", updatePlayback);
          motions.forEach((motion) => motion.kill());
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="hero-atmosphere" aria-hidden="true">
      {[0, 1, 2, 3].map((index) => (
        <div className={`ambient-blob ambient-blob-${index}`} key={index}>
          <span className="ambient-lobe" />
          <span className="ambient-lobe" />
          <span className="ambient-lobe" />
        </div>
      ))}
    </div>
  );
}
