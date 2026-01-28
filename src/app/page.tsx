import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import JoinUs from "@/components/JoinUs";
import OurProjectsCarosal from "@/components/OurProjectsCarosal";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content Container */}
      <main className="max-w-[1440px] mx-auto px-6 pt-4">
        {/* Hero Section */}

        <Hero />
        {/* Why Choose Us Section */}

        <WhyChooseUs />

        {/* Initiatives By the Numbers */}

        <Initiatives />

        {/* What We Offer */}

        <WhatWeOffer />

        {/* Built for Doers */}

        <WhoWeServe />

        {/* Our Projects Carousel */}

        <OurProjectsCarosal />

        {/* Join us on this Journey */}

        <JoinUs />

        {/* Final CTA Section */}
        <section className="rounded-[25px] bg-black overflow-hidden mb-4 relative min-h-[507px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/00104689936695c803cd41b4696668c945e014ae?width=2851"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center min-h-[507px]">
            <div className="bg-white/20 rounded-[50px] px-[203px] py-[100px] backdrop-blur-sm">
              <p className="text-black text-2xl font-bold mb-5 text-center">
                We don't teach you to pass the bar
              </p>
              <h2 className="text-center">
                <span className="text-black text-[32px] font-bold">
                  We train you to build{" "}
                </span>
                <span className="text-brand-cyan text-[42px] font-extrabold">
                  What Comes After It!
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
