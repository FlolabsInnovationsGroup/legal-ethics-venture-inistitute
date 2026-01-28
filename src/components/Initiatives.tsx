import React from "react";

const Initiatives = () => {
  return (
    <section id="projects" className="rounded-[25px] bg-[#222]  py-4 px-4 mb-4">
      <div className="flex flex-col items-center gap-6 ">
        <h2 className="text-white text-[43px] font-bold">
          Initiatives: By the Numbers
        </h2>
        <p className="text-white text-lg text-center max-w-[590px] leading-[140%]">
          Few of the many projects you can work on as soon as you join
        </p>

        <div className="bg-black/10 relative  rounded-[50px] p-20 w-full max-w-[1079px]">
          <div className=" bg-black h-full absolute w-[5px] top-0 left-90"></div>

          <div className=" bg-black h-full absolute w-[5px]  top-0 right-96 "></div>

          <div className="flex  gap-[4%] flex-row">
            {/* Stat 1 */}
            <div className="flex flex-col gap-7 w-[32%] ">
              <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                13
              </h3>
              <h4 className="text-white text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Finished Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Completed initiatives that have laid the groundwork for
                innovation and operational clarity.
              </p>
            </div>

            {/* Stat 2 */}

            <div className="flex flex-col gap-7   w-[32%]  relative   ">
              <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                8+
              </h3>
              <h4 className="text-white text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Active Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Currently underway, generating insights and supporting ongoing
                initiatives.
              </p>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col gap-7 w-[32%]">
              <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                5
              </h3>
              <h4 className="text-white text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Upcoming Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Upcoming initiatives we are preparing to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
