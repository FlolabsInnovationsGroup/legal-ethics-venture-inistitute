import humanoidImg from "../../../public/humanoid.jpeg";
import aiBuddyImg from "../../../public/buddy.png";
import legalFramworkImg from "../../../public/Legal & Ethics Framework Research.png";
import experientialImg from "../../../public/Experiential Ventures Pipeline for legal and ethics.jpeg";
import Image from "next/image";

export default function page() {
  return (
    <main className=" bg-gray-950 rounded-[16px]  px-4 md:px-6 py-4 mt-[100px] mb-[50px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-[56px] font-semibold text-white mb-4 md:mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl leading-[190%]">
            A glimpse into some of the projects we’re building at the
            intersection of AI, robotics, and responsible innovation. Each
            initiative is designed to explore real-world impact, ethical
            deployment, and scalable product development.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 1 - Image Left */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[540px] flex-shrink-0">
              <div className="relative w-full aspect-[540/557] rounded-[30px] md:rounded-[50px] bg-white flex items-center justify-center p-8 md:p-12">
                <Image
                  fill
                  src={humanoidImg}
                  alt="Project 1 - AI Robot"
                  className="w-full  aspect-[163/89] rounded-[30px] md:rounded-[50px] object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                Humanoid Legal Assistant
              </h2>
              <p className="text-lg md:text-xl text-white leading-[190%] tracking-[-0.4px]">
                A next-generation humanoid interface designed to support legal
                workflows through natural conversation, document awareness, and
                real-time reasoning. This project explores how embodied AI can
                help users navigate complex legal contexts while maintaining
                accuracy, transparency, and human oversight.
              </p>
            </div>
          </div>

          {/* Project 2 - Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[600px] flex-shrink-0">
              <div className="relative w-full h-[600px]  rounded-[30px] md:rounded-[50px] bg-white flex items-center justify-center p-8 md:p-12">
                <Image
                  fill
                  src={aiBuddyImg}
                  alt="Project 1 - AI Robot"
                  className=" rounded-[30px] md:rounded-[50px]  "
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                Legal AI Buddy{" "}
              </h2>
              <p className="text-lg md:text-xl text-white leading-[190%] tracking-[-0.4px]">
                A lightweight AI companion built to help individuals and teams
                quickly understand legal language, summarize contracts, and
                identify key risks. The Legal AI Buddy focuses on accessibility,
                clarity, and practical guidance, making legal support more
                approachable without replacing professional judgment.
              </p>
            </div>
          </div>

          {/* Project 3 - Image Left */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[600px] flex-shrink-0">
              <div className="relative w-full h-[600px] rounded-[30px] md:rounded-[50px] bg-white flex items-center justify-center p-8 md:p-12">
                <Image
                  fill
                  src={legalFramworkImg}
                  alt="Project 1 - AI Robot"
                  className="w-full    rounded-[30px] md:rounded-[50px]  "
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                Legal & Ethics Framework Research
              </h2>
              <p className="text-lg md:text-xl text-white leading-[190%] tracking-[-0.4px]">
                A research initiative focused on developing responsible AI
                policies, governance structures, and ethical frameworks for
                emerging technologies. This work supports long-term
                decision-making by defining standards for fairness, privacy,
                accountability, and safe deployment across real-world
                applications.
              </p>
            </div>
          </div>
          {/* Project 4 - Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[600px] flex-shrink-0">
              <div className="relative w-full h-[600px] rounded-[30px] md:rounded-[50px] bg-white flex items-center justify-center p-8 md:p-12">
                <Image
                  fill
                  src={experientialImg}
                  alt="Project 1 - AI Robot"
                  className="w-full   rounded-[30px] md:rounded-[50px]   "
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                Experiential Ventures Pipeline for legal and ethics{" "}
              </h2>
              <p className="text-lg md:text-xl text-white leading-[190%] tracking-[-0.4px]">
                An innovation pipeline that turns legal and ethics research into
                real, testable ventures. This project structures idea
                validation, prototyping, and deployment-ready development so
                teams can build solutions that are both scalable and aligned
                with responsible technology principles from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
