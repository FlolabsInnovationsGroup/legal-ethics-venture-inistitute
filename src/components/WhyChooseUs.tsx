const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-gray-950  rounded-[25px]  dark:bg-levi-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-levi-ink dark:text-white mb-8 transition-colors duration-300">
            We Are ...
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">A Law School.</span>
            </div>
            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">A Clinic.</span>
            </div>
            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">A Bootcamp.</span>
            </div>
          </div>
        </div>

        <div className="relative p-10 rounded-3xl bg-gradient-to-br from-levi-red/10 to-transparent border border-levi-red/20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-levi-ink dark:text-white mb-6 transition-colors duration-300">
            But A Legal & Ethics <br />
            <span className="text-levi-red">
              Ventures <span className="text-[#F2784B]">Institute.</span>
            </span>
          </h3>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
            Where curiosity meets courage.
            <hr className="my-2" />
            <p>
              For{" "}
              <span className="text-[#F2784B]">
                students, career changers, international learners, innovators
              </span>
              - all welcome here.
            </p>
          </div>
          <div className="h-1 w-20 bg-levi-red rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
