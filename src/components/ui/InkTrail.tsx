"use client";

import { useEffect, useRef } from "react";

const LIFE_MS = 900;

interface Point {
  x: number;
  y: number;
  t: number;
  w: number;
  start: boolean;
}

/**
 * The cursor paints a tapering brush stroke that dries away.
 * Fast movement = thin stroke, slow = heavy, like a real brush.
 * Disabled for touch devices and reduced-motion users.
 */
export function InkTrail({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const host = canvas?.parentElement;
    if (!canvas || !ctx || !host) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const color = getComputedStyle(canvas).color;
    let points: Point[] = [];
    let last: Point | null = null;
    let raf = 0;

    const draw = () => {
      const now = performance.now();
      points = points.filter((p) => now - p.t < LIFE_MS);
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = color;

      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        if (b.start) continue;
        const life = 1 - (now - b.t) / LIFE_MS;
        ctx.lineWidth = b.w * life;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      raf = points.length ? requestAnimationFrame(draw) : 0;
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        last = null;
        return;
      }
      const t = performance.now();
      let w = 10;
      let start = true;
      if (last && t - last.t < 120) {
        const dist = Math.hypot(x - last.x, y - last.y);
        if (dist < 2) return;
        const speed = dist / Math.max(t - last.t, 1);
        const target = Math.max(1.5, Math.min(16, 18 - speed * 7));
        w = last.w * 0.75 + target * 0.25;
        start = false;
      }
      const p = { x, y, t, w, start };
      points.push(p);
      last = p;
      if (!raf) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full text-foreground opacity-90 ${className}`}
    />
  );
}
