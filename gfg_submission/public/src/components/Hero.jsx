import React from "react";

const Hero = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center">
      {/* Announcement bar */}
      <div className="text-xs bg-gray-100 inline-block px-3 py-1 rounded-full mb-4">
        Introducing an era of new and exciting game development →{" "}
        <span className="underline cursor-pointer">Read more</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
        Access the full power of <br /> Python Game Development.
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-6">
        The ultimate game dev workshop for Python enthusiasts. <br />
        Learn, create, and innovate with the most versatile pl.
      </p>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
        Get Started →
      </button>

      {/* Custom Graphic Bars */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <div className="w-10 h-24 bg-cyan-300 rounded-t-full shadow-md"></div>
        <div className="w-10 h-28 bg-yellow-300 rounded-t-full shadow-md"></div>
        <div className="w-10 h-36 bg-teal-400 rounded-t-full shadow-md"></div>
        <div className="w-10 h-32 bg-blue-400 rounded-t-full shadow-md"></div>
        <div className="w-10 h-40 bg-orange-300 rounded-t-full shadow-md"></div>
        <div className="w-10 h-44 bg-purple-300 rounded-t-full shadow-md"></div>
      </div>
    </section>
  );
};

export default Hero;
