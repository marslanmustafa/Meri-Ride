import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="overflow-x-hidden w-full bg-[#F7F8F7]">
      {/* div1 */}
      <div className="flex items-center gap-2 sm:gap-6 md:gap-8 flex-col w-full max-h-fit lg:max-h-[796px] px-4 py-6 sm:pt-8 sm:pb-12  md:px-8 lg:px-20 xl:px-28 md:pt-12">
        <div className=" relative w-full sm:w-[500px] lg:w-[730px] h-fit py-10 flex items-center flex-col gap-4">
          <div className="hidden md:block md:absolute bottom-3 -right-12">
            <Image
              src="/images/DoodleLine.svg"
              alt=""
              width={340}
              height={72}
              className="h-auto w-[280px] lg:w-[340px]"
            />
          </div>
          <h3 className="bg-primary py-1 px-2 text-[16px] sm:text-lg uppercase w-fit rounded-md">
            Pricing
          </h3>
          <h1 className="py-1 px-2 text-center themeGrayText2 font-bold text-2xl sm:text-4xl lg:text-6xl w-fit">
            Plan that works best for your business
          </h1>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5  ">
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-[16px] lg:text-lg font-semibold">Interior Ads</h2>
            <p className="text-sm lg:text-[16px]">
              Ads placed inside the rickshaw, such as on the back of the seats
            </p>
          </div>
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-[16px] lg:text-lg font-semibold">Exterior Ads</h2>
            <p className="text-sm lg:text-[16px]">
              Ads placed inside the rickshaw, such as on the back of the seats
            </p>
          </div>
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-[16px] lg:text-lg font-semibold">Digital Ads</h2>
            <p className="text-sm lg:text-[16px]">
              Small digital screens inside the rickshaw displaying rotating ads
            </p>
          </div>
        </div>
      </div>
      {/* div2 */}
      <div className="w-full lg:max-h-[796px] px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12 bg-black">
        <h1 className="py-1 px-2 mb-10 text-white font-bold text-2xl sm:text-4xl lg:text-5xl w-fit">
          <span className="text-primary">Advertisement</span> and Pricing Model for Rickshaw Service
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex md:flex-row flex-col items-center justify-center gap-5  ">
          {/* offer1 */}
          <div className="w-full xl:max-w-[290px] lg:px-7 px-5 py-4  space-y-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg lg:text-xl font-semibold">Basic</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <h4 className="w-[110px] relative text-4xl font-semibold"><span className="text-lg absolute top-0 left-0">$</span> <span className="pl-5">12/</span> <span className="text-lg absolute bottom-0 right-0">mo</span></h4>
            <div className="w-full flex items-center justify-center">
              <button className="py-2 text-[16px] bg-foreground rounded-md text-white w-[90%]" >Get Started</button>

            </div>
            <div className="py-3 border-t border-border">
              <h3 className="font-semibold text-sm">What Included:</h3>
              <ul className="space-y-3 py-3">
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Duration</span> Monthly</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Cost</span> TBD per Rickshaw</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Coverage</span> One space</p>
                </li>
              </ul>
            </div>
          </div>
          {/* offer2 */}
          <div className="w-full xl:max-w-[290px] lg:px-7 px-5 py-4  space-y-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg lg:text-xl font-semibold">Standard</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <h4 className="w-[110px] relative text-4xl font-semibold"><span className="text-lg absolute top-0 left-0">$</span> <span className="pl-5">12/</span> <span className="text-lg absolute bottom-0 right-0">mo</span></h4>
            <div className="w-full flex items-center justify-center">
              <button className="py-2 text-[16px] bg-foreground rounded-md text-white w-[90%]" >Get Started</button>
            </div>
            <div className="py-3 border-t border-border">
              <h3 className="font-semibold text-sm">What Included:</h3>
              <ul className="space-y-3 py-3">
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Duration</span> Monthly</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Cost</span> TBD for 5 Rickshaw</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Coverage</span> One space</p>
                </li>
              </ul>
            </div>
          </div>
          {/* offer3 */}
          <div className="w-full xl:max-w-[290px] lg:px-7 px-5 py-4  space-y-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg lg:text-xl font-semibold">Platinum</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <h4 className="w-[110px] relative text-4xl font-semibold"><span className="text-lg absolute top-0 left-0">$</span> <span className="pl-5">12/</span> <span className="text-lg absolute bottom-0 right-0">mo</span></h4>
            <div className="w-full flex items-center justify-center">
              <button className="py-2 text-[16px] font-semibold bg-primary rounded-md text-themeGrayText2 w-[90%]" >Get Started</button>

            </div>
            <div className="py-3 border-t border-border">
              <h3 className="font-semibold text-sm">What Included:</h3>
              <ul className="space-y-3 py-3">
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Duration</span> Monthly</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Cost</span> ($200 per Rickshaw)</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Coverage</span> One space</p>
                </li>
              </ul>
            </div>
          </div>
          {/* offer4 */}
          <div className="w-full xl:max-w-[290px] lg:px-7 px-5 py-4  space-y-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg lg:text-xl font-semibold">Premium</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <h4 className="w-[110px] relative text-4xl font-semibold"><span className="text-lg absolute top-0 left-0">$</span> <span className="pl-5">12/</span> <span className="text-lg absolute bottom-0 right-0">mo</span></h4>
            <div className="w-full flex items-center justify-center">
              <button className="py-2 text-[16px] bg-foreground rounded-md text-white w-[90%]" >Get Started</button>

            </div>
            <div className="py-3 border-t border-border">
              <h3 className="font-semibold text-sm">What Included:</h3>
              <ul className="space-y-3 py-3">
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Duration</span> Monthly</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Cost</span> TBD per Rickshaw</p>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <Image
                    src="/images/services/TickBullet.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="w-4 h-4" />
                  <p className="text-sm"> <span className="font-bold">Coverage</span> Two space</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* div3 */}
      <div className="w-full px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12">
        <div className="w-full text-themeGrayText2 space-y-4 sm:space-y-6">
          <h1 className="py-1 font-bold text-xl md:text-3xl lg:text-5xl w-fit">Advertisement on Rickshaws .. COMING SOON.</h1>
          <div className="w-full space-y-4 sm:space-y-7">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  How can I advertise on MeriRide rickshaws?
                  </h3>
                  <p className="text-sm sm:text-[16px] space-y-3">
                  To advertise on our rickshaws, please contact our marketing team at [insert contact details]. We offer various advertising options, including full and partial wraps, interior ads, and digital displays.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  What are the benefits of advertising on MeriRide rickshaws?
                  </h3>
                  <p className="text-sm sm:text-[16px] space-y-3">
                  Advertising on our rickshaws provides high visibility within the community, reaching a wide audience. It also supports a good cause, as the revenue from advertisements helps fund our programs and services for individuals with disabilities.
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
