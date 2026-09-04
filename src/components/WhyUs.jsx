

const benefits = [
  {
    number: "01",
    title: "Practical Speaking Practice",
    description:
      "Sirf grammar rules yaad karne ke bajay students ko real-life conversations, role plays aur everyday situations ke through English bolne ki regular practice karai jati hai.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.8L3 21l1.8-4.4A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8 11h8M8 7.5h5M8 14.5h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personal Attention",
    description:
      "Har student ki learning needs aur current English level ko samajhne ki koshish ki jati hai, taaki students apni weaknesses par better focus kar saken.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M16 11a3 3 0 1 0 0-6M16 14a5.5 5.5 0 0 1 4.5 5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Confidence Building",
    description:
      "English bolne ka fear aur hesitation gradually reduce karne ke liye students ko supportive environment mein regularly speak, participate aur express karne ke opportunities milti hain.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Grammar Made Simple",
    description:
      "Important grammar concepts ko simple explanations aur practical examples ke saath samjhaya jata hai, taaki students grammar ko speaking mein naturally use kar saken.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8M8 12h5M8 16h7" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Vocabulary Development",
    description:
      "Daily-use words, useful expressions aur practical vocabulary ke through students ko apne thoughts ko English mein better express karne mein help ki jati hai.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Interview & Professional Skills",
    description:
      "Job seekers aur professionals ke liye interview communication, self-introduction, professional conversations aur presentation skills par bhi focus kiya jata hai.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M8 6V4h8v2M7 12h10M12 9v6" />
      </svg>
    ),
  },
];

const learningMethods = [
  "Interactive classroom sessions",
  "Daily speaking activities",
  "Conversation & role-play practice",
  "Group discussions",
  "Vocabulary building exercises",
  "Regular communication practice",
];

function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#fffdf8]
        py-20
        pt-[96px]
        transition-colors
        duration-300
        sm:py-24
        sm:pt-[110px]
        lg:py-20
        lg:pt-[96px]
        dark:bg-[#0b1220]
      "
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[#d4af6a]/10
            blur-3xl
            dark:bg-[#d4af6a]/5
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-96
            w-96
            rounded-full
            bg-[#0f1f3d]/5
            blur-3xl
            dark:bg-white/5
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d4af6a]/30
              bg-[#d4af6a]/10
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#9b7438]
              dark:text-[#d4af6a]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58a45]" />
            Why Choose Us
          </div>

          <h2
            className="
              font-display
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#0f1f3d]
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Learn English with a
            <span className="block text-[#b58a45]">
              Practical Approach
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
              sm:text-base
              dark:text-slate-300
            "
          >
            At Talent English Classes, we believe that learning English is
            more than memorising grammar rules. Our approach combines
            understanding, practice and confidence building to help students
            communicate more effectively.
          </p>
        </div>

        {/* =========================================
            MAIN BENEFITS
        ========================================= */}
        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_15px_50px_rgba(15,31,61,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-[#d4af6a]/50
                hover:shadow-[0_20px_60px_rgba(15,31,61,0.10)]
                sm:p-7
                dark:border-white/10
                dark:bg-[#111b2e]
                dark:shadow-none
              "
            >
              {/* Number */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  font-display
                  text-4xl
                  font-extrabold
                  text-[#0f1f3d]/5
                  transition-colors
                  duration-300
                  group-hover:text-[#d4af6a]/20
                  dark:text-white/5
                "
              >
                {benefit.number}
              </div>

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#0f1f3d]
                  text-[#d4af6a]
                  transition-all
                  duration-300
                  group-hover:bg-[#d4af6a]
                  group-hover:text-[#0f1f3d]
                  dark:bg-[#d4af6a]/10
                  dark:text-[#d4af6a]
                  dark:group-hover:bg-[#d4af6a]
                  dark:group-hover:text-[#0f1f3d]
                "
              >
                {benefit.icon}
              </div>

              <h3
                className="
                  mt-6
                  font-display
                  text-lg
                  font-extrabold
                  text-[#0f1f3d]
                  dark:text-white
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* =========================================
            LEARNING METHOD + PROMISE
        ========================================= */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-stretch
          "
        >
          {/* Learning Method */}
          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_15px_50px_rgba(15,31,61,0.06)]
              sm:p-8
              dark:border-white/10
              dark:bg-[#111b2e]
              dark:shadow-none
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#9b7438]
                dark:text-[#d4af6a]
              "
            >
              Our Learning Method
            </p>

            <h3
              className="
                mt-3
                font-display
                text-2xl
                font-extrabold
                text-[#0f1f3d]
                sm:text-3xl
                dark:text-white
              "
            >
              Learn. Practice. Communicate.
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                dark:text-slate-400
              "
            >
              Classes are designed around active participation so students
              get opportunities to use English instead of only listening to
              lectures.
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {learningMethods.map((method) => (
                <div
                  key={method}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#f8f5ee]
                    px-4
                    py-3
                    dark:bg-white/5
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#d4af6a]/20
                      text-[#9b7438]
                      dark:text-[#d4af6a]
                    "
                  >
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <span
                    className="
                      text-xs
                      font-medium
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#0f1f3d]
              p-6
              shadow-[0_20px_60px_rgba(15,31,61,0.15)]
              sm:p-8
              dark:bg-[#17233a]
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#d4af6a]/10
                blur-2xl
              "
            />

            <div
              className="
                relative
                flex
                h-full
                flex-col
                justify-between
              "
            >
              <div>
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#d4af6a]
                    text-[#0f1f3d]
                  "
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v18M7 7h10M6 12h12M8 17h8" />
                  </svg>
                </div>

                <h3
                  className="
                    mt-6
                    font-display
                    text-2xl
                    font-extrabold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Your confidence is part of the learning process.
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-slate-300
                  "
                >
                  We encourage students to participate, ask questions and
                  practise speaking in a comfortable learning environment.
                  The goal is not perfect English on day one — the goal is
                  continuous improvement.
                </p>
              </div>

              <a
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#d4af6a]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#0f1f3d]
                  transition-all
                  duration-300
                  hover:bg-[#e2c27d]
                "
              >
                Talk to Us

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
        </div>

        {/* =========================================
            FINAL STATEMENT
        ========================================= */}
        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            <span className="font-semibold text-[#9b7438] dark:text-[#d4af6a]">
              Talent English Classes
            </span>{" "}
            — helping learners in Bhadohi develop practical English
            communication skills, one conversation at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;