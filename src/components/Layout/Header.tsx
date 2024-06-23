"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false)

  const handleNavOpen = ()=>{
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    if(window.innerWidth <= 768){
      setNavOpen(false)
    }
    else{
      setNavOpen(true)
    }
  }, [pathname])
  

  return (
    <div className="w-full h-fit md:h-28 flex-col md:flex-row flex items-center justify-between md:px-14 lg:px-20 xl:px-28 md:bg-[#F7F8F7] border md:border-[#DBDBDB]">
      {/* responsive Div */}
      <div className="p-3 sm:py-4 sm:px-6 md:p-0 h-20 w-full md:w-fit justify-between flex items-center md:justify-center bg-[#F7F8F7] border border-[#DBDBDB] md:bg-none md:border-none">
        <Image
          src="./logo.svg"
          alt="Meri Ride"
          width={73}
          height={65}
          className="md:w-full w-12"
        />
        <div 
        className="md:hidden flex items-center justify-center w-6 h-6"
        onClick={handleNavOpen}
        >
          <Menu size={20} />
        </div>
      </div>
      {/* NavBar */}
      <div className={`${navOpen ?'!flex':'hidden'} hidden bg-[#fff] md:bg-transparent py-3 flex-col md:flex-row w-full md:flex items-center justify-between text-themeGrayText md:w-[calc(100%-120px)] lg:w-[calc(100%-152px)] xl:w-[calc(80%-100px)] gap-5 md:gap-0`}>
        <ul className="flex-col md:flex-row flex items-center justify-center text-sm md:text-textEm lg:text-lg gap-5 lg:gap-8">
          <li>
            <Link
              className={`link ${
                pathname === "/" ? "text-themeRed font-bold" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/about" ? "text-themeRed font-bold" : ""
              }`}
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/services" ? "text-themeRed font-bold" : ""
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
        </ul>
        <div className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 text-sm lg:text-[1em] md:font-medium lg:font-bold border border-themeRed rounded-lg">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Header;
