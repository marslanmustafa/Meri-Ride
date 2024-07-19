// @ts-nocheck
"use client"
import Link from "next/link";
import withAuth from '@/hoc/withAuth';
import { DataTable } from '@/components/dataTable/DataTable';
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { useGetAllVolunteersRequestQuery } from '@/hooks/UseVolunteer';
import { useDispatch } from "react-redux";
import { logOut } from "@/slice/AuthSlice";



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
    accessorKey: 'city',
    header: 'City',
  },
];


const Page = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  
  const { data: responseData, isLoading, isError, error } = useGetAllVolunteersRequestQuery();
  
  if (isError) {
    if (error.data?.error === 'Invalid token.') {
      handleLogout();
      return <div className="flex items-center justify-center text-2xl md:text-lg">Invalid token, logging out...</div>;
    } else {
      return <div className="flex items-center justify-center text-2xl md:text-lg">{error.data?.error ?
        (<>
        <h1>{error.data?.error}</h1>
        </>) :
         (<div className="w-full h-screen flex items-center justify-center">
        <h1>Failed to Fetch</h1>
        </div>)
      }</div>;
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {responseData && (<div className="w-full min-h-full px-1 md:px-2 py-2 md:py-4 overflow-scroll">
        <div className='px-1 sm:p-5'>
          <div className="py-4 w-full flex justify-between">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-themeGrayText2 font-bold xl:leading-[80px]">
            Volunteer
          </h1>
          </div>
          <DataTable columns={columns} data={responseData?.data} detailsRoute="admin/volunteer" />
        </div>
      </div>)}
    </div>
  );
};

export default withAuth(Page);
