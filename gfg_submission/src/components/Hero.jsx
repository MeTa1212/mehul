import React from "react";

const bars = [
  { color: "bg-sky-300", circle: "bg-sky-400" },
  { color: "bg-yellow-300", circle: "bg-yellow-400" },
  { color: "bg-teal-300", circle: "bg-teal-400" },
  { color: "bg-blue-400", circle: "bg-blue-500" },
  { color: "bg-orange-300", circle: "bg-orange-400" },
  { color: "bg-purple-300", circle: "bg-purple-400" },
];

const Hero = () => (
  <section className="relative bg-white overflow-hidden py-16 px-4 md:px-8">
    {/* Background bars */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end space-x-2 md:space-x-4">
      {bars.map((b, i) => (
        <div
          key={i}
          className={`flex flex-col items-center ${b.color} rounded-t-2xl`}
          style={{ height: `${(i + 1) * 4 + 8}rem`, width: "4rem" }}
        >
          <div
            className={`rounded-full ${b.circle}`}
            style={{ width: "2.5rem", height: "2.5rem", marginTop: "-1.25rem" }}
          ></div>
        </div>
      ))}
    </div>

    {/* Content box */}
    <div className="relative max-w-2xl bg-white p-8 border border-gray-200 shadow-lg md:mx-12 lg:ml-24">
      <div className="text-sm text-gray-600 mb-2 uppercase font-medium">
        Introducing an era of new and exciting game development → Read more
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Access the full power of Python Game Development.
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The ultimate game dev workshop for Python enthusiasts. Learn, create,
        and innovate with the most versatile platform.
      </p>
      <button className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition">
        Get Started →
      </button>
    </div>
  </section>
);

export default Hero;
