"use client"
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "Koľko stojí výjazd asistenčnej služby?",
    answer: "Asistenciu priamo na mieste nehody poskytujeme účastníkom bezplatne. Snažíme sa odbremeniť Vás od starostí spojených s riešením poistnej udalosti, opravou vozidla či odťahom",
  },
  {
    question: "Kto hradí naše služby?",
    answer: "Dlhoročne spolupráce s autorizovanými servismi umožňujú poskytnúť účastníkom dopravných nehôd službu bez poplatkov. Náklady na výjazd asistenčnej služby znáša servis.",
  },
  {
    question: "Koľko stojí odťah nepojazdného vozidla?",
    answer: "V prípade potreby odťahovacej služby sa snažíme vždy kontaktovať asistenčnú službu príslušnej poisťovne a preverujeme nárok. Pokiaľ sa jedná o nutnosť odťahu bez možnosti využitia asistenčných služieb poisťovne, poskytujeme odťah podľa platného cenníka.",
  },
];

const FaqSection: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  return (
    <div className="h-auto py-28 bg-gray-100 p-8 flex justify-center items-center">
      <div className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Card with Questions */}
        <div className="w-full md:w-1/2 bg-blue-100 p-6">
          <h2 className="text-xl font-bold mb-4">Často kladené otázky</h2>
          <div className="flex flex-col space-y-2">
            {faqData.map((item, index) => (
              <button
                key={index}
                className={`text-left p-4 rounded-md hover:bg-blue-200 transition ${
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
          <h2 className="text-xl font-bold mb-4">Odpoveď</h2>
          <p className="text-gray-700">{faqData[selectedQuestion].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;