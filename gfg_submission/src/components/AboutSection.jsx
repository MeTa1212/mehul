import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About PyHack</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          PyHack is a dynamic, community-driven workshop designed to teach game
          development using Python.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://undraw.co/api/illustrations/random?tag=face" // placeholder smiley
            alt="PyHack fun illustration"
            className="rounded-lg shadow w-full h-auto"
          />
          <img
            src="https://undraw.co/api/illustrations/random?tag=happy" // placeholder graph-like face
            alt="Game analytics"
            className="rounded-lg shadow w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
