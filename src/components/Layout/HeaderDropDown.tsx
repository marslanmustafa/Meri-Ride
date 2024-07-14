"use client"
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu-header";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const HeaderDropDown: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none border-0'>Services</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleNavigation("/services/transportation")}>
          <span
            className={`text-sm lg:text-[16px] xl:text-lg outline-none border-0 link ${pathname === "/services/transportation"
                ? "text-primary font-bold"
                : ""
              }`}
          >
            Transportation Services
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/services/lastMile")}>
          <span
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/lastMile"
                ? "text-primary font-bold"
                : ""
              }`}
          >
            Last Mile Delivery
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/services/localCourier")}>
          <span
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/localCourier"
                ? "text-primary font-bold"
                : ""
              }`}
          >
            Local Courier Service
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/services/adModel")}>
          <span
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/ladModel"
                ? "text-primary font-bold"
                : ""
              }`}
          >
            Advertisement Model for Rickshaw
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDown;
