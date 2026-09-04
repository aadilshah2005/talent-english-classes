const contactInfo = [
  {
    title: "Our Location",
    value: "Talent English Classes",
    description:
      "Opposite Falahe Ummat P. G. College, Nagar Palika, Bhadohi – 221401, Uttar Pradesh",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "English Language Classes",
    value: "Spoken English & Communication",
    description:
      "Practical English speaking practice focused on communication, fluency and confidence.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.8L3 21l1.8-4.4A8.3 8.3 0 0 1 3 11.5a9 9 0 1 1 18 0Z" />
        <path d="M8 11h8M8 7.5h5M8 14.5h6" />
      </svg>
    ),
  },
  {
    title: "Personality Development",
    value: "Build Confidence & Communication",
    description:
      "Develop better communication skills for academic, personal and professional situations.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
];

function Contact() {
  const justdialUrl =
    "https://www.justdial.com/Bhadohi/Talent-English-Classes-Falahe-Ummat-P-G-College-Bhadohi-Nagar-Palika/9999P5414-5414-210224094219-J1T3_BZDET";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffdf8]
        px-4
        py-16
        transition-colors
        duration-300
        dark:bg-[#0b1220]
        sm:px-6
        sm:py-20
        lg:flex
        lg:min-h-[calc(100vh-76px)]
        lg:items-center
        lg:px-8
        lg:py-10
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
            top-10
            h-72
            w-72
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
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#0f1f3d]/5
            blur-3xl
            dark:bg-white/5
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
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
            Contact Us
          </div>

          <h2
            id="contact-title"
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
            Let's Start Your
            <span className="block text-[#b58a45] dark:text-[#d4af6a]">
              English Learning Journey
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-300
              sm:text-base
              sm:leading-7
            "
          >
            Have questions about our English speaking classes or personality
            development programs? Visit Talent English Classes in Bhadohi and
            talk to us about your learning goals.
          </p>
        </header>

        {/* Contact Grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            lg:mt-9
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-6
          "
        >
          {/* Left Content */}
          <div
            className="
              rounded-[1.75rem]
              border
              border-slate-200
              bg-white
              p-5
              shadow-[0_18px_50px_rgba(15,31,61,0.07)]
              dark:border-white/10
              dark:bg-[#111b2e]
              dark:shadow-none
              sm:p-6
              lg:p-7
            "
          >
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
              Get In Touch
            </p>

            <h3
              className="
                mt-2
                font-display
                text-2xl
                font-extrabold
                leading-tight
                text-[#0f1f3d]
                dark:text-white
                sm:text-3xl
              "
            >
              We'd love to hear from you.
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
              Whether you want to improve your spoken English, build confidence
              or develop better communication skills, we can help you choose the
              right learning option.
            </p>

            {/* Information Cards */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    bg-[#f8f5ee]
                    p-3.5
                    dark:bg-white/5
                    sm:gap-4
                    sm:p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#0f1f3d]
                      text-[#d4af6a]
                      dark:bg-[#d4af6a]/10
                      dark:text-[#d4af6a]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#9b7438]
                        dark:text-[#d4af6a]
                        sm:text-[11px]
                      "
                    >
                      {item.title}
                    </p>

                    <h4
                      className="
                        mt-1
                        text-sm
                        font-bold
                        leading-5
                        text-[#0f1f3d]
                        dark:text-white
                        sm:text-base
                      "
                    >
                      {item.value}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div
              className="
                mt-3
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#d4af6a]/20
                bg-[#d4af6a]/5
                p-3.5
                sm:p-4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#d4af6a]/15
                  text-[#9b7438]
                  dark:text-[#d4af6a]
                "
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-bold text-[#0f1f3d] dark:text-white">
                  Opening Hours
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Listed opening time: 08:00 AM
                </p>
              </div>
            </div>

            {/* Justdial Button */}
            <a
              href={justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0f1f3d]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#182d52]
                hover:shadow-lg
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
              View Business Listing
              <svg
                className="h-4 w-4"
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
          </div>

          {/* Right Location Card */}
          <div
            className="
              relative
              min-h-[390px]
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-200
              bg-[#e9e6df]
              shadow-[0_18px_50px_rgba(15,31,61,0.07)]
              dark:border-white/10
              dark:bg-[#111b2e]
              dark:shadow-none
              sm:min-h-[430px]
              lg:min-h-0
            "
          >
            {/* Location Background */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-[radial-gradient(circle_at_center,#ffffff_0%,#e9e6df_72%)]
                dark:bg-[radial-gradient(circle_at_center,#1b2940_0%,#111b2e_72%)]
              "
            >
              <div className="w-full px-6 text-center sm:px-10">
                {/* Location Icon */}
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0f1f3d]
                    text-[#d4af6a]
                    shadow-xl
                    dark:bg-[#d4af6a]
                    dark:text-[#0f1f3d]
                  "
                >
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#9b7438]
                    dark:text-[#d4af6a]
                  "
                >
                  Our Coaching Centre
                </p>

                <h3
                  className="
                    mt-2
                    font-display
                    text-2xl
                    font-extrabold
                    leading-tight
                    text-[#0f1f3d]
                    dark:text-white
                    sm:text-3xl
                  "
                >
                  Talent English Classes
                </h3>

                {/* Correct Location */}
                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    text-sm
                    font-medium
                    leading-6
                    text-slate-600
                    dark:text-slate-300
                    sm:text-base
                  "
                >
                  Opposite{" "}
                  <span className="font-bold text-[#0f1f3d] dark:text-white">
                    Falahe Ummat P. G. College
                  </span>
                  <br />
                  Nagar Palika, Bhadohi – 221401, Uttar Pradesh
                </p>

                <a
                  href={justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#d4af6a]
                    px-6
                    py-3
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
                    dark:focus:ring-offset-[#111b2e]
                  "
                >
                  Get Directions
                  <svg
                    className="h-4 w-4"
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
              </div>
            </div>

            {/* Location Label */}
            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/40
                bg-white/90
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-[#0f1f3d]
                shadow-lg
                backdrop-blur-md
                dark:border-white/10
                dark:bg-[#0f1f3d]/90
                dark:text-white
              "
            >
              Our Location
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
