import Image from "next/image";
import React from "react";

const featuresData = [
  { sr: 1, feature: "User Profile Management" },
  { sr: 2, feature: "Ride Booking System" },
  { sr: 3, feature: "Real-Time Tracking" },
  { sr: 4, feature: "Donation & Volunteer" },
  { sr: 5, feature: "Global Reach and Impact" },
  { sr: 6, feature: "Feedback and Support" },
];

const page = () => {
  return (
    <div className="w-full">
      {/* div1 */}
      <div className="w-full h-screen bg-white px-4 md:px-8 lg:px-20 xl:px-32 lg:py-10">
        <div className="relative w-[78%] space-y-6 bg-white text-foreground">
          <div className="absolute -bottom-20 -right-60">
            <Image
              src="./images/DoodleLine.svg"
              alt=""
              width={410}
              height={114}
              className="w-[410px] h-[114px]"
            />
          </div>
          <h1 className="text-8xl font-semibold">About Us</h1>
          <h2 className="text-6xl">Welcome to Empowerment</h2>
          <p className="text-xl tracking-wide">
            Through Partnership, a non-profit organization dedicated to
            transforming the lives of individuals with disabilities by creating
            sustainable income opportunities. Our mission is to bridge the gap
            between able-bodied individuals and those with disabilities,
            especially the blind, to foster a collaborative environment where
            both can thrive.
          </p>
          <p className="text-xl tracking-wide">
            We believe in the power of partnership and the potential of every
            individual, regardless of their physical abilities. By developing
            innovative projects that pair able-bodied and disabled individuals,
            we aim to create a more inclusive society where everyone has the
            chance to succeed and contribute.
          </p>
        </div>
      </div>
      {/* div2 */}
      <div className="w-full h-screen bg-black flex justify-between px-4 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-white">
        <div className="w-[420px]">
          <div className="pl-16">
            <h1 className="text-[48px] font-semibold pb-10">Our Story</h1>
            <h2 className="text-[28px] font-semibold pb-10">
              Meri Ride was born
            </h2>
          </div>
          <Image
            src="./images/OurStory.svg"
            alt="Meri Ride"
            width={410}
            height={298}
            className="w-[410px] h-[298px]"
          />
        </div>
        <div className="w-[calc(100%-420px)] flex items-center justify-center flex-col gap-10">
          <p className="text-sm">
            The Rickshaw Service Website project is an initiative by Empowering
            Opportunities Inc. aimed at providing a reliable, user-friendly
            platform for booking rickshaw transportation services for
            individuals with disabilities. This project seeks to enhance
            accessibility and independence by offering an efficient online
            system for scheduling rides, managing bookings, and ensuring safe,
            comfortable transportation.
          </p>
          <div className="w-full grid grid-cols-2 grid-rows-3 gap-5">
            {featuresData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex items-center justify-start gap-5 text-textEm bg-foreground px-6 py-5 rounded-[6px]"
                >
                  <div className="w-7 h-7 rounded-full bg-themeGreen text-themeGrayText p-3 flex items-center justify-center">
                    {data.sr}
                  </div>
                  <p className="font-semibold"> {data.feature}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* div3 */}
      <div className="w-full bg-themeGreen  px-4 md:px-8 lg:px-20 xl:px-32 py-4">
        <h1 className="text-black font-bold text-[26px]">
          Join us in making a difference{" "}
        </h1>
        <p className="text-themeGrayText text-lg">
          Empowering Opportunities Inc thrives on the generosity and support of
          individuals, businesses, and communities.
        </p>
      </div>
      {/* div4 */}
      <div className="w-full h-screen flex justify-between bg-white px-4 md:px-8 lg:px-20 xl:px-32 py-14">
        <div className="w-[55%]  space-y-6 bg-white text-foreground">
          <h1 className="text-5xl font-bold">Our Team</h1>
          <p className="text-textEm">
            The Leadership Team is responsible for setting the strategic
            direction of the organization, ensuring alignment with our mission
            and values, and overseeing overall operations. This team includes
            our Executive Director, Chief Operating Officer, and other senior
            leaders.
          </p>
          <p className="text-textEm">
            This team recruits, trains, and supports our volunteers, and manages
            community outreach initiatives. They build strong relationships with
            volunteers and community partners to enhance our impact.
          </p>
          <h1 className="text-4xl font-bold">Join our team</h1>
          <p className="text-textEm">
            We are always looking for passionate individuals to join our team
            and help us further our mission. If you are interested in
            contributing to a meaningful cause and making a difference in the
            lives of individuals with disabilities, please visit our careers
            page
          </p>
          <div
            className="w-fit px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-textEm md:font-medium lg:font-bold rounded-lg text-themeGrayText bg-themeGreen"          >
            Join Us
          </div>
        </div>
        <div className="">
          <Image
            src="./images/TeamImage.svg"
            alt=""
            width={620}
            height={532}
            className="w-[620px] h-[532px]"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
