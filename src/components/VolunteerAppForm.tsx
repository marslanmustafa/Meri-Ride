// @ts-nocheck
"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"; // Assuming you have a custom dropdown menu component
import { Button } from "@/components/ui/button"; // Assuming you have a custom button component
import { ChevronDown } from "lucide-react"; // Assuming you have an icon library

interface Option {
  label: string;
  value: string;
}
const DropdownMenuCheckboxes: React.FC<{
  label: string;
  options: Option[];
  selectedValues: string[];
  onSelectionChange: (selected: string[]) => void;
}> = ({ label, options, selectedValues, onSelectionChange }) => {
  const handleCheckboxChange = (optionValue: string) => {
    const isSelected = selectedValues.includes(optionValue);
    const updatedSelection = isSelected
      ? selectedValues.filter((value) => value !== optionValue)
      : [...selectedValues, optionValue];

    onSelectionChange(updatedSelection);
  };

  return (
    <div className="w-full border-b border-border flex flex-col">
      <label>{label}</label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Select {label}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-2">
          {options.map((option) => (
            <DropdownMenuCheckboxItem
              key={option.value}
              checked={selectedValues.includes(option.value)}
              onCheckedChange={() => handleCheckboxChange(option.value)}
            >
              {option.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};


const VolunteerAppForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = React.useState({
    fullName: "",
    gender: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    phoneNumber: "",
    emailAddress: "",
    volunteerExperience: "",
    whyVolunteer: "",
    additionalInfo: "",
    references: [{ name: "", relationship: "", phone: "", email: "" }],
  });

  // State for selected options
  const [selectedGender, setSelectedGender] = React.useState<Option | null>(null);
  const [selectedRoles, setSelectedRoles] = React.useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = React.useState<string[]>([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = React.useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);

  // Options for dropdowns
  const genderOptions: Option[] = [
    { label: "Select Gender", value: "" },
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
    { label: "Morning (8 AM - 12 PM)", value: "Morning (8 AM - 12 PM)" },
    { label: "Afternoon (12 PM - 4 PM)", value: "Afternoon (12 PM - 4 PM)" },
    { label: "Evening (4 PM - 8 PM)", value: "Evening (4 PM - 8 PM)" },
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
    if (name.includes("name-") || name.includes("relationship-") || name.includes("phone-") || name.includes("email-")) {
      const index = Number(name.split('-')[1]);
      const updatedReferences = formData.references.map((reference, i) =>
        i === index ? { ...reference, [name.split('-')[0]]: value } : reference
      );
      setFormData(prevFormData => ({
        ...prevFormData,
        references: updatedReferences
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle address input changes
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
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

  const handleRoleChange = (selectedRoles: string[]) => {
    setSelectedRoles(selectedRoles);
  };

  const handleAvailabilityChange = (selectedAvailability: string[]) => {
    setSelectedAvailability(selectedAvailability);
  };

  const handleTimeSlotChange = (selectedTimeSlots: string[]) => {
    setSelectedTimeSlots(selectedTimeSlots);
  };

  const handleSkillChange = (selectedSkills: string[]) => {
    setSelectedSkills(selectedSkills);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formDataOutput = {
      ...formData,
      roles: selectedRoles,
      availability: selectedAvailability,
      timeSlots: selectedTimeSlots,
      relevantSkills: selectedSkills,
    };
    console.log("Form Data:", formDataOutput);
    // Here you can add logic to submit the form data to your backend or perform other actions
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
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="w-full border-b border-border flex flex-col">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Gender */}
              <div className="w-full border-b border-border flex flex-col">
                <label>Gender</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="relative">
                      <div className="w-full h-9 py-2 pl-3 pr-10 border rounded-lg outline-none cursor-pointer flex items-center justify-between">
                        {selectedGender ? (
                          <span>{selectedGender.label}</span>
                        ) : (
                          <span className="text-gray-500">Select Gender</span>
                        )}
                        <ChevronDown />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="py-1 bg-white border border-gray-200 rounded-lg shadow-lg absolute top-10 left-0 w-full">
                    {genderOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => handleGenderChange(option)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Phone Number */}
              <div className="w-full border-b border-border flex flex-col">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="w-full border-b border-border flex flex-col">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="w-full border-b border-border flex flex-col">
                <label>Address</label>
                <input
                  type="text"
                  name="street"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Street Address"
                  value={formData.address.street}
                  onChange={handleAddressChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="City"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="State/Province"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Postal Code"
                  value={formData.address.postalCode}
                  onChange={handleAddressChange}
                  required
                />
                <input
                  type="text"
                  name="country"
                  className="w-full h-9 py-2 outline-none"
                  placeholder="Country"
                  value={formData.address.country}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Volunteer Information */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">Volunteer Information</h3>
            {/* Role Selection */}
            <DropdownMenuCheckboxes
              label="Preferred Volunteer Role"
              options={roleOptions}
              selectedValues={selectedRoles}
              onSelectionChange={handleRoleChange}
            />

            {/* Availability */}
            <DropdownMenuCheckboxes
              label="Availability"
              options={availabilityOptions}
              selectedValues={selectedAvailability}
              onSelectionChange={handleAvailabilityChange}
            />

            {/* Time Slots */}
            <DropdownMenuCheckboxes
              label="Preferred Time Slots"
              options={timeSlotOptions}
              selectedValues={selectedTimeSlots}
              onSelectionChange={handleTimeSlotChange}
            />
          </div>

          {/* Skills and Interests */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">Skills and Interests</h3>
            {/* Relevant Skills */}
            <DropdownMenuCheckboxes
              label="Relevant Skills"
              options={skillOptions}
              selectedValues={selectedSkills}
              onSelectionChange={handleSkillChange}
            />

            {/* Why Volunteer */}
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="whyVolunteer">Why do you want to volunteer with us?</label>
              <textarea
                name="whyVolunteer"
                className="w-full h-24 py-2 outline-none"
                placeholder="Tell us why you want to volunteer"
                value={formData.whyVolunteer}
                onChange={handleInputChange}
              />
            </div>

            {/* Additional Information */}
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="additionalInfo">Any additional information you&apos;d like to share?</label>
              <textarea
                name="additionalInfo"
                className="w-full h-24 py-2 outline-none"
                placeholder="Provide any additional information"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* References */}
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">References</h3>
            {formData.references.map((reference, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2">
                {/* Reference Name */}
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`name-${index}`}>Reference Name</label>
                  <input
                    type="text"
                    name={`name-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Name"
                    value={reference.name}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                {/* Reference Relationship */}
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`relationship-${index}`}>Reference Relationship</label>
                  <input
                    type="text"
                    name={`relationship-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Relationship"
                    value={reference.relationship}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                {/* Reference Phone Number */}
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`phone-${index}`}>Reference Phone Number</label>
                  <input
                    type="tel"
                    name={`phone-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Phone Number"
                    value={reference.phone}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>

                {/* Reference Email Address */}
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`email-${index}`}>Reference Email Address</label>
                  <input
                    type="email"
                    name={`email-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Email Address"
                    value={reference.email}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="w-full flex mt-10">
            <Button
              type="submit"
              className=" bg-foreground px-10 w-fit  py-3 text-sm md:text-[16px] !text-white rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerAppForm;
