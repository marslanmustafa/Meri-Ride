import React from 'react'
import { VolunteerAppForm, LandingBanner, DonorInfoForm } from "@/components"
import { BannerData } from '@/lib/types';
import Image from 'next/image';

const bannerData: BannerData = {
  heading: "Donate and Volunteer",
  image: "/images/donateAndVolunteer/Donate.png"
};

const detailsData = {
  main: [
    {
      heading: "Ways to Help",
      para: "This section outlines the various ways individuals can contribute to the organization, providing detailed options for monetary donations, volunteering time and skills, and donating needed resources."
    },
    {
      heading: "Donate Money",
      para: "Information on how to make a monetary donation, emphasizing the importance of financial support in sustaining and expanding the organization’s programs."
    },
  ],
  more: [
    {
      heading: "Donate Skills and Time",
      para: "Details on how individuals can volunteer their time and skills to support the organization, highlighting the various opportunities available.",
      details: [
        {
          heading: "Volunteer Opportunities",
          para: "kill-Based Volunteering: Specific roles such as mentorship, training, or professional services (e.g., legal, medical, educational)."
        },
        {
          heading: "Benefits of Volunteering",
          para: "Personal satisfaction, community involvement, gaining new skills, and making a meaningful impact."
        },
      ]
    },
    {
      heading: "Donate Skills and Time",
      para: "Details on how individuals can volunteer their time and skills to support the organization, highlighting the various opportunities available.",
      details: [
        {
          heading: "Volunteer Opportunities",
          para: "kill-Based Volunteering: Specific roles such as mentorship, training, or professional services (e.g., legal, medical, educational)."
        },
        {
          heading: "Benefits of Volunteering",
          para: "Personal satisfaction, community involvement, gaining new skills, and making a meaningful impact."
        },
      ]
    },
  ]
};


const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <LandingBanner data={bannerData} />
      {/* div2 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-5'>
        <div className=" bg-black rounded-3xl lg:px-6 px-5 py-10 lg:py-12">
          <h1 className=' text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white' >A brief overview that highlights the impact of donations and volunteer efforts on the organization. This section aims to inspire visitors by illustrating how their support can make a difference in the lives of individuals with disabilities.</h1>
        </div>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-10'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
          {detailsData.main.map((data, index) => (
            <div key={index} className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
              <div className="w-full space-y-5 text-themeGrayText2">
                <h1 className="text-xl lg:text-2xl font-bold">{data.heading}</h1>
                <p className="text-sm lg:text-[16px]">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* div4 */}
       {/* <DonorInfoForm/> */}
       {/* div5 */}
       <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-10'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
          {detailsData.more.map((data, index) => (
            <div key={index} className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Donate and Volunteer</h1>
          <p className="text-sm lg:text-[16px]">
            A brief overview that highlights the impact of donations and volunteer efforts on the organization. This section aims to inspire visitors by illustrating how their support can make a difference in the lives of individuals with disabilities.
          </p>
          {data.details.map((data, index) => (
              <div key={index} className="w-full space-y-5 text-themeGrayText2">
                <h1 className="text-xl lg:text-2xl font-bold">{data.heading}</h1>
                <p className="text-sm lg:text-[16px]">
                  {data.para}
                </p>
              </div>
          ))}
            </div>
          ))}
        </div>
      </div>
       {/* div6 */}
      <VolunteerAppForm />
       {/* div7 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-5'>
        <div className=" bg-black rounded-3xl lg:px-10 md:px-6 px-4 py-10 lg:py-12 space-y-3">
          <h1 className=' text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-primary' >Donate Resources</h1>
          <h2 className=' text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white' >A list of needed items and resources that can be donated to support the organization’s operations and programs</h2>
          <ul className="list-disc text-xs sm:text-sm space-y-3 px-5 text-white">
            <li>Office Supplies: Paper, pens, computers, printers.</li>
            <li>Training Materials: Books, software, educational tools.</li>
            <li>Event Supplies: Tents, tables, chairs, promotional materials.</li>
          </ul>
        </div>
      </div>
      {/* divlast */}
      <div className="w-full h-fit lg:min-h-screen flex justify-between flex-col items-center lg:flex-row px-4 md:px-8 lg:px-20 xl:px-28 py-14">
        <div className="w-full lg:w-[55%]  space-y-5 text-themeGrayText2">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Donate and Volunteer</h1>
          <p className="text-sm lg:text-[16px]">
            A brief overview that highlights the impact of donations and volunteer efforts on the organization. This section aims to inspire visitors by illustrating how their support can make a difference in the lives of individuals with disabilities.
          </p>
          <h1 className="text-xl lg:text-2xl font-bold">Mission Alignment</h1>
          <p className="text-sm lg:text-[16px]">
            A few sentences about how donations and volunteer work support the mission of empowering individuals with disabilities.
          </p>
          <h1 className="text-xl lg:text-2xl font-bold">Impact Statement</h1>
          <p className="text-sm lg:text-[16px]">
            Brief examples or statistics showcasing the positive outcomes achieved through contributions and volunteer efforts.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/donateAndVolunteer/volunteer.svg"
            alt=""
            width={470}
            height={648}
            className="w-full lg:w-[470px]"
          />
        </div>
      </div>
    </div>
  )
}

export default page