"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useContactUsRequestMutation } from "@/hooks/UseContact";

const ContactForm: React.FC = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const maxRows = 4;
  const [sendContact, { isSuccess, error, data: responseData, isLoading }] = useContactUsRequestMutation();

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight, 10);
      const maxHeight = lineHeight * maxRows;

      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      textareaRef.current.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      fname: firstNameRef.current?.value || "",
      lname: lastNameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phoneNo: phoneRef.current?.value || "",
      message: textareaRef.current?.value || ""
    };

    sendContact(formData)
    console.log(responseData)
  };

  return (
    <div className="w-full h-fit bg-white rounded-none sm:rounded-2xl p-2 flex justify-between items-center flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] bg-black rounded-lg text-white p-6">
        <div className="py-4 space-y-1 sm:space-y-3 mx-auto">
          <h1 className="text-lg sm:text-[28px] font-semibold">
            Contact Information
          </h1>
          <p className="text-sm sm:text-[16px]">
            Say something to start a live chat!
          </p>
        </div>
        <div className="w-full space-y-8 py-8 sm:py-20 md:py-24">
          <div className="flex items-center justify-start gap-4">
            <div className="text-lg">
              <Phone size={24} />
            </div>
            <h3 className="text-sm sm:text-base">+1012 3456 789</h3>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className="text-lg">
              <Mail size={24} />
            </div>
            <h3 className="text-sm sm:text-base">demo@gmail.com</h3>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className="text-lg">
              <MapPin size={24} />
            </div>
            <h3 className="text-sm sm:text-base">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <form
          className="w-full px-4 py-10 space-y-3 md:space-y-10 flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="text-sm sm:text-sm w-full flex justify-between flex-wrap gap-4 sm:gap-y-14">
            <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                ref={firstNameRef}
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                ref={lastNameRef}
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full sm:w-[48%] border-b border-border flex items-start justify-between flex-col">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                ref={phoneRef}
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>

            <div className="w-full border-b border-border flex flex-col">
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
            className="bg-foreground px-10 w-fit py-3 text-sm md:text-[16px] !text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
