// @ts-nocheck
"use client"

import * as React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
    let updatedSelection;

    if (isSelected) {
      updatedSelection = selectedValues.filter((value) => value !== optionValue);
    } else {
      updatedSelection = [...selectedValues, optionValue];
    }

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
  const [roles, setRoles] = React.useState<string[]>([]);
  const [availability, setAvailability] = React.useState<string[]>([]);
  const [timeSlots, setTimeSlots] = React.useState<string[]>([]);
  const [relevantSkills, setRelevantSkills] = React.useState<string[]>([]);
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
    references: [
      { name: "", relationship: "", phone: "", email: "" },
    ],
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleRoleChange = (selectedRoles: string[]) => {
    setRoles(selectedRoles);
  };

  const handleAvailabilityChange = (selectedAvailability: string[]) => {
    setAvailability(selectedAvailability);
  };

  const handleTimeSlotChange = (selectedTimeSlots: string[]) => {
    setTimeSlots(selectedTimeSlots);
  };

  const handleSkillChange = (selectedSkills: string[]) => {
    setRelevantSkills(selectedSkills);
  };

  const handleReferenceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedReferences = formData.references.map((ref, i) =>
      i === index ? { ...ref, [name]: value } : ref
    );
    setFormData({ ...formData, references: updatedReferences });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formDataOutput = {
      ...formData,
      roles,
      availability,
      timeSlots,
      relevantSkills,
    };
    console.log("Form Data:", formDataOutput);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  return (
    <div className="w-full h-fit lg:min-h-screen py-5 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText">
      <div className="w-full bg-white px-2 py-4 sm:px-8 md:px-20 sm:py-6 md:py-14 md:rounded-3xl">
        <div className="sm:m-0 w-full text-center space-y-4 py-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Volunteer Application Form
          </h2>
          <p className="text-xs md:text-[16px]">
            An online form that allows individuals to sign up for volunteer opportunities, collecting essential information to match their skills and availability with the organization’s needs.
          </p>
        </div>
        <form className="w-full px-4 pt-8 space-y-3 md:space-y-5" onSubmit={handleSubmit}>
          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="w-full border-b border-border flex flex-col">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  className="w-full h-9 py-2 outline-none"
                  value={formData.gender}
                  onChange={handleGenderChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
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

          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">Volunteer Information</h3>
            <DropdownMenuCheckboxes
              label="Preferred Volunteer Role"
              options={roleOptions}
              selectedValues={roles}
              onSelectionChange={handleRoleChange}
            />
            <DropdownMenuCheckboxes
              label="Availability"
              options={availabilityOptions}
              selectedValues={availability}
              onSelectionChange={handleAvailabilityChange}
            />
            <DropdownMenuCheckboxes
              label="Preferred Time Slots"
              options={timeSlotOptions}
              selectedValues={timeSlots}
              onSelectionChange={handleTimeSlotChange}
            />
          </div>

          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">Skills and Interests</h3>
            <DropdownMenuCheckboxes
              label="Relevant Skills"
              options={skillOptions}
              selectedValues={relevantSkills}
              onSelectionChange={handleSkillChange}
            />
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
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="additionalInfo">Any additional information youd like to share?</label>
              <textarea
                name="additionalInfo"
                className="w-full h-24 py-2 outline-none"
                placeholder="Provide any additional information"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-lg font-semibold mb-4">References</h3>
            {formData.references.map((reference, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2">
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`name-${index}`}>Reference Name</label>
                  <input
                    type="text"
                    name={`name-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Name"
                    value={reference.name}
                    onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`relationship-${index}`}>Reference Relationship</label>
                  <input
                    type="text"
                    name={`relationship-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Relationship"
                    value={reference.relationship}
                    onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`phone-${index}`}>Reference Phone Number</label>
                  <input
                    type="tel"
                    name={`phone-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Phone Number"
                    value={reference.phone}
                    onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
                <div className="w-full border-b border-border flex flex-col">
                  <label htmlFor={`email-${index}`}>Reference Email Address</label>
                  <input
                    type="email"
                    name={`email-${index}`}
                    className="w-full h-9 py-2 outline-none"
                    placeholder="Reference Email Address"
                    value={reference.email}
                    onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-10">
            <Button type="submit" variant="primary" className="w-48 h-12">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerAppForm;
