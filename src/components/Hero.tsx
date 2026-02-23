import Image from "next/image";
import heroImage1 from "../../public/ChatGPT Image Jan 8, 2026, 05_06_33 PM 1 (1).png";
import heroImage2 from "../../public/ChatGPT Image Jan 17, 2026, 05_25_53 AM.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-black rounded-[25px] overflow-hidden mt-10 lg:-mt-5">
      {/* Glow */}
      <div className="absolute -left-20 -top-20 w-[500px] h-[400px] lg:w-[705px] lg:h-[563px] bg-gradient-to-br from-transparent via-purple-950/50 to-transparent blur-[80px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        {/* LEFT */}
        <div className="flex flex-col gap-6 max-w-[650px] text-center lg:text-left">
          {/* Badge */}
          <div className="flex  sm:flex-row items-center pr-2 gap-3 bg-black rounded-[25px]   shadow-md w-full mx-auto lg:mx-0">
            <div className="flex items-center gap-2 px-4 py-2 w-[200px] md:w-fit  bg-white/60 rounded-[25px]">
              <svg
                className=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 17H13V11H11V17ZM12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z"
                  fill="black"
                />
              </svg>
              <span className="text-black text-lg font-medium">Update</span>
            </div>

            <span className="text-white text-base sm:text-lg">
              Applications for 2026 are now open!
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight tracking-wide text-white">
            Legal & Ethics <br />
            Ventures Institute
          </h1>

          <p className="text-[1.5em] md:text-[2em]">
            Advance your career,
            <span> Be at the center of the future.</span>
          </p>
          {/* Text */}
          <div className="flex flex-col gap-3 text-lg sm:text-xl lg:text-2xl text-white">
            <span className="font-medium">
              Elevating the <span className="text-yellow-500">game</span>.
            </span>

            <p>
              From textbooks to{" "}
              <span className="text-yellow-500 font-bold">
                real-world impact.
              </span>
            </p>

            <p>
              No frontiers.
              <span className="text-yellow-500 font-bold"> No limits.</span>
            </p>
          </div>

          {/* CTA */}
          <Link href="https://hephaestus.international/internships">
            <button className="bg-[#F2784B] animate-bounce cursor-pointer hover:text-white text-black text-lg sm:text-xl font-bold px-10 sm:px-14 py-4 rounded-[35px] transition hover:opacity-90 w-fit mx-auto lg:mx-0">
              Apply Now
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative w-full max-w-[500px] h-[380px] sm:h-[450px] lg:h-[569px]">
          {/* Rotated bg image */}
          <div className="absolute left-8 sm:left-16 top-10 w-[320px] sm:w-[320px] lg:w-[450px] h-[320px] sm:h-[320px] lg:h-[450px] rotate-[-14deg]">
            <Image
              src={heroImage2}
              alt="Background"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          {/* Main image */}
          <div className="absolute left-10 sm:left-20 top-8 w-[320px] sm:w-[320px] lg:w-[450px] h-[320px] sm:h-[320px] lg:h-[450px] rounded-[30px] overflow-hidden shadow-xl">
            <Image src={heroImage1} alt="Hero" fill className="object-cover" />
          </div>

          {/* Card 1 */}
          <div className="absolute right-0 sm:-right-15 top-4 sm:top-0 bg-white/80 backdrop-blur rounded-[20px] px-4 py-3 w-[180px] sm:w-[240px]">
            <h3 className="text-sm sm:text-lg font-semibold text-black">
              Hands-on Experience
            </h3>
            <p className="text-xs sm:text-base text-black">Multiple Projects</p>
          </div>

          {/* Card 2 */}
          <div className="absolute left-0 bottom-0 bg-white/80 backdrop-blur rounded-[20px] px-2 py-3 w-[210px] sm:w-[260px]">
            <p className="text-sm sm:text-base text-black font-medium text-center">
              Remote first, Join from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
