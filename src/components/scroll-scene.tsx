"use client";
import { useRef } from "react";
import { Navigation } from "./navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
export function ScrollScene({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const setupDirectionNav = (
        nav: HTMLElement,
        introEnd: () => number,
        reduced = false,
      ) => {
        let previous = 0;
        let direction = 0;
        let distance = 0;
        let hidden = false;
        gsap.set(nav, { yPercent: 0 });
        const slide = gsap.quickTo(nav, "yPercent", {
          duration: reduced ? 0 : 0.32,
          ease: "power2.out",
        });
        const show = (shouldHide: boolean) => {
          if (hidden === shouldHide) return;
          hidden = shouldHide;
          if (reduced) gsap.set(nav, { yPercent: shouldHide ? -115 : 0 });
          else slide(shouldHide ? -115 : 0);
        };
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onRefresh: (self) => {
            previous = self.scroll();
            distance = 0;
          },
          onUpdate: (self) => {
            const position = Math.max(0, self.scroll());
            const delta = position - previous;
            previous = position;
            if (
              position <= introEnd() + nav.offsetHeight ||
              nav.querySelector(":focus-visible")
            ) {
              distance = 0;
              show(false);
              return;
            }
            if (Math.abs(delta) < 0.1) return;
            const nextDirection = delta > 0 ? 1 : -1;
            distance =
              nextDirection === direction
                ? distance + Math.abs(delta)
                : Math.abs(delta);
            direction = nextDirection;
            if (distance >= 16) show(direction > 0);
          },
        });
        const onFocus = () => {
          distance = 0;
          show(false);
        };
        nav.addEventListener("focusin", onFocus);
        return () => nav.removeEventListener("focusin", onFocus);
      };
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const host = root.current!;
        host.classList.add("motion-enabled");
        const stage = host.querySelector<HTMLElement>("main")!;
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 0.9,
          smoothTouch: false,
          effects: false,
        });
        const scene = root.current?.querySelector<HTMLElement>(".hero");
        if (!scene) return;
        gsap.set(".hero-continuation", { autoAlpha: 0, y: 40 });
        gsap.set(".white-bloom", { scale: 0 });
        gsap.set(".portfolio-body", { autoAlpha: 0 });
        gsap.set(".floating-navigation", { autoAlpha: 0, y: -12 });
        gsap.set(".work-section .section-heading", { y: 24 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () =>
              `+=${window.innerHeight * (window.innerWidth < 768 ? 1 : 1.25)}`,
            pin: true,
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });
        tl.to(
          ".hero-copy",
          {
            y: () => -Math.min(window.innerHeight * 0.2, 210),
            duration: 0.4,
            ease: "power2.out",
          },
          0,
        )
          .to(
            ".hero-continuation",
            { autoAlpha: 1, y: 0, duration: 0.28, ease: "power2.out" },
            0.1,
          )
          .to(
            ".white-bloom",
            { scale: 1, duration: 0.3, ease: "power1.inOut" },
            0.6,
          )
          .to(".hero-ink", { opacity: 0, duration: 0.16 }, 0.74)
          .to(".hero", { autoAlpha: 0, duration: 0.1 }, 0.9)
          .to(".portfolio-body", { autoAlpha: 1, duration: 0.1 }, 0.9)
          .to(
            ".work-section .section-heading",
            { y: 0, duration: 0.1, ease: "power2.out" },
            0.9,
          )
          .to(
            ".floating-navigation",
            { autoAlpha: 1, y: 0, duration: 0.1 },
            0.9,
          );
        const cleanupNav = setupDirectionNav(
          host.querySelector<HTMLElement>(".floating-navigation .navigation")!,
          () => tl.scrollTrigger!.end,
        );
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          if (el.matches(".work-section .section-heading")) return;
          gsap.from(el, {
            y: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 94%",
              once: true,
              pinnedContainer: stage,
            },
          });
        });
        // Native hash navigation can scroll the transformed wrapper itself,
        // shifting pointer targets when focus returns. Route anchors through GSAP.
        const onAnchorClick = (event: MouseEvent) => {
          if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
          )
            return;
          const link = (event.target as Element).closest<HTMLAnchorElement>(
            'a[href^="#"]',
          );
          if (!link) return;
          const hash = link.getAttribute("href")!;
          const target =
            hash === "#" ? 0 : document.getElementById(hash.slice(1));
          if (target === null) return;
          event.preventDefault();
          history.pushState(null, "", hash);
          smoother.scrollTo(
            hash === "#work" ? tl.scrollTrigger!.end : target,
            true,
            `top ${window.innerWidth < 768 ? 93 : 111}px`,
          );
        };
        const onHashChange = () => {
          const target = document.getElementById(location.hash.slice(1));
          smoother.scrollTo(
            location.hash === "#work" ? tl.scrollTrigger!.end : target || 0,
            true,
            `top ${window.innerWidth < 768 ? 93 : 111}px`,
          );
        };
        document.addEventListener("click", onAnchorClick);
        window.addEventListener("hashchange", onHashChange);
        let active = true;
        document.fonts.ready.then(() => {
          if (!active) return;
          ScrollTrigger.refresh();
          if (location.hash) onHashChange();
        });
        return () => {
          active = false;
          cleanupNav();
          document.removeEventListener("click", onAnchorClick);
          window.removeEventListener("hashchange", onHashChange);
          smoother.kill();
          host.classList.remove("motion-enabled");
        };
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const host = root.current!;
        return setupDirectionNav(
          host.querySelector<HTMLElement>(".portfolio-body > .navigation")!,
          () => host.querySelector<HTMLElement>(".hero")!.offsetHeight,
          true,
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );
  return (
    <div ref={root}>
      <div className="floating-navigation">
        <Navigation />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </div>
  );
}
