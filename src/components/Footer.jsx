

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const courseLinks = [
  { name: "Basic English Speaking", href: "#courses" },
  { name: "Spoken English", href: "#courses" },
  { name: "Personality Development", href: "#courses" },
  { name: "Advanced Communication", href: "#courses" },
  { name: "Interview Preparation", href: "#courses" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0f1f3d]
        text-white
        dark:bg-[#070d18]
      "
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-[#d4af6a]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-32
            h-80
            w-80
            rounded-full
            bg-white/5
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">

        {/* ========================================
            TOP CTA
        ======================================== */}
        <div
          className="
            border-b
            border-white/10
            py-10
            sm:py-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#d4af6a]/30
                  bg-[#d4af6a]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#d4af6a]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af6a]" />
                Start Your Journey
              </div>

              <h2
                className="
                  font-display
                  text-2xl
                  font-extrabold
                  leading-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Ready to speak English
                <span className="text-[#d4af6a]"> with confidence?</span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Take the first step towards better English communication.
                Contact Talent English Classes and find the right course for
                your goals.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                w-fit
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#d4af6a]
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#0f1f3d]
                transition-all
                duration-300
                hover:bg-[#e2c27d]
                hover:shadow-lg
              "
            >
              Enquire Now

              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* ========================================
            MAIN FOOTER CONTENT
        ======================================== */}
        <div
          className="
            grid
            gap-10
            py-12
            sm:py-14
            lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr]
            lg:gap-12
          "
        >

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="inline-block"
            >
              <div
                className="
                  font-display
                  text-2xl
                  font-extrabold
                  tracking-tight
                "
              >
                Talent
                <span className="text-[#d4af6a]"> English</span>
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                "
              >
                Classes • Bhadohi
              </div>
            </a>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-slate-300
              "
            >
              A practical English learning institute focused on spoken English,
              communication skills, confidence building and personality
              development.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-[#d4af6a]/50
                  hover:bg-[#d4af6a]
                  hover:text-[#0f1f3d]
                "
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V5h-3c-3.1 0-5 1.9-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1 .5-2 2-2Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-[#d4af6a]/50
                  hover:bg-[#d4af6a]
                  hover:text-[#0f1f3d]
                "
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-[#d4af6a]/50
                  hover:bg-[#d4af6a]
                  hover:text-[#0f1f3d]
                "
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4.1A10 10 0 0 0 3.6 16.7L3 21l4.4-1.2A10 10 0 0 0 20 4.1Zm-8 15.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.6.7.7-2.5-.2-.3a8.2 8.2 0 1 1 6.6 3.5Zm4.5-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.8-.1.1-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-2.9-.3-.5.3-.5.7-1.2.1-.2 0-.3 0-.4l-.4-1c-.1-.3-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 1.5.6 2 .6 2.7.5.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.4-.3Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-[#d4af6a]/50
                  hover:bg-[#d4af6a]
                  hover:text-[#0f1f3d]
                "
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10 15.3V8.7l6 3.3-6 3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3
              className="
                font-display
                text-sm
                font-bold
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-200
                    hover:text-[#d4af6a]
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#b58a45]
                      opacity-0
                      transition-opacity
                      group-hover:opacity-100
                    "
                  />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h3
              className="
                font-display
                text-sm
                font-bold
                text-white
              "
            >
              Our Courses
            </h3>

            <div className="mt-5 space-y-3">
              {courseLinks.map((course) => (
                <a
                  key={course.name}
                  href={course.href}
                  className="
                    group
                    flex
                    w-fit
                    items-start
                    gap-2
                    text-sm
                    leading-5
                    text-slate-400
                    transition-colors
                    duration-200
                    hover:text-[#d4af6a]
                  "
                >
                  <span
                    className="
                      mt-2
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-[#b58a45]
                    "
                  />
                  {course.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                font-display
                text-sm
                font-bold
                text-white
              "
            >
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-[#d4af6a]
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-300">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-400">
                    Bhadohi, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-[#d4af6a]
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.3a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-300">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="
                      mt-1
                      block
                      text-sm
                      text-slate-400
                      transition-colors
                      hover:text-[#d4af6a]
                    "
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-[#d4af6a]
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-300">
                    Email
                  </p>

                  <a
                    href="mailto:info@talentenglishclasses.com"
                    className="
                      mt-1
                      block
                      break-all
                      text-sm
                      text-slate-400
                      transition-colors
                      hover:text-[#d4af6a]
                    "
                  >
                    info@talentenglishclasses.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BAR
        ======================================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <p className="text-xs text-slate-500">
            © {currentYear} Talent English Classes. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              text-xs
              text-slate-500
              sm:justify-end
            "
          >
            <a
              href="#"
              className="transition-colors hover:text-[#d4af6a]"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="#"
              className="transition-colors hover:text-[#d4af6a]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;