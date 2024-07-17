"use client"
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <RotatingLines strokeColor="#A8E92F"
            strokeWidth="3"
            animationDuration="0.75"
            width="80"
            visible={true} />
  </div>
);

export default LoadingSpinner;

