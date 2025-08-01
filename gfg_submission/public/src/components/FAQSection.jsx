import React, { useState } from "react";

const faqs = [
  {
    question: "Who can join the workshop?",
    answer:
      "Anyone interested in game development can join, regardless of experience level.",
  },
  {
    question: "What will I learn?",
    answer:
      "You’ll learn game mechanics, graphics, balancing, and cross-platform deployment.",
  },
  {
    question: "Is prior coding experience required?",
    answer:
      "No, we start from the basics and guide you through each topic step by step.",
  },
  {
    question: "Will there be a certificate?",
    answer:
      "Yes, you will receive a certificate of participation after completing the workshop.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl font-semibold mb-10 text-black">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white font-medium text-black focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
