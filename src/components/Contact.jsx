
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const contacts = [
  {
    key: "email",
    icon: <FaEnvelope />,
    label: "Email Address",
    value: "fsulthanaibrahim@gmail.com",
    href: "mailto:fsulthanaibrahim@gmail.com",
  },
  {
    key: "phone",
    icon: <FaPhone />,
    label: "Phone Number",
    value: "+91 7012445229",
    href: "tel:+917012445229",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    sub: "Explore my projects and code",
    href: "https://github.com/fsulthanaibrahim-hue",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    sub: "Connect with me professionally",
    href: "https://www.linkedin.com/in/fathimath-sulthana-57922839a/",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(null);
  const [copyError, setCopyError] = useState(null);

  const copy = async (text, key) => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard access is unavailable");
      }

      await navigator.clipboard.writeText(text);
      setCopied(key);
      setCopyError(null);

      window.setTimeout(() => {
        setCopied((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      setCopied(null);
      setCopyError(key);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#03140c] px-5 py-24 text-white sm:px-8 md:px-16 md:py-32"
    >
      <style>{`
        .contact-card {
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

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 231, 183, 0.35);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
        }

        .contact-social {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background 300ms ease;
        }

        .contact-social:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 231, 183, 0.3);
          background: rgba(16, 185, 129, 0.055);
        }

        .contact-copy {
          border: 1px solid rgba(110, 231, 183, 0.16);
          background: rgba(16, 185, 129, 0.06);
          transition: background 200ms ease, border-color 200ms ease;
        }

        .contact-copy:hover {
          background: rgba(16, 185, 129, 0.14);
          border-color: rgba(110, 231, 183, 0.35);
        }

        .contact-cta {
          background: linear-gradient(115deg, #047857, #059669 60%, #b99a42);
          box-shadow: 0 10px 35px rgba(5, 150, 105, 0.18);
          transition: transform 250ms ease, box-shadow 250ms ease;
        }

        .contact-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(5, 150, 105, 0.25);
        }

        .contact-heading-gradient {
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

        .contact-focus:focus-visible {
          outline: 2px solid #6ee7b7;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-card,
          .contact-social,
          .contact-copy,
          .contact-cta {
            transition: none;
          }

          .contact-card:hover,
          .contact-social:hover,
          .contact-cta:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.13), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-emerald-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Get in Touch
            </span>

            <span className="h-px w-9 bg-emerald-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let's Build Something{" "}
            <span className="contact-heading-gradient">Meaningful</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, a job opportunity, or an interesting
            collaboration in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Availability */}
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"
            />

            <div>
              <p className="text-sm font-semibold text-emerald-200">
                Open to Opportunities
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-400">
                Full-stack development roles and project collaborations
              </p>
            </div>
          </div>

          <span className="text-xs text-gray-500">
            Python · React · Full Stack
          </span>
        </div>

        {/* Email and phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {contacts.map((contact) => (
            <div
              key={contact.key}
              className="contact-card rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-xl text-emerald-300">
                  {contact.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                    {contact.label}
                  </p>

                  <a
                    href={contact.href}
                    className="contact-focus break-all text-sm font-medium text-gray-100 transition hover:text-emerald-300"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <a
                  href={contact.href}
                  className="contact-focus text-xs font-medium text-emerald-300 hover:text-emerald-200"
                >
                  {contact.key === "email" ? "Send an email" : "Call me"} →
                </a>

                <button
                  type="button"
                  onClick={() => copy(contact.value, contact.key)}
                  className="contact-copy contact-focus rounded-lg px-3 py-2 text-xs font-medium text-gray-300"
                  aria-label={`Copy ${contact.label.toLowerCase()}`}
                >
                  {copied === contact.key
                    ? "✓ Copied"
                    : copyError === contact.key
                    ? "Copy unavailable"
                    : "Copy"}
                </button>
              </div>

              {copyError === contact.key && (
                <p role="status" className="mt-2 text-xs text-amber-300">
                  Clipboard access failed. You can select and copy the contact
                  details manually.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.label} profile`}
              className="contact-social contact-focus group flex items-center gap-4 rounded-2xl p-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-xl text-emerald-300">
                {social.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {social.label}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {social.sub}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-lg text-gray-500 transition group-hover:translate-x-1 group-hover:text-emerald-300"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:fsulthanaibrahim@gmail.com"
            className="contact-cta contact-focus inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-semibold text-white sm:px-9"
          >
            <FaEnvelope className="text-lg" />
            Let's Talk
            <span aria-hidden="true">→</span>
          </a>

          <p className="mx-auto mt-6 max-w-lg text-xs leading-6 text-gray-500">
            I'm looking forward to connecting with people who enjoy building
            useful products and solving real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
