function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffdf8]
        px-4
        py-20
        transition-colors
        duration-300
        dark:bg-[#0b1220]
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -left-40
            top-40
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#d4af6a]/10
            blur-3xl
            dark:bg-[#d4af6a]/5
            sm:h-[400px]
            sm:w-[400px]
          "
        />

        <div
          className="
            absolute
            right-8
            top-24
            h-16
            w-16
            rounded-full
            border
            border-[#d4af6a]/20
            sm:right-16
            sm:h-20
            sm:w-20
            lg:right-24
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.015]
          "
          style={{
            backgroundImage:
              "linear-gradient(#0f1f3d 1px, transparent 1px), linear-gradient(90deg, #0f1f3d 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d4af6a]/30
              bg-[#faf6ed]
              px-4
              py-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#9b7438]
              dark:border-[#d4af6a]/20
              dark:bg-[#d4af6a]/10
              dark:text-[#d4af6a]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58a45] dark:bg-[#d4af6a]" />

            About Talent English
          </div>

          <h2
            id="about-title"
            className="
              mt-5
              font-display
              text-3xl
              font-extrabold
              leading-[1.12]
              tracking-[-0.035em]
              text-[#0f1f3d]
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            More than English.
            <br />

            <span className="text-[#b58a45] dark:text-[#d4af6a]">
              We build confidence.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              dark:text-slate-300
              sm:text-base
              sm:leading-8
            "
          >
            Talent English Classes is focused on helping learners become
            confident English speakers through practical communication,
            regular speaking practice and a supportive learning environment.
          </p>
        </header>

        {/* Main About Content */}
        <div
          className="
            mt-14
            grid
            items-center
            gap-12
            lg:mt-20
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >
          {/* Image Column */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            {/* Decorative Shape */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-4
                -left-4
                h-24
                w-24
                rounded-3xl
                border
                border-[#d4af6a]/30
                dark:border-[#d4af6a]/20
                sm:-bottom-5
                sm:-left-5
                sm:h-32
                sm:w-32
              "
            />

            {/* Image Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-slate-200
                bg-white
                p-2
                shadow-[0_25px_70px_rgba(15,31,61,0.10)]
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/30
                sm:rounded-[2rem]
              "
            >
              <div className="relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
                  alt="Students learning English in a classroom"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-[330px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    sm:h-[430px]
                    lg:h-[500px]
                  "
                />

                {/* Image Overlay */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0f1f3d]/75
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image Information */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    rounded-2xl
                    border
                    border-white/20
                    bg-[#0f1f3d]/85
                    p-4
                    text-white
                    backdrop-blur-xl
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                    sm:p-5
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#d4af6a]
                    "
                  >
                    Our Approach
                  </p>

                  <p className="mt-1.5 text-sm font-bold sm:text-base">
                    Learn by speaking, not just memorising.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -right-2
                -top-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-3
                py-3
                shadow-xl
                dark:border-white/10
                dark:bg-[#111c31]
                sm:-right-5
                sm:-top-5
                sm:px-5
                sm:py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    grid
                    h-9
                    w-9
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-[#faf6ed]
                    text-[#b58a45]
                    dark:bg-[#d4af6a]/10
                    dark:text-[#d4af6a]
                    sm:h-10
                    sm:w-10
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v18M3 12h18"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-extrabold text-[#0f1f3d] dark:text-white">
                    Practice First
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    Confidence through action
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full">
            <p
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#b58a45]
                dark:text-[#d4af6a]
              "
            >
              Why Talent English Classes?
            </p>

            <h3
              className="
                mt-3
                max-w-2xl
                font-display
                text-2xl
                font-extrabold
                leading-tight
                tracking-[-0.03em]
                text-[#0f1f3d]
                dark:text-white
                sm:text-3xl
                lg:text-[2.6rem]
              "
            >
              Turn hesitation into{" "}
              <span className="text-[#b58a45] dark:text-[#d4af6a]">
                confidence.
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-300
                sm:text-base
                sm:leading-8
              "
            >
              Learning English is not only about grammar and vocabulary.
              Real improvement comes when you start using English in
              conversations, interviews, presentations and everyday
              situations.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-300
                sm:text-base
                sm:leading-8
              "
            >
              Our learning approach focuses on practical communication,
              speaking practice and building the confidence needed to express
              yourself clearly.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {/* Feature 1 */}
              <Feature
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6h16M4 12h10M4 18h7"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Practical Communication"
                description="Learn English that you can actually use in everyday conversations and professional situations."
              />

              {/* Feature 2 */}
              <Feature
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="3" />

                    <path
                      d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M19 5v4M17 7h4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Supportive Learning"
                description="A comfortable environment where learners can practice, make mistakes and improve without hesitation."
              />

              {/* Feature 3 */}
              <Feature
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 19V5M4 19h16"
                      strokeLinecap="round"
                    />

                    <path
                      d="m7 15 4-4 3 2 5-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Career-Focused Skills"
                description="Develop communication skills useful for interviews, presentations, studies and professional growth."
              />
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#courses"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#0f1f3d]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-slate-900/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#172b50]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#d4af6a]
                  focus:ring-offset-2
                  dark:bg-[#d4af6a]
                  dark:text-[#0f1f3d]
                  dark:hover:bg-[#e0bd7c]
                  dark:focus:ring-offset-[#0b1220]
                "
              >
                Explore Our Courses

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
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
          </div>
        </div>

        {/* Stats */}
        <div
          className="
            mt-14
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
            dark:border-white/10
            dark:bg-white/[0.03]
            sm:mt-16
            sm:grid-cols-4
            lg:mt-20
          "
        >
          <Stat value="100%" label="Practical Learning" />
          <Stat value="1 : 1" label="Guidance" />
          <Stat value="Daily" label="Speaking Practice" />
          <Stat
            value="Bhadohi"
            label="Local Learning"
            highlight
          />
        </div>
      </div>
    </section>
  );
}

/* Feature Component */
function Feature({ icon, title, description }) {
  return (
    <div
      className="
        group
        flex
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d4af6a]/40
        hover:shadow-lg
        dark:border-white/10
        dark:bg-white/[0.03]
        dark:hover:border-[#d4af6a]/30
        dark:hover:bg-white/[0.05]
        sm:p-5
      "
    >
      <div
        className="
          grid
          h-11
          w-11
          shrink-0
          place-items-center
          rounded-xl
          bg-[#faf6ed]
          text-[#b58a45]
          dark:bg-[#d4af6a]/10
          dark:text-[#d4af6a]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="text-sm font-extrabold text-[#0f1f3d] dark:text-white sm:text-base">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

/* Stats Component */
function Stat({ value, label, highlight = false }) {
  return (
    <div
      className="
        border-b
        border-slate-200
        p-5
        text-center
        dark:border-white/10
        sm:border-b-0
        sm:border-r
        sm:last:border-r-0
      "
    >
      <p
        className={`
          font-display
          text-xl
          font-extrabold
          sm:text-2xl
          ${
            highlight
              ? "text-[#b58a45] dark:text-[#d4af6a]"
              : "text-[#0f1f3d] dark:text-white"
          }
        `}
      >
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default About;