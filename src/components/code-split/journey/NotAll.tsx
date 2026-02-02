import React from "react";

const NotAll = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 my-2 px-10 xl:px-30 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 flex flex-col gap-4 text-[18px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            But That's Not All
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We take initiative, stay informed and ensure we{" "}
            <span className="text-[#F2784B]">remain at the forefront</span> of
            legal and technological developments.
          </p>
          <p>
            We act as a <span className="text-[#F2784B]">catalyst</span> by
            supporting{" "}
            <span className="text-[#F2784B]">cross-collaboration</span> ,
            connecting insights across teams, and ensuring external developments
            translate into internal value.
          </p>

          <p className="text-[20px] font-bold">Recent Initiatives</p>
          <p>
            <span className="text-[#F2784B]">Space Forum - Nikkei Forum:</span>{" "}
            Attended expert discussions on space industry topics, partnerships,
            and regulatory frameworks.
          </p>
          <p>
            Comprehensive briefing delivered to company leadership, ensuring we
            stay informed on space law developments.
          </p>
          <p>
            {" "}
            <span className="text-[#F2784B]">
              Cybersecurity Tokyo Initiative 2025 - Nikkei Forum:
            </span>{" "}
            Attended expert talks on cybersecurity trends, emerging threats, and
            strategic recommendations.
          </p>
          <p>
            Actionable insights shared across teams, keeping the company aligned
            with cutting-edge security practices.
          </p>
        </div>

        {/* Cards Grid */}
      </div>
    </section>
  );
};

export default NotAll;
