// src/hoc/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
      if (!token) {
        router.push('/admin/signin');
      }
    }, [token, router]);

    if (token) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Auth;
};

export default withAuth;
