
import React from "react";

const education = [
  {
    institution: "S.A.B.T.M.H.S.S. Thayineri",
    location: "Payyanur, Kerala",
    degree: "Higher Secondary Education",
    year: "2022 – 2024",
    icon: "🎓",
    tags: ["Science Stream"],
    type: "education",
  },
  {
    institution: "Pictech Institute",
    location: "Payyanur, Kerala",
    degree: "English & Arabic Typing",
    year: "2025",
    icon: "⌨️",
    tags: ["English Typing", "Arabic Typing"],
    type: "certification",
  },
  {
    institution: "ZIAS Academy",
    location: "Kerala",
    degree: "Full Stack Development Training",
    year: "2025 – 2026",
    icon: "💻",
    tags: [
      "React.js",
      "Python",
      "Django",
      "Django REST Framework",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    projects: ["TRENDORA", "EYRA", "ZIAS"],
    type: "training",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-32"
    >
      <style>{`
        .education-card {
          position: relative;
          background: linear-gradient(
            145deg,
            rgba(16, 45, 30, 0.72),
            rgba(5, 22, 14, 0.88)
          );
          border: 1px solid rgba(110, 231, 183, 0.13);
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .education-card:hover {
          transform: translateX(5px);
          border-color: rgba(110, 231, 183, 0.38);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
        }

        .education-tag {
          border: 1px solid rgba(110, 231, 183, 0.15);
          background: rgba(16, 185, 129, 0.06);
          color: #a7f3d0;
        }

        .education-project-tag {
          border: 1px solid rgba(252, 211, 77, 0.18);
          background: rgba(252, 211, 77, 0.06);
          color: #fde68a;
        }

        .education-heading-gradient {
          background: linear-gradient(
            110deg,
            #a7f3d0 5%,
            #34d399 55%,
            #fcd34d 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .education-card {
            transition: none;
          }

          .education-card:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.06), transparent 70%)",
        }}
      />

      {/* Section heading */}
      <div className="mx-auto mb-16 max-w-3xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            My Background
          </span>
        </div>

        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Education &{" "}
          <span className="education-heading-gradient">Training</span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          My educational journey, professional training, and additional
          skills that support my development as a full-stack developer.
        </p>
      </div>

      {/* Education timeline */}
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/25 to-transparent" />

        <div className="space-y-8 pl-16">
          {education.map((edu) => (
            <article key={edu.institution} className="relative">
              {/* Timeline icon */}
              <div
                className="absolute -left-[52px] top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-[#0b2919] text-xl shadow-lg shadow-emerald-950/30"
                aria-hidden="true"
              >
                {edu.icon}
              </div>

              {/* Education card */}
              <div className="education-card rounded-2xl p-6 sm:p-7">
                {/* Type label */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                    {edu.type === "education"
                      ? "Education"
                      : edu.type === "certification"
                      ? "Typing Course"
                      : "Professional Training"}
                  </span>

                  <span className="text-xs font-semibold tracking-wide text-amber-300">
                    {edu.year}
                  </span>
                </div>

                {/* Institution */}
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                  {edu.institution}
                </h3>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  {edu.location}
                </p>

                <p className="mt-4 text-sm font-medium text-gray-200">
                  {edu.degree}
                </p>

                {/* Skills and course details */}
                {edu.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="education-tag rounded-full px-3 py-1.5 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Projects */}
                {edu.projects && (
                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Projects Built
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.projects.map((project) => (
                        <span
                          key={project}
                          className="education-project-tag rounded-full px-3 py-1.5 text-[11px] font-semibold"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
