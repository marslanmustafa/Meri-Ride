// @ts-nocheck
"use client"
import { useState, useEffect } from "react";
import { useGetDriverRecruitmentByIdQuery } from "@/hooks/UseRecruitment";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import withAuth from "@/hoc/withAuth";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const { data: recruitmentData, isError, isLoading } = useGetDriverRecruitmentByIdQuery(id);
  const [recruitment, setRecruitment] = useState(null);

  useEffect(() => {
    if (recruitmentData) {
      setRecruitment(recruitmentData.data);
    }
  }, [recruitmentData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError || !recruitment) {
    return <div className="flex items-center justify-center text-2xl md:text-lg">Failed to Fetch Driver Recruitment</div>;
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

  return (
    <div className="p-5">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-primary text-white text-lg font-bold">
          Driver Recruitment Details
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <div className="mt-1 text-lg font-semibold">{fullName}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Date of Birth</label>
                <div className="mt-1">{dob}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Gender</label>
                <div className="mt-1">{gender}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <div className="mt-1">{email}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <div className="mt-1">{phoneNo}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Address</label>
                <div className="mt-1">{streetAddress}, {city}, {state}, {postalCode}, {country}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Emergency Contact</label>
                <div className="mt-1">
                  <div>{emergencyContactName}</div>
                  <div>{emergencyContactPhone}</div>
                  <div>{emergencyContactEmail}</div>
                  <div>{emergencyContactRelationship}</div>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Driver License Number</label>
                <div className="mt-1">{driverLicenseNumber}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">License Expiry Date</label>
                <div className="mt-1">{driverLicenseExpiryDate}</div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Driving Violation History</label>
                <div className="mt-1">{drivingViolationHistory ? "Yes" : "No"}</div>
                {drivingViolationHistoryDetail && (
                  <div className="mt-1">{drivingViolationHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Road Accident History</label>
                <div className="mt-1">{roadAccidentHistory ? "Yes" : "No"}</div>
                {roadAccidentHistoryDetail && (
                  <div className="mt-1">{roadAccidentHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Authorization for Background Check</label>
                <div className="mt-1">{authorizationForBackgroundCheck ? "Yes" : "No"}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Criminal History</label>
                <div className="mt-1">{criminalHistory ? "Yes" : "No"}</div>
                {criminalHistoryDetail && (
                  <div className="mt-1">{criminalHistoryDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Company Mission Agreement</label>
                <div className="mt-1">{companyMissionAgreement ? "Agreed" : "Not Agreed"}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Availability</label>
                <div className="mt-1">{availability}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Time Slots</label>
                <div className="mt-1">{timeSlots}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Previous Experience</label>
                <div className="mt-1">{previousExperience} year(s)</div>
                {previousExperienceDetail && (
                  <div className="mt-1">{previousExperienceDetail}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Relevant Skills</label>
                <div className="mt-1">{relevantSkills}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Why Work With Us</label>
                <div className="mt-1">{whyWorkWithUs}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Additional Information</label>
                <div className="mt-1">{additionalInfo}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Reference</label>
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
