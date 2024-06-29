"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Page: React.FC = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxRows = 4;

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = parseInt(
        getComputedStyle(textareaRef.current).lineHeight,
        10
      );
      const maxHeight = lineHeight * maxRows;

      textareaRef.current.style.height = `${Math.min(
        scrollHeight,
        maxHeight
      )}px`;
      textareaRef.current.style.overflowY =
        scrollHeight > maxHeight ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <div className="w-full h-fit md:pb-24  py-8 md:px-8 lg:px-20 xl:px-32 md:pt-12">
      <div className="px-4 sm:px-0 py-8 text-center space-y-5 text-themeGrayText mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold">Contact Us</h1>
        <p className="text-sm sm:text-textEm">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className=" w-full h-fit bg-white rounded-none sm:rounded-2xl p-2 flex justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-[40%] bg-black rounded-lg text-white p-6">
          <div className="py-4 space-y-1 sm:space-y-3 mx-auto">
            <h1 className="text-lg sm:text-[28px] font-semibold">
              Contact Information
            </h1>
            <p className="text-sm sm:text-textEm">
              Say something to start a live chat!
            </p>
          </div>
          <div className="w-full space-y-8 py-8 sm:py-20 md:py-24">
            <div className="flex items-center justify-start gap-4">
              <div className="text-lg">
                <Phone size={24} />
              </div>
              <h3 className="text-sm sm:text-lg">+1012 3456 789</h3>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="text-lg">
                <Mail size={24} />
              </div>
              <h3 className="text-sm sm:text-lg">demo@gmail.com</h3>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="text-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-sm sm:text-lg">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <form
            className="w-full px-4 py-10 space-y-3 md:space-y-5 flex flex-col"
            action=""
          >
            <div className="text-sm sm:text-sm w-full flex justify-between flex-wrap gap-4 sm:gap-y-10">
              <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="w-full h-9 py-2 outline-none"
                  placeholder=""
                />
              </div>
              <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  className="w-full h-9 py-2 outline-none"
                  placeholder=""
                />
              </div>
              <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-9 py-2 outline-none"
                  placeholder=""
                />
              </div>
              <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full h-9 py-2 outline-none"
                  placeholder=""
                />
              </div>

              <div className="w-full border-b border-border flex items-start justify-between flex-col">
                <label htmlFor="address">Office Address</label>
                <input
                  type="tel"
                  name="address"
                  className="w-full h-9 py-2 outline-none"
                  placeholder=""
                />
              </div>

              <div className="w-full px-4 py-3">
                <h4 className="font-bold">Select Subject?</h4>
                <div className="flex sm:items-center gap-3 justify-between  flex-wrap">
                  <div className="flex items-center justify-start gap-2 py-3">
                    <input
                      type="radio"
                      name="subject"
                      className="bg-white w-4 h-4 checked:bg-black appearance-none rounded-full border-black border"
                    />
                    <h5>General Inquiry</h5>
                  </div>
                  <div className="flex items-center justify-start gap-2 py-3">
                    <input
                      type="radio"
                      name="subject"
                      className="bg-white w-4 h-4 checked:bg-black appearance-none rounded-full border-black border"
                    />
                    <h5>General Inquiry</h5>
                  </div>
                  <div className="flex items-center justify-start gap-2 py-3">
                    <input
                      type="radio"
                      name="subject"
                      className="bg-white w-4 h-4 checked:bg-black appearance-none rounded-full border-black border"
                    />
                    <h5>General Inquiry</h5>
                  </div>
                  <div className="flex items-center justify-start gap-2 py-3">
                    <input
                      type="radio"
                      name="subject"
                      className="bg-white w-4 h-4 checked:bg-black appearance-none rounded-full border-black border"
                    />
                    <h5>General Inquiry</h5>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-gray-300 flex flex-col">
                <label htmlFor="message" className="mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  ref={textareaRef}
                  className="w-full h-9 py-2 outline-none resize-none overflow-hidden text-area"
                  value={value}
                  onChange={handleInput}
                  rows={1}
                  maxLength={500}
                />
              </div>
            </div>
            <button
              type="submit"
              className=" bg-foreground px-10 w-fit  py-3 text-sm md:text-textEm !text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
