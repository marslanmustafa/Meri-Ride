import React from 'react'
import { LandingBanner, SupportBanner } from "@/components"
import { BannerData } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';


const bannerData: BannerData = {
  heading: "Transportation",
  heading2: "Transportation Services",
  image: "/images/services/Transportation.png"
};

const businessData = [
  {
    sr: 1,
    heading: "Enhanced Independence",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    sr: 2,
    heading: "Increased Employment Opportunities",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    sr: 3,
    heading: "Improved Access to Healthcare ",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    sr: 4,
    heading: "Social Inclusion and Community",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const supportData = {
  para: "Use our transportation services for your daily commute and recommend us to friends and family. Your support helps create jobs and empowers those with disabilities."
}

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <LandingBanner data={bannerData} />
      {/* div2 */}
      <div className='w-full h-fit md:pb-10 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12 flex items-center justify-between md:flex-row flex-col gap-4'>
        <h2 className='w-full md:w-[48%] text-xl sm:text-2xl lg:text-3xl font-bold text-black'>
          We offer comprehensive training programs tailored to the unique needs
        </h2>
        <p className='w-full md:w-[48%] text-sm lg:text-[16px] text-black'>These programs encompass a wide range of vocational skills, from technical training and computer literacy to creative arts and crafts, ensuring participants can pursue careers aligned with their interests and abilities</p>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-5'>
        <div className=" bg-black rounded-3xl px-5 py-10">
          <h1 className=' text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white' ><span className='text-primary'>Volunteers can share</span> their professional skills and expertise by providing training, mentorship</h1>
        </div>
      </div>
      {/* div4 */}
      <div className='w-full h-fit  px-4 md:px-8 lg:px-20 xl:px-28 pb-5 '>
        <div className=" rounded-3xl px-5 md:py-10">
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black pb-5' >{bannerData.heading2}</h1>
          {/*From Content*/}
          <p className='w-full text-sm lg:text-[16px] text-black'>Our motorcycle rickshaw transportation service is designed to provide a cost-effective and convenient mode of transport for the local community. This service offers a reliable means of travel while creating employment opportunities for individuals with disadvantage, fostering an environment of mutual support and cooperation.</p>
        </div>
      </div>
      {/* div5 */}
      <div className='w-full h-fit bg-foreground px-2 sm:px-4 md:px-8 lg:px-20 xl:px-28 py-8'>
        <div className='relative w-fit'>
          <div className="hidden md:block md:absolute -bottom-3 -right-10 lg:-right-12">
            <Image
              src="/images/DoodleLine.svg"
              alt=""
              width={340}
              height={72}
              className=" h-auto w-[130px] lg:w-[150px]"
            />
          </div>
          <h1 className="py-1 px-2 text-center text-white font-bold text-xl sm:text-2xl lg:text-4xl w-fit">
            Business
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:py-3">

          {businessData.map((data, index) => {
            return (
              <div
                key={index}
                className="px-0 sm:px-4 py-3 xl:px-6 xl:py-5 w-full flex items-center justify-start gap-3 xl:gap-5 text-[16px] rounded-[6px]"
              >
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-primary bg-white text-black p-3 flex items-center justify-center">
                  {data.sr}
                </div>
                <div className="text-white p-3">
                  <h1 className='font-semibold text-sm xl:text-[16px] pb-2'>{data.heading}</h1>
                  <p className="text-xs xl:text-sm">
                    {" "}
                    {data.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* div6 */}
      <div className='w-full h-fit md:pb-5 px-0 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-16'>
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6 px-4 py-5 sm:p-10 bg-white md:rounded-xl">
          <div className="w-full space-y-4 sm:space-y-7">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">How do I book a ride with MeriRide?</h1>
            <p className="text-sm sm:text-[16px] space-y-3">
              You can book a ride by calling our customer service hotline. Details on the booking process can be found on our <Link className='text-primary font-bold' href="/services/transportation">Transportation Services</Link> page.
            </p>
          </div>
          <div className="w-full space-y-4 sm:space-y-7">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">What areas does MeriRide cover?</h1>
            <p className="text-sm sm:text-[16px] space-y-3">
              Currently, MeriRide operates in [insert areas]. We are working on expanding our services to cover more regions. Check our website for the latest updates on our service areas
            </p>
          </div>
          <div className="w-full space-y-4 sm:space-y-7">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Are MeriRide drivers trained?</h1>
            <p className="text-sm sm:text-[16px] space-y-3">
              Yes, all MeriRide drivers undergo training to ensure they provide safe and reliable service. This training includes road safety, customer service, and community awareness.
            </p>
          </div>
        </div>
      </div>
      {/* div7 */}
      <SupportBanner data={supportData} />
      {/* div8 */}
      {/* <ConnectForm /> */}
    </div>
  )
}

export default page