export default function page() {
  return (
    <main className=" bg-[#F6F6F6] rounded-[16px]  px-4 md:px-6 py-4 mt-[100px] mb-[50px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-[56px] font-semibold text-black mb-4 md:mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-[#464646] max-w-3xl">
            A glimpse of some of our projects. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 1 - Image Left */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[540px] flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/68815cd6f1ebfd40f6d1ac93d49dc61cc763800e?width=2630"
                alt="Project 1 - AI Robot"
                className="w-full h-auto aspect-[163/89] rounded-[30px] md:rounded-[50px] object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-black mb-4 md:mb-6">
                Project 1
              </h2>
              <p className="text-lg md:text-xl text-[#464646] leading-[135%] tracking-[-0.4px]">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>

          {/* Project 2 - Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[540px] flex-shrink-0">
              <div className="w-full aspect-[540/557] rounded-[30px] md:rounded-[50px] bg-[#B7B7B7] flex items-center justify-center p-8 md:p-12">
                <svg
                  width="236"
                  height="171"
                  viewBox="0 0 236 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[236px] h-auto">
                  <path
                    d="M229.304 164.979L171.65 105.972L145.008 133.239"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M182.338 171L91.2686 80.6833L6.52148 164.731"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M215.071 0H21.9565C10.1066 0 0.5 9.57046 0.5 21.375V149.625C0.5 161.43 10.1066 171 21.9565 171H215.071C226.921 171 236.528 161.43 236.528 149.625V21.375C236.528 9.57046 226.921 0 215.071 0Z"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M172.5 54C177.471 54 181.5 49.9706 181.5 45C181.5 40.0294 177.471 36 172.5 36C167.529 36 163.5 40.0294 163.5 45C163.5 49.9706 167.529 54 172.5 54Z"
                    stroke="#8E8E8E"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-black mb-4 md:mb-6">
                Project 2
              </h2>
              <p className="text-lg md:text-xl text-[#464646] leading-[135%] tracking-[-0.4px]">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>

          {/* Project 3 - Image Left */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-20">
            <div className="w-full lg:w-[540px] flex-shrink-0">
              <div className="w-full aspect-[540/557] rounded-[30px] md:rounded-[50px] bg-[#B7B7B7] flex items-center justify-center p-8 md:p-12">
                <svg
                  width="236"
                  height="171"
                  viewBox="0 0 236 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[236px] h-auto">
                  <path
                    d="M229.304 164.979L171.65 105.972L145.008 133.239"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M182.338 171L91.2686 80.6833L6.52148 164.731"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M215.071 0H21.9565C10.1066 0 0.5 9.57046 0.5 21.375V149.625C0.5 161.43 10.1066 171 21.9565 171H215.071C226.921 171 236.528 161.43 236.528 149.625V21.375C236.528 9.57046 226.921 0 215.071 0Z"
                    stroke="#8E8E8E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M172.5 54C177.471 54 181.5 49.9706 181.5 45C181.5 40.0294 177.471 36 172.5 36C167.529 36 163.5 40.0294 163.5 45C163.5 49.9706 167.529 54 172.5 54Z"
                    stroke="#8E8E8E"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-[32px] font-semibold text-black mb-4 md:mb-6">
                Project 3
              </h2>
              <p className="text-lg md:text-xl text-[#464646] leading-[135%] tracking-[-0.4px]">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
