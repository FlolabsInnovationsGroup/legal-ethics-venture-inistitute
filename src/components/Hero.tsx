import React from "react";
import Image from "next/image";
import heroImage1 from "../../public/ChatGPT Image Jan 8, 2026, 05_06_33 PM 1 (1).png";
import heroImage2 from "../../public/ChatGPT Image Jan 17, 2026, 05_25_53 AM.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="rounded-[25px] bg-black overflow-hidden mb-4 relative min-h-[717px] flex items-center">
      {/* Purple glow effect */}
      <div className="absolute -left-[75px] -top-12 w-[705px] h-[563px] rounded-[55px] bg-gradient-to-br from-transparent via-purple-950/50 to-transparent blur-[50px]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 py-16 w-full">
        {/* Left Content */}
        <div className="  flex flex-col gap-10  max-w-[660px]">
          {/* Update Badge */}
          <div className="flex items-center gap-3 h-11 bg-black rounded-[25px] shadow-md  w-full ">
            <div className="flex items-center gap-2.5 px-10 py-1.5 bg-white/50 rounded-[25px] shadow-md ">
              <svg
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
              <span className="text-black text-[22px] font-medium">Update</span>
            </div>
            <span className=" text-white text-xl font-normal pr-0  ">
              Applications for 2026 are now open!
            </span>
          </div>

          <h1 className="text-[46px] font-bold leading-tight tracking-[3.68px]">
            Legal & Ethics <br />
            Ventures Institute
          </h1>

          <p className="text-2xl">
            <span className="font-medium">
              Advance your career. Be at the center of the future.
            </span>
            <br />
            <span className="font-bold">Remote</span>
            <span className="font-medium"> first. </span>
            <span className="font-bold">Open to the world</span>
            <span className="font-medium">.</span>
          </p>

          <p className="text-2xl">
            <span className="font-medium">Learn at your </span>
            <span className="font-bold">own pace</span>
            <span className="font-medium">
              {" "}
              by working with industry experts
            </span>
          </p>

          <Link href="https://www.flolabs.international/internships">
            <button className="bg-[#F2784B] text-black text-[22px] animate-bounce font-bold px-16 py-5 rounded-[35px] hover:opacity-90 transition-opacity w-fit">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Right Content - Image with overlays */}
        <div className="relative w-full h-[569px] hidden lg:block">
          {/* Background color box */}
          <div className="absolute left-15 top-[60px] w-[450px] h-[450px]  transform rotate-[-14.284deg]">
            <Image
              className="relative object-cover rounded-[30px] "
              fill
              src={heroImage2}
              alt="Legal Education"
            />
          </div>

          {/* Main image */}
          <div className="absolute left-[70px] top-[57px] w-[450px] h-[450px] bg-[#B7B7B7] rounded-[30px] shadow-[10px_10px_10px_8px_rgba(21,21,21,0.25)] overflow-hidden flex items-center justify-center">
            <Image
              className="relative object-cover"
              fill
              src={heroImage1}
              alt="Legal Education"
            />

            {/*           
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/20674d2a15cfdbfbc4116c8e472710fc5f61b0bb?width=1534"
              alt="Legal Education"
              className="w-[767px] h-[511px] object-cover absolute -left-8 -top-2"
            /> */}
          </div>

          {/* Hands-on Experience card */}
          <div className="absolute left-[360px] top-[90px] max-w-[300px] bg-white/75 rounded-[25px] px-3 py-5 flex flex-col gap-2">
            <h3 className="text-black text-xl font-semibold">
              Hands-on Experience
            </h3>
            <p className="text-black text-lg font-medium">Multiple Projects</p>
          </div>

          {/* Team card */}
          <div className="absolute left-[125px] top-[467px] w-[350px] bg-white/80 rounded-[25px] px-6 py-3 flex flex-col gap-2">
            <div className="flex items-center gap-0 -space-x-2 justify-center">
              <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-3 border-white" />
              <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-3 border-white" />
              <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-3 border-white" />
              <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-3 border-white" />
              <div className="w-12 h-12 rounded-full bg-[#A6A6A6] border-3 border-white flex items-center justify-center">
                <span className="text-black text-lg font-semibold">+25</span>
              </div>
            </div>
            <p className="text-black text-lg font-medium text-center">
              Dedicated interns working with us
            </p>
          </div>

          {/* Testimonial card */}
          <div className="absolute -left-12 top-[250px] w-[330px] bg-white/70 rounded-[25px] px-4 py-5">
            <div className="flex items-center gap-3">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#A6A6A6]" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#3B3B3B] text-lg font-bold">Jane Doe</h4>
                <p className="text-black text-lg font-medium">
                  I learned more than what I did from my school
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
