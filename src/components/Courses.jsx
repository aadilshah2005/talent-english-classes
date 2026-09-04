const courses = [
  {
    level: "Beginner",
    title: "Basic English Speaking",
    duration: "8 Weeks",
    description:
      "English speaking ki strong foundation banane ke liye designed course. Is course mein students basic vocabulary, sentence formation aur daily conversation confidently bolna seekhte hain.",
    features: [
      "Basic English Grammar",
      "Daily Use English Sentences",
      "Vocabulary Building",
      "Sentence Formation",
      "Basic Conversation Practice",
      "Speaking Confidence",
    ],
    idealFor:
      "Students aur beginners jo English samajhte hain lekin bolne mein hesitation feel karte hain.",
    popular: false,
  },
  {
    level: "Intermediate",
    title: "Spoken English & Personality Development",
    duration: "12 Weeks",
    description:
      "Daily life aur professional situations mein confidently English communicate karne ke liye practical speaking course. Grammar ke saath real conversation practice par focus kiya jata hai.",
    features: [
      "Advanced Grammar",
      "Fluent Conversation Practice",
      "Vocabulary & Expressions",
      "Group Discussion",
      "Public Speaking",
      "Interview Communication",
    ],
    idealFor:
      "College students, job seekers aur working professionals jo apni spoken English improve karna chahte hain.",
    popular: true,
  },
  {
    level: "Advanced",
    title: "Advanced Communication Skills",
    duration: "12 Weeks",
    description:
      "Professional communication aur advanced spoken English ko improve karne ke liye focused program. Students ko interviews, presentations aur professional conversations ke liye prepare kiya jata hai.",
    features: [
      "Advanced Speaking Skills",
      "Professional Communication",
      "Interview Preparation",
      "Presentation Skills",
      "Public Speaking",
      "Leadership Communication",
    ],
    idealFor:
      "Job seekers, professionals aur students jo professional level par confidently English communicate karna chahte hain.",
    popular: false,
  },
];

const learningPoints = [
  {
    number: "01",
    title: "Speak Without Hesitation",
    description:
      "English bolte waqt hesitation aur fear ko gradually overcome karke confidently communicate karna seekhein.",
  },
  {
    number: "02",
    title: "Improve Grammar & Vocabulary",
    description:
      "Useful grammar concepts aur practical vocabulary ko real-life examples ke through understand karein.",
  },
  {
    number: "03",
    title: "Practice Real Conversations",
    description:
      "Daily conversations, role plays, discussions aur speaking activities ke through regular practice karein.",
  },
  {
    number: "04",
    title: "Build Communication Confidence",
    description:
      "Interviews, presentations, meetings aur everyday situations mein confidently express karna seekhein.",
  },
];

function Courses() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
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
            -right-32
            top-20
            h-64
            w-64
            rounded-full
            bg-[#d4af6a]/10
            blur-3xl
            dark:bg-[#d4af6a]/5
            sm:h-72
            sm:w-72
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-20
            h-64
            w-64
            rounded-full
            bg-[#0f1f3d]/5
            blur-3xl
            dark:bg-white/5
            sm:h-72
            sm:w-72
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
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
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#9b7438]
              dark:text-[#d4af6a]
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58a45] dark:bg-[#d4af6a]" />
            Our Courses
          </div>

          <h2
            id="courses-title"
            className="
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
            Choose the Right Course
            <span className="block text-[#b58a45] dark:text-[#d4af6a]">
              for Your English Journey
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
            Whether you are a beginner or looking to improve your professional
            communication, our practical English courses are designed to help
            you speak with greater confidence in real-life situations.
          </p>
        </header>

        {/* Course Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            md:gap-7
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {courses.map((course) => (
            <article
              key={course.title}
              className={`
                group
                relative
                flex
                h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-[1.75rem]
                border
                bg-white
                p-5
                shadow-[0_20px_60px_rgba(15,31,61,0.07)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_25px_70px_rgba(15,31,61,0.12)]
                dark:bg-[#111b2e]
                dark:shadow-none
                dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)]
                sm:p-6
                lg:p-7
                ${
                  course.popular
                    ? "border-[#d4af6a]/60 ring-1 ring-[#d4af6a]/10"
                    : "border-slate-200 dark:border-white/10"
                }
              `}
            >
              {/* Top Accent */}
              <div
                aria-hidden="true"
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  ${
                    course.popular
                      ? "bg-[#d4af6a]"
                      : "bg-slate-200 dark:bg-white/10"
                  }
                `}
              />

              {/* Popular Badge */}
              {course.popular && (
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    rounded-full
                    bg-[#0f1f3d]
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    shadow-md
                    dark:bg-[#d4af6a]
                    dark:text-[#0f1f3d]
                    sm:right-6
                    sm:top-6
                  "
                >
                  Most Popular
                </div>
              )}

              {/* Course Header */}
              <div
                className={`
                  ${
                    course.popular
                      ? "pr-24 sm:pr-28"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#d4af6a]/10
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#9b7438]
                    dark:text-[#d4af6a]
                    sm:text-xs
                  "
                >
                  {course.level}
                </span>

                <h3
                  className="
                    mt-4
                    font-display
                    text-xl
                    font-extrabold
                    leading-[1.25]
                    tracking-[-0.02em]
                    text-[#0f1f3d]
                    dark:text-white
                    sm:text-2xl
                  "
                >
                  {course.title}
                </h3>

                {/* Duration */}
                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-[#b58a45] dark:text-[#d4af6a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>

                  <span>Duration: {course.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {course.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

              {/* Features */}
              <div>
                <h4
                  className="
                    mb-4
                    text-sm
                    font-extrabold
                    text-[#0f1f3d]
                    dark:text-white
                  "
                >
                  What You Will Learn
                </h4>

                <ul className="space-y-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-5
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      <span
                        className="
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#d4af6a]/15
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
                          aria-hidden="true"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div
                className="
                  mt-6
                  rounded-2xl
                  bg-[#f8f5ee]
                  p-4
                  dark:bg-white/5
                  sm:p-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#9b7438]
                    dark:text-[#d4af6a]
                  "
                >
                  Ideal For
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  {course.idealFor}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0f1f3d]
                  px-5
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#182d52]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#d4af6a]
                  focus:ring-offset-2
                  dark:bg-[#d4af6a]
                  dark:text-[#0f1f3d]
                  dark:hover:bg-[#e2c27d]
                  dark:focus:ring-offset-[#111b2e]
                "
              >
                Enquire About This Course

                <svg
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Learning Experience */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#9b7438]
                dark:text-[#d4af6a]
                sm:text-xs
              "
            >
              Learning Experience
            </p>

            <h3
              className="
                mt-3
                font-display
                text-2xl
                font-extrabold
                tracking-[-0.02em]
                text-[#0f1f3d]
                dark:text-white
                sm:text-3xl
              "
            >
              More Than Just Grammar
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-400
              "
            >
              Our classes focus on practical communication so that you can
              actually use English outside the classroom.
            </p>
          </div>

          {/* Learning Points */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {learningPoints.map((item) => (
              <div
                key={item.number}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d4af6a]/50
                  hover:shadow-lg
                  dark:border-white/10
                  dark:bg-[#111b2e]
                "
              >
                <span
                  className="
                    font-display
                    text-sm
                    font-extrabold
                    text-[#b58a45]
                    dark:text-[#d4af6a]
                  "
                >
                  {item.number}
                </span>

                <h4
                  className="
                    mt-3
                    font-display
                    text-base
                    font-bold
                    leading-snug
                    text-[#0f1f3d]
                    dark:text-white
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-12
            overflow-hidden
            rounded-3xl
            bg-[#0f1f3d]
            px-6
            py-8
            shadow-[0_20px_60px_rgba(15,31,61,0.18)]
            sm:px-10
            sm:py-10
            dark:bg-[#111b2e]
            dark:ring-1
            dark:ring-white/10
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-6
              text-center
              lg:flex-row
              lg:text-left
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#d4af6a]
                  sm:text-xs
                "
              >
                Ready to Improve Your English?
              </p>

              <h3
                className="
                  mt-2
                  font-display
                  text-2xl
                  font-extrabold
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                Start your English speaking journey today.
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Talk to us to find the course that matches your current
                English level and learning goals.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                w-full
                shrink-0
                items-center
                justify-center
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
                focus:outline-none
                focus:ring-2
                focus:ring-[#d4af6a]
                focus:ring-offset-2
                focus:ring-offset-[#0f1f3d]
                sm:w-auto
              "
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;