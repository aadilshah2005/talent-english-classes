import  { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    title: "Interactive Learning",
    category: "Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    title: "Group Learning",
    category: "Students",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    title: "Collaborative Practice",
    category: "Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85",
    title: "Speaking Practice",
    category: "Communication",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    title: "Learning Environment",
    category: "Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    title: "Student Activities",
    category: "Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
    title: "Focused Learning",
    category: "Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    title: "Communication Session",
    category: "Communication",
  },
];

const filters = ["All", "Classroom", "Students", "Activities", "Communication"];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <section
      id="gallery"
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
            -right-40
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
            -left-40
            bottom-20
            h-80
            w-80
            rounded-full
            bg-[#0f1f3d]/5
            blur-3xl
            dark:bg-white/5
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">

        {/* ================= HEADER ================= */}
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
            Our Gallery
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
            A Glimpse Into
            <span className="block text-[#b58a45]">
              Our Learning Environment
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
            Explore moments from our classroom environment, learning
            activities and communication practice sessions at Talent English
            Classes.
          </p>
        </div>

        {/* ================= FILTERS ================= */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#0f1f3d] bg-[#0f1f3d] text-white dark:border-[#d4af6a] dark:bg-[#d4af6a] dark:text-[#0f1f3d]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#d4af6a]/60 hover:text-[#9b7438] dark:border-white/10 dark:bg-[#111b2e] dark:text-slate-300 dark:hover:text-[#d4af6a]"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {filteredImages.map((image, index) => (
            <button
              key={`${image.title}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                text-left
                outline-none
                ring-[#d4af6a]
                focus-visible:ring-2
                ${
                  index === 0 || index === 5
                    ? "sm:row-span-2"
                    : ""
                }
              `}
            >
              <div
                className={`
                  relative
                  w-full
                  overflow-hidden
                  ${
                    index === 0 || index === 5
                      ? "h-[420px] sm:h-full"
                      : "h-[220px] sm:h-[260px]"
                  }
                `}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0f1f3d]/90
                    via-[#0f1f3d]/20
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Zoom Icon */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="6" />
                    <path d="m16 16 4 4M11 8v6M8 11h6" />
                  </svg>
                </div>

                {/* Image Information */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    text-white
                  "
                >
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#d4af6a]
                      px-2.5
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#0f1f3d]
                    "
                  >
                    {image.category}
                  </span>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-base
                      font-bold
                    "
                  >
                    {image.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div
          className="
            mt-12
            rounded-3xl
            border
            border-[#d4af6a]/20
            bg-[#f8f5ee]
            p-6
            text-center
            sm:p-8
            dark:border-white/10
            dark:bg-[#111b2e]
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
            Experience Talent English Classes
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
            See. Learn. Speak. Grow.
          </h3>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            Want to know more about our courses and learning environment?
            Get in touch with us today.
          </p>

          <a
            href="#contact"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#0f1f3d]
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#182d52]
              hover:shadow-lg
              dark:bg-[#d4af6a]
              dark:text-[#0f1f3d]
              dark:hover:bg-[#e2c27d]
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

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#0f1f3d]/90
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              max-w-5xl
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
              dark:bg-[#111b2e]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="
                max-h-[75vh]
                w-auto
                max-w-full
                object-contain
              "
            />

            <div className="p-4 sm:p-5">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#9b7438]
                  dark:text-[#d4af6a]
                "
              >
                {selectedImage.category}
              </span>

              <h3
                className="
                  mt-1
                  font-display
                  text-lg
                  font-bold
                  text-[#0f1f3d]
                  dark:text-white
                "
              >
                {selectedImage.title}
              </h3>
            </div>

            {/* Close Button */}
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-3
                top-3
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-md
                transition-colors
                hover:bg-black/70
              "
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;