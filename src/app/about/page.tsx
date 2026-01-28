import Hero from "@/components/code-split/about/Hero";
import OurMission from "@/components/code-split/about/OurMission";
import WhatWeDo from "@/components/code-split/about/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen  rounded-[16px]    mt-[100px] mb-[50px] ">
      <Hero />
      <OurMission />
      <WhatWeDo />
    </div>
  );
};

export default page;
