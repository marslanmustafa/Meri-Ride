import React from 'react'
import { VolunteerAppForm, LandingBanner, DonorInfoForm } from "@/components"
import { BannerData } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const bannerData: BannerData = {
  heading: "Donate and Volunteer",
  image: "/images/donateAndVolunteer/Donate.png"
};

const detailsData = {
  main: [
    {
      heading: "Donate Money",
      para: "Make a one-time or recurring donation to support our programs."
    },
    {
      heading: "Donate Skills and Time",
      para: "Share your expertise and volunteer with us to help train and support our team.",
    },
    {
      heading: "Donate Resources",
      para: "Contribute needed items and resources to support our operations."
    },
  ]
}



const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <LandingBanner data={bannerData} />
      {/* div2 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-5'>
        <div className=" bg-black rounded-3xl lg:px-6 px-5 py-10 lg:py-12">
          <h1 className=' text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white' >Your support can make a significant difference in the lives of individuals with disabilities. By donating or volunteering, you help us create inclusive environments and opportunities for self-reliance.</h1>
        </div>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-10'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Ways to Help</h1>
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
          <div className="w-full space-y-4 sm:space-y-7 py-2 sm:py-5">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Acknowledgment</h1>
            <p className="text-sm lg:text-[16px]">
              We recognize and appreciate our donors and volunteers for their invaluable support in making our mission a reality.
            </p>
          </div>
          <div className=" bg-black rounded-3xl lg:px-10 md:px-6 px-4 py-10 lg:py-12 space-y-3">
            <h1 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">Join Us Message</h1>
            <p className="text-white text-sm lg:text-[16px]">
              Join MeriRide and be a part of a movement that empowers abilities and transforms lives. Together, we can create a more inclusive society. Donate, volunteer, or use our services today!
            </p>
          </div>
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
      {/* div 2ndlast */}
      <div className="w-full px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12">
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
          <h1 className="py-1 font-bold text-xl md:text-3xl lg:text-5xl w-fit">Donations and Volunteering</h1>
          <div className="w-full space-y-4 sm:space-y-7">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                How can I make a donation to MeriRide?
              </h3>
              <p className="text-sm sm:text-[16px] space-y-3">
                You can make a donation by visiting by calling our customer service. where you can choose to make a one-time or recurring donation.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                How can I volunteer with MeriRide?
              </h3>
              <p className="text-sm sm:text-[16px] space-y-3">
                To volunteer with MeriRide, please visit our{" "}
                <Link
                  className='text-primary font-bold'
                  href="/donateAndVolunteer">
                   Volunteer Page 
                </Link>
                {" "}and fill out the application form. We will get in touch with you to discuss how you can best contribute your skills and time to our mission.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                What types of volunteering opportunities are available?
              </h3>
              <p className="text-sm sm:text-[16px] space-y-3">
                We have various volunteering opportunities, including administrative support, training, event planning, and direct service roles. Check our{" "}
                <Link className='text-primary font-bold'
                  href="/donateAndVolunteer">
                  Volunteer Page
                </Link>
                {" "}for more details and current opportunities.
                If you have any other questions, please feel free to contact us at [insert contact details]. We are here to help and look forward to your support in making a difference!

              </p>
            </div>
          </div>
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