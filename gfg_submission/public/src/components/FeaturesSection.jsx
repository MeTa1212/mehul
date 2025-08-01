import React from "react";

const features = [
  {
    title: "Game Mechanics",
    description: "Master physics, collision detection, AI, and game loops.",
    shape: (
      <>
        <div className="absolute w-24 h-24 bg-orange-200 rounded-full top-3 right-8 opacity-40 z-0" />
        <div className="absolute w-20 h-20 bg-red-400 rounded-full top-6 right-4 opacity-50 z-0" />
      </>
    ),
  },
  {
    title: "Visual Effects",
    description: "Create 2D/3D graphics and animations.",
    shape: (
      <>
        <div className="absolute w-24 h-24 bg-cyan-200 rounded-full top-3 right-8 opacity-40 z-0" />
        <div className="absolute w-20 h-20 bg-cyan-400 rounded-full top-6 right-4 opacity-50 z-0" />
      </>
    ),
  },
  {
    title: "Game Balancing",
    description: "Balance difficulty and progression.",
    shape: (
      <>
        <div className="absolute w-24 h-24 bg-yellow-200 rounded-full top-3 right-8 opacity-40 z-0" />
        <div className="absolute w-20 h-20 bg-yellow-400 rounded-full top-6 right-4 opacity-50 z-0" />
      </>
    ),
  },
  {
    title: "Cross-Platform Dev",
    description: "Deploy games on PC, web, and mobile.",
    shape: (
      <>
        <div className="absolute w-24 h-24 bg-purple-300 rounded-full top-3 right-8 opacity-40 z-0" />
        <div className="absolute w-20 h-20 bg-purple-500 rounded-full top-6 right-4 opacity-50 z-0" />
      </>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl font-semibold mb-10 text-black">
        Workshop Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-6 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {feature.shape}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
