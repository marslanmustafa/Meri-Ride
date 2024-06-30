import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Service } from '@/lib/types';


const ServiceCard = ({ icon, heading, para, link }: Service) => (

    <Link href={link} className="relative w-full min-h-[230px] h-fit pb-10 sm:h-[300px] md:h-[270px] xl:w-[280px] xl:h-[298px] px-6 py-5 bg-white hover:bg-themeGreen rounded-2xl space-y-3">
      <div className="w-16 h-16 border border-themeGreen bg-white rounded-full flex items-center justify-center p-2">
        <Image 
          src={icon}
          alt={heading}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <h3 className="text-sm sm:text-lg font-bold">{heading}</h3>
      <p className="text-xs sm:text-sm truncate-multiline">{para}</p>   {/* global css */}
      <div className="absolute right-4 bottom-4 sm:right-5 sm:bottom-5 w-5 h-5 lg:w-7 lg:h-7 flex items-center justify-center rounded-full p-1 bg-foreground !text-white">
        <ChevronRight size={20} />
      </div>
    </Link>
);
export default ServiceCard
