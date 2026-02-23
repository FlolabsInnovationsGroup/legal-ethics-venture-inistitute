const WhatWeOffer = () => {
  return (
    <section className="rounded-[25px] bg-black overflow-hidden py-16 px-4 sm:px-12 mb-4">
      <h2 className="text-[#EDEDED] text-[28px] font-bold mb-16 text-center">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Card 01 */}

        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            01
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Hands-on
            <br />
            client work
          </span>
        </div>

        {/* <div className="relative rounded-[25px] bg-black shadow-[5px_5px_3px_1px_rgba(78,78,78,0.1)] overflow-hidden p-6 h-[153px]">
          <div className="absolute top-[-40px] right-[-37px] w-[188px] h-[131px] bg-[#4B4E3F] rounded-[55px] blur-[50px]" />
          <div className="absolute bottom-12 left-[-37px] w-[188px] h-[131px] bg-purple-950/50 rounded-[55px] blur-[50px]" />
          <div className="relative flex items-center justify-evenly whitespace-nowrap">
            <span className="text-white text-[80px] sm:text-[100px] font-bold">
              01
            </span>
            <span className="text-transparent bg-gradient-to-r from-[#FFA4A4] to-[#BFFDFF] bg-clip-text text-xl sm:text-2xl font-medium">
              Hands-on client
              <br />
              work
            </span>
          </div>
        </div> */}

        {/* Card 02 */}

        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            02
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Compliance <br />
            & Ethics
            <br /> Training{" "}
          </span>
        </div>

        {/* Card 03 */}

        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            03
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Legal Drafting,
            <br />
            Research &
            <br /> Strategy{" "}
          </span>
        </div>

        {/* Card 04 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            04
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            AI Tools for
            <br />
            Modern
            <br />
            Legal World{" "}
          </span>
        </div>

        {/* Card 05 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            05
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            StartUp
            <br />
            Experience
          </span>
        </div>

        {/* Card 06 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            06
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Day 1
            <br />
            Impact on
            <br />
            Real Projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
