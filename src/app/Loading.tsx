"use client";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import Image from "next/image";
// import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

export default function Loading({ children }: { children: React.ReactNode }) {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {isLoading ? 
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-background">
         <Image width={240} height={70} src={"/logo.svg"} alt="Meri Ride" />
        {/* <LoadingSpinner /> */}
      </div>
      : children}
    </div>
  );
}
