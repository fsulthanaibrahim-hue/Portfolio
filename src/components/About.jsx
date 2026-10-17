
import React from "react";
import profileImg from "../assets/about.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Projects Built" },
    { value: "Full Stack", label: "Development" },
    { value: "Python", label: "Backend Focus" },
    { value: "2025", label: "Journey Started" },
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-32"
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
            0 20px 60px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .about-card {
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(110, 231, 183, 0.35);
          box-shadow: 0 20px 55px rgba(16, 185, 129, 0.08);
        }

        .about-title-gradient {
          background: linear-gradient(
            100deg,
            #a7f3d0 0%,
            #34d399 48%,
            #fde047 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 22px rgba(16, 185, 129, 0.12));
        }

        .about-image-frame {
          position: relative;
          isolation: isolate;
        }

        .about-image-frame::before {
          content: "";
          position: absolute;
          inset: 14px -14px -14px 14px;
          z-index: -1;
          border: 1px solid rgba(110, 231, 183, 0.3);
          border-radius: 30px;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .about-image-frame:hover::before {
          transform: translate(4px, 4px);
          border-color: rgba(250, 204, 21, 0.45);
        }

        .about-image {
          transition: transform 0.6s ease;
        }

        .about-image-frame:hover .about-image {
          transform: scale(1.025);
        }

        .about-orbit {
          animation: aboutOrbit 22s linear infinite;
        }

        .about-float {
          animation: aboutFloat 5s ease-in-out infinite;
        }

        .about-glow {
          animation: aboutGlow 8s ease-in-out infinite alternate;
        }

        .about-cta {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .about-cta:hover {
          transform: translateY(-3px);
        }

        @keyframes aboutOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes aboutGlow {
          from { transform: translate3d(-8px, 0, 0) scale(1); }
          to { transform: translate3d(12px, 14px, 0) scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-orbit,
          .about-float,
          .about-glow {
            animation: none;
          }

          .about-card,
          .about-image,
          .about-cta,
          .about-image-frame::before {
            transition: none;
          }
        }
      `}</style>

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #052e1b 0%, #03140c 45%, #0b2917 100%)",
        }}
      />

      <div
        className="about-glow pointer-events-none absolute -right-32 top-0 -z-10 h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: "rgba(16, 185, 129, 0.18)" }}
      />

      <div
        className="about-glow pointer-events-none absolute -bottom-24 -left-24 -z-10 h-[350px] w-[350px] rounded-full blur-[120px]"
        style={{
          background: "rgba(250, 204, 21, 0.08)",
          animationDelay: "1.5s",
        }}
      />

      {/* Section heading */}
      <div className="mx-auto mb-14 max-w-7xl sm:mb-20">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            About Me
          </span>

          <span className="text-yellow-300">✦</span>
        </div>

        <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          More than code.
          <span className="about-title-gradient block">
            A passion for building.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          Get to know the developer behind the applications
          — my journey, the way I work, and what inspires me
          to create meaningful digital experiences.
        </p>
      </div>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Profile image */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="pointer-events-none absolute inset-8 rounded-full blur-[90px]"
            style={{ background: "rgba(16, 185, 129, 0.2)" }}
          />

          <div
            className="pointer-events-none absolute -right-4 top-10 h-32 w-32 rounded-full blur-[65px]"
            style={{ background: "rgba(250, 204, 21, 0.1)" }}
          />

          {/* Decorative orbit */}
          <div className="about-orbit pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-dashed border-emerald-300/20" />

          <div className="about-image-frame">
            <div className="about-glass relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={profileImg}
                  alt="Fathimath Sulthana"
                  loading="lazy"
                  className="about-image aspect-[4/5] w-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03140c] via-transparent to-emerald-900/10" />

                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="about-glass rounded-2xl p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300 sm:text-xs">
                      Python Full Stack Developer
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                      Building with purpose.
                    </h3>

                    <div className="mt-3 h-px w-full bg-gradient-to-r from-emerald-400/60 via-yellow-300/30 to-transparent" />

                    <p className="mt-3 text-xs leading-5 text-gray-300 sm:text-sm">
                      Turning ideas into practical web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating backend card */}
          <div className="about-glass about-float absolute -left-3 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 text-xl">
              {"</>"}
            </span>

            <div>
              <p className="text-sm font-bold text-white">
                Backend
              </p>

              <p className="text-xs text-emerald-100/60">
                Python
              </p>
            </div>
          </div>

          {/* Floating frontend card */}
          <div
            className="about-glass about-float absolute -right-2 top-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-7"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/10 text-xl text-yellow-300">
              ✦
            </span>

            <div>
              <p className="text-sm font-bold text-white">
                Frontend
              </p>

              <p className="text-xs text-yellow-100/60">
                React.js
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-8 left-1/4 h-1 w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400/70 to-yellow-300/70 blur-sm" />
        </div>

        {/* About text */}
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            My journey
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
            Creating useful solutions
            <span className="text-emerald-300"> for real-world problems.</span>
          </h3>

          <div className="mt-7 space-y-5 text-base leading-8 text-gray-300 sm:text-lg">
            <p>
              I'm a Python Full Stack Developer who enjoys
              building modern, responsive, and user-friendly
              web applications. My journey in full-stack
              development began in 2025, and I've been
              developing my skills by working on practical
              projects and solving real development challenges.
            </p>

            <p>
              I build backend applications and REST APIs
              using Python frameworks such as Django,
              Django REST Framework, Flask, and FastAPI.
              On the frontend, I work with React.js and
              Next.js to create clear, engaging user experiences.
            </p>

            <p>
              I believe good software is more than code.
              It should be easy to use, reliable, maintainable,
              and designed to solve a genuine problem. I'm
              always looking for opportunities to learn,
              collaborate, and turn ideas into useful products.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-glass about-card rounded-2xl p-4"
              >
                <p className="break-words bg-gradient-to-r from-emerald-300 to-yellow-200 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="about-cta inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 px-6 py-3.5 text-sm font-bold text-[#04110a] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/35 sm:px-7 sm:text-base"
            >
              Let's Connect
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#projects"
              className="about-glass about-cta inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-yellow-200 hover:border-yellow-300/40 hover:bg-yellow-300/10 sm:px-7 sm:text-base"
            >
              View My Projects
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
