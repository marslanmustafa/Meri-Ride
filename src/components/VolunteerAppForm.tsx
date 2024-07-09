// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { Dropdown, SingleInput, TextareaInput, CheckboxGroup } from "./inputs";
import { useNewVolunteerRequestMutation } from "@/hooks/UseVolunteer";
import { useToast } from "@/components/ui/use-toast";
import Success from "@/components/misc/Success";
import { Button } from "@/components/ui/button";

interface Option {
  label: string;
  value: string;
}

const VolunteerAppForm: React.FC = () => {
  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState<Option | null>(null);
  const [selectedRole, setSelectedRole] = useState<Option | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Option | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showOtherSkillInput, setShowOtherSkillInput] = useState(false);
  const [otherSkill, setOtherSkill] = useState("");
  const [addVolunteer, { isSuccess, error, data: responseData, isLoading }] = useNewVolunteerRequestMutation();

  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Adding Volunteer",
        description: "Please wait while Adding your Information",
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
          description: responseData?.message || "Failed to Add Volunteer Information",
          duration: 2000,
        });
      }
    } else if (error) {
      toast({
        variant: "destructive",
        title: "Failed",
        description: "Failed to Add Volunteer Information",
        duration: 2000,
      });
    }
  }, [isSuccess, isLoading, error, responseData, toast]);


  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phoneNo: "",
    email: "",
    preferredRole:"",
    volunteerExperience: "",
    whyVolunteer: "",
    additionalInfo: "",
    referenceName: "",
    referenceRelationship: "",
    referencePhone: "",
    referenceEmail: "",
  });

  const genderOptions: Option[] = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
    { label: "Prefer not to say", value: "Prefer not to say" },
  ];

  const roleOptions: Option[] = [
    { label: "Driver Coordination", value: "Driver Coordination" },
    { label: "Community Outreach", value: "Community Outreach" },
    { label: "Administrative Support", value: "Administrative Support" },
    { label: "Social Media and Marketing", value: "Social Media and Marketing" },
    { label: "Fundraising and Donations", value: "Fundraising and Donations" },
    { label: "Maintenance Coordination", value: "Maintenance Coordination" },
    { label: "Training and Support", value: "Training and Support" },
    { label: "Logistics and Operations", value: "Logistics and Operations" },
    { label: "Other", value: "Other" },
  ];

  const availabilityOptions: Option[] = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ];

  const timeSlotOptions: Option[] = [
    { label: "Morning (8 AM - 12 PM)", value: "Morning" },
    { label: "Afternoon (12 PM - 4 PM)", value: "Afternoon" },
    { label: "Evening (4 PM - 8 PM)", value: "Evening" },
  ];

  const skillOptions: Option[] = [
    { label: "Communication", value: "Communication" },
    { label: "Organization", value: "Organization" },
    { label: "Social Media Management", value: "Social Media Management" },
    { label: "Event Planning", value: "Event Planning" },
    { label: "Fundraising", value: "Fundraising" },
    { label: "Customer Service", value: "Customer Service" },
    { label: "Technical/Maintenance", value: "Technical/Maintenance" },
    { label: "Training/Education", value: "Training/Education" },
    { label: "Other", value: "Other" },
  ];

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle dropdown selection changes
  const handleGenderChange = (option: Option) => {
    setSelectedGender(option);
    setFormData({
      ...formData,
      gender: option.value,
    });
  };
  const handleRoleChange = (option) => {
    setSelectedRole(option);
    setFormData({
      ...formData,
      preferredRole: option.value,
    });
  };


  const handleAvailabilityChange = (selectedAvailability: string[]) => {
    setSelectedAvailability(selectedAvailability);
  };

  const handleTimeSlotChange = (selectedTimeSlots: Option | null) => {
    setSelectedTimeSlot(selectedTimeSlots);
  };

  const handleSkillChange = (selectedSkills: string[]) => {
    setSelectedSkills(selectedSkills);
    if (selectedSkills.includes("Other")) {
      setShowOtherSkillInput(true);
    } else {
      setShowOtherSkillInput(false);
      setOtherSkill("");
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "gender",
      "streetAddress",
      "city",
      "state",
      "postalCode",
      "country",
      "phoneNo",
      "email",
      "preferredRole",
      "volunteerExperience",
      "whyVolunteer",
      "additionalInfo",
      "referenceName",
      "referenceRelationship",
      "referencePhone",
      "referenceEmail",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please fill out the entire Application.",
          duration: 2000,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;
    const filteredSkills = selectedSkills.filter(skill => skill !== "Other");

    const FormData = {
      ...formData,
      availability: selectedAvailability,
      timeSlots: selectedTimeSlot ? selectedTimeSlot.value : "",
      relevantSkills: otherSkill ? [...filteredSkills, otherSkill] : filteredSkills,
    };
    // console.log("Form Data:", FormData);
    addVolunteer(FormData);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setFormData({
      fullName: "",
      gender: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNo: "",
      email: "",
      volunteerExperience: "",
      whyVolunteer: "",
      additionalInfo: "",
      referenceName: "",
      referenceRelationship: "",
      referencePhone: "",
      referenceEmail: "",
    });
    setSelectedGender(null);
    setSelectedAvailability([]);
    setSelectedTimeSlot(null);
    setSelectedSkills([]);
    setShowOtherSkillInput(false);
    setOtherSkill("");
  };

  return (
    <div className="w-full h-fit lg:min-h-screen py-5 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText">
      <div className="w-full bg-white px-2 py-4 sm:px-8 md:px-20 sm:py-6 md:py-14 md:rounded-3xl">
        {/* Form heading */}
        <div className="sm:m-0 w-full text-center space-y-4 py-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Volunteer Application Form
          </h2>
          <p className="text-xs md:text-[16px]">
            An online form that allows individuals to sign up for volunteer opportunities, collecting essential information to match their skills and availability with the organization’s needs.
          </p>
        </div>

        {/* Form */}
        <form className="w-full px-4 pt-8 space-y-3 md:space-y-5" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-bold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <SingleInput
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              {/* Gender */}
              <Dropdown
                label="Gender"
                options={genderOptions}
                selectedOption={selectedGender}
                onChange={handleGenderChange}
              />
              {/* Phone Number */}
              <SingleInput
                label="Phone Number"
                name="phoneNo"
                type="tel"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
              />

              {/* Email Address */}
              <SingleInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Street Address */}
              <SingleInput
                label="Street Address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
              {/* City */}
              <SingleInput
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              {/* State */}
              <SingleInput
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              {/* Postal Code */}
              <SingleInput
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
              {/* Country */}
              <SingleInput
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* personal information end */}

          {/* volunteer Information */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-bold mb-2">Volunteer Information</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Preferred Volunteer Role */}
              <div className="text-sm sm:text-sm w-full gap-2 sm:gap-6 md:gap-8">
                <h3 className="text-lg font-semibold">Role Interested In</h3>
                <Dropdown
                  label="Select Role"
                  options={roleOptions}
                  selectedOption={selectedRole}
                  onChange={handleRoleChange}
                />
              </div>
              {/* Availability */}
              <CheckboxGroup
                label="Availability"
                options={availabilityOptions}
                selectedOptions={selectedAvailability}
                onChange={handleAvailabilityChange}
              />
              {/* Preferred Time Slots */}
              <div className="text-sm sm:text-sm w-full gap-2 sm:gap-6 md:gap-8">
                <h3 className="text-lg font-semibold">Preferred Time Slot</h3>
                <Dropdown
                  label="Select Time Slot"
                  options={timeSlotOptions}
                  selectedOption={selectedTimeSlot}
                  onChange={handleTimeSlotChange}
                />
              </div>
              {/* Volunteer Experience */}
              <TextareaInput
                label="Please provide details about any previous volunteer experience you have."
                name="volunteerExperience"
                value={formData.volunteerExperience}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* volunteer Information end */}

          {/* Skills and Interests */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-bold mb-2">Skills and Interests</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Relevant Skills */}
              <CheckboxGroup
                label="Relevant Skills"
                options={skillOptions}
                selectedOptions={selectedSkills}
                onChange={handleSkillChange}
              />
               {showOtherSkillInput && (
                <SingleInput
                  label="Please specify your skill"
                  type="text"
                  name="otherSkill"
                  value={otherSkill}
                  onChange={(e) => setOtherSkill(e.target.value)}
                  required
                />
              )}
              {/* Why Volunteer */}
              <TextareaInput
                label="Why do you want to volunteer with us?"
                name="whyVolunteer"
                value={formData.whyVolunteer}
                onChange={handleInputChange}
              />

              {/* Additional Information */}
              <TextareaInput
                label="Is there anything else you'd like us to know?"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Skills and Interests end*/}

          {/* References */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-bold mb-2">References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SingleInput
                label="Name"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleInputChange}
                required
              />
              <SingleInput
                label="Relationship"
                name="referenceRelationship"
                value={formData.referenceRelationship}
                onChange={handleInputChange}
                required
              />
              <SingleInput
                label="Phone"
                name="referencePhone"
                value={formData.referencePhone}
                onChange={handleInputChange}
                required
              />
              <SingleInput
                label="Email"
                name="referenceEmail"
                value={formData.referenceEmail}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
          <button
                type="submit"
                className="bg-foreground px-10 w-fit py-3 text-sm md:text-[16px] !text-white rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
          </div>
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

export default VolunteerAppForm;
