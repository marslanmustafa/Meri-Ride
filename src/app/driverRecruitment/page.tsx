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
      category: "Benefits of Joining MeriRide:",
      items: [
        "Inclusive Work Environment: Work alongside individuals with diverse abilities in a supportive and collaborative setting..",
        "Sustainable Income: Earn a steady income while contributing to a meaningful cause.",
        "Training and Support: Receive comprehensive training and ongoing support to excel in your role.",
      ]
    },
    {
      category: "Benefits of Joining MeriRide:",
      items: [
        "Valid driving license",
        "Commitment to our mission and values",
        "Willingness to work in a team-oriented environment",
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
          <h1 className=' text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white' ><span className='text-primary'>Our Driver</span> Recruitment Page is designed to attract qualified candidates who are passionate </h1>
        </div>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-10'>
          <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
              <div className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Join Our Team</h1>
                <p className="text-sm lg:text-[16px]">
                At MeriRide, we are always looking for dedicated and passionate individuals to join our team. If you have a strong commitment to making a difference and want to be part of an inclusive workforce, we want to hear from you!
                </p>
              </div>
          </div>
        </div>
      {/* div4 */}
      <div className='w-full h-fit md:pb-5 px-0 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-16'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6 px-4 py-5 sm:p-10 bg-white md:rounded-xl">
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
            <div className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">How to Apply: </h2>
                <p className="list-disc text-xs sm:text-sm space-y-3">
                Fill out our online application form or contact us directly at <a href="mailto:info@meriride.com" className='text-primary font-bold'>info@meriride.com</a>. We look forward to welcoming you to our team
                </p>
              </div>
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