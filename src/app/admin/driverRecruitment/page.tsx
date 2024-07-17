// @ts-nocheck
"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus } from "lucide-react";
import { useGetDriverRecruitmentRequestsQuery } from '@/hooks/UseRecruitment';
import ProductCard from '@/components/productCard/ProductCard';
import Link from "next/link";
import withAuth from '@/hoc/withAuth';
import { DataTable } from '@/components/dataTable/DataTable';

const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
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
];


const Page = () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  const { data: responseData, isLoading, isError } = useGetDriverRecruitmentRequestsQuery();
  if (isError) {
    return <div className="flex items-center justify-center text-2xl md:text-lg">Failed to Fetch</div>;
  }
  console.log(responseData)

  return (
    <div className="p-5">
      <div className="py-4 w-full flex justify-end">
        {isLoading &&
          <>
            Loading
          </>
        }
      </div>

      {responseData && (<div className="w-full min-h-full px-4 md:px-[1em] py-2 md:py-4 overflow-scroll">
        <div className='p-5'>
          <div className="py-4 w-full flex justify-between">
            <h1 className="text-3xl text-primary font-bold pb-2">
              Users List
            </h1>
          </div>
          <DataTable columns={columns} data={responseData?.data} detailsRoute="/admin/driverRecruitment" />
        </div>
      </div>)}
    </div>
  );
};

export default withAuth(Page);
