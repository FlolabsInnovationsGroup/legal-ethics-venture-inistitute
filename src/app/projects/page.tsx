import humanoidImg from "../../../public/humanoid.jpeg";
import aiBuddyImg from "../../../public/buddy.png";
import legalFramworkImg from "../../../public/Legal & Ethics Framework Research.png";
import MoodChangerImg from "../../../public/moodChanger.png";

import experientialImg from "../../../public/Experiential Ventures Pipeline for legal and ethics.jpeg";
import Image from "next/image";

export default function page() {
  return (
    <main className=" bg-gray-950 rounded-[16px]  px-4 md:px-6 py-4 mt-[100px] mb-[80px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-[56px] font-semibold text-white mb-4 md:mb-6">
            Projects
          </h1>
          {/* <p className="text-lg md:text-xl text-white max-w-3xl leading-[190%]">
            A glimpse into some of the projects we’re building at the
            intersection of AI, robotics, and responsible innovation. Each
            initiative is designed to explore real-world impact, ethical
            deployment, and scalable product development.
          </p> */}
        </div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 1 - Image Left */}
          <div className="flex flex-col   gap-6 md:gap-10 lg:gap-20">
            <div className="w-full   flex-shrink-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                  Legal Buddy
                </h2>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Legal Buddy is a next generation support system designed to
                  make legal guidance simple, approachable, and accessible to
                  everyone. <br />
                  Through a dedicated buddy model, individuals can connect with
                  a Buddy whenever they need advice, clarification, or support
                  navigating complex legal processes removing uncertainty and
                  making legal help feel immediate and personal.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  The platform helps people quickly understand complex legal
                  information, highlight key points, and make informed decisions
                  confidently, all without replacing professional judgment.{" "}
                  <br /> By providing structured, step by step guidance, Legal
                  Buddy empowers users to break down legal challenges into
                  manageable steps, ensuring that everyone regardless of
                  experience can navigate the law with clarity.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Built on a seamless digital platform, Legal Buddy facilitates
                  smooth, uninterrupted interactions, combining human insight
                  with modern technology. <br /> This approach not only enhances
                  accessibility but also allows users to track conversations,
                  revisit guidance, and apply advice practically to their
                  situations.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  By merging personal guidance with advanced tools, Legal Buddy
                  strengthens informed decision making, builds confidence in
                  navigating legal matters, and contributes to a more inclusive,
                  forward looking legal ecosystem. <br /> Ultimately, it’s more
                  than just a support system it’s a bridge between people and
                  the legal knowledge they need, making legal processes
                  approachable, understandable, and actionable for everyone.
                </p>
              </div>
              <div className=" flex justify-center  ">
                <div className="relative w-full h-[400px] md:h-[500px]  lg:h-[600px]  rounded-[30px] md:rounded-[50px]  flex items-center justify-center p-8 md:p-12">
                  <Image
                    fill
                    src={humanoidImg}
                    alt="Project 1 - AI Robot"
                    className="  rounded-[30px] md:rounded-[50px] object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Image Right */}
          <div className="flex flex-col   gap-6 md:gap-10 lg:gap-20">
            <div className="w-full  flex-shrink-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                  CAIPO
                </h2>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  CAIPO is a next generation wearable AI assistant designed to
                  provide users with quick, intelligent responses and help
                  manage tasks directly from a small, lightweight device,
                  eliminating the distractions and friction of traditional
                  phones or computers. <br /> With a simple tap on its
                  capacitive touch sensor, CAIPO activates instantly, enabling
                  silent, fast, and privacy friendly interaction whenever it’s
                  needed.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Equipped with multi sensor feedback, including LEDs, haptic
                  vibrations, and a built in speaker, CAIPO communicates in a
                  natural and intuitive way. <br /> Users can receive
                  notifications, AI powered guidance, and real time responses
                  without interrupting their workflow. <br /> By connecting
                  wirelessly via Wi-Fi, the device provides seamless access to
                  AI driven task management, transcription, and intelligent
                  insights, all while remaining comfortably wearable through its
                  compact, 3D printed design with magnetic mounting.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  CAIPO is built with scalability and future innovation in mind.{" "}
                  <br />
                  Planned enhancements include fully offline AI capabilities,
                  extended battery life, and more advanced personal assistance
                  features that adapt to the user’s habits and routines. <br />{" "}
                  This forward thinking approach ensures that CAIPO is not only
                  a tool for today but also a platform for next generation
                  personal AI support.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  By combining sophisticated hardware with intelligent AI, CAIPO
                  empowers users to stay informed, productive, and connected
                  effortlessly. <br /> It transforms everyday interactions into
                  streamlined, actionable experiences, providing personalized
                  assistance right from the convenience of a small device on
                  your wrist, desk, or workspace. <br /> Whether managing tasks,
                  organizing information, or gaining quick insights, CAIPO
                  redefines how wearable technology can support and enhance
                  daily life.
                </p>
              </div>
              <div className=" flex justify-center">
                <div className="relative   h-[400px] md:h-[500px] lg:h-[600px] w-full       rounded-[30px] md:rounded-[50px]  flex items-center justify-center p-8 md:p-12">
                  <Image
                    fill
                    src={aiBuddyImg}
                    alt="Project 2 - CAIPO"
                    className=" rounded-[30px] md:rounded-[50px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 - Image Left */}
          <div className="flex flex-col   gap-6 md:gap-10 lg:gap-20">
            <div className="w-full  flex-shrink-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                  MoodChanger
                </h2>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  MoodChanger is an innovative app that centralizes data from
                  multiple wearables, offering users a single, comprehensive
                  view of their personal metrics. <br /> By integrating
                  seamlessly with CAIPO, the app gathers information from
                  various devices and transforms it into meaningful insights,
                  making it easier for people to understand their physical
                  health, mental well being, productivity, and even their pets’
                  activity.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Designed for a wide audience from health conscious individuals
                  and athletes to pet owners and anyone curious about their
                  daily patterns MoodChanger turns complex streams of data into
                  clear, actionable information. <br /> The interface is
                  carefully crafted to highlight trends, patterns, and
                  anomalies, allowing users to spot changes over time, track
                  progress toward goals, and make informed decisions about
                  lifestyle and habits.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  More than just a dashboard, MoodChanger acts as a companion
                  that helps users interpret their metrics and take deliberate
                  steps toward improvement. <br /> By providing an intuitive,
                  unified view of data and pairing it with CAIPO’s guidance, the
                  app empowers individuals to set realistic goals, monitor
                  achievements, and adjust behaviors proactively.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Ultimately, MoodChanger transforms raw data into actionable
                  insights, making the journey toward better health,
                  productivity, and personal awareness smoother, more informed,
                  and more motivating. <br /> It’s about turning every piece of
                  information into a small but meaningful change one insight at
                  a time.
                </p>
              </div>
              <div className=" flex justify-center">
                <div className="relative   h-[400px] md:h-[500px] lg:h-[600px] w-full        rounded-[30px] md:rounded-[50px]  flex items-center justify-center p-8 md:p-12">
                  <Image
                    fill
                    src={legalFramworkImg}
                    alt="Project 3 - MoodChanger"
                    className=" rounded-[30px] md:rounded-[50px] object-center "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 - Image Right */}
          <div className="flex flex-col   gap-6 md:gap-10 lg:gap-20">
            <div className="w-full  flex-shrink-0">
              <div className="flex-1">
                <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-4 md:mb-6">
                  Data Analytics
                </h2>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  The Experiential Ventures Pipeline combines legal and ethics
                  research with advanced data analytics to turn ideas into
                  actionable, testable ventures. <br /> By structuring the
                  entire process from idea validation and prototyping to
                  deployment ready development teams can design solutions that
                  are both scalable and responsibly built.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  Data analytics plays a central role, providing insights at
                  every stage to guide decision making, measure impact, and
                  optimize outcomes. <br /> This ensures that each venture is
                  informed by real world evidence, aligned with ethical
                  principles, and capable of adapting to evolving challenges.
                </p>
                <p className="text-lg md:text-xl text-white leading-[160%] mb-9">
                  By integrating hands on experimentation with analytics driven
                  insights, this pipeline empowers teams to transform complex
                  legal and ethical research into practical, measurable, and
                  responsible innovations. <br /> It’s a systematic approach to
                  building ventures that are not only effective but also
                  transparent, accountable, and grounded in responsible
                  technology practices from day one.
                </p>
              </div>
              <div className=" flex justify-center">
                <div className="  relative  w-full   h-[400px] md:h-[500px] lg:h-[600px]  rounded-[30px] md:rounded-[50px]  flex items-center justify-center p-8 md:p-12">
                  <Image
                    fill
                    src={experientialImg}
                    alt="Project 4 - Data Analytics"
                    className=" rounded-[30px] md:rounded-[50px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* the end of the projects till we figure strapi for it */}
        </div>
      </div>
    </main>
  );
}
