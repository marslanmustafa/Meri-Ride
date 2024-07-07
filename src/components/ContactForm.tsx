"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useContactUsRequestMutation } from "@/hooks/UseContact";
import { useToast } from "@/components/ui/use-toast";
import Success from "@/components/misc/Success";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const maxRows = 4;
  const [sendContact, { isSuccess, error, data: responseData, isLoading }] = useContactUsRequestMutation();

  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Sending message",
        description: "Please wait while we are sending your message",
        duration: 2000,
      });
    } else if (isSuccess) {
      if (responseData?.success) {
        setShowSuccessModal(true);
        setTimeout(() => {
          handleModalClose();
        }, 3000);
      } else {
        toast({
          title: "Failed",
          description: responseData?.message || "Failed to send message",
          duration: 2000,
        });
      }
    } else if (error) {
      toast({
        variant: "destructive",
        title: "Failed",
        description: "Failed to send message",
        duration: 2000,
      });
    }
  }, [isSuccess, isLoading, error, responseData, toast]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
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

  // form validtion
  
  const validateForm = () => {
    if (
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value ||
      !emailRef.current?.value ||
      !phoneRef.current?.value ||
      !textareaRef.current?.value
    ) {
      toast && toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill out the entire form.",
        duration: 2000,
      });
      return false;
    }
    return true;
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) return;
  
    const formData = {
      fname: firstNameRef.current?.value || "",
      lname: lastNameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phoneNo: phoneRef.current?.value || "",
      message: textareaRef.current?.value || "",
    };
  
    sendContact(formData);
  };
  

  const handleModalClose = () => {
    setShowSuccessModal(false);

    if (firstNameRef.current) firstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (textareaRef.current) textareaRef.current.value = "";

    setValue("");
  };

  return (
    <div className="w-full h-fit bg-white rounded-none sm:rounded-2xl p-2 flex justify-between items-center flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] bg-black rounded-lg text-white p-6">
        <div className="py-4 space-y-1 sm:space-y-3 mx-auto">
          <h1 className="text-lg sm:text-[28px] font-semibold">Contact Information</h1>
          <p className="text-sm sm:text-[16px]">Say something to start a live chat!</p>
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
            <h3 className="text-sm sm:text-base">132 Dartmouth Street Boston, Massachusetts 02156 United States</h3>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <form className="w-full px-4 py-10 space-y-3 md:space-y-10 flex flex-col" onSubmit={handleSubmit}>
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
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      {showSuccessModal && (
        <div className="z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 fixed top-0 left-0">
          <div className="w-[94%] h-[300px] mx-2 sm:mx-0 sm:w-[420px] sm:h-[380px] flex items-center flex-col justify-around rounded-lg bg-secondary px-4 py-3 sm:p-5 shadow-lg">
            <Success />
            <p className="text-xs sm:text-base font-medium py-2 mx-auto w-fit text-center">Your information has been sent successfully! We will contact you soon.</p>
            <div className="flex items-center justify-center gap-3">
              <Button className="mx-auto bg-primary text-white" variant={"outline"} onClick={handleModalClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
