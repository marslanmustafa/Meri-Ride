//@ts-nocheck
"use client"
import React, { useEffect, useState, useRef } from "react";
import { Dropdown, SingleInput, TextareaInput, CheckboxGroup, RadioInput } from "./inputs";
import { useNewRecruitmentRequestMutation } from "@/hooks/UseRecruitment";
import { useToast } from "@/components/ui/use-toast";
import Success from "@/components/misc/Success";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "./ui";
import Signature from "./Signature";
import ReactSignatureCanvas from "react-signature-canvas";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

const ApplicationForm: React.FC = () => {
  const today = new Date();
  const dateString = today.toDateString();

  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState<Option | null>(null);
  const [dob, setDob] = useState<Date>();
  const [licenseExpiryDate, setLicenseExpiryDate] = useState<Date>();
  const [drivingViolations, setDrivingViolations] = useState<boolean>(false);
  const [drivingViolationsDetail, setDrivingViolationsDetail] = useState<string>("");
  const [roadAccidentHistory, setRoadAccidentHistory] = useState<boolean>(false);
  const [roadAccidentHistoryDetail, setRoadAccidentHistoryDetail] = useState<string>("");
  const [authorizationForBackgroundCheck, setAuthorizationForBackgroundCheck] = useState<boolean>(false);
  const [criminalHistory, setCriminalHistory] = useState<boolean>(false);
  const [criminalHistoryDetail, setCriminalHistoryDetail] = useState<string>("");
  const [companyMissionAgreement, setCompanyMissionAgreement] = useState<boolean>(false);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Option | null>(null);
  const [previousExperience, setPreviousExperience] = useState<boolean>(false);
  const [previousExperienceDetail, setPreviousExperienceDetail] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showOtherSkillInput, setShowOtherSkillInput] = useState(false);
  const [otherSkill, setOtherSkill] = useState("");
  const [agreeTermsAndCondition, setAgreeTermsAndCondition] = useState<boolean>(false);
  const [confirmAboutInfo, setConfirmAboutInfo] = useState<boolean>(false);
  const [isCanvasVisible, setIsCanvasVisible] = useState<boolean>(false);
  const [signatureData, setSignatureData] = useState<File | null>(null);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const sigCanvasRef = useRef<any>(null);
  const [addRecruitment, { isSuccess, error, data: responseData, isLoading }] = useNewRecruitmentRequestMutation();

  useEffect(() => {
    if (!roadAccidentHistory) {
      setRoadAccidentHistoryDetail("");
    }
  }, [roadAccidentHistory]);

  useEffect(() => {
    if (!drivingViolations) {
      setDrivingViolationsDetail("");
    }
  }, [drivingViolations]);
  useEffect(() => {
    if (!criminalHistory) {
      setCriminalHistoryDetail("");
    }
  }, [criminalHistory]);

  useEffect(() => {
    if (!previousExperience) {
      setPreviousExperienceDetail("");
    }
  }, [previousExperience]);

  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Adding Driver Recruitment",
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
          description: responseData?.message || "Failed to Add Driver Recruitment Information",
          duration: 2000,
        });
      }
    } else if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to Add Driver Recruitment Information",
        duration: 2000,
      });
    }
  }, [isSuccess, isLoading, error, responseData, toast]);

  const genderOptions: Option[] = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
    { label: "Prefer not to say", value: "Prefer not to say" },
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
    { label: "Morning (6 AM - 2 PM)", value: "Morning (6 AM - 2 PM)" },
    { label: "Afternoon (2 PM - 10 PM)", value: "Afternoon (2 PM - 10 PM)" },
    { label: "Night (10 PM - 6 AM)", value: "Night (10 PM - 6 AM)" },
  ];
  const skillOptions: Option[] = [
    { label: "Safe Driving", value: "Safe Driving" },
    { label: "Customer Service", value: "Customer Service" },
    { label: "Navigation", value: "Navigation" },
    { label: "Basic Vehicle Maintenance", value: "Basic Vehicle Maintenance" },
    { label: "Other", value: "Other" },
  ];

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
    driverLicenseNumber: "",
    whyWorkWithUs: "",
    additionalInfo: "",
    referenceName: "",
    referenceRelationship: "",
    referencePhone: "",
    referenceEmail: "",
    Signature: signatureData,
    date: dateString,
  });

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

  const handleGenderChange = (option: Option) => {
    setSelectedGender(option);
    setFormData({
      ...formData,
      gender: option.value,
    });
  };

  const handleBackgroundCheck = () => {
    setAuthorizationForBackgroundCheck(!authorizationForBackgroundCheck)
  }
  const handleMissionAgreement = () => {
    setCompanyMissionAgreement(!companyMissionAgreement)
  }
  const handleAgreeCondition = () => {
    setAgreeTermsAndCondition(!agreeTermsAndCondition)
  }
  const handleConfirmInfo = () => {
    setConfirmAboutInfo(!confirmAboutInfo)
  }
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

  const toggleSignatureCanvas = () => {
    setIsCanvasVisible(!isCanvasVisible);
  };

  const clearSignatureCanvas = () => {
    sigCanvasRef.current?.clear();
  };

  const saveSignature = () => {
    if (sigCanvasRef.current) {
      const dataurl = sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png');
      let file = dataURLtoFile(dataurl, 'signature.png');
      console.log(file);
      setSignatureData(file);
      setSignatureUrl(URL.createObjectURL(file)); // Create and set the object URL
      toggleSignatureCanvas();
    }
  };

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

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
      "driverLicenseNumber",
      "whyWorkWithUs",
      "additionalInfo",
      "emergencyContactName",
      "emergencyContactRelationship",
      "emergencyContactPhone",
      "emergencyContactEmail",
      // "referenceName",
      // "referenceRelationship",
      // "referencePhone",
      // "referenceEmail",
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

    if (!dob) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select a Date of Birth.",
        duration: 2000,
      });
      return false;
    }

    if (!licenseExpiryDate) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select a License Expiry Date.",
        duration: 2000,
      });
      return false;
    }
    if (drivingViolations) {
      if (!drivingViolationsDetail) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please Explain Driving Violance",
          duration: 2000,
        });
        return false;
      }
    };

    if (roadAccidentHistory) {
      if (!roadAccidentHistoryDetail) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please Explain Road Accident History",
          duration: 2000,
        });
        return false;
      }
    };

    if (criminalHistory) {
      if (!criminalHistoryDetail) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please Explain Criminal History",
          duration: 2000,
        });
        return false;
      }
    };
    if (!authorizationForBackgroundCheck) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please Authorize your background Check",
        duration: 2000,
      });
      return false;
    }

    if (!companyMissionAgreement) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please Agree to Support Company’s Mission",
        duration: 2000,
      });
      return false;
    }

    if (!selectedAvailability[0]) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select atleast 1 Day",
        duration: 2000,
      });
      return false;
    }

    if (selectedTimeSlot === null) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select a Time slot",
        duration: 2000,
      });
      return false;
    }
    if (previousExperience) {
      if (!previousExperienceDetail) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please Explain Driving Violance",
          duration: 2000,
        });
        return false;
      }
    };
    if (!selectedSkills[0]) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select atleast 1 skill",
        duration: 2000,
      });
      return false;
    }
    if (selectedSkills.includes("Other")) {
      if (otherSkill === "") {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please fill specify skill ",
          duration: 2000,
        });
        return false;
      }
    };
    if (!agreeTermsAndCondition) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please Agree the terms and conditions",
        duration: 2000,
      });
      return false;
    }
    if (!confirmAboutInfo) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check all information provided is accurate",
        duration: 2000,
      });
      return false;
    }
    if (signatureData === null) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please add your Signature",
        duration: 2000,
      });
      return false;
    }

    return true;
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    const filteredSkills = selectedSkills.filter(skill => skill !== "Other");

    const formattedFormData = new FormData();
    formattedFormData.append("fullName", formData.fullName);
    formattedFormData.append("gender", formData.gender);
    formattedFormData.append("streetAddress", formData.streetAddress);
    formattedFormData.append("city", formData.city);
    formattedFormData.append("state", formData.state);
    formattedFormData.append("postalCode", formData.postalCode);
    formattedFormData.append("country", formData.country);
    formattedFormData.append("phoneNo", formData.phoneNo);
    formattedFormData.append("email", formData.email);
    formattedFormData.append("driverLicenseNumber", formData.driverLicenseNumber);
    formattedFormData.append("whyWorkWithUs", formData.whyWorkWithUs);
    formattedFormData.append("additionalInfo", formData.additionalInfo);
    formattedFormData.append("emergencyContactName", formData.emergencyContacName);
    formattedFormData.append("emergencyContactRelationship", formData.emergencyContacRelationship);
    formattedFormData.append("emergencyContactPhone", formData.emergencyContacPhone);
    formattedFormData.append("emergencyContactEmail", formData.emergencyContacEmail);
    formattedFormData.append("referenceName", formData.referenceName);
    formattedFormData.append("referenceRelationship", formData.referenceRelationship);
    formattedFormData.append("referencePhone", formData.referencePhone);
    formattedFormData.append("referenceEmail", formData.referenceEmail);
    formattedFormData.append("signature", signatureData);
    formattedFormData.append("date", dateString);

    if (dob) {
      formattedFormData.append("dob", format(dob, "yyyy-MM-dd"));
    }

    if (licenseExpiryDate) {
      formattedFormData.append("driverLicenseExpiryDate", format(licenseExpiryDate, "yyyy-MM-dd"));
    }

    formattedFormData.append("drivingViolationHistory", drivingViolations);
    formattedFormData.append("drivingViolationHistoryDetail", drivingViolationsDetail);
    formattedFormData.append("roadAccidentHistory", roadAccidentHistory);
    formattedFormData.append("roadAccidentHistoryDetail", roadAccidentHistoryDetail);
    formattedFormData.append("authorizationForBackgroundCheck", authorizationForBackgroundCheck);
    formattedFormData.append("criminalHistory", criminalHistory);
    formattedFormData.append("criminalHistoryDetail", criminalHistoryDetail);
    formattedFormData.append("companyMissionAgreement", companyMissionAgreement);
    formattedFormData.append("availability", selectedAvailability);
    formattedFormData.append("timeSlots", selectedTimeSlot ? selectedTimeSlot.value : "");
    formattedFormData.append("previousExperience", previousExperience);
    formattedFormData.append("previousExperienceDetail", previousExperienceDetail);
    formattedFormData.append("relevantSkills", filteredSkills);
    formattedFormData.append("agreeTermsAndCondition", agreeTermsAndCondition);
    formattedFormData.append("confirmAboutInfo", confirmAboutInfo);

    const formDataObj: { [key: string]: any } = {};
    formattedFormData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    console.log("Formatted FormData as Object:", formDataObj);
    addRecruitment(formattedFormData);
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
      driverLicenseNumber: "",
      whyWorkWithUs: "",
      additionalInfo: "",
    });
    setSelectedGender(null);
    setSelectedAvailability([]);
    setDob(null);
    setLicenseExpiryDate(null);
    setDrivingViolations(false);
    setDrivingViolationsDetail("");
    setRoadAccidentHistory(false);
    setRoadAccidentHistoryDetail("");
    setAuthorizationForBackgroundCheck(false);
    setCriminalHistory(false);
    setCriminalHistoryDetail("");
    setPreviousExperience(false);
    setPreviousExperienceDetail("");
    setSelectedSkills([]);
    setShowOtherSkillInput(false);
    setOtherSkill("");
    setAgreeTermsAndCondition(false);
    setConfirmAboutInfo(false);
    setIsCanvasVisible(false);
    setSignatureData(null);
    sigCanvasRef.current?.clear();
  };

  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger>
          <div className='align bg-foreground text-white text-sm sm:text-base px-8 sm:px-16 py-2 rounded-lg'>Apply</div>
        </DialogTrigger>
        {showSuccessModal ? (
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
        ) : (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Application Form</DialogTitle>
              <DialogDescription>
                An easy-to-use online form that allows potential drivers to apply for a position. This form collects essential information from applicants to streamline the hiring process.
              </DialogDescription>
            </DialogHeader>
            <form
              className="w-full px-4 pt-5 space-y-3 md:space-y-5 flex flex-col"
              onSubmit={handleSubmit}
            >
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

                  {/* DOB */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full !border-b border-border h-9 md:h-11 border-0 bg-transparent rounded-none p-0  justify-start text-left font-normal",
                          !dob && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dob ? format(dob, "PPP") : <span>Date of Birth</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dob}
                        onSelect={setDob}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

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

              {/* Emergency Contact Information */}
              <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
                <h3 className="text-lg font-bold mb-2">Emergency Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SingleInput
                    label="Name"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    required
                  />
                  <SingleInput
                    label="Relationship"
                    name="emergencyContactRelationship"
                    value={formData.emergencyContactRelationship}
                    onChange={handleInputChange}
                    required
                  />
                  <SingleInput
                    label="Phone"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleInputChange}
                    required
                  />
                  <SingleInput
                    label="Email"
                    name="emergencyContactEmail"
                    value={formData.emergencyContactEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Driver Information */}
              <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
                <h3 className="text-lg font-bold mb-2">Driver Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* License Number */}
                  <SingleInput
                    label="License Number"
                    name="driverLicenseNumber"
                    value={formData.driverLicenseNumber}
                    onChange={handleInputChange}
                    required
                  />

                  {/* Exp Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full !border-b border-border h-9 md:h-11 border-0 bg-transparent rounded-none p-0  justify-start text-left font-normal",
                          !licenseExpiryDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {licenseExpiryDate ? format(licenseExpiryDate, "PPP") : <span>License Expiry Date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={licenseExpiryDate}
                        onSelect={setLicenseExpiryDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Driving Violations */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Driving Violations</h3>
                  <RadioInput
                    label="Do you have any driving violations?"
                    name="drivingViolations"
                    value={drivingViolations ? "yes" : "no"}
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    onChange={(value: string) => setDrivingViolations(value === "yes")}
                  />
                  {drivingViolations && (
                    <TextareaInput
                      label="If yes, please explain"
                      name="drivingViolationsDetail"
                      value={drivingViolationsDetail}
                      onChange={(e) => setDrivingViolationsDetail(e.target.value)}  // convert yes to true 
                    />
                  )}
                </div>
                {/* Road Accident History */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Road Accident History</h3>
                  <RadioInput
                    label="Have you been involved in any road accidents in the past 5 years?"
                    name="roadAccidentHistory"
                    value={roadAccidentHistory ? "yes" : "no"}
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    onChange={(value: string) => setRoadAccidentHistory(value === "yes")}
                  />
                  {roadAccidentHistory && (
                    <TextareaInput
                      label="If yes, please explain"
                      name="roadAccidentHistoryDetail"
                      value={roadAccidentHistoryDetail}
                      onChange={(e) => setRoadAccidentHistoryDetail(e.target.value)}  // convert yes to true 
                    />
                  )}
                </div>

                {/* Road Accident History */}
                {/* Authorization for Background Check */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Authorization for Background Check</h3>
                  <div className="flex items-center gap-4">
                    <Checkbox id="authorizationForBackgroundCheck" onCheckedChange={() => handleBackgroundCheck()}
                      checked={authorizationForBackgroundCheck} />
                    <label
                      htmlFor="authorizationForBackgroundCheck"
                      className="text-sm font-medium md:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I authorize Empowerment Through Partnership to conduct a background check.
                    </label>
                  </div>
                </div>
              </div>
              {/* Criminal History */}
              <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">Criminal History</h3>
                  <RadioInput
                    label="Have you ever been convicted of a criminal offense?"
                    name="criminalHistory"
                    value={criminalHistory ? "yes" : "no"}
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    onChange={(value: string) => setCriminalHistory(value === "yes")}
                  />
                  {criminalHistory && (
                    <TextareaInput
                      label="If yes, please provide details"
                      name="drivingViolationsDetail"
                      value={criminalHistoryDetail}
                      onChange={(e) => setCriminalHistoryDetail(e.target.value)}  // convert yes to true 
                    />
                  )}
                </div>
                {/*Agreement to Support Company’s Mission  companyMissionAgreement*/}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Agreement to Support Company’s Mission</h3>
                  <div className="flex items-center gap-4">
                    <Checkbox id="companyMissionAgreement" onCheckedChange={() => handleMissionAgreement()}
                      checked={companyMissionAgreement} />
                    <label
                      htmlFor="companyMissionAgreement"
                      className="text-sm font-medium md:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to support the mission and values of MeriRide.
                    </label>
                  </div>
                </div>
              </div>
              {/* Availability */}
              <div className="text-sm sm:text-sm w-full gap-2 sm:gap-6 md:gap-8">
                <CheckboxGroup
                  label="Availability"
                  options={availabilityOptions}
                  selectedOptions={selectedAvailability}
                  onChange={handleAvailabilityChange}
                />
              </div>
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
              {/* Experience and Skills */}
              <div className="text-sm sm:text-sm w-full gap-2 sm:gap-6 md:gap-8">
                <h3 className="text-lg font-bold">Experience and Skills</h3>
                <div className="mt-4">
                  <RadioInput
                    label="Do you have previous experience driving a rickshaw or similar vehicle?"
                    name="previousExperience"
                    value={previousExperience ? "yes" : "no"}
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    onChange={(value: string) => setPreviousExperience(value === "yes")}
                  />
                  {previousExperience && (
                    <TextareaInput
                      label="If yes, please explain"
                      name="previousExperienceDetail"
                      value={previousExperienceDetail}
                      onChange={(e) => setPreviousExperienceDetail(e.target.value)}  // convert yes to true 
                    />
                  )}
                </div>
                {/* Relevant Skills */}
                <div className="mt-4">
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
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Additional Information</h3>
                <div className="text-sm sm:text-sm w-full grid grid-cols-1 gap-2 sm:gap-6 md:gap-8">
                  {/* Why whyWorkWithUs */}
                  <TextareaInput
                    label="Why do you want to work as a rickshaw driver with us?"
                    name="whyWorkWithUs"
                    value={formData.whyWorkWithUs}
                    onChange={handleInputChange}
                  />

                  {/* Additional Information */}
                  <TextareaInput
                    label="Any additional information you'd like to share?"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
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
              {/* agree and signature */}
              <div className="text-sm sm:text-sm w-full gap-5 sm:gap-6 md:gap-8">
                {/* agreeTermsAndCondition */}
                <div className="mt-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="agreeTermsAndCondition" onCheckedChange={() => handleAgreeCondition()}
                      checked={agreeTermsAndCondition} />
                    <label
                      htmlFor="agreeTermsAndCondition"
                      className="text-sm font-medium md:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions of employment with MeriRide.
                    </label>
                  </div>
                </div>
                {/* [confirmAboutInfo */}
                <div className="mt-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="confirmAboutInfo" onCheckedChange={() => handleConfirmInfo()}
                      checked={confirmAboutInfo} />
                    <label
                      htmlFor="confirmAboutInfo"
                      className="text-sm font-medium md:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I confirm that all information provided is accurate and complete.
                    </label>
                  </div>
                </div>
                {/* signature */}
                <div className="mt-4">
                  <Button type="button" variant="outline" onClick={toggleSignatureCanvas} className=" mb-4">
                    {isCanvasVisible ? 'Hide Signature' : 'Add Signature'}
                  </Button>
                  {isCanvasVisible && (
                    <div className="m-auto w-[300px] sm:[400px] md:w-[500px] pt-3 flex items-center justify-center flex-col">
                      <div className="bg-slate-100 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[300px]">
                        <ReactSignatureCanvas
                          penColor='green'
                          canvasProps={{ width: 300, height: 300, className: '!w-full !h-full sigCanvas border border-border rounded-md' }}
                          ref={sigCanvasRef}
                        />
                      </div>
                      <div className="w-full flex items-center justify-between py-4">
                          <Button variant="outline" type="button" onClick={clearSignatureCanvas}>Clear Signature</Button>
                          <Button variant="outline" type="button" onClick={saveSignature}>Save Signature</Button>
                        </div>
                      </div>
                  )}
                  {signatureData && (
                    <div>
                      <h3>Saved Signature:</h3>
                      <Image src={signatureUrl} alt="Signature" width={80} height={80} className="w-auto h-auto border border-border" />
                    </div>
                  )}
                </div>
              </div>
               {/* date */}
               <div
                  className="text-sm w-full mt-4 h-9 bg-transparent rounded-none p-0 flex items-center justify-end text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <p>{dateString}</p>
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
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default ApplicationForm;
