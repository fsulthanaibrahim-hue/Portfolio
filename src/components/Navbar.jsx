import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu when the user presses Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const linkStyles = `
    cursor-none relative rounded-full px-4 py-2.5
    text-sm font-medium text-emerald-50/80
    transition-all duration-300
    hover:bg-emerald-300/10
    hover:text-yellow-300
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-yellow-300/70
  `;

  const mobileLinkStyles = `
    cursor-none block rounded-xl px-4 py-3
    text-sm font-medium text-emerald-50/80
    transition-all duration-200
    hover:bg-emerald-300/10
    hover:text-yellow-300
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-yellow-300/70
  `;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="
          relative mx-auto flex max-w-7xl items-center
          justify-between gap-3 rounded-2xl
          border border-emerald-300/25
          bg-emerald-950/25 px-4 py-3.5
          shadow-[0_8px_32px_rgba(0,0,0,0.18)]
          backdrop-blur-2xl
          transition-all duration-300
          hover:border-emerald-300/40
          sm:gap-4 sm:px-7 sm:py-4
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Sulthana - Home"
          className="
            group flex shrink-0 cursor-none
            items-center gap-2.5
          "
        >
          <span
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-yellow-300/35
              bg-yellow-300/10 text-lg font-bold
              text-yellow-300
              shadow-[0_0_20px_rgba(253,224,71,0.08)]
              transition-all duration-300
              group-hover:rotate-6
              group-hover:border-yellow-300/70
              group-hover:bg-yellow-300/15
              group-hover:shadow-[0_0_22px_rgba(253,224,71,0.14)]
            "
          >
            S
          </span>

          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Sulthana<span className="text-yellow-300">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={linkStyles}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="
            hidden cursor-none items-center gap-2
            rounded-full border border-yellow-300/40
            bg-yellow-300/10 px-5 py-2.5
            text-sm font-semibold text-yellow-200
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-yellow-300/70
            hover:bg-yellow-300/20
            hover:shadow-[0_0_24px_rgba(253,224,71,0.15)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-yellow-300/70
            lg:inline-flex
          "
        >
          Let's Talk

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17 17 7M7 7h10v10"
            />
          </svg>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="
            flex h-10 w-10 shrink-0 cursor-none
            items-center justify-center rounded-xl
            border border-emerald-300/25
            bg-emerald-300/5 text-emerald-50
            transition-all duration-300
            hover:border-yellow-300/50
            hover:bg-yellow-300/10
            hover:text-yellow-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-yellow-300/70
            md:hidden
          "
        >
          {menuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 6 12 12M18 6 6 18"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile navigation dropdown */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="
              absolute inset-x-0 top-[calc(100%+10px)]
              z-[60] rounded-2xl
              border border-emerald-300/25
              bg-[#052719]/95 p-3
              shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={mobileLinkStyles}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  mt-2 cursor-none rounded-xl border
                  border-yellow-300/35
                  bg-yellow-300/10 px-4 py-3
                  text-center text-sm font-semibold
                  text-yellow-200
                  transition-all duration-300
                  hover:border-yellow-300/60
                  hover:bg-yellow-300/20
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-yellow-300/70
                "
              >
                Let's Talk
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
