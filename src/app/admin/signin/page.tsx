import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] sm:p-0 pt-8 flex sm:items-center justify-center">

        <div className='bg-white-500  border-none h-[420px] w-full sm:w-[390px]  md:w-[420px] mx-auto sm:border-solid border-2 rounded-lg border-black-500    '>
          <div className="w-full flex items-center justify-center py-5">
            <Image
              alt="Meri Ride"
              width={1560}
              height={369}
              src="/logo.svg" className='w-[180px]' />
          </div>
          <h1 className='text-primary text-4xl font-bold block px-6 sm:hidden'> Sign in</h1>
          <form className=' px-6 flex flex-col space-y-4 py-5 '>
            <div className='w-full'>
              <p >Email:</p>
              <input type="email" className='bg-white-500 px-3 border-solid border-2 rounded-lg border-black-500 w-full h-10' />
            </div>
            <div className='w-full'>
              <p >Password:</p>
              <input type="Password" className='bg-white-500 px-3 border-solid border-2 rounded-lg border-black-500 w-full h-10' />
            </div>
            <div>
              <p className='text-sm text-red-400'></p>
            </div>
            <p className='text-sm text-center'>By clicking Agree & Join or Continue, you agree to the Meri Ride terms of use and privacy policy.</p>
            <button className='bg-primary rounded-full w-full h-10 text-white tracking-wide '> Sign In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page