
import React from "react";
import profileImg from "../assets/about.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Major Projects" },
    { value: "React", label: "Frontend" },
    { value: "Django", label: "Backend" },
    { value: "2025", label: "Journey Start" },
  ];

  const tags = [
    "React.js",
    "Python",
    "Django",
    "REST APIs",
    "Tailwind CSS",
    "JavaScript",
    "Git",
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-28"
    >
      <style>{`
        .about-glass {
          background: linear-gradient(
            135deg,
            rgba(236, 253, 245, 0.09),
            rgba(16, 185, 129, 0.035)
          );
          border: 1px solid rgba(167, 243, 208, 0.15);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 20px 60px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .about-glass:hover {
          border-color: rgba(110, 231, 183, 0.4);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 20px 60px rgba(16, 185, 129, 0.08);
        }

        .about-tag {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(110, 231, 183, 0.2);
          color: #d1fae5;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .about-tag:nth-child(3n + 2) {
          background: rgba(250, 204, 21, 0.07);
          border-color: rgba(250, 204, 21, 0.2);
          color: #fef3c7;
        }

        .about-tag:hover {
          transform: translateY(-3px);
          background: rgba(16, 185, 129, 0.17);
          border-color: rgba(110, 231, 183, 0.5);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.08);
        }

        .about-tag:nth-child(3n + 2):hover {
          background: rgba(250, 204, 21, 0.14);
          border-color: rgba(250, 204, 21, 0.45);
          box-shadow: 0 8px 25px rgba(250, 204, 21, 0.06);
        }

        .about-stat {
          background: linear-gradient(
            145deg,
            rgba(236, 253, 245, 0.055),
            rgba(16, 185, 129, 0.025)
          );
          border: 1px solid rgba(167, 243, 208, 0.12);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .about-stat:hover {
          transform: translateY(-5px);
          background: rgba(16, 185, 129, 0.09);
          border-color: rgba(110, 231, 183, 0.35);
        }

        .about-stat:nth-child(even):hover {
          background: rgba(250, 204, 21, 0.06);
          border-color: rgba(250, 204, 21, 0.3);
        }

        .about-image-frame {
          position: relative;
          isolation: isolate;
        }

        .about-image-frame::before {
          content: "";
          position: absolute;
          inset: 16px -16px -16px 16px;
          z-index: -1;
          border: 1px solid rgba(110, 231, 183, 0.35);
          border-radius: 28px;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .about-image-frame:hover::before {
          border-color: rgba(250, 204, 21, 0.45);
          transform: translate(4px, 4px);
        }

        .about-image {
          transition: transform 0.6s ease;
        }

        .about-image-frame:hover .about-image {
          transform: scale(1.025);
        }

        .about-heading-glow {
          background: linear-gradient(
            100deg,
            #a7f3d0 0%,
            #34d399 42%,
            #fde047 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 22px rgba(16, 185, 129, 0.12));
        }

        .about-primary-button {
          background: linear-gradient(110deg, #34d399, #10b981);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.2);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.32);
        }

        .about-secondary-glow {
          animation: aboutGlow 8s ease-in-out infinite alternate;
        }

        @keyframes aboutGlow {
          from {
            transform: translate3d(-8px, 0, 0) scale(1);
          }
          to {
            transform: translate3d(12px, 14px, 0) scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-secondary-glow {
            animation: none;
          }

          .about-glass,
          .about-tag,
          .about-stat,
          .about-image,
          .about-primary-button {
            transition: none;
          }
        }
      `}</style>

      {/* Background gradient matching Hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #052e1b 0%, #03140c 40%, #0b2917 72%, #10240b 100%)",
        }}
      />

      {/* Emerald glow */}
      <div
        className="about-secondary-glow pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: "rgba(16, 185, 129, 0.2)" }}
      />

      {/* Yellow accent glow */}
      <div
        className="about-secondary-glow pointer-events-none absolute -bottom-24 -left-24 -z-10 h-[350px] w-[350px] rounded-full blur-[120px]"
        style={{
          background: "rgba(250, 204, 21, 0.09)",
          animationDelay: "1.5s",
        }}
      />

      {/* Section label */}
      <div className="mx-auto mb-14 flex max-w-7xl items-center gap-3 sm:mb-16">
        <span className="h-px w-8 bg-emerald-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          About me
        </span>

        <span className="text-sm text-yellow-300">✦</span>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left: Profile image */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Image glow */}
          <div
            className="pointer-events-none absolute inset-8 rounded-full blur-[85px]"
            style={{ background: "rgba(16, 185, 129, 0.18)" }}
          />

          <div
            className="pointer-events-none absolute -right-4 top-10 h-32 w-32 rounded-full blur-[65px]"
            style={{ background: "rgba(250, 204, 21, 0.1)" }}
          />

          {/* Image frame */}
          <div
            className="about-image-frame"
            data-cursor-hover
          >
            <div className="about-glass relative overflow-hidden rounded-[1.8rem] p-3 sm:rounded-[2rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.5rem]">
                <img
                  src={profileImg}
                  alt="Fathimath Sulthana"
                  loading="lazy"
                  className="about-image aspect-[4/5] w-full object-cover object-center"
                />

                {/* Green image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03140c] via-transparent to-emerald-900/10" />

                {/* Bottom image caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="about-glass rounded-2xl p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300 sm:text-xs">
                      Full Stack Development
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-white sm:text-xl">
                        Building with purpose.
                      </h3>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 text-lg text-yellow-300">
                        ✦
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating technology badge */}
          <div
            className="about-glass absolute -left-3 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8"
            data-cursor-hover
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 text-xl">
              🐍
            </span>

            <div>
              <p className="text-sm font-bold text-white">Python</p>
              <p className="text-xs text-emerald-100/60">Backend</p>
            </div>
          </div>

          {/* Floating React badge */}
          <div
            className="about-glass absolute -right-2 top-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-7"
            data-cursor-hover
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/10 text-xl text-yellow-300">
              ⚡
            </span>

            <div>
              <p className="text-sm font-bold text-white">React.js</p>
              <p className="text-xs text-yellow-100/60">Frontend</p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="pointer-events-none absolute -bottom-8 left-1/4 h-1 w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400/70 to-yellow-300/70 blur-sm" />
        </div>

        {/* Right: About content */}
        <div className="relative z-10 space-y-7">
          {/* Heading */}
          <div>
            <h2 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Crafting digital
              <span className="about-heading-glow mt-2 block">
                experiences
              </span>
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-medium text-emerald-100/70 sm:text-base">
              <span>Full-Stack Developer</span>
              <span className="text-yellow-300">✦</span>
              <span>React.js & Python</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              I'm a passionate Full-Stack Developer with hands-on experience
              building modern, scalable web applications. I specialize in
              creating seamless user experiences on the frontend with{" "}
              <span className="font-semibold text-emerald-300">
                React.js
              </span>
              , and building robust, production-ready backends with{" "}
              <span className="font-semibold text-yellow-200">
                Python Django
              </span>
              .
            </p>

            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              I love solving real-world problems through clean, efficient
              code — and I'm always learning something new to sharpen my
              craft.
            </p>
          </div>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="about-tag rounded-full px-3.5 py-2 text-xs font-medium sm:text-sm"
                data-cursor-hover
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-stat rounded-2xl p-4 text-center"
                data-cursor-hover
              >
                <p className="mb-2 bg-gradient-to-r from-emerald-300 to-yellow-200 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
                  {stat.value}
                </p>

                <p className="text-[10px] uppercase tracking-[0.12em] text-gray-400 sm:text-xs sm:tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="about-primary-button group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-[#04110a] sm:px-7 sm:text-base"
              data-cursor-hover
            >
              Get in touch

              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17 17 7M7 7h10v10"
                />
              </svg>
            </a>

            <a
              href="#projects"
              className="about-glass inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-yellow-200 sm:px-7 sm:text-base"
              data-cursor-hover
            >
              Explore my work
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
