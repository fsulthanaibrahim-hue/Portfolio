
import React, { useState } from "react";
import TRENDORA from "../assets/TRENDORA.png";
import EYRA from "../assets/EYRA.png";
import ZIAS from "../assets/ZIAS.png";

const projects = [
  {
    name: "TRENDORA",
    tagline: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring product listings, cart management, authentication, and payment integration.",
    image: TRENDORA,
    link: "https://ecommerce-project1-trendora.vercel.app/",
    tags: ["React.js", "Django", "REST API", "Tailwind CSS"],
    num: "01",
    featured: true,
  },
  {
    name: "EYRA",
    tagline: "Eyewear E-Commerce",
    description:
      "An eyewear shopping application with product browsing, wishlist, shopping cart, and order management features.",
    image: EYRA,
    link: "#",
    tags: ["React.js", "Django REST", "PostgreSQL", "Docker"],
    num: "02",
    featured: false,
  },
  {
    name: "ZIAS",
    tagline: "Academic Management System",
    description:
      "A full-stack academic management system designed to support student, mentor, and administrative workflows.",
    image: ZIAS,
    link: "https://zias-frontend.onrender.com/",
    tags: ["React.js", "Django REST", "PostgreSQL", "JWT"],
    num: "03",
    featured: false,
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-32"
    >
      <style>{`
        .projects-card {
          background: linear-gradient(
            155deg,
            rgba(16, 45, 30, 0.72),
            rgba(5, 20, 13, 0.94)
          );
          border: 1px solid rgba(110, 231, 183, 0.12);
          transition:
            transform 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .projects-card:hover {
          transform: translateY(-7px);
          border-color: rgba(110, 231, 183, 0.4);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.24);
        }

        .projects-image {
          transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .projects-card:hover .projects-image {
          transform: scale(1.045);
        }

        .projects-tag {
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.035);
          transition:
            border-color 250ms ease,
            background 250ms ease;
        }

        .projects-card:hover .projects-tag {
          border-color: rgba(110, 231, 183, 0.16);
          background: rgba(16, 185, 129, 0.055);
        }

        .projects-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 250ms ease, color 250ms ease;
        }

        .projects-link:hover {
          gap: 13px;
        }

        .projects-link:focus-visible {
          outline: 2px solid #6ee7b7;
          outline-offset: 5px;
          border-radius: 4px;
        }

        .projects-heading-gradient {
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
          .projects-card,
          .projects-image,
          .projects-tag,
          .projects-link {
            transition: none;
          }

          .projects-card:hover,
          .projects-card:hover .projects-image {
            transform: none;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Projects That{" "}
              <span className="projects-heading-gradient">
                Bring Ideas to Life
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              A selection of full-stack applications built with modern
              frontend technologies and Python-powered backends.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-emerald-300/15 bg-emerald-300/[0.04] px-4 py-2 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-gray-300">
              Featured Portfolio
            </span>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="projects-card group overflow-hidden rounded-2xl"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#0a2115] sm:h-64">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="projects-image h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#03140c] via-[#03140c]/10 to-transparent"
                />

                {/* Project number */}
                <span className="absolute left-5 top-5 text-4xl font-bold tracking-tight text-white/65">
                  {project.num}
                </span>

                {/* Project status */}
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#03140c]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  {project.link === "#" ? "In Development" : "Live Project"}
                </span>

                {/* Image bottom label */}
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    {project.name}
                  </h3>

                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      hovered === index
                        ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-200"
                        : "border-white/10 text-gray-500"
                    }`}
                  >
                    <span className="text-lg">↗</span>
                  </span>
                </div>

                <p className="min-h-[84px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="projects-tag rounded-full px-3 py-1.5 text-[11px] font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="border-t border-white/[0.07] pt-5">
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live project`}
                      className="projects-link text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                    >
                      View Live Project
                      <span aria-hidden="true" className="text-lg">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-yellow-400"
                      />
                      Project link coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-16 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          <p className="text-sm leading-7 text-gray-400 sm:text-base">
            Designed to solve problems. Built to create meaningful experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
