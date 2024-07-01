import React from 'react'
import { LandingBannerProps } from '@/lib/types';

const LandingBanner: React.FC<LandingBannerProps> = ({ data }) => {
  return (
    <div className="w-full h-fit md:pb-5 px-4 pt-8 md:px-8 lg:px-20 xl:px-32 md:pt-12 flex  justify-center">
      <div
        style={{
          background: `linear-gradient(106deg , #000000, #00000000)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}

        className="relative w-full xl:max-w-[1208px] h-[180px] sm:h-[320px] lg:h-[440px] rounded-3xl"
      >
        <div
          style={{
            background: `url(${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="top-0 left-0 absolute w-full h-[180px] sm:h-[320px] lg:h-[440px] rounded-3xl">
          <h1 className='absolute bottom-2.5 left-2.5 sm:bottom-10 sm:left-10 text-themeGreen text-2xl md:text-3xl lg:text-6xl font-bold drop-shadow-3xl'> {data.heading} </h1>
        </div>
      </div>
    </div>
  )
}

export default LandingBanner