// const WhatWeOffer = () => {
//   return (
//     <section className="rounded-[25px] bg-black overflow-hidden py-16 px-12 mb-4">
//       <h2 className="text-[#EDEDED] text-[28px] font-bold mb-16">
//         What We Offer
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Card 01 */}

//         <div className="relative rounded-[25px] bg-black shadow-[5px_5px_3px_1px_rgba(78,78,78,0.1)] overflow-hidden p-6 h-[153px]">
//           <div className="absolute top-[-40px] right-[-37px] w-[188px] h-[131px] bg-[#4B4E3F] rounded-[55px] blur-[50px]" />
//           <div className="absolute bottom-12 left-[-37px] w-[188px] h-[131px] bg-purple-950/50 rounded-[55px] blur-[50px]" />
//           <div className="relative flex items-center justify-evenly">
//             <span className="text-white text-[100px] font-bold">01</span>
//             <span className="text-transparent bg-gradient-to-r from-[#FFA4A4] to-[#BFFDFF] bg-clip-text text-2xl font-medium">
//               Hands-on client
//               <br />
//               work
//             </span>
//           </div>
//         </div>

//         {/* test card */}
//         {/* <div className="relative rounded-[25px] bg-black shadow-[5px_5px_3px_1px_rgba(78,78,78,0.1)] overflow-hidden p-6 h-[153px]">
//           <div className="absolute top-[-40px] right-[-37px] w-[188px] h-[131px] bg-[#4B4E3F] rounded-[55px] blur-[50px]" />
//           <div className="absolute bottom-12 left-[-37px] w-[188px] h-[131px] bg-purple-950/50 rounded-[55px] blur-[50px]" />
//           <div className=" flex flex-row justify-between items-   bg-red-500        ">
//             <span className="text-white text-[100px] font-bold">025 </span>
//             <span className="text-transparent bg-gradient-to-r from-[#FFA4A4] to-[#BFFDFF] bg-clip-text text-2xl font-medium">
//               Ethics & Compliance
//               <br />
//               Training
//             </span>
//           </div>
//         </div> */}

//         {/* Card 02 */}
//         <div className="rounded-[25px] bg-[#FFF5ED] shadow-[5px_5px_3px_2px_rgba(126,126,126,0.1)] p-6 h-[153px]">
//           {/* <div className="flex items-center  justify-center gap-10">
//             <span className="text-black text-[100px] font-bold">02</span>
//             <span className="text-black text-2xl font-medium">
//               Ethics & Compliance
//               <br />
//               Training
//             </span>
//           </div> */}

//           <div className="text-black flex justify-between items-center whitespace-nowrap ">
//             <span className="text-[100px] font-bold">02</span>
//             <span className="text-3xl font-medium">
//               Compliance
//               <br />
//               & Ethics
//               <br />
//               Training
//             </span>
//           </div>
//         </div>

//         {/* Card 03 */}
//         <div className="rounded-[25px] bg-[#15001C] shadow-[5px_5px_3px_2px_rgba(126,126,126,0.1)] p-6 h-[153px]">
//           <div className="flex items-center gap-7">
//             <span className="text-[#EDEDED] text-[100px] font-bold">03</span>
//             <span className="text-white text-2xl font-medium">
//               Legal Drafting,
//               <br />
//               Research &<br />
//               Stratergy
//             </span>
//           </div>
//         </div>

//         {/* Card 04 */}
//         <div className="rounded-[25px] bg-[#212121]/50 shadow-[5px_5px_3px_2px_rgba(204,204,204,0.1)] p-6 h-[153px]">
//           <div className="flex items-center gap-5">
//             <span className="text-[#EDEDED] text-[100px] font-bold">04</span>
//             <span className="text-white text-2xl font-medium">
//               AI Tools for
//               <br />
//               Modern Legal
//               <br />
//               World
//             </span>
//           </div>
//         </div>

//         {/* Card 05 */}
//         <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]">
//           <div className="flex items-center gap-7">
//             <span className="text-[#EDEDED] text-[100px] font-bold">05</span>
//             <span className="text-white text-2xl font-medium">
//               StartUp
//               <br />
//               Experience
//             </span>
//           </div>
//         </div>

//         {/* Card 06 */}
//         <div className="rounded-[25px] bg-white shadow-[5px_5px_3px_2px_rgba(126,126,126,0.1)] p-6 h-[153px]">
//           <div className="flex items-center justify-between ">
//             <span className="text-transparent bg-gradient-to-b from-[#5FCFC6] to-[#530041] bg-clip-text text-[100px] font-bold">
//               06
//             </span>
//             <span className="text-black text-2xl font-medium">
//               Day 1 Impact on
//               <br />
//               Real Projects
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOffer;

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
