"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { logOut } from '@/slice/AuthSlice';
import withAuth from '@/hoc/withAuth';
import Link from 'next/link';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Dashboard</h1>
        <p className="text-center text-gray-600 mb-6">Welcome to the dashboard!</p>
        <div className="flex justify-between items-center mb-6 md:flex-row flex-col gap-3">
          <div className="flex space-x-4 md:flex-row flex-col gap-3">
            <Link
              href="driverRecruitment"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
              Driver Recruitment
            </Link>
            <Link href="volunteer"
              className="bg-themeGrayText text-white font-bold py-2 px-4 rounded shadow-lg">
              Volunteer Data
            </Link>
          </div>
          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardPage);
