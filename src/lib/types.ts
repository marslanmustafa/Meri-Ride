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

export type BannerData = {
  heading: string;
  heading2?: string;
  image: string;
}

export type LandingBannerProps = {
  data: BannerData;
}

export type ListItem = {
  category: string;
  items: string[];
}

export type RecruitmentData = {
  heading: string;
  listItems: ListItem[];
}