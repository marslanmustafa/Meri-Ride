"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import HeaderDropDown from "./HeaderDropDown";
import HeaderAccordion from "./HeaderAccordion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logOut } from "@/slice/AuthSlice";
import { Button } from "../ui";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }, [pathname]);

  const isAdminPath = pathname.includes('/admin/');

  return (
    <div className="w-full h-fit lg:h-28 flex-col md:flex-row flex items-center justify-between gap-5 lg:px-20 xl:px-28 md:bg-[#F7F8F7] md:border md:border-[#DBDBDB]">
      {/* responsive Div */}
      <div className="px-4 py-2 sm:py-4 sm:px-6 lg:p-0 h-16 w-full lg:w-fit justify-between flex items-center lg:justify-center bg-[#F7F8F7] border-none lg:bg-none lg:border-none">
        <Link
          className={`link ${pathname === "/" ? "text-primary font-bold" : ""
            }`}
          href="/"
        >
          <Image
            src="/logo.svg"
            alt="Meri Ride"
            priority
            width={240}
            height={70}
            className="lg:w-[160px] xl:w-[190px] md:w-32 w-28 h-auto"
          />
        </Link>
        <div
          className="lg:hidden flex items-center justify-center w-6 h-6"
          onClick={handleNavOpen}
        >
          <Menu size={20} />
        </div>
      </div>
      {/* NavBar */}
      {isAdminPath ? (
        <div
          className={`${navOpen ? "z-[200] !flex animate-fade-down" : "hidden"
            } absolute top-16 left-0 lg:static hidden bg-[#fff] lg:bg-transparent py-5 flex-col lg:flex-row w-full lg:w-auto lg:flex items-center justify-between text-themeGrayText lg:max-w-[calc(100%-110px)] xl:max-w-[calc(92%-100px)] gap-5 lg:gap-0`}
        >
          <ul className="flex-col lg:flex-row flex items-center justify-center text-sm lg:text-base xl:text-lg gap-5 md:gap-3 lg:gap-3 xl:gap-7">
            <li>
              <Link
                className={`link ${pathname === "/admin/dashboard" ? "text-primary font-bold" : ""
                  }`}
                href="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/admin/driverRecruitment" ? "text-primary font-bold" : ""
                  }`}
                href="/admin/driverRecruitment"
              >
                Driver Recruitment
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/admin/volunteer" ? "text-primary font-bold" : ""
                  }`}
                href="/admin/volunteer"
              >
                Volunteer
              </Link>
            </li>
            <li>
              {token ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 md:px-3 lg:px-5 xl:px-8 lg:py-3 text-sm lg:text-base md:font-medium lg:font-bold rounded-lg text-themeGrayText">
                  Logout
                </button>
              ) : (<Link
                className={`px-4 py-2 md:px-3 lg:px-5 xl:px-8 lg:py-3 text-sm lg:text-base md:font-medium lg:font-bold border border-primary rounded-lg text-themeGrayText link ${pathname === "/admin/signin" ? "text-white bg-primary" : ""
                  }`}
                href="/admin/signin"
              >
                Sign In
              </Link>)}
            </li>
          </ul>
        </div>
      ) : (
        <div
          className={`${navOpen ? "z-[200] !flex animate-fade-down" : "hidden"
            } absolute top-16 left-0 lg:static hidden bg-[#fff] lg:bg-transparent py-5 flex-col lg:flex-row w-full lg:flex items-center justify-between text-themeGrayText lg:w-[calc(100%-110px)] xl:w-[calc(92%-100px)] gap-5 lg:gap-0`}
        >
          <ul className="flex-col lg:flex-row flex items-center justify-center text-sm lg:text-base xl:text-lg gap-5 md:gap-3 lg:gap-3 xl:gap-7">
            <li>
              <Link
                className={`link ${pathname === "/" ? "text-primary font-bold" : ""
                  }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/about" ? "text-primary font-bold" : ""
                  }`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <div className="hidden lg:block"> <HeaderDropDown /></div>
              <div className="block lg:hidden"> <HeaderAccordion /></div>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/driverRecruitment" ? "text-primary font-bold" : ""
                  }`}
                href="/driverRecruitment"
              >
                Driver Recruitment
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/contact" ? "text-primary font-bold" : ""
                  }`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            className={`px-4 py-2 md:px-3 lg:px-5 xl:px-8 lg:py-3 text-sm lg:text-base md:font-medium lg:font-bold border border-primary rounded-lg text-themeGrayText link ${pathname === "/donateAndVolunteer" ? "text-white bg-primary" : ""
              }`}
            href="/donateAndVolunteer"
          >
            Donate and Volunteer
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
