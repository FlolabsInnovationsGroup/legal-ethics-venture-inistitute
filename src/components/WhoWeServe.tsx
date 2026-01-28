const WhoWeServe = () => {
  return (
    <section className="rounded-[25px] overflow-hidden py-16 px-12 mb-4">
      <p className="text-[#EDEDED] text-lg mb-8">Who We Serve</p>
      <h2 className="text-white text-[28px] font-bold mb-8">Built for Doers</h2>
      <p className="text-[#EDEDED] text-[22px] mb-16 max-w-[884px]">
        Whether you're exploring, building, or leading, our platform meets you
        where you are.
      </p>

      <div className="grid md:grid-cols-3 gap-10 relative">
        {/* Student image positioned absolutely */}
        {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a022366f04c087a8186c76d36022db33d1a917e8?width=376"
          alt="Graduate Student"
          className="absolute left-[275px] top-[-55px] w-[188px] h-[183px] z-10 hidden lg:block"
        /> */}

        {/* Quiz image */}
        {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8666aab506f8be270e1cf0c838ba37a4c81bebbe?width=458"
          alt="Student answering quiz"
          className="absolute left-[715px] top-[-44px] w-[229px] h-[172px] z-10 hidden lg:block"
        /> */}

        {/* Rocket image */}
        {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1c59ce2ff2ebd563e607f6f3bd2e3964b5773434?width=232"
          alt="Rocket"
          className="absolute right-[224px] top-[-32px] w-[116px] h-[136px] z-10 hidden lg:block"
        /> */}

        <div className="bg-[#2C2C2C] rounded-[10px] shadow-[5px_5px_10px_4px_rgba(0,0,0,0.1)] p-7 flex flex-col gap-6">
          <h3 className="text-white text-[28px] font-semibold">
            Students & <br />
            Graduates
          </h3>
          <p className="text-white text-[22px] font-normal">
            Gain hands-on experience beyond traditional classrooms and
            coursework through real-world projects
          </p>
        </div>

        <div className="bg-[#2C2C2C] rounded-[10px] shadow-[5px_5px_10px_4px_rgba(0,0,0,0.1)] p-7 flex flex-col gap-6">
          <h3 className="text-white text-[28px] font-semibold">
            Career <br />
            Explorers
          </h3>
          <p className="text-white text-[22px] font-normal">
            Test-drive legal and ethical work before committing to formal
            education paths or career pivots.
          </p>
        </div>

        <div className="bg-[#2C2C2C] rounded-[10px] shadow-[5px_5px_10px_4px_rgba(0,0,0,0.1)] p-7 flex flex-col gap-6">
          <h3 className="text-white text-[28px] font-semibold">
            Innovators &<br />
            Builders
          </h3>
          <p className="text-white text-[22px] font-normal">
            Test-drive legal and ethical work before committing to formal
            education paths or career pivots.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
