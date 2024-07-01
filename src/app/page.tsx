import { ServiceCard, Faq} from "@/components";
import { Service } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesCards: Service[] = [
  {
    icon: "/images/home/servicesCards/Transportation.svg",
    heading: "Transportation Services",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/services/transportation",
  },
  {
    icon: "/images/home/servicesCards/LocalCourier.svg",
    heading: "Local Courier Service",
    para: "We offer a fast and reliable courier service for the community. Whether it's important documents ",
    link: "/services/localCourier",
  },
  {
    icon: "/images/home/servicesCards/LastMileDelivery.svg",
    heading: "Last Mile Delivery Services",
    para: "In partnership with local businesses, our motorcycle rickshaw service ensures that goods reach their....",
    link: "/services/lastMile",
  },
  {
    icon: "/images/home/servicesCards/adModel.svg",
    heading: "Advertisement Model for Rickshaw Services",
    para: "We offer advertising space on our rickshaws to local businesses. Advertisements can be full or partial wraps",
    link: "/services/adModel",
  },
];



const Home = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <div
        style={{
          background: `linear-gradient(106deg , #000000, #00000000)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
        className="relative w-[768px] h-[386px] sm:w-full sm:h-[336px] md:h-[436px] lg:h-[596px] xl:h-[696px]"
      >
        <div
        style={{
          background: `url(/images/home/LandingBg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full z-[1] flex items-center px-4 md:px-8 lg:px-20 xl:px-32 py-5"
      >
        
        <div className="px-4 h-full w-screen sm:w-[60%] bg-transparent flex flex-col justify-center gap-10 xl:gap-16">
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-white font-bold xl:leading-[80px]">
            Empowering individuals with{" "}
            <span className="text-themeGreen">disabilities.</span>
          </h1>
          <h2 className="text-lg md:text-2xl xl:text-4xl text-white">
            Through self-reliance and collaboration.
          </h2>
          <div
            className={
              "w-fit px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-[16px] md:font-medium lg:font-bold border border-themeGreen rounded-lg text-themeGrayText bg-themeGreen"
            }
          >
            <Link href="/hire">Hire MeriRide</Link>
          </div>
        </div>
      </div>
      </div>
      
      {/* div2 */}
      <div className="relative bg-foreground flex items-center w-full h-fit md:h-[160px] xl:min-h-[200px] px-4 md:px-8 lg:px-20 xl:px-32 py-5">
        <p className="w-full md:w-[82%] lg:w-[86%] text-sm md:text-lg lg:text-2xl xl:text-3xl tracking-wide text-white font-semibold">
          <span className="!text-themeGreen">We believe</span> in the power of
          partnership and the potential of every individual, regardless of their
          physical abilities.
        </p>
        <div className="w-[312px] h-[80px] xl:w-[384px] xl:h-[98px] hidden md:block md:absolute bottom-14 px-4 md:right-8 lg:right-20 xl:right-32">
          <Image
            src="/images/DoodleLine.svg"
            alt=""
            width={386}
            height={106}
            className="h-auto w-auto"
          />
        </div>
      </div>
      {/* div3 */}
      <div className="border-t border-b border-border w-full h-fit flex items-center justify-between gap-5 md:pb-24 xl:min-h-screen px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/images/home/about.svg"
            alt=""
            width={516}
            height={397}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-start lg:gap-6 flex-col text-foreground">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold pb-1 lg-pb-0">
            About Us
          </h1>
          <h2 className="text-lg lg:text-xl xl:text-2xl pb-5 lg-pb-0">
            Welcome to Empowerment
          </h2>
          <p className="text-xs lg:text-sm xl:text-[16px] tracking-wide pb-3 lg-pb-0">
            Through Partnership, a{" "}
            <span className="font-semibold"> non-profit organization</span>{" "}
            dedicated to transforming the lives of individuals with disabilities
            by creating sustainable income opportunities
          </p>
          <p className="text-xs lg:text-sm xl:text-[16px] tracking-wide pb-3 lg-pb-0">
            Our mission is to bridge the gap between able-bodied{" "}
            <span className="font-semibold">individuals and those</span> with
            disabilities, especially the blind, to foster a collaborative
            environment where both can thrive.
          </p>
          <p className="text-xs lg:text-sm xl:text-[16px] tracking-wide">
            <span className="font-semibold">We believe</span> in the power of
            partnership and the potential of every individual, regardless of
            their physical abilities. By developing innovative projects that
            pair able-bodied and disabled individuals, we aim to create a more
            inclusive society where everyone has the chance to succeed and
            contribute.
          </p>
        </div>
      </div>
      {/* div4 */}
      <div className="w-full h-fit md:pb-24 px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
        <h1 className="text-2xl xl:text-4xl font-semibold pb-10">
          Our Services
        </h1>
        <div className="w-full text-themeGrayText grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:flex xl:items-center xl:justify-start gap-5">
          {ServicesCards.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              heading={service.heading}
              para={service.para}
              link={service.link}
            />
          ))}
        </div>
        {/* div5 joinus */}
        <div className="mt-4 sm:mt-10 md:mt-20 w-full h-fit md:h-[248px] lg:h-[256px] xl:h-[305px] items-center rounded-3xl text-white bg-foreground flex justify-between gap-3 overflow-hidden">
          <div className=" w-full md:w-[calc(100%-352px)] lg:w-[calc(100%-432px)] p-5 md:py-10 md:pl-10 md:pr-2 xl:pl-12 xl:pr-0 xl:py-12 space-y-3 xl:space-y-6">
            <h1 className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] xl:text-[34px] font-semibold">
              <span className="text-themeGreen">Join us</span> in making a
              difference
            </h1>
            <p className="text-[10px] md:text-[11px] lg:text-sm">
              <span className="font-semibold">
                Empowering Opportunities Inc.
              </span>{" "}
              thrives on the generosity and support of individuals, businesses,
              and communities. Your contributions help us provide vital services
              to individuals with disabilities, fostering independence and
              inclusion.
            </p>
            <div className="flex items-center justify start gap-2 sm:gap-4">
              <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-[16px] md:font-medium rounded-lg !text-themeGrayText bg-themeGreen">
                Donate
              </div>
              <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-[16px] md:font-medium rounded-lg !text-themeGrayText bg-white">
                Volunteer
              </div>
              <div className="w-fit px-3 py-2 lg:px-5 xl:px-8 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-[16px] md:font-medium rounded-lg text-white bg-transparent">
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
      {/* div5 */}
      <div className="w-full h-fit md:pb-24 px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-1">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold pb-3 md:pb-10">
          Frequenlty Asked Questions
        </h1>
        <Faq/>
      </div>
    </div>
  );
};

export default Home;
