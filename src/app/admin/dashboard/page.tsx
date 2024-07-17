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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      {token && (
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      )}
      <Link href={"admin/driverRecruitment"}>DriverRecruitment</Link>
    </div>
  );
};

export default withAuth(DashboardPage);
