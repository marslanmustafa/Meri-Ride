import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SupportBanner = () => {
  return (
    <div className="w-full h-fit px-4 md:px-8 lg:px-20 xl:px-32 py-7 md:py-10 lg:py-14">
    <div className=" w-full h-fit md:h-[262px] lg:h-[307px] items-center rounded-3xl text-white bg-foreground flex justify-between gap-5 overflow-hidden">
    <div className="w-full md:w-[calc(100%-386px)] lg:w-[calc(100%-432px)] h-full p-5 md:py-10 md:px-10 md:pr-2 xl:p-12 space-y-3 xl:space-y-7">
      <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        <span className='text-primary'>Support</span> Us
      </h1>
      <p className="text-[10px] text-xs lg:text-sm">
        <span className="font-semibold">
          Empowering Opportunities Inc.
        </span>{" "}
        thrives on the generosity and support of individuals, businesses,
        and communities. Your contributions help us provide vital services
        to individuals with disabilities, fostering independence and
        inclusion. Here are various ways you can support us:
      </p>
      <div>
      <Link href="/contact" className="w-fit px-4 py-2 lg:px-8 lg:py-3 text-xs sm:text-sm lg:text-[16px] md:font-medium lg:font-bold rounded-lg !text-themeGrayText bg-primary">
        Join Us
      </Link>
      </div>
    </div>
    <div className="hidden md:block">
      <Image
        src="/images/about/Support.svg"
        alt="Donate"
        width={432}
        height={307}
        className="w-[382px] lg:w-[432px] h-full"
      />
    </div>
  </div>
  </div>
  )
}

export default SupportBanner