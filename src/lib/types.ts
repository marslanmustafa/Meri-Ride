// types.ts

export type Service = {
  icon: string;
  heading: string;
  para: string;
  link: string;
}

export type FAQAnswer = {
  heading: string;
  paras: string[];
}

export type FAQItem = {
  question: string;
  answer: FAQAnswer;
}