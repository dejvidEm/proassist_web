"use client"
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return products within 30 days of purchase. Please ensure that the items are unused and in original packaging.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order using the tracking number provided in the confirmation email. Simply click on the link and follow the instructions.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support. You can reach out to us via phone, email, or live chat on our website.",
  },
];

const FaqSection: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Card with Questions */}
        <div className="w-full md:w-1/2 bg-blue-100 p-6">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col space-y-2">
            {faqData.map((item, index) => (
              <button
                key={index}
                className={`text-left p-4 rounded-md text-blue-800 hover:bg-blue-200 transition ${
                  selectedQuestion === index ? "bg-blue-300" : "bg-blue-50"
                }`}
                onClick={() => setSelectedQuestion(index)}
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>

        {/* Right Card with Answer */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-md mt-4 md:mt-0 md:absolute md:top-0 md:right-0 md:transform md:translate-x-4 md:translate-y-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Answer</h2>
          <p className="text-gray-700">{faqData[selectedQuestion].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;