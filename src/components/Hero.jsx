
import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  const canvasRef = useRef(null);

  // Animated green and yellow particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = Array.from(
        { length: Math.min(65, Math.floor(window.innerWidth / 20)) },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.35,
          speedY: (Math.random() - 0.5) * 0.35,
          opacity: Math.random() * 0.45 + 0.15,
          color:
            Math.random() > 0.5
              ? "52, 211, 153"
              : "250, 204, 21",
        })
      );
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${
              0.12 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    drawParticles();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Stretching liquid cursor
  useEffect(() => {
    const cursor = document.querySelector(".liquid-cursor");
    if (!cursor) return;

    let previousX = 0;
    let previousY = 0;

    const moveCursor = (event) => {
      const dx = event.clientX - previousX;
      const dy = event.clientY - previousY;
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy) / 100, 0.35);

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.transform = `translate(-50%, -50%) scale(${
        1 + speed
      }, ${1 - speed * 0.5})`;

      cursor.classList.add("liquid-cursor-visible");

      previousX = event.clientX;
      previousY = event.clientY;
    };

    const hideCursor = () => {
      cursor.classList.remove("liquid-cursor-visible");
    };

    const pressCursor = () => {
      cursor.classList.add("liquid-cursor-pressed");
    };

    const releaseCursor = () => {
      cursor.classList.remove("liquid-cursor-pressed");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousedown", pressCursor);
    window.addEventListener("mouseup", releaseCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousedown", pressCursor);
      window.removeEventListener("mouseup", releaseCursor);
    };
  }, []);

  const technologies = [
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "React.js",
    "TypeScript",
    "PostgreSQL",
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#03140c] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-16"
    >
      <style>{`
        .liquid-cursor {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(134, 239, 172, 0.85);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          display: none;
          background: rgba(16, 185, 129, 0.16);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.25);
          transition:
            width 0.2s ease,
            height 0.2s ease,
            opacity 0.2s ease,
            background 0.2s ease,
            border-radius 0.2s ease;
          will-change: left, top, transform;
        }

        .liquid-cursor-visible {
          display: block;
          opacity: 1;
        }

        .liquid-cursor-pressed {
          width: 58px;
          height: 58px;
          border-radius: 40% 60% 55% 45%;
          background: rgba(250, 204, 21, 0.2);
          border-color: rgba(250, 204, 21, 0.9);
        }

        .glass-panel {
          background: linear-gradient(
            135deg,
            rgba(236, 253, 245, 0.10),
            rgba(16, 185, 129, 0.035)
          );
          border: 1px solid rgba(167, 243, 208, 0.15);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 20px 70px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .hero-glow {
          animation: heroGlow 7s ease-in-out infinite alternate;
        }

        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-ring {
          animation: heroSpin 18s linear infinite;
        }

        @keyframes heroGlow {
          from {
            transform: translate3d(-10px, 0, 0) scale(1);
          }
          to {
            transform: translate3d(20px, 15px, 0) scale(1.12);
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes heroSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (pointer: coarse) {
          .liquid-cursor {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-glow,
          .hero-float,
          .hero-ring {
            animation: none;
          }
        }
      `}</style>

      {/* Liquid cursor */}
      <div className="liquid-cursor" aria-hidden="true" />

      {/* Full green gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #052e1b 0%, #03140c 40%, #0b2917 72%, #10240b 100%)",
        }}
      />

      {/* Green background glow */}
      <div
        className="hero-glow pointer-events-none absolute -left-40 top-0 -z-10 h-[450px] w-[450px] rounded-full blur-[120px]"
        style={{ background: "rgba(16, 185, 129, 0.30)" }}
      />

      {/* Yellow accent glow */}
      <div
        className="hero-glow pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full blur-[130px]"
        style={{
          background: "rgba(250, 204, 21, 0.10)",
          animationDelay: "1.5s",
        }}
      />

      {/* Subtle green light in the center */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-80 w-80 rounded-full blur-[120px]"
        style={{ background: "rgba(34, 197, 94, 0.12)" }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left content */}
        <div className="relative z-10">
          {/* Availability badge */}
          <div className="glass-panel mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-emerald-100 sm:text-sm">
              Available for opportunities
            </span>

            <span className="text-yellow-300">✦</span>
          </div>

          {/* Introduction */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300 sm:text-base">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Fathimath
            <span
              className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-400 to-yellow-300 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 24px rgba(16, 185, 129, 0.16))",
              }}
            >
              Sulthana
            </span>
          </h1>

          {/* Animated developer roles */}
          <div className="mt-7 min-h-[36px] text-lg font-semibold text-yellow-300 sm:text-xl md:text-2xl">
            <TypeAnimation
              sequence={[
                "Python Full Stack Developer",
                2000,
                "Django Developer",
                2000,
                "Flask Developer",
                2000,
                "FastAPI Developer",
                2000,
                "React.js Developer",
                2000,
                "Building Real-World Applications",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-emerald-400 align-middle" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            I build modern, responsive, and user-friendly web applications
            using Python, Django, Flask, FastAPI, React, and modern web
            technologies. I enjoy turning real-world problems into practical
            digital solutions.
          </p>

          {/* Technology badges */}
          <div className="mt-7 flex max-w-xl flex-wrap gap-2.5">
            {technologies.map((technology, index) => (
              <span
                key={technology}
                className={`rounded-full border px-3.5 py-2 text-xs font-medium transition duration-300 hover:-translate-y-1 sm:text-sm ${
                  index % 3 === 0
                    ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/20"
                    : index % 3 === 1
                    ? "border-yellow-300/30 bg-yellow-300/10 text-yellow-100 hover:bg-yellow-300/20"
                    : "border-green-100/15 bg-green-100/5 text-gray-200 hover:border-emerald-300/40"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 px-7 py-3.5 text-sm font-bold text-[#04110a] shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-emerald-400/35 sm:text-base"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="glass-panel inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-yellow-200 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:bg-yellow-300/10 sm:text-base"
            >
              Let's Talk
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 text-sm text-emerald-100/60 transition hover:text-yellow-300"
          >
            <span className="flex h-9 w-6 items-start justify-center rounded-full border border-emerald-200/30 p-1.5">
              <span className="h-2 w-1 rounded-full bg-yellow-300" />
            </span>
            Scroll to explore
          </a>
        </div>

        {/* Right profile image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* Image background glow */}
          <div className="pointer-events-none absolute inset-8 rounded-full bg-emerald-400/15 blur-[90px]" />

          <div className="pointer-events-none absolute -right-5 top-10 h-32 w-32 rounded-full bg-yellow-300/10 blur-[70px]" />

          {/* Rotating ring */}
          <div className="hero-ring absolute -inset-4 rounded-[2.5rem] border border-dashed border-emerald-300/30 sm:-inset-6" />

          {/* Glass image card */}
          <div className="glass-panel hero-float relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.5rem] sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <img
                src={heroImg}
                alt="Fathimath Sulthana - Python Full Stack Developer"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03140c]/95 via-transparent to-emerald-900/15" />

              {/* Green glass accent */}
              <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 rounded-br-full border-b border-r border-emerald-300/30 bg-emerald-300/5" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="glass-panel rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                        Full Stack Development
                      </p>

                      <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
                        Building with purpose.
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 text-xl text-yellow-300">
                      ✦
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Python badge */}
          <div className="glass-panel hero-float absolute -left-5 top-12 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-10 sm:px-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-xl">
              🐍
            </span>

            <div>
              <p className="text-sm font-bold text-white">Python</p>
              <p className="text-xs text-emerald-100/60">Backend</p>
            </div>
          </div>

          {/* Floating FastAPI badge */}
          <div
            className="glass-panel hero-float absolute -right-3 top-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8 sm:px-5"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300/15 text-xl text-yellow-300">
              ⚡
            </span>

            <div>
              <p className="text-sm font-bold text-white">FastAPI</p>
              <p className="text-xs text-yellow-100/60">REST APIs</p>
            </div>
          </div>

          {/* Bottom green and yellow accent */}
          <div className="absolute -bottom-5 left-1/4 h-1 w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400/70 to-yellow-300/70 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
