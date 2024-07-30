"use client"
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { FAQItem } from "@/lib/types";



const faqData: FAQItem[] = [
  {
    question: "What is MeriRide?",
    answer: {
      heading: "A Non-profit Organization",
      paras: [
        "MeriRide is a non-profit organization dedicated to empowering individuals with different abilities by creating sustainable income opportunities and fostering an inclusive environment. We provide various services, including transportation, last mile delivery, and local courier services, all aimed at enabling self-reliance and equal contribution to society.",
      ],
    },
  },
  {
    question:
      "What services does MeriRide offer?",
    answer: {
      heading: "We offer several key services:",
      list: [
        {
          heading: "Transportation Services: ",
          para: "Affordable and reliable motorcycle rickshaw transport for the local community.",
        },
        {
          heading: "Last Mile Delivery: ",
          para: "Efficient delivery of goods from local businesses to their customers.",
        },
        {
          heading: "Local Courier Service:",
          para: "Fast and reliable delivery of important documents and small packages.",
        },
        {
          heading: "Advertisement Model for Rickshaw Service: ",
          para: "Advertising space on our rickshaws for local businesses.",
        },
      ]
    },
  },
  {
    question: "How can I support MeriRide?",
    answer: {
      heading: "You can support MeriRide in several ways: ",
      list: [
        {
          heading: "Donate: ",
          para: "Make a one-time or recurring donation.",
        },
        {
          heading: "Volunteer:",
          para: "Share your time and skills to help our team.",
        },
        {
          heading: "Use Our Services:",
          para: "Utilize our transportation, delivery, and courier services.",
        },
        {
          heading: "Spread the Word: ",
          para: "Recommend our services to your friends and family",
        }
      ],
    },
  },
  {
    question: "How does MeriRide benefit individuals with different abilities?",
    answer: {
      heading: "MeriRide Benefits",
      paras: [
        "MeriRide creates job opportunities for individuals without work and partner them with individuals with different abilities, enabling both of them to earn a sustainable income and gain independence. Our inclusive programs foster a sense of teamwork and shared success, helping to build a more inclusive society.",
      ],
    },
  },
];

const Faq = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  return (
    <div className="relative w-full flex items-center flex-col md:flex-row h-fit md:h-[500px] py-4">
      <div className="md:absolute left-0 w-full md:w-[54%] h-fit bg-white text-themeGrayText rounded-2xl z-10">
        {faqData.map((faq, index) => (
          <div
            onClick={() => setSelectedQuestionIndex(index)}
            key={index}
            className={`faq-item cursor-pointer relative flex items-center gap-5 justify-start px-4 py-5 xl:py-6  border-b border-[#b8b8b8] ${selectedQuestionIndex === index ? 'bg-gray-100' : 'bg-transparent'}`}
          >
            <input
              type="radio"
              name="faq"
              className="bg-border w-6 h-6 checked:bg-primary appearance-none rounded-full"
              checked={selectedQuestionIndex === index}
            />
            <p className="text-sm lg:text-[16px] w-[calc(100%-66px)] truncate-multiline-md">{faq.question}</p>
            <div className="absolute right-4 w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full p-1">
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </div>
      <div className="md:absolute right-0 w-full md:w-[51%] h-fit md:h-[474px] bg-foreground rounded-2xl z-1 text-white md:py-10 p-6 md:pr-10 md:pl-20 lg:pl-28 flex justify-center gap-6 flex-col">
        <h1 className="text-xl text-primary lg:text-xl font-semibold">
          {faqData[selectedQuestionIndex].answer.heading}
        </h1>
        {faqData[selectedQuestionIndex].answer.paras?.map((para, idx) => (
          <p key={idx} className="text-base lg:text-lg py-4 lg:py-6">
            {para}
          </p>
        ))}
          <div className='space-y-4 py-4'>
        {faqData[selectedQuestionIndex].answer.list?.map((list, idx) => (
            <p key={idx} className="text-primary text-base font-semibold">
              {list.heading}
              <span className="text-sm text-white py-2 lg:py-6 ml-2">
                {list.para}
              </span>
            </p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
