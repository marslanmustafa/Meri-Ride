// types.ts

export type Service = {
  icon: string;
  heading: string;
  para: string;
  link: string;
}

export type FAQAnswer = {
  heading: string;
  paras?: string[];
  list?: listItem[];
}

export type listItem = {
  heading?: string;
  para: string;
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



export type VolunteerFormValues = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  preferredRoles: string[];
  availability: string[];
  preferredTimeSlots: string[];
  volunteerExperience: string;
  skills: string[];
  whyVolunteer: string;
  additionalInfo: string;
  references: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };
}
