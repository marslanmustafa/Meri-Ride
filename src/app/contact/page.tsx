import { ContactForm } from "@/components";

const Page: React.FC = () => {

  return (
    <div className="w-full h-fit md:pb-24  py-8 md:px-8 lg:px-20 xl:px-28 md:pt-12">
      <div className="px-4 sm:px-0 py-8 text-center space-y-5 text-themeGrayText mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold">Contact Us</h1>
        <p className="text-sm sm:text-[16px]">
          Any question or remarks? Just write us a message!
        </p>
      </div>
     <ContactForm/>
    </div>
  );
};

export default Page;
