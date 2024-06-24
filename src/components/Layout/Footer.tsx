import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full relative bottom-0 left-0">
      <div className="w-full flex gap-5 flex-wrap lg:flex-nowrap px-4 md:px-8 lg:px-20 xl:px-32 pt-10 pb-2 lg:py-14 bg-white text-foreground text-xs">
        {/* div1 */}
        <div className="w-full">
          <Image src="./logo.svg" alt="Meri Ride" width={74} height={74} className="w-[74px] h-[74px]"/>
          <p className="py-3">
            Through Partnership, a non-profit organization dedicated to
            transforming the lives of individuals with disabilities by creating
            sustainable income opportunities
          </p>
        </div>
        {/* div2 */}
        <div className="w-full sm:w-[48%] lg:w-full xl:w-9/12">
          <h1 className="font-bold text-sm">Contact</h1>
          <ul>
            <li className="py-4">
              <h2 className="font-bold">Address</h2>
              <p className="py-3">6-9 The Squre Stockley Park UXBRIDGE, UB11 1FW United Kingdom, Uxbridge, England</p>
            </li>
            <li>
              <h2 className="font-bold">Contact</h2>
              <div>
                <a href="mailto:info@meriride.co" className="block py-3" >info@meriride.co</a>
                <a href="tel:+447777777777">+44 000 00000</a>
              </div>
            </li>
          </ul>
        </div>
        {/* div3 */}
        <div className="w-full sm:w-[48%] lg:w-9/12">
          <h1 className="font-bold text-sm">Resources</h1>
          <ul className="py-4 flex flex-col gap-3">
           <li>Services</li>
           <li>Careers</li>
           <li>Events</li>
           <li>Blogs</li>
          </ul>
        </div>
         {/* div4 */}
         <div className="w-full sm:w-[48%] lg:w-9/12">
          <h1 className="font-bold text-sm">Quick Links</h1>
          <ul className="py-4 flex flex-col gap-3">
           <li>Home</li>
           <li>About</li>
           <li>Services</li>
           <li>Driver Recuritment</li>
           <li>Contact Us</li>
           <li>Donate and Volunteer</li>
          </ul>
        </div>
         {/* div5 */}
         <div className="w-full sm:w-[48%] lg:w-full">
          <h1 className="font-bold text-sm">Newsletter</h1>
          <p className="py-4 font-bold text-sm">Sign up for the latest events and updates.</p>
          <div className="overflow-hidden w-full border border-foreground p-1 rounded-full flex items-center justify-between">
            <input type="text" placeholder="Enter Your Email" className="outline-none pl-3 py-2 w-[90%]" />
            <button className="border bg-themeRed text-white px-3 py-2 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="py-6 w-full">
            <ul className="w-full flex items-center justify-center sm:justify-between gap-4">
              <li className="w-9 h-9 rounded-full bg-[#F1F2F4] flex items-center justify-center"><FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" /></li>
              <li className="w-9 h-9 rounded-full bg-[#F1F2F4] flex items-center justify-center"><FontAwesomeIcon icon={faFacebook} className="w-4 h-4" /></li>
              <li className="w-9 h-9 rounded-full bg-[#F1F2F4] flex items-center justify-center"><FontAwesomeIcon icon={faYoutube} className="w-4 h-4" /></li>
              <li className="w-9 h-9 rounded-full bg-[#F1F2F4] flex items-center justify-center"><FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" /></li>
              <li className="w-9 h-9 rounded-full bg-[#F1F2F4] flex items-center justify-center"><FontAwesomeIcon icon={faInstagram} className="w-4 h-4" /></li>
            </ul>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="h-fit px-4 py-3 md:px-8 lg:px-20 xl:px-32 flex-col-reverse gap-4 sm:gap-0 sm:flex-row bg-foreground flex items-center justify-center sm:justify-between text-white text-xs sm:text-sm">
        <p>© 2024 Meri Ride. All Rights Reserved.</p>
        <div className=" flex items-center justify-between gap-2">
          <Link href="/privacy">Privacy Policy</Link>
          <div>|</div>
          <Link href="/terms">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
