import React, { useState } from "react";
import TRENDORA from "../assets/TRENDORA.png";
import EYRA from "../assets/EYRA.png";
import ZIAS from "../assets/ZIAS.png";

const projects = [
  {
    name: "TRENDORA",
    tagline: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web app with product listings, cart management, authentication, and payment integration.",
    image: TRENDORA,
    link: "https://ecommerce-project1-trendora.vercel.app/",
    tags: ["React.js", "Django", "REST API", "Tailwind"],
    color: "#f472b6",
    num: "01",
  },
  {
    name: "EYRA",
    tagline: "Social Media Platform",
    description:
      "A social platform for connecting and sharing content — featuring feeds, profiles, likes, and real-time-style updates.",
    image: EYRA,
    link: "#",
    tags: ["React.js", "Django", "PostgreSQL", "CSS"],
    color: "#818cf8",
    num: "02",
  },
  {
    name: "ZIAS",
    tagline: "School Management System",
    description:
      "A comprehensive admin system for managing students, teachers, batches, and courses — built with React and Django REST Framework.",
    image: ZIAS,
    link: "https://zias-frontend.onrender.com/",
    tags: ["React.js", "Django REST", "Tailwind", "JWT"],
    color: "#34d399",
    num: "03",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .project-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.4s, transform 0.4s;
          overflow: hidden;
        }
        .project-card:hover {
          transform: translateY(-8px);
        }
        .project-img {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center top;
        }
        .project-card:hover .project-img { transform: scale(1.04); }
        .project-overlay {
          background: linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.5) 50%, transparent 100%);
        }
        .proj-tag {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.2s;
        }
        .proj-tag:hover { border-color: rgba(255,255,255,0.25); }
        .view-btn {
          transition: gap 0.2s, padding-right 0.2s;
        }
        .view-btn:hover { gap: 10px; }
      `}</style>

      {/* blobs */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      {/* header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Work
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Featured{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Projects
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Real-world applications built from scratch during my fullstack training.
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card rounded-2xl"
            style={{ borderColor: hovered === i ? `${project.color}30` : "rgba(255,255,255,0.07)" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* image area */}
            <div className="relative h-52 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="project-img w-full h-full object-cover"
              />
              <div className="project-overlay absolute inset-0" />
              {/* number */}
              <div
                className="absolute top-4 left-4 text-4xl font-extrabold leading-none select-none opacity-20"
                style={{ color: project.color }}
              >
                {project.num}
              </div>
              {/* color accent dot */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }}
              />
            </div>

            {/* content */}
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: project.color, fontFamily: "'DM Sans', sans-serif" }}>
                {project.tagline}
              </p>
              <h3 className="text-xl font-extrabold mb-3 text-white">{project.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {project.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="proj-tag text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;