import React from 'react'
import { ApplicationForm, LandingBanner } from "@/components"
import { BannerData } from '@/lib/types';
import Image from 'next/image';

const bannerData: BannerData = {
  heading: "Driver Recruitment ",
  image: "/images/driverRecruitment/Drivers.png"
};

const recruitmentData = {
  listItems: [
    {
      category: "Qualifications",
      items: [
        "Valid driver’s license with a clean driving record.",
        "Minimum age requirement (e.g., 21 years old).",
        "Ability to pass a background check and drug screening.",
        "Prior experience in driving, especially in transportation services for individuals with disabilities, is preferred.",
        "Excellent communication skills and a customer-focused attitude.",
        "Physical ability to assist passengers with mobility needs, including lifting and securing wheelchairs."
      ]
    },
    {
      category: "Responsibilities",
      items: [
        "Providing safe and reliable transportation for individuals with disabilities.",
        "Assisting passengers in and out of the vehicle and ensuring their comfort and safety.",
        "Adhering to scheduled pickup and drop-off times.",
        "Maintaining the cleanliness and upkeep of the rickshaw or vehicle.",
        "Reporting any incidents or issues to the transportation coordinator.",
        "Completing necessary documentation and ride logs."
      ]
    },
    {
      category: "Benefits",
      items: [
        "Competitive Pay",
        "Flexible Scheduling",
        "Training and Development",
        "Supportive Work Environment",
        "Health and Wellness",
        "Paid Time Off",
        "Employee Assistance Program",
        "Rewarding Work"
      ]
    }
  ]
};


const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <LandingBanner data={bannerData} />
      {/* div2 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-5'>
        <div className=" bg-black rounded-3xl px-5 py-10">
          <h1 className=' text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white' ><span className='text-themeGreen'>Our Driver</span> Recruitment Page is designed to attract qualified candidates who are passionate </h1>
        </div>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-0 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-16'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6 px-4 py-5 sm:p-10 bg-white md:rounded-xl">
          <p className="text-xs sm:text-sm py-2 sm:py-4">
            This section outlines the qualifications and responsibilities expected of our drivers. It ensures that potential applicants understand what is required for the role and can assess their suitability before applying.
          </p>
          <div>
            {recruitmentData.listItems.map((section, index) => (
              <div key={index} className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{section.category}</h2>
                <ul className="list-disc text-xs sm:text-sm space-y-3 px-5">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-center sm:w-fit sm:block'>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page