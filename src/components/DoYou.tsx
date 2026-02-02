import Link from "next/link";

import Image from "next/image";
import CheckItem from "./code-split/DoYou/CheckItem";

const DoYou = () => {
  return (
    <section className="relative rounded-3xl my-8 py-32 px-6 flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/owl.png"
          alt="Wisdom"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-levi-black via-levi-black/90 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
          Do You...?
        </h2>

        <div className="grid md:grid-cols-1 gap-6 mb-12 text-left max-w-2xl mx-auto">
          <CheckItem text="Have a passion for law, ethics, and AI?" />
          <CheckItem text="Want hands-on experience solving real-world legal challenges?" />
          <CheckItem text="Dream of building AI-powered tools, platforms, or innovations?" />
          <CheckItem text="Value flexibility, learning and contributing from anywhere, on your own schedule?" />
          <CheckItem text="Want to turn curiosity into real-world skills?" />
        </div>

        <div className="space-y-8">
          <h3 className="text-xl md:text-2xl font-bold text-levi-red">
            If YES, this is where your journey starts.
          </h3>
          <button className="cursor-pointer hover:scale-110  transform duration-100 ease-in-out">
            <Link
              href="https://hephaestus.international/internships/ethical-legal-research-intern"
              className="bg-gradient-to-r from-red-300 to-orange-400 rounded-2xl  text-white border-none px-12 py-4 text-lg font-bold shadow-lg shadow-levi-red/20">
              JOIN US
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoYou;
