"use client";
import React, { useEffect, useRef } from "react";
import { PiMouseSimpleThin } from "react-icons/pi";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let DPR = Math.max(1, window.devicePixelRatio || 1);

    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Set CSS size and actual canvas pixel size (for crispness)
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      // Draw in CSS pixels
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    setSize();

    // mouse/pointer state (client coords)
    const mouse = {
      x: null,
      y: null,
      lastX: 0,
      lastY: 0,
      speed: 0,
      radius: 120,
    };

    const particles = [];
    const isCoarse =
      window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const total = isCoarse ? 120 : 350; // fewer particles on touch devices

    // Create particles with a simple depth to vary size & responsiveness
    for (let i = 0; i < total; i++) {
      const depth = Math.random() * 1.8 + 0.6; // ~0.6 - 2.4
      const size = (Math.random() * 6 + 1) * (1 / depth); // nearer => bigger
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const dx = (Math.random() - 0.5) * (0.2 + 0.6 * (1 / depth));
      const dy = (Math.random() - 0.5) * (0.2 + 0.6 * (1 / depth));
      particles.push({ x, y, size, dx, dy, vx: 0, vy: 0, depth });
    }

    // update & draw
    const update = () => {
      for (let p of particles) {
        // friction on velocity so motion is smooth
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.dx + p.vx;
        p.y += p.dy + p.vy;

        // wrap around edges (looks smoother than hard bounce)
        if (p.x < -50) p.x = window.innerWidth + 50;
        if (p.x > window.innerWidth + 50) p.x = -50;
        if (p.y < -50) p.y = window.innerHeight + 50;
        if (p.y > window.innerHeight + 50) p.y = -50;

        // pointer "balloon push" using client coordinates (works while scrolling)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          const effectiveRadius = mouse.radius + mouse.speed * 1.5;

          if (dist < effectiveRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (effectiveRadius - dist) / effectiveRadius;
            // closer (smaller depth) get a stronger reaction
            const push = 6 * force * (1 / p.depth);
            p.vx -= Math.cos(angle) * push;
            p.vy -= Math.sin(angle) * push;
          }
        }
      }
    };

    const draw = () => {
      // clear using CSS-pixel size (ctx is already scaled by DPR)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let p of particles) {
        ctx.fillStyle = `rgb(0, 166, 244)`;
        // center rectangles on their (x,y)
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
    };

    const loop = () => {
      update();
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    // pointer handlers (unified for mouse & touch)
    const handlePointerMove = (e) => {
      const cx = e.clientX;
      const cy = e.clientY;
      const dx = cx - mouse.lastX;
      const dy = cy - mouse.lastY;
      mouse.speed = Math.hypot(dx, dy);
      mouse.lastX = cx;
      mouse.lastY = cy;
      mouse.x = cx;
      mouse.y = cy;
    };
    const handlePointerUp = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.speed = 0;
    };
    const handleResize = () => {
      setSize();
      // keep last pointer sensible after resize
      mouse.lastX = mouse.x ?? window.innerWidth / 2;
      mouse.lastY = mouse.y ?? window.innerHeight / 2;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // IMPORTANT: fixed canvas so pointer coordinates (clientX/clientY) stay valid while scrolling
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-screen h-screen pointer-events-none z-0"
    />
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-200">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Content */}
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-brand">RPICC</span>
          </h1>
          <p className="text-xl mb-8">
            Empowering the next generation of innovators and problem solvers
            through technology and collaboration.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">Join Us</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
          <PiMouseSimpleThin className="animate-bounce text-[50px] mt-28 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
