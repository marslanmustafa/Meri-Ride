"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { logOut } from '@/slice/AuthSlice';
import withAuth from '@/hoc/withAuth';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    // Dispatch action to clear credentials (token)
    dispatch(logOut());
    // Optionally, redirect user to login page or home page after logout
    // router.push('/login'); // Example: If using Next.js router
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
    </div>
  );
};

export default withAuth(DashboardPage);
