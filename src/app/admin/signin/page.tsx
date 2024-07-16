"use client";
import { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/hooks/UseAuth';
import { setCredentials } from '@/slice/AuthSlice';
import { useToast } from '@/components/ui/use-toast'; // Update with the correct import
import requireAuth from '@/hoc/requieAuth';

const Page = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [login, { isSuccess, error: loginError, data: responseData, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Logging in",
        description: "Please wait while we log you in.",
        duration: 2000,
      });
    } else if (isSuccess) {
      if (responseData?.success) {
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard",
          duration: 2000,
        });
        dispatch(setCredentials({ token: responseData?.token, userId: responseData?.id }));
        // Uncomment this line to redirect after successful login
        // router.push('/admin/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: responseData?.message || "Failed to login",
          duration: 2000,
        });
      }
    } else if (loginError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to login",
        duration: 2000,
      });
    }
  }, [isSuccess, isLoading, loginError, responseData, toast, dispatch, router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.email) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please Enter Email",
        duration: 2000,
      });
      return false;
    }
    if (!formData.password) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please Enter Password",
        duration: 2000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    login(formData);
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] sm:p-0 pt-8 flex sm:items-center justify-center">
        <div className="bg-white-500 border-none h-[420px] w-full sm:w-[390px] md:w-[420px] mx-auto sm:border-solid border-2 rounded-lg border-black-500">
          <div className="w-full flex items-center justify-center py-5">
            <Image alt="Meri Ride" width={1560} height={369} src="/logo.svg" className="w-[180px]" />
          </div>
          <h1 className="text-primary text-4xl font-bold block px-6 sm:hidden">Sign in</h1>
          <form onSubmit={handleSubmit} className="px-6 flex flex-col space-y-4 py-5">
            <div className="w-full">
              <p>Email:</p>
              <input
                type="email"
                name="email"
                className="bg-white-500 px-3 border-solid border-2 rounded-lg border-black-500 w-full h-10"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <p>Password:</p>
              <input
                type="password"
                name="password"
                className="bg-white-500 px-3 border-solid border-2 rounded-lg border-black-500 w-full h-10"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {error && (
              <div>
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
            <p className="text-sm text-center">
              By clicking Agree & Join or Continue, you agree to the Meri Ride terms of use and privacy policy.
            </p>
            <button type="submit" className="bg-primary rounded-full w-full h-10 text-white tracking-wide" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default requireAuth(Page, '/admin/dashboard');
