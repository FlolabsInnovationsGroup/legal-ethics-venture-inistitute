import {
  Globe,
  ArrowRight,
  Lock,
  Unlock,
  Zap,
  Brain,
  Shield,
  Users,
  PenTool,
  Scale,
  Trophy,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";
import statue from "../../public/assets/statue.jpg";
import openDoor from "../../public/assets/opendoor.jpg";

const Maze = () => {
  return (
    <section className="py-5 my-10 rounded-[20px]  bg-gray-950  relative transition-colors duration-300 ">
      <div className="w-full mx-auto ">
        <div className="grid md:grid-cols-2 gap-8  dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* The Maze (Left Side) */}
          <div className="relative p-8  flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-80 rounded-[20px] overflow-hidden">
              <Image src={statue} alt="Statue" fill className="object-cover" />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-gray-200 text-lg leading-relaxed mb-8 ">
                Where the legal world is a maze...
              </p>
              <h3 className="text-3xl font-bold text-white mb-4">
                Breaking in shouldn't be harder than <br />
                <span className="text-[#F2784B]">learning...</span>
              </h3>

              <div className="text-gray-200 text-lg leading-relaxed mb-8 ">
                Doors are <span className="text-[#F2784B]">closed</span>.
                Opportunities are <span className="text-[#F2784B]">rare</span>.
                <p>
                  Real practice?{" "}
                  <span className="text-[#F2784B] tracking-[3px]">
                    For the few...
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* The Door (Right Side) */}
          <div className="relative p-12 flex flex-col justify-center overflow-hidden ">
            <div className="absolute inset-0 z-0 rounded-[20px] overflow-hidden">
              <Image
                src={openDoor}
                alt="Open Door"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 " />
            </div>
            <div className="relative z-10 text-center ">
              <h3 className=" text-3xl font-bold text-white mb-4 tracking-[1px] leading-[50px]  ">
                We're here to{" "}
                <span className="text-[#F2784B]">widen the doors</span>, ignite{" "}
                <span className="text-[#F2784B]">hands-on experience</span>, and
                make it real ... All for you.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maze;
