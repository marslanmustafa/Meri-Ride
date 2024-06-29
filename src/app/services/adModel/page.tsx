import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <div className="flex items-center gap-2 sm:gap-6 md:gap-8 flex-col w-full min-h-screen px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
        <div className=" relative w-full sm:w-[500px] lg:w-[730px] h-fit py-10 flex items-center flex-col gap-4">
          <div className="hidden md:block md:absolute bottom-3 -right-12">
            <Image
              src="/images/DoodleLine.svg"
              alt=""
              width={340}
              height={72}
              className=" h-auto w-[280px] lg:w-[340px]"
            />
          </div>
          <h3 className="bg-themeGreen py-1 px-2 text-textEm sm:text-lg uppercase w-fit rounded-md">
            Pricing
          </h3>
          <h1 className="py-1 px-2 text-center text-gray-900 font-bold text-2xl sm:text-4xl lg:text-6xl w-fit">
            Plan that works best for your business
          </h1>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5  ">
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-textEm lg:text-lg font-semibold">Interior Ads</h2>
            <p className="text-sm lg:text-textEm">
              Ads placed inside the rickshaw, such as on the back of the seats
            </p>
          </div>
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-textEm lg:text-lg font-semibold">Exterior Ads</h2>
            <p className="text-sm lg:text-textEm">
              Ads placed inside the rickshaw, such as on the back of the seats
            </p>
          </div>
          <div className="w-full lg:max-w-[400px] lg:px-6 px-4 py-5  space-y-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-textEm lg:text-lg font-semibold">Digital Ads</h2>
            <p className="text-sm lg:text-textEm">
              Small digital screens inside the rickshaw displaying rotating ads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
