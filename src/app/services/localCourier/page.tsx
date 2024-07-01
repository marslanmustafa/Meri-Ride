import React from 'react'
import { ConnectForm, LandingBanner, SupportBanner } from "@/components"
import { BannerData } from '@/lib/types';
import Image from 'next/image';


const bannerData: BannerData = {
  heading: "Local Courier Service",
  image: "/images/services/localCourier.svg"
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

const bookRideData = [
  {
    heading: "Call the Hotline:",
    para: "Dial our dedicated transportation booking hotline at [hotline number], available from [operating hours]."
  },
  {
    heading: "Provide Details",
    para: "Speak with one of our customer service representatives and provide necessary details including your name, contact information, pickup and drop-off locations, and desired time."
  },
  {
    heading: "Special Requests",
    para: "Inform the representative of any special requirements such as wheelchair access or assistance needed during the ride."
  },
  {
    heading: "Receive Confirmation",
    para: "The representative will confirm the booking and provide you with a reference number and expected arrival time."
  }
];

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <LandingBanner data={bannerData} />
      {/* div2 */}
      <div className='w-full h-fit md:pb-10 px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12 flex items-center justify-between md:flex-row flex-col gap-4'>
        <h2 className='w-full md:w-[48%] text-xl sm:text-2xl lg:text-3xl font-bold text-black'>
          We offer comprehensive training programs tailored to the unique needs
        </h2>
        <p className='w-full md:w-[48%] text-sm lg:text-[16px] text-black'>These programs encompass a wide range of vocational skills, from technical training and computer literacy to creative arts and crafts, ensuring participants can pursue careers aligned with their interests and abilities</p>
      </div>
      {/* div3 */}
      <div className='w-full h-fit md:pb-5 px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-5'>
        <div className=" bg-black rounded-3xl px-5 py-10">
          <h1 className=' text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white' ><span className='text-themeGreen'>Volunteers can share</span> their professional skills and expertise by providing training, mentorship</h1>
        </div>
      </div>
      {/* div4 */}
      <div className='w-full h-fit  px-4 md:px-8 lg:px-20 xl:px-32 pb-5 '>
        <div className=" rounded-3xl px-5 md:py-10">
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black pb-5' >{bannerData.heading}</h1>
          <p className='w-full text-sm lg:text-[16px] text-black'>Our motorcycle rickshaw service provides affordable and reliable transportation for local communities. Our drivers are partnered with blind individuals to ensure that both benefit from the earnings, fostering a sense of teamwork and shared success.</p>
        </div>
      </div>
      {/* div5 */}
      <div className='w-full h-fit bg-foreground px-2 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-8'>
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
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-themeGreen bg-white text-black p-3 flex items-center justify-center">
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
      <div className='w-full h-fit md:pb-5 px-0 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-16'>
      <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6 px-4 py-5 sm:p-10 bg-white md:rounded-xl">
          <h1 className="py-1 font-bold text-xl md:text-3xl lg:text-5xl w-fit">How to Book a Ride</h1>
          <div className="w-full space-y-4 sm:space-y-7">
            {bookRideData.map((data, index) => {
              return (
                <div className="space-y-4 sm:space-y-6" key={index}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {data.heading}
                  </h3>
                  <p className="text-sm sm:text-[16px] space-y-3">
                    {data.para}
                  </p>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
      {/* div7 */}
      <SupportBanner />
      {/* div8 */}
      <ConnectForm />
    </div>
  )
}

export default page