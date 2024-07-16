// src/components/RequireAuth.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const requireAuth = (WrappedComponent: React.ComponentType<any>, redirectPath = '/dashboard') => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
      if (token) {
        router.push(redirectPath); // Redirect to dashboard if token is present
      }
    }, [token, router, redirectPath]);

    if (token) {
      // You can show a loading spinner or message while checking authentication
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default requireAuth;
