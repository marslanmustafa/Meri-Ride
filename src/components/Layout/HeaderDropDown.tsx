"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation";

const HeaderDropDown = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Services</DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel></DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg outline-none border-0 link ${pathname === "/services/transportation"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/transportation"
          >
            Transportation Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/lastMile"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/lastMile"
          >
            Last Mile Delivery
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/localCourier"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/localCourier"
          >
            Local Courier Service
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg link ${pathname === "/services/ladModel"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/adModel"
          >
            Advertisement Model for Rickshaw
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderDropDown