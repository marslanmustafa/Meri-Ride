import React from 'react';
import Image from 'next/image';
import { LandingBannerProps } from '@/lib/types';

const LandingBanner: React.FC<LandingBannerProps> = ({ data }) => {
  return (
    <div className="w-full h-fit md:pb-5 px-4 pt-8 md:px-8 lg:px-20 xl:px-28 md:pt-12 flex justify-center">
      <div

        className="relative w-full  h-[180px] sm:h-[320px] lg:h-[440px] rounded-3xl"
      >
        <div className="relative w-full h-[180px] sm:h-[320px] lg:h-[440px] rounded-3xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.heading}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl w-fit h-fit"
            priority
          />
          <h1 className="absolute bottom-2.5 left-2.5 sm:bottom-10 sm:left-10 text-themeGreen text-2xl md:text-3xl lg:text-6xl font-bold drop-shadow-3xl">
            {data.heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
