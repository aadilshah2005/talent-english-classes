function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        mt-[76px]
        h-[calc(100svh-76px)]
        min-h-0
        overflow-hidden
        bg-[#fffdf8]
        transition-colors
        duration-300
        dark:bg-[#0b1220]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top right glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#d4af6a]/10
            blur-3xl
            dark:bg-[#d4af6a]/5
          "
        />

        {/* Bottom left glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0f1f3d]/5
            blur-3xl
            dark:bg-[#d4af6a]/5
          "
        />

        {/* Premium grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.02]
          "
          style={{
            backgroundImage:
              "linear-gradient(#0f1f3d 1px, transparent 1px), linear-gradient(90deg, #0f1f3d 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-5
          py-5

          sm:px-8
          sm:py-6

          lg:px-8
          lg:py-6
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-7

            lg:grid-cols-[1fr_0.82fr]
            lg:gap-10

            xl:grid-cols-[1.03fr_0.97fr]
            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-2xl">
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d4af6a]/30
                bg-[#faf6ed]
                px-3
                py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-[#9b7438]

                dark:border-[#d4af6a]/20
                dark:bg-[#d4af6a]/10
                dark:text-[#d4af6a]

                sm:px-3.5
                sm:py-2
                sm:text-[10px]
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-500
                    opacity-60
                  "
                />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              Spoken English Coaching • Bhadohi
            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1
              className="
                mt-4
                font-display
                text-[2.45rem]
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#0f1f3d]

                dark:text-white

                sm:mt-5
                sm:text-5xl

                lg:text-[3.65rem]

                xl:text-[4.25rem]
              "
            >
              Speak English
              <br />

              <span className="text-[#b58a45] dark:text-[#392f1a]">
                with confidence.
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-4
                max-w-xl
                text-[13px]
                leading-6
                text-slate-600

                dark:text-slate-300

                sm:mt-5
                sm:text-[15px]
                sm:leading-7

                lg:text-[15px]
                xl:text-base
              "
            >
              Improve your spoken English, communication skills and
              confidence through practical learning, regular speaking
              practice and career-focused guidance.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-2.5

                sm:mt-7
                sm:flex-row
              "
            >
              {/* Primary CTA */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#0f1f3d]
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-slate-900/10
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#172b50]
                  hover:shadow-xl

                  dark:bg-[#d4af6a]
                  dark:text-[#0f1f3d]
                  dark:hover:bg-[#e0bd7c]

                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Start Learning

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
                >
                  <path
                    d="M5 12h14"
                    strokeLinecap="round"
                  />

                  <path
                    d="m13 6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Secondary CTA */}

              <a
                href="#courses"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  text-xs
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
                  dark:hover:border-[#d4af6a]/30
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-[#d4af6a]

                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Explore Courses

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-4
                    w-4
                    opacity-60
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M5 12h14"
                    strokeLinecap="round"
                  />

                  <path
                    d="m13 6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* =================================================
                TRUST ITEMS
            ================================================== */}

            <div
              className="
                mt-6
                grid
                max-w-xl
                grid-cols-3
                border-t
                border-slate-200
                pt-4

                dark:border-white/10

                sm:mt-7
                sm:pt-5
              "
            >
              {/* Practical */}

              <div className="pr-2 sm:pr-4">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#b58a45]

                      dark:bg-[#d4af6a]
                    "
                  />

                  <p className="text-xs font-extrabold text-[#0f1f3d] dark:text-white sm:text-sm">
                    Practical
                  </p>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">
                  Real-world English
                </p>
              </div>

              {/* Support */}

              <div
                className="
                  border-l
                  border-slate-200
                  px-2

                  dark:border-white/10

                  sm:px-4
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#b58a45]

                      dark:bg-[#d4af6a]
                    "
                  />

                  <p className="text-xs font-extrabold text-[#0f1f3d] dark:text-white sm:text-sm">
                    Support
                  </p>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">
                  Friendly guidance
                </p>
              </div>

              {/* Career */}

              <div
                className="
                  border-l
                  border-slate-200
                  pl-2

                  dark:border-white/10

                  sm:pl-4
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#b58a45]

                      dark:bg-[#d4af6a]
                    "
                  />

                  <p className="text-xs font-extrabold text-[#0f1f3d] dark:text-white sm:text-sm">
                    Career
                  </p>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">
                  Interview focused
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[510px]

              lg:max-w-none
            "
          >
            {/* Glow behind image */}

            <div
              className="
                absolute
                -inset-3
                -z-10
                rounded-[2rem]
                bg-[#0f1f3d]/5
                blur-2xl

                dark:bg-[#d4af6a]/5
              "
            />

            {/* Image card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.6rem]
                border
                border-slate-200
                bg-white
                p-1.5
                shadow-[0_20px_60px_rgba(15,31,61,0.12)]

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-black/30
              "
            >
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src='/trk-sir.png'
                  alt="Students learning together"
                  className="
                    h-[300px]
                    w-full
                    object-cover
                    object-center

                    sm:h-[400px]

                    lg:h-[calc(100svh-145px)]
                    lg:max-h-[540px]
                  "
                />

                {/* Image gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0f1f3d]/80
                    via-[#0f1f3d]/10
                    to-transparent
                  "
                />

                {/* Image information card */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    rounded-xl
                    border
                    border-white/20
                    bg-[#0f1f3d]/85
                    p-3
                    text-white
                    shadow-xl
                    backdrop-blur-xl

                    sm:bottom-5
                    sm:left-5
                    sm:right-5
                    sm:p-4
                  "
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}

                    <div
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-lg
                        bg-[#d4af6a]
                        text-[#0f1f3d]

                        sm:h-11
                        sm:w-11
                        sm:rounded-xl
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          d="M3 9.5 12 4l9 5.5L12 15 3 9.5Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M6 11.5V16c0 1.7 2.7 3.5 6 3.5s6-1.7 6-3.5v-4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-extrabold sm:text-sm">
                        Learn. Practice. Speak.
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-300 sm:text-xs">
                        Build confidence with every conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================== */}

            <div
              className="
                absolute
                -bottom-3
                -left-3
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                shadow-xl

                dark:border-white/10
                dark:bg-[#111c31]

                xl:flex
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-[10px] font-bold text-[#0f1f3d] dark:text-white">
                Confidence starts with practice
              </p>
            </div>

            {/* =================================================
                GOLD FLOATING DOT
            ================================================== */}

            <div
              className="
                absolute
                -right-3
                -top-3
                grid
                h-14
                w-14
                place-items-center
                rounded-full
                border
                border-[#d4af6a]/30
                bg-[#fffdf8]
                shadow-lg

                dark:border-[#d4af6a]/20
                dark:bg-[#0b1220]

                sm:-right-4
                sm:-top-4
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#d4af6a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;