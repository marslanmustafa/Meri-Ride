"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { usePathname } from "next/navigation";


const HeaderAccordion = () => {
  const pathname = usePathname();

  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Services</AccordionTrigger>
    <AccordionContent>
    <Link
            className={`text-sm lg:text-[16px] xl:text-lg text-center outline-none border-0 link ${pathname === "/services/transportation"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/transportation"
          >
            Transportation Services
          </Link>
    </AccordionContent>
    <AccordionContent>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg text-center link ${pathname === "/services/lastMile"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/lastMile"
          >
            Last Mile Delivery
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg text-center link ${pathname === "/services/localCourier"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/localCourier"
          >
            Local Courier Service
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            className={`text-sm lg:text-[16px] xl:text-lg text-center link ${pathname === "/services/ladModel"
                ? "text-themeGreen font-bold"
                : ""
              }`}
            href="/services/adModel"
          >
            Advertisement Model for Rickshaw
          </Link>
        </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}

export default HeaderAccordion