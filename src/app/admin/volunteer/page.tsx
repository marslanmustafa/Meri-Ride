// @ts-nocheck
"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus } from "lucide-react";
import { useGetDriverRecruitmentRequestsQuery } from '@/hooks/UseRecruitment';
import ProductCard from '@/components/productCard/ProductCard';
import Link from "next/link";
import withAuth from '@/hoc/withAuth';
import { DataTable } from '@/components/dataTable/DataTable';
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

const columns = [
  {
    accessorKey: 'fullName',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phoneNo',
    header: 'Phone',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'dob',
    header: 'DOB',
  },
];


const Page = () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  const { data: responseData, isLoading, isError } = useGetDriverRecruitmentRequestsQuery();
  if (isError) {
    return <div className="flex items-center justify-center text-2xl md:text-lg">Failed to Fetch</div>;
  }
  console.log(responseData)
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      {responseData && (<div className="w-full min-h-full px-4 md:px-[1em] py-2 md:py-4 overflow-scroll">
        <div className='p-5'>
          <div className="py-4 w-full flex justify-between">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-themeGrayText2 font-bold xl:leading-[80px]">
            Driver Recruitment
          </h1>
          </div>
          <DataTable columns={columns} data={responseData?.data} detailsRoute="admin/driverRecruitment" />
        </div>
      </div>)}
    </div>
  );
};

export default withAuth(Page);
