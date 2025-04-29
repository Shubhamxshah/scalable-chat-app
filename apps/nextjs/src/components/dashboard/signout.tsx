'use client'

import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/components/base/button';

const SignOut = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/'); // redirect to login page
        },
      },
    });
  };
  return <Button onClick={handleLogout} variant='destructive'> Signout</Button>;
};

export default SignOut;
