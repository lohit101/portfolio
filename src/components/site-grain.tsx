"use client";

import { useEffect, useRef } from "react";

/** A fine film texture, independent of the transformed smooth-scroll content. */
export function SiteGrain() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!surface || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tile = document.createElement("canvas");
    tile.width = tile.height = 256;
    const tileContext = tile.getContext("2d");
    if (!tileContext) return;

    // Generate only a small texture. Reposition it randomly instead of calculating
    // millions of new pixels every frame or running a full-screen SVG filter.
    const pixels = tileContext.createImageData(256, 256);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const shade = Math.random() > 0.5 ? 255 : 0;
      pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = shade;
      pixels.data[i + 3] = Math.round(35 + Math.random() * 150);
    }
    tileContext.putImageData(pixels, 0, 0);
    const pattern = context.createPattern(tile, "repeat");
    if (!pattern) return;
    let timer: ReturnType<typeof setTimeout> | undefined;

    function paint() {
      if (!context || !surface || !pattern) return;
      context.clearRect(0, 0, surface.width, surface.height);
      context.save();
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      context.translate(-x, -y);
      context.fillStyle = pattern;
      context.fillRect(0, 0, surface.width + 256, surface.height + 256);
      context.restore();
    }
    function tick() {
      paint();
      timer = setTimeout(tick, 100 + Math.random() * 80);
    }
    function sync() {
      clearTimeout(timer);
      if (document.hidden) return;
      paint();
      if (!motion.matches) timer = setTimeout(tick, 140);
    }
    function resize() {
      if (!surface) return;
      // One sample per CSS pixel keeps grain soft on retina displays and bounds cost.
      surface.width = window.innerWidth;
      surface.height = window.innerHeight;
      paint();
    }
    resize();
    sync();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={canvas} className="site-grain" aria-hidden="true" />;
}
