import { ChevronLeft, ChevronRight } from "lucide-react";
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
const starArray = Array.from({ length: 5 });

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
      {/* div1 */}
      <div className="w-full h-fit md:pb-24 xl:min-h-screen px-4 py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
        <div className="relative w-full lg:w-[80%] flex justify-start gap-6 flex-col text-foreground">
          <div className="hidden md:block md:absolute -bottom-20 right-0 lg:-right-60">
            <Image
              src="/images/about/DoodleLine.svg"
              alt=""
              width={410}
              height={114}
              className="w-40 h-auto lg:w-[410px] lg:h-[114px]"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl xl:text-8xl font-semibold">About Us</h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl">Welcome to Empowerment</h2>
          <p className="text-sm md:text-textEm lg:text-lg xl:text-xl tracking-wide">
            Through Partnership, a non-profit organization dedicated to
            transforming the lives of individuals with disabilities by creating
            sustainable income opportunities. Our mission is to bridge the gap
            between able-bodied individuals and those with disabilities,
            especially the blind, to foster a collaborative environment where
            both can thrive.
          </p>
          <p className="text-sm md:text-textEm lg:text-lg xl:text-xl tracking-wide">
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
            src="/images/about/OurStory.svg"
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
      <div className="w-full min-h-screen flex justify-between px-4 md:px-8 lg:px-20 xl:px-32 py-14">
        <div className="w-[55%]  space-y-5 text-foreground">
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
          <div className="w-fit px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-textEm md:font-medium lg:font-bold rounded-lg text-themeGrayText bg-themeGreen">
            Join Us
          </div>
        </div>
        <div className="">
          <Image
            src="/images/about/TeamImage.svg"
            alt=""
            width={620}
            height={532}
            className="w-[620px] h-[532px]"
          />
        </div>
      </div>
      {/* div5 */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-20 xl:px-32 py-14">
        <h1 className="text-4xl font-bold m-auto text-center">
          Partners & Collaborators
        </h1>
        <div className="items-center flex-wrap flex justify-center gap-6">
          <Image
            src="/images/about/partners/Mailchimp.svg"
            alt="Mailchimp"
            width={140}
            height={140}
            className="w-[160px]"
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
      <div className="w-full px-4 md:px-8 lg:px-20 xl:px-32 py-14">
        <h1 className="text-5xl font-semibold text-black m-auto text-center pb-10">
          Success Stories{" "}
        </h1>
        {/* maindiv */}
        <div className="flex justify-between gap-12">
          <div className="w-[400px] flex items-center justify-center">
            <Image
              src="/images/about/Cameron.svg"
              alt="Star"
              width={390}
              height={300}
              className="w-[390px] h-[300px]"
            />
          </div>
          <div className="w-[calc(100%-400px)] space-y-6 text-themeGrayText">
            <div className="w-fit flex items-center justify-center gap-2">
              {starArray.map((_, index) => (
                <Image
                  key={index}
                  src="/images/about/Star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <p className="text-textEm">
              Volunteering with Empowering Opportunities Inc. has been one of
              the most rewarding experiences of my life. Mentoring individuals
              with disabilities and seeing their progress and confidence grow is
              incredibly fulfilling. I&apos;m grateful for the opportunity to
              give back to the community in such a meaningful way
            </p>
            <h3 className="text-3xl font-bold">Cameron Williamson</h3>
            <h4 className="text-xl font-semibold">
              CEO & CO Founder At Cikafy
            </h4>
          </div>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-end gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full p-3 bg-foreground text-white">
            <ChevronLeft size={32} />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full p-3 bg-foreground text-white">
            <ChevronRight size={32} />
          </div>
        </div>
        {/* support */}
        <div className="mt-20 w-full h-[307px] items-center rounded-3xl text-white bg-foreground flex justify-between gap-5 overflow-hidden">
          <div className="w-[calc(100%-432px)] h-full p-12 space-y-6">
            <h1 className="text-5xl font-semibold">Support Us</h1>
            <p className="text-sm">
              <span className="font-semibold">
                Empowering Opportunities Inc.
              </span>{" "}
              thrives on the generosity and support of individuals, businesses,
              and communities. Your contributions help us provide vital services
              to individuals with disabilities, fostering independence and
              inclusion. Here are various ways you can support us:
            </p>
            <div className="w-fit px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-textEm md:font-medium lg:font-bold rounded-lg !text-themeGrayText bg-themeGreen">
              Join Us
            </div>
          </div>
          <div className="">
            <Image
              src="/images/about/Support.svg"
              alt="Donate"
              width={432}
              height={307}
              className="w-[432px] h-full"
            />
          </div>
        </div>
      </div>
      {/* div7 */}
      <div
        style={{ backgroundImage: `url('/images/about/bg.svg')` }}
        className="w-full min-h-screen px-4 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText"
      >
        <h1 className="text-4xl font-bold m-auto text-center pb-6">
          Let&apos;s Start
        </h1>
        <div className="w-full bg-white px-20 py-14 rounded-3xl">
          <div className="w-[430px]">
            <h2 className="text-[30px] font-bold">
              Let&apos;s connect constellations
            </h2>
            <h3 className="text-textEm">
              Let&apos;s align our constellations! Reach out and let the magic
              of collaboration illuminate our skies.
            </h3>
          </div>
          <form
            className="w-full py-4 space-y-5 flex flex-col items-center"
            action=""
          >
            <div className="w-full flex justify-between flex-wrap gap-4">
              <input
                type="text"
                name="fname"
                className="w-[48%] h-11 border border-border rounded-lg px-4 py-3"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lname"
                className="w-[48%] h-11 border border-border rounded-lg px-4 py-3"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                className="w-full h-11 border border-border rounded-lg px-4 py-3"
                placeholder="Email"
              />
              <input
                type="number"
                name="phone"
                className="w-full h-11 border border-border rounded-lg px-4 py-3"
                placeholder="Phone"
              />
              <textarea
                name="message"
                id=""
                rows={4}
                className="w-full h-44 border border-border rounded-lg px-4 py-3 resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-foreground px-40 py-3 text-textEm text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
