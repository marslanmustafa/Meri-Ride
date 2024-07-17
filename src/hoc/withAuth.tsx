import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useToast } from '@/components/ui/use-toast'; 

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);
    const { toast } = useToast();

    useEffect(() => {
      if (!token) {
        toast({
          title: 'Failed',
          description: 'Please login first',
          duration: 2000,
        });
        router.push('/admin/signin');
      }
    }, [token, router, toast]);

    if (token) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Auth;
};

export default withAuth;
