// @ts-nocheck
"use client"
import Link from "next/link";
import withAuth from '@/hoc/withAuth';
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { useGetDashboardTotalQuery } from '@/hooks/UseDashboard';
import DashCard from "@/components/DashCard";
import { useDispatch } from "react-redux";
import { logOut } from "@/slice/AuthSlice";

const Page = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const { data: responseData, isLoading, isError, error } = useGetDashboardTotalQuery();

  if (isError) {
    if (error.data?.error === 'Invalid token.') {
      handleLogout();
      return <div className="flex items-center justify-center text-2xl md:text-lg">Invalid token, logging out...</div>;
    } else {
      return <div className="flex items-center justify-center text-2xl md:text-lg">{error.data?.error ?
        (<>
        <h1>{error.data?.error}</h1>
        </>) :
         (<div className="w-full h-screen flex items-center justify-center">
        <h1>Failed to Fetch</h1>
        </div>)
      }</div>;
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:pb-24 py-8 px-4 md:px-8 lg:px-20 xl:px-28 md:pt-12">
      <h1 className="text-3xl font-bold mb-4 text-themeGraytext">Dashboard</h1>
      <p className=" text-gray-600 mb-6"></p>
      <div className="w-full mt-2">
        <DashCard data={responseData.data} />
      </div>
    </div>
  );
};

export default withAuth(Page);
