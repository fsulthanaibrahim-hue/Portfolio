
import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiFlask,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiSqlalchemy,
  SiSwagger,
  SiPostman,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiPytest,
  SiJsonwebtokens,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces.",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Python & Backend",
    description: "Developing APIs and application backends.",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Django REST Framework", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
      { name: "REST APIs", icon: <FaPython /> },
    ],
  },
  {
    title: "Databases & Data",
    description: "Working with relational and document databases.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Database Design", icon: <SiPostgresql /> },
      { name: "ORM & Migrations", icon: <SiSqlalchemy /> },
    ],
  },
  {
    title: "Testing & API Tools",
    description: "Testing endpoints and improving API reliability.",
    skills: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "Swagger / OpenAPI", icon: <SiSwagger /> },
      { name: "Pytest", icon: <SiPytest /> },
      { name: "API Integration", icon: <SiSwagger /> },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Version control, deployment and delivery workflows.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GitHub Actions / CI-CD", icon: <SiGithubactions /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Show content immediately if reduced motion is preferred
    // or IntersectionObserver is unavailable.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="skills-section relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-32"
    >
      <style>{`
        .skills-card {
          background: linear-gradient(
            145deg,
            rgba(16, 45, 30, 0.72),
            rgba(5, 22, 14, 0.82)
          );
          border: 1px solid rgba(110, 231, 183, 0.12);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
          transition:
            transform 350ms ease,
            border-color 350ms ease,
            background 350ms ease,
            box-shadow 350ms ease;
        }

        .skills-card:hover {
          transform: translateY(-5px);
          border-color: rgba(110, 231, 183, 0.38);
          background: linear-gradient(
            145deg,
            rgba(18, 59, 38, 0.88),
            rgba(5, 27, 17, 0.95)
          );
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.2);
        }

        .skill-tile {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.065);
          transition:
            background 250ms ease,
            border-color 250ms ease,
            transform 250ms ease;
        }

        .skill-tile:hover {
          background: rgba(52, 211, 153, 0.075);
          border-color: rgba(110, 231, 183, 0.28);
          transform: translateY(-2px);
        }

        .skills-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 650ms ease,
            transform 650ms ease;
        }

        .skills-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-heading-gradient {
          background: linear-gradient(110deg, #ffffff 10%, #a7f3d0 55%, #fcd34d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-reveal,
          .skills-card,
          .skill-tile {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.13), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div
          className={`skills-reveal mb-14 max-w-3xl ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              My Expertise
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Technologies I{" "}
            <span className="skills-heading-gradient">Work With</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My full-stack development toolkit covers Python backend
            development, modern frontend interfaces, databases, API
            development, testing and deployment tools.
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`skills-card skills-reveal rounded-2xl p-6 sm:p-7 ${
                visible ? "is-visible" : ""
              }`}
              style={{
                transitionDelay: visible ? `${Math.min(index * 90, 360)}ms` : "0ms",
              }}
            >
              {/* Category heading */}
              <div className="mb-6 flex items-start gap-4">
                <div className="mt-1 h-9 w-1 shrink-0 rounded-full bg-gradient-to-b from-emerald-300 to-yellow-400" />

                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-white sm:text-xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Individual technology tiles */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-tile flex min-h-[62px] items-center gap-3 rounded-xl px-3 py-3 sm:px-4"
                  >
                    <span className="shrink-0 text-xl text-emerald-300">
                      {skill.icon}
                    </span>

                    <span className="text-xs font-medium leading-5 text-gray-200 sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div
          className={`skills-reveal mt-14 text-center ${
            visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          <p className="text-sm leading-7 text-gray-400 sm:text-base">
            Focused on continuous learning, practical projects and building
            useful applications.
          </p>

          <p className="mt-2 text-xs tracking-wide text-emerald-300/80">
            Learn · Build · Improve
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
