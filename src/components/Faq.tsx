"use client"
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { FAQItem } from "@/lib/types";



const faqData: FAQItem[] = [
  {
    question: " What is the mission of Empowering Opportunities Inc.?",
    answer: {
      heading: "Our mission is to empower individuals with ",
      paras: [
        "Disabilities by creating sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
        "Sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
      ],
    },
  },
  {
    question:
      "What should I do if I need to cancel or change a booking for transportation services?",
    answer: {
      heading: "Our mission is to empower individuals with 2",
      paras: [
        "Disabilities by creating sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
        "Sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
      ],
    },
  },
  {
    question: "Can businesses get involved with your organization?",
    answer: {
      heading: "Our mission is to empower individuals with 3",
      paras: [
        "Disabilities by creating sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
        "Sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
      ],
    },
  },
  {
    question: "What types of donations do you accept?",
    answer: {
      heading: "Our mission is to empower individuals with 4",
      paras: [
        "Disabilities by creating sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
        "Sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
      ],
    },
  },
  {
    question:
      "How does Empowering Opportunities Inc. advocate for individuals with disabilities?",
    answer: {
      heading: "Our mission is to empower individuals with 5",
      paras: [
        "Disabilities by creating sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
        "Sustainable income opportunities through innovative partnerships, fostering a community of inclusion, and transforming lives through self-reliance and collaboration.",
      ],
    },
  },
];

const Faq = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  return (
    <div className="relative w-full flex items-center flex-col md:flex-row h-fit md:h-[500px] py-4">
      <div className="md:absolute left-0 w-full md:w-[58%] h-fit bg-white text-themeGrayText rounded-2xl z-10">
        {faqData.map((faq, index) => (
          <div
          onClick={() => setSelectedQuestionIndex(index)}
            key={index}
            className={`faq-item cursor-pointer relative flex items-center gap-5 justify-start px-4 py-5 xl:py-6 rounded-t-2xl border-b border-[#b8b8b8] ${selectedQuestionIndex === index ? 'bg-gray-100' : 'bg-transparent'}`}
          >
            <input
              type="radio"
              name="faq"
              className="bg-border w-6 h-6 checked:bg-themeGreen appearance-none rounded-full"
              checked={selectedQuestionIndex === index}
            />
            <p className="text-sm lg:text-textEm w-[calc(100%-66px)] truncate-multiline-md">{faq.question}</p>
            <div className="absolute right-4 w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full p-1">
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </div>
      <div className="md:absolute right-0 w-full md:w-[51%] h-fit md:h-[474px] bg-foreground rounded-2xl z-1 text-white md:py-10 p-6 md:pr-10 md:pl-20 lg:pl-28">
        <h1 className="text-textEm lg:text-lg font-semibold">
          {faqData[selectedQuestionIndex].answer.heading}
        </h1>
        {faqData[selectedQuestionIndex].answer.paras.map((para, idx) => (
          <p key={idx} className="text-sm py-4 lg:py-6">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Faq;
