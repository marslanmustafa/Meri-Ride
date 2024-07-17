// src/components/RequireAuth.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner';

const requireAuth = (WrappedComponent: React.ComponentType<any>, redirectPath = '/dashboard') => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
      if (token) {
        router.push(redirectPath);
      }
    }, [token, router, redirectPath]);

    if (token) {
        return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default requireAuth;
