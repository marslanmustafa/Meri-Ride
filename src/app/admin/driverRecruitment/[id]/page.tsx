// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { useGetDriverRecruitmentByIdQuery } from "@/hooks/UseRecruitment";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import withAuth from "@/hoc/withAuth";
import { useDispatch } from "react-redux";
import { logOut } from "@/slice/AuthSlice";
import Image from "next/image";

const Page = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const { id } = useParams<{ id: string }>();
  const { data: recruitmentData, isError, isLoading, error } = useGetDriverRecruitmentByIdQuery(id);
  const [recruitment, setRecruitment] = useState(null);
  console.log(recruitmentData)
  useEffect(() => {
    if (recruitmentData) {
      setRecruitment(recruitmentData.data);
    }
  }, [recruitmentData]);

  if (isError) {
    if (error.data?.error === 'Invalid token.') {
      handleLogout();
      return <div className="flex items-center justify-center text-2xl md:text-lg">Invalid token, logging out...</div>;
    } else {
      return <div className="flex items-center justify-center text-2xl md:text-lg">Failed to Fetch Driver Recruitment</div>;
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!recruitment) {
    return <div className="flex items-center justify-center text-2xl md:text-lg">No Recruitment Data Available</div>;
  }

  const {
    fullName,
    dob,
    gender,
    email,
    phoneNo,
    streetAddress,
    city,
    state,
    postalCode,
    country,
    emergencyContactName,
    emergencyContactPhone,
    emergencyContactEmail,
    emergencyContactRelationship,
    driverLicenseNumber,
    driverLicenseExpiryDate,
    drivingViolationHistory,
    drivingViolationHistoryDetail,
    roadAccidentHistory,
    roadAccidentHistoryDetail,
    authorizationForBackgroundCheck,
    criminalHistory,
    criminalHistoryDetail,
    companyMissionAgreement,
    availability,
    timeSlots,
    previousExperience,
    previousExperienceDetail,
    relevantSkills,
    whyWorkWithUs,
    additionalInfo,
    referenceName,
    referencePhone,
    referenceEmail,
    referenceRelationship,
    agreeTermsAndCondition,
    confirmAboutInfo,
    signature,
    date,
  } = recruitment;
  const availabilityArray = availability.split(',');
  const signatureUrl = `${process.env.NEXT_PUBLIC_API_URL}/${signature}`;

  return (
    <div className="px-2 py-6 sm:p-5">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-2 sm:p-4 bg-primary text-white text-lg font-bold">
          Driver Recruitment Details
        </div>
        <div className="p-2 sm:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            {/* Left Column */}
            <div className="">
              <div>
                <h1 className="font-bold text-lg mb-4">Personal Information</h1>
                <div className="mb-4">
                  <label className="text-sm font-bold text-themeGrayText">Full Name</label>
                  <div className="mt-1 text-lg font-semibold">{fullName}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Date of Birth</label>
                  <div className="mt-1">{dob}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Gender</label>
                  <div className="mt-1">{gender}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Email</label>
                  <div className="mt-1">{email}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Phone Number</label>
                  <div className="mt-1">{phoneNo}</div>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-lg mb-4">Address</h1>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Street Address</label>
                  <div className="mt-1">{streetAddress}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">City</label>
                  <div className="mt-1">{city}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">State</label>
                  <div className="mt-1">{state}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Postal Code</label>
                  <div className="mt-1">{postalCode}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-themeGrayText">Country</label>
                  <div className="mt-1">{country}</div>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-lg font-bold text-themeGrayText">Emergency Contact</label>
                <div className="mt-1">
                  <div>{emergencyContactName}</div>
                  <div>{emergencyContactPhone}</div>
                  <div>{emergencyContactEmail}</div>
                  <div>{emergencyContactRelationship}</div>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Driver License Number</label>
                <div className="mt-1">{driverLicenseNumber}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">License Expiry Date</label>
                <div className="mt-1">{driverLicenseExpiryDate}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Signature</label>
                {signature === " " ? (
                  <div className="mt-1 size-full p-4 sm:size-[300px] shadow-xl rounded-md border border-border overflow-hidden">
                    <div className="size-full">
                      <Image src={signatureUrl} alt="Signature" width={300} height={300} />
                    </div>
                  </div>
                ) : (
                  <p className="text-red-500 mt-4">Signature Not Available</p>
                )}

              </div>
            </div>

            {/* Right Column */}
            <div className="">
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Driving Violation History</label>
                <div className="mt-1">{drivingViolationHistory ? "Yes" : "No"}</div>
                {drivingViolationHistoryDetail && (
                  <div className="mt-1">{drivingViolationHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Road Accident History</label>
                <div className="mt-1">{roadAccidentHistory ? "Yes" : "No"}</div>
                {roadAccidentHistoryDetail && (
                  <div className="mt-1">{roadAccidentHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Authorization for Background Check</label>
                <div className="mt-1">{authorizationForBackgroundCheck ? "Yes" : "No"}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Criminal History</label>
                <div className="mt-1">{criminalHistory ? "Yes" : "No"}</div>
                {criminalHistoryDetail && (
                  <div className="mt-1">{criminalHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Company Mission Agreement</label>
                <div className="mt-1">{companyMissionAgreement ? "Agreed" : "Not Agreed"}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText w-full">Availability</label>
                <p className="mt-1">{availabilityArray.join(', ')}</p>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Time Slots</label>
                <div className="mt-1">{timeSlots}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Previous Experience</label>
                <div className="mt-1">{previousExperience ? "Yes" : "No"}</div>
                {previousExperienceDetail && (
                  <div className="mt-1">{previousExperienceDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Relevant Skills</label>
                <div className="mt-1">{relevantSkills}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Why Work With Us</label>
                <div className="mt-1">{whyWorkWithUs}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Additional Information</label>
                <div className="mt-1">{additionalInfo}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-themeGrayText">Reference</label>
                <div className="mt-1">
                  <div>{referenceName}</div>
                  <div>{referencePhone}</div>
                  <div>{referenceEmail}</div>
                  <div>{referenceRelationship}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
