"use client";

import Link from "next/link";

import localFont from "next/font/local";

const bonVivant = localFont({
  src: "../../../public/fonts/BonVivantSerifBold.ttf",
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background color only */}
        <div className="absolute inset-0 bg-[#0a192f]" />

        {/* Video element */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {/* Working video sources */}
          <source
            src="https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-[#0a192f]/10 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center px-4">
        <div
          className={`transition-all duration-1000 transform
            translate-y-0 opacity-100
          `}
        >
          <h1
            className={`text-3xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg ${bonVivant.className} `}
          >
            Welcome to The PM Society
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-10 drop-shadow-md">
          More Than a Certificate — Build a Career, Community, and Real Confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-[#38bdf8]/10 text-base font-semibold px-10 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto inline-block text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Compare Programs
            </Link>
            <Link
              href="/enroll"
              className="border-2 border-white text-white hover:bg-[#38bdf8]/10 text-base font-semibold px-10 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto inline-block text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Society+
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
