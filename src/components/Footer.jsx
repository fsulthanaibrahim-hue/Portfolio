
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/fsulthanaibrahim-hue",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fathimath-sulthana-57922839a/",
      icon: <FaLinkedin />,
    },
    {
      label: "Email",
      href: "mailto:fsulthanaibrahim@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-emerald-300/10 bg-[#03140c] text-white"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        .footer-link {
          position: relative;
          transition: color 0.25s ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #34d399, #fcd34d);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #a7f3d0;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-social {
          transition:
            transform 0.25s ease,
            color 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .footer-social:hover {
          transform: translateY(-4px);
          color: #a7f3d0;
          background: rgba(52, 211, 153, 0.1);
          border-color: rgba(52, 211, 153, 0.35);
        }

        .footer-glow-line {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(52, 211, 153, 0.55),
            rgba(252, 211, 77, 0.35),
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-link,
          .footer-link::after,
          .footer-social {
            transition: none;
          }

          .footer-social:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Decorative top line */}
      <div className="footer-glow-line h-px w-full" />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(252,211,77,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-10">

          {/* Brand and contact */}
          <div className="space-y-6">
            <a
              href="#home"
              aria-label="Fathimath Sulthana - back to home"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <h2 className="text-2xl font-extrabold tracking-tight">
                Fathimath{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #34d399, #a7f3d0, #fcd34d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sulthana
                </span>
              </h2>

              <p
                className="mt-2 text-xs uppercase tracking-[0.22em] text-emerald-300/80"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Python Full-Stack Developer
              </p>
            </a>

            <p
              className="max-w-sm text-sm leading-7 text-slate-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Building thoughtful, user-focused web applications with Python,
              modern frontend technologies, and reliable backend APIs.
            </p>

            <div
              className="space-y-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <a
                href="mailto:fsulthanaibrahim@gmail.com"
                className="footer-link group flex w-fit items-center gap-3 text-sm text-slate-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/5 text-emerald-300 transition-colors group-hover:border-emerald-300/35">
                  <FaEnvelope size={13} />
                </span>
                <span>fsulthanaibrahim@gmail.com</span>
              </a>

              <a
                href="tel:+917012445229"
                className="footer-link group flex w-fit items-center gap-3 text-sm text-slate-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/5 text-emerald-300 transition-colors group-hover:border-emerald-300/35">
                  <FaPhone size={13} />
                </span>
                <span>+91 7012445229</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3
              className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link inline-block text-sm text-slate-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h3
              className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let's Connect
            </h3>

            <p
              className="mb-5 max-w-xs text-sm leading-6 text-slate-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Have a project idea or an opportunity to discuss? Feel free to
              reach out.
            </p>

            <div className="mb-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.label === "Email" ? undefined : "_blank"
                  }
                  rel={
                    social.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                  className="footer-social flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.05] px-3.5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span
                className="text-xs font-medium text-emerald-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row">
          <p
            className="text-center text-xs text-slate-500 sm:text-left"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Fathimath Sulthana. All rights reserved.
          </p>

          <p
            className="flex items-center gap-1.5 text-xs text-slate-500"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Crafted with <span className="text-emerald-300">React</span>
            <span className="text-amber-300" aria-label="care and energy">
              ✦
            </span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="footer-social flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <FaArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
