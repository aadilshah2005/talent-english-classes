import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("talent-theme") === "dark";
  });

  const [activeSection, setActiveSection] = useState("home");

  // =====================================================
  // DARK / LIGHT MODE
  // =====================================================

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("talent-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("talent-theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // =====================================================
  // ACTIVE SECTION DETECTION
  // =====================================================

  useEffect(() => {
    const main = document.querySelector("main");

    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const navbarHeight = 76;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollTop + navbarHeight + 120 >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    main.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // NAVIGATION CLICK
  // =====================================================

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="
          border-b
          border-slate-200/70
          bg-[#fffdf8]/95
          shadow-[0_4px_30px_rgba(15,23,42,0.06)]
          backdrop-blur-xl
          transition-all
          duration-300

          dark:border-white/[0.08]
          dark:bg-[#0b1220]/95
          dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)]
        "
      >
        {/* =====================================================
            NAVBAR INNER
        ====================================================== */}

        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}

          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-3"
          >
            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-[#0f1f3d]
                text-[#d4af6a]
                shadow-lg
                shadow-slate-900/10
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:shadow-xl

                dark:bg-[#f4ead5]
                dark:text-[#0f1f3d]
              "
            >
              <span
                className="
                  absolute
                  -right-5
                  -top-5
                  h-10
                  w-10
                  rounded-full
                  bg-white/10
                  blur-md
                "
              />

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="relative h-6 w-6"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M3 9.5L12 4l9 5.5L12 15 3 9.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M6 11.5V16c0 1.7 2.7 3.5 6 3.5s6-1.8 6-3.5v-4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M21 10v5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="leading-none">
              <h1
                className="
                  font-sans
                  text-[15px]
                  font-extrabold
                  tracking-[-0.02em]
                  text-[#0f1f3d]
                  sm:text-[17px]
                  dark:text-white
                "
              >
                Talent English
              </h1>

              <p
                className="
                  mt-1.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#b58a45]
                  sm:text-[9px]
                  dark:text-[#d4af6a]
                "
              >
                Classes • Bhadohi
              </p>
            </div>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(sectionId)}
                  className={`
                    group
                    relative
                    py-2
                    text-[13px]
                    font-semibold
                    tracking-[-0.01em]
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "text-[#b58a45] dark:text-[#d4af6a]"
                        : "text-slate-600 hover:text-[#b58a45] dark:text-slate-300 dark:hover:text-[#d4af6a]"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      -bottom-0.5
                      left-0
                      h-[1.5px]
                      rounded-full
                      bg-[#b58a45]
                      transition-all
                      duration-300
                      dark:bg-[#d4af6a]

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                transition-all
                duration-300
                hover:border-[#d4af6a]
                hover:bg-[#faf6ed]
                hover:text-[#9b7438]

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-slate-300
                dark:hover:border-[#d4af6a]/40
                dark:hover:bg-[#d4af6a]/10
                dark:hover:text-[#d4af6a]
              "
            >
              {isDark ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[18px] w-[18px]"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[18px] w-[18px]"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            {/* Enquire */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-[12px]
                font-bold
                text-[#0f1f3d]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#d4af6a]
                hover:bg-[#faf6ed]
                hover:text-[#9b7438]

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-white
                dark:hover:border-[#d4af6a]/40
                dark:hover:bg-white/[0.07]
                dark:hover:text-[#d4af6a]
              "
            >
              Enquire Now

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" strokeLinecap="round" />
                <path
                  d="m13 6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Join Batch */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-[#0f1f3d]
                px-5
                py-2.5
                text-[12px]
                font-bold
                text-white
                shadow-lg
                shadow-slate-900/15
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#172b50]
                hover:shadow-xl

                dark:bg-[#d4af6a]
                dark:text-[#0f1f3d]
                dark:hover:bg-[#e0bd7c]
              "
            >
              Join a Batch

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" strokeLinecap="round" />
                <path
                  d="m13 6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* =====================================================
              MOBILE ACTIONS
          ====================================================== */}

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                transition-all
                duration-300
                hover:border-[#d4af6a]
                hover:bg-[#faf6ed]
                hover:text-[#9b7438]

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-slate-300
                dark:hover:bg-white/[0.08]
                dark:hover:text-[#d4af6a]
              "
            >
              {isDark ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[18px] w-[18px]"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[18px] w-[18px]"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((prev) => !prev)
              }
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#0f1f3d]
                transition-all
                duration-300
                hover:border-[#d4af6a]
                hover:text-[#9b7438]

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-white
                dark:hover:border-[#d4af6a]/40
                dark:hover:text-[#d4af6a]
              "
            >
              {isMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-slate-200/70
            bg-[#fffdf8]
            transition-all
            duration-300

            dark:border-white/[0.08]
            dark:bg-[#0b1220]

            ${
              isMenuOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      handleNavClick(sectionId)
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-[#f8f1e3]
                            text-[#9b7438]
                            dark:bg-[#d4af6a]/10
                            dark:text-[#d4af6a]
                          `
                          : `
                            text-slate-700
                            hover:bg-[#faf6ed]
                            hover:text-[#9b7438]
                            dark:text-slate-300
                            dark:hover:bg-white/[0.05]
                            dark:hover:text-[#d4af6a]
                          `
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 opacity-60"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="m9 18 6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="#contact"
                onClick={() =>
                  handleNavClick("contact")
                }
                className="
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-[#0f1f3d]
                  transition-all
                  duration-300
                  hover:border-[#d4af6a]
                  hover:bg-[#faf6ed]
                  hover:text-[#9b7438]

                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-white/[0.08]
                "
              >
                Enquire
              </a>

              <a
                href="#contact"
                onClick={() =>
                  handleNavClick("contact")
                }
                className="
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0f1f3d]
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#172b50]

                  dark:bg-[#d4af6a]
                  dark:text-[#0f1f3d]
                  dark:hover:bg-[#e0bd7c]
                "
              >
                Join a Batch
              </a>
            </div>

            {/* Bottom info */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-slate-400
                dark:text-slate-500
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Spoken English Coaching • Bhadohi
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;