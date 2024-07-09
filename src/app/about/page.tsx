import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SupportBanner } from "@/components"

const featuresData = [
  { sr: 1, feature: "User Profile Management" },
  { sr: 2, feature: "Ride Booking System" },
  { sr: 3, feature: "Real-Time Tracking" },
  { sr: 4, feature: "Donation & Volunteer" },
  { sr: 5, feature: "Global Reach and Impact" },
  { sr: 6, feature: "Feedback and Support" },
];
const starArray = Array.from({ length: 5 });

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <div className="w-full h-fit md:pb-24 px-4 py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12">
        <div className="relative w-full lg:w-[80%] flex justify-start gap-6 xl:gap-10 flex-col text-foreground">
          <div className="hidden md:block md:absolute -bottom-20 right-0 lg:-right-60">
            <Image
              src="/images/about/DoodleLine.svg"
              alt=""
              width={410}
              height={114}
              className="w-40 h-auto lg:w-[410px] lg:h-[114px]"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl xl:text-8xl font-semibold">
            About Us
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl">
            Welcome to Empowerment
          </h2>
          <p className="text-sm md:text-[16px] lg:text-lg xl:text-xl tracking-wide">
            Through Partnership, a non-profit organization dedicated to
            transforming the lives of individuals with disabilities by creating
            sustainable income opportunities. Our mission is to bridge the gap
            between able-bodied individuals and those with disabilities,
            especially the blind, to foster a collaborative environment where
            both can thrive.
          </p>
          <p className="text-sm md:text-[16px] lg:text-lg xl:text-xl tracking-wide">
            We believe in the power of partnership and the potential of every
            individual, regardless of their physical abilities. By developing
            innovative projects that pair able-bodied and disabled individuals,
            we aim to create a more inclusive society where everyone has the
            chance to succeed and contribute.
          </p>
        </div>
      </div>
      {/* div2 */}
      <div className="w-full lg:max-h-[796px] bg-black flex-col lg:flex-row flex items-center justify-between px-4 py-10 md:px-8 lg:px-20 xl:px-28 lg:py-16 text-white">
        <div className="w-full lg:w-[360px] xl:w-[420px] pb-8 lg:block flex-col sm:flex-row flex sm:items-center justify-between gap-5 sm:gap-10">
          <div className="lg:pl-12 xl:pl-16">
            <h1 className="text-3xl xl:text-5xl font-semibold pb-10">
              Our Story
            </h1>
            <h2 className="text-2xl xl:text-4xl font-semibold pb-8 sm:pb-14">
              Meri Ride was born
            </h2>
          </div>
          <Image
            src="/images/about/OurStory.svg"
            alt="Meri Ride"
            width={410}
            height={298}
            className="w-full sm:w-[360px] xl:w-[410px] xl:h-[298px]"
          />
        </div>
        <div className="w-full lg:w-[calc(100%-360px)] xl:w-[calc(100%-420px)] flex items-center justify-center flex-col gap-5 sm:gap-10">
          <p className="text-xs sm:text-sm">
            The Rickshaw Service Website project is an initiative by Empowering
            Opportunities Inc. aimed at providing a reliable, user-friendly
            platform for booking rickshaw transportation services for
            individuals with disabilities. This project seeks to enhance
            accessibility and independence by offering an efficient online
            system for scheduling rides, managing bookings, and ensuring safe,
            comfortable transportation.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-5">
            {featuresData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-3 xl:px-6 xl:py-5 w-full flex items-center justify-start gap-3 xl:gap-5 text-[16px] bg-foreground rounded-[6px]"
                >
                  <div className="w-7 h-7 rounded-full bg-themeGreen text-themeGrayText p-3 flex items-center justify-center">
                    {data.sr}
                  </div>
                  <p className="font-semibold text-sm xl:text-[16px]">
                    {" "}
                    {data.feature}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* div3 */}
      <div className="w-full bg-themeGreen  px-4 md:px-8 lg:px-20 xl:px-28 py-4">
        <h1 className="text-black font-bold text-lg sm:text-xl lg:text-[26px] pb-2 sm:pb-0">
          Join us in making a difference{" "}
        </h1>
        <p className="text-themeGrayText text-xs sm:text-sm lg:text-lg">
          Empowering Opportunities Inc thrives on the generosity and support of
          individuals, businesses, and communities.
        </p>
      </div>
      {/* div4 */}
      <div className="w-full h-fit  flex justify-between flex-col lg:flex-row px-4 md:px-8 lg:px-20 xl:px-28 py-14">
        <div className="w-full lg:w-[55%]  space-y-5 text-foreground">
          <h1 className="text-3xl lg:text-5xl font-bold">Our Team</h1>
          <p className="text-sm lg:text-[16px]">
            The Leadership Team is responsible for setting the strategic
            direction of the organization, ensuring alignment with our mission
            and values, and overseeing overall operations. This team includes
            our Executive Director, Chief Operating Officer, and other senior
            leaders.
          </p>
          <p className="text-sm lg:text-[16px]">
            This team recruits, trains, and supports our volunteers, and manages
            community outreach initiatives. They build strong relationships with
            volunteers and community partners to enhance our impact.
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold">Join our team</h1>
          <p className="text-sm lg:text-[16px]">
            We are always looking for passionate individuals to join our team
            and help us further our mission. If you are interested in
            contributing to a meaningful cause and making a difference in the
            lives of individuals with disabilities, please visit our careers
            page
          </p>
          <div className="w-fit px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-[16px] md:font-medium lg:font-bold rounded-lg text-themeGrayText bg-themeGreen">
            Join Us
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/about/TeamImage.svg"
            alt=""
            width={620}
            height={532}
            className="w-full lg:w-[620px] g:h-[532px]"
          />
        </div>
      </div>
      {/* div5 */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-20 xl:px-28 py-14">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold m-auto text-center pb-3 lg:pb-0">
          Partners & Collaborators
        </h1>
        <div className="items-center overflow-scroll lg:flex-wrap flex justify-start lg:justify-center gap-6">
          <Image
            src="/images/about/partners/Mailchimp.svg"
            alt="Mailchimp"
            width={140}
            height={140}
            className="w-[100px] sm:w-[160px]"
          />
          <Image
            src="/images/about/partners/Codecademy.svg"
            alt="Codecademy"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/Webflow.svg"
            alt="Webflow"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/Spotify.svg"
            alt="Spotify"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/Classpass.svg"
            alt="Classpass"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/DoorDash.svg"
            alt="DoorDash"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/DocuSign.svg"
            alt="DocuSign"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/Nike.svg"
            alt="Nike"
            width={140}
            height={140}
            className="w-[160px]"
          />
          <Image
            src="/images/about/partners/Google.svg"
            alt="Google"
            width={140}
            height={140}
            className="w-[160px]"
          />
        </div>
      </div>
      {/* div6 */}
      <div className="w-full px-4 md:px-8 lg:px-20 xl:px-28 pt-7 md:pt-10 lg:pt-14">
        <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl m-auto text-center pb-5 font-semibold text-black lgpb-10">
          Success Stories{" "}
        </h1>
        {/* maindiv */}
        <div className="flex justify-between gap-4 sm:gap-8 md:gap-12 flex-col md:flex-row">
          <div className="w-[400px] flex items-center justify-start ms:justify-center">
            <Image
              src="/images/about/Cameron.svg"
              alt="Star"
              width={390}
              height={300}
              className="w-[100px] sm:w-[140px] md:w-320px lg:w-[390px] lg:h-[300px]"
            />
          </div>
          <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-400px)] space-y-3 md:space-y-6 text-themeGrayText py-3 lg:py-6">
            <div className="w-fit flex items-center justify-center gap-2">
              {starArray.map((_, index) => (
                <Image
                  key={index}
                  src="/images/about/Star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              ))}
            </div>
            <p className="text-sm lg:text-[16px]">
              Volunteering with Empowering Opportunities Inc. has been one of
              the most rewarding experiences of my life. Mentoring individuals
              with disabilities and seeing their progress and confidence grow is
              incredibly fulfilling. I&apos;m grateful for the opportunity to
              give back to the community in such a meaningful way
            </p>
            <h3 className="text-lg sm:text-xl lg:text-3xl font-bold">
              Cameron Williamson
            </h3>
            <h4 className="text-xs sm:text-[16px] lg:text-xl font-semibold">
              CEO & CO Founder At Cikafy
            </h4>
          </div>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-end gap-4">
          <div className="w-10 h-10 lg:w-14 lg:h-14 text-[24px] lg:text-[32px] flex items-center justify-center rounded-full p-3 bg-foreground text-white">
            <ChevronLeft size={32} />
          </div>
          <div className="w-10 h-10 lg:w-14 lg:h-14 text-[24px] lg:text-[32px] flex items-center justify-center rounded-full p-3 bg-foreground text-white">
            <ChevronRight size={32} />
          </div>
        </div>
      </div>
        {/* support */}
       <SupportBanner/>
      {/* div7 */}
     {/* <ConnectForm /> */}
    </div>
  );
};

export default page;
