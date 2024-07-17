// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { useGetVolunteerRequestByIdQuery } from "@/hooks/UseVolunteer";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import withAuth from "@/hoc/withAuth";
import { useDispatch } from "react-redux";
import { logOut } from "@/slice/AuthSlice";

const Page = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logOut());
  };

  const { id } = useParams<{ id: string }>();
  const { data: volunteerData, isError, isLoading, error } = useGetVolunteerRequestByIdQuery(id);
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    if (volunteerData) {
      setVolunteer(volunteerData.data);
    }
  }, [volunteerData]);

  if (isError) {
    if (error.data?.error === 'Invalid token.') {
      handleLogout();
      return <div className="flex items-center justify-center text-2xl md:text-lg">Invalid token, logging out...</div>;
    } else {
      return <div className="flex items-center justify-center text-2xl md:text-lg">Failed to Fetch Volunteer Data</div>;
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!volunteer) {
    return <div className="flex items-center justify-center text-2xl md:text-lg">No Volunteer Data Available</div>;
  }

  const {
    fullName,
    gender,
    email,
    phoneNo,
    streetAddress,
    city,
    state,
    postalCode,
    country,
    availability,
    timeSlots,
    volunteerExperience,
    relevantSkills,
    whyVolunteer,
    additionalInfo,
    referenceName,
    referencePhone,
    referenceEmail,
    referenceRelationship,
  } = volunteer;

  return (
    <div className="p-5">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-primary text-white text-lg font-bold">
          Volunteer Details
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
                <label className="text-sm font-semibold text-gray-700">Availability</label>
                <div className="mt-1">{availability.join(", ")}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Time Slots</label>
                <div className="mt-1">{timeSlots}</div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Volunteer Experience</label>
                <div className="mt-1">{volunteerExperience}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Relevant Skills</label>
                <div className="mt-1">{relevantSkills.join(", ")}</div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700">Why Volunteer</label>
                <div className="mt-1">{whyVolunteer}</div>
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
