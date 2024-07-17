import { ChevronRight } from "lucide-react";
import Link from "next/link";

const DashCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="w-full bg-primary px-4 py-5 rounded-lg font-bold flex flex-col justify-center gap-4 shadow-lg space-y-4">
        <h1 className="text-xl text-white">Total Volunteer Application</h1>
        <p className="text-3xl text-themeGrayText">{data.totalVolunteerApplication}</p>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl text-white">View All</h2>
          <Link href="volunteer">
            <div className="w-5 h-5 lg:w-7 lg:h-7 flex items-center justify-center rounded-full p-1 bg-foreground !text-white">
              <ChevronRight size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white px-4 py-5 rounded-lg font-bold flex flex-col justify-center gap-4 shadow-lg space-y-4">
        <h1 className="text-xl text-primary">Total Recruitment Application</h1>
        <p className="text-3xl text-themeGrayText">{data.totalRecruitmentApplication}</p>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl text-primary">View All</h2>
          <Link href="driverRecruitment">
            <div className="w-5 h-5 lg:w-7 lg:h-7 flex items-center justify-center rounded-full p-1 bg-foreground !text-white">
              <ChevronRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashCard;

