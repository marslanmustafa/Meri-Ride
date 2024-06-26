import Image from "next/image";

const Home = ()=> {
  return (
    <div className="w-full h-fit md:pb-24 xl:min-h-screen px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
     <div className="mt-4 sm:mt-10 md:mt-20 w-full h-fit md:h-[248px] lg:h-[256px] xl:h-[305px] items-center rounded-3xl text-white bg-foreground flex justify-between gap-3 overflow-hidden">
          <div className=" w-full md:w-[calc(100%-352px)] lg:w-[calc(100%-432px)] p-5 md:py-10 md:pl-10 md:pr-2 xl:pl-12 xl:pr-0 xl:py-12 space-y-3 xl:space-y-6">
            <h1 className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] xl:text-[34px] font-semibold">
            <span className="text-themeGreen">
            Join us
              </span> in making a difference
            </h1>
            <p className="text-[10px] md:text-[11px] lg:text-sm">
              <span className="font-semibold">
              Empowering Opportunities Inc.
              </span>{" "}
              thrives on the generosity and support of individuals, businesses, and communities. Your contributions help us provide vital services to individuals with disabilities, fostering independence and inclusion. 
            </p>
           <div className="flex items-center justify start gap-2 sm:gap-4">
           <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-textEm md:font-medium rounded-lg !text-themeGrayText bg-themeGreen">
              Donate
            </div>
            <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-textEm md:font-medium rounded-lg !text-themeGrayText bg-white">
              Volunteer
            </div>
            <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-textEm md:font-medium rounded-lg text-white bg-transparent">
              Join Us
            </div>
           </div>
          </div>
          <div className="hidden md:block !h-full">
            <Image
              src="/images/about/Support.svg"
              alt="Donate"
              width={432}
              height={307}
              className="w-[346px] lg:w-[416px]"
            />
          </div>
        </div>
  </div>
  );
}

export default Home