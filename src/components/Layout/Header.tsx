"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }, [pathname]);

  return (
    <div className="w-full h-fit md:h-28 flex-col md:flex-row flex items-center justify-between md:px-8 lg:px-20 xl:px-28 md:bg-[#F7F8F7] md:border md:border-[#DBDBDB]">
      {/* responsive Div */}
      <div className="px-4 py-2 sm:py-4 sm:px-6 md:p-0 h-16 w-full md:w-fit justify-between flex items-center md:justify-center bg-[#F7F8F7] border-none md:bg-none md:border-none">
        <Image
          src="/logoGreen.svg"
          alt="Meri Ride"
          width={73}
          height={65}
          className="lg:w-[75px] md:w-14 w-12"
        />
        <div
          className="md:hidden flex items-center justify-center w-6 h-6"
          onClick={handleNavOpen}
        >
          <Menu size={20} />
        </div>
      </div>
      {/* NavBar */}
      <div
        className={`${
          navOpen ? "z-[200] !flex animate-fade-down" : "hidden"
        } absolute top-16 left-0 md:static hidden bg-[#fff] md:bg-transparent py-5 flex-col md:flex-row w-full md:flex items-center justify-between text-themeGrayText md:w-[calc(100%-80px)] lg:w-[calc(100%-110px)] xl:w-[calc(92%-100px)] gap-5 md:gap-0`}
      >
        <ul className="flex-col md:flex-row flex items-center justify-center text-sm lg:text-textEm xl:text-lg gap-5 md:gap-3 lg:gap-6 xl:gap-8">
          <li>
            <Link
              className={`link ${
                pathname === "/" ? "text-themeGreen font-bold" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/about" ? "text-themeGreen font-bold" : ""
              }`}
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/services" ? "text-themeGreen font-bold" : ""
              }`}
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/driverRecuritments"
                  ? "text-themeRed font-bold"
                  : ""
              }`}
              href="/driverRecuritments"
            >
              Driver Recuritments
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/contact" ? "text-themeGreen font-bold" : ""
              }`}
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          className={`px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-textEm md:font-medium lg:font-bold border border-themeGreen rounded-lg text-themeGrayText link ${
            pathname === "/donate" ? "text-white bg-themeGreen" : ""
          }`}
          href="/donate"
        >
          Donate and Volunteer
        </Link>
      </div>
    </div>
  );
};

export default Header;
