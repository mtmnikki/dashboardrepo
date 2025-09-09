'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const CLERK_ACCOUNT_PORTAL_URL = 'https://dashboard.clerk.com/account'; // update with your actual Clerk portal URL if different

const CreatePasswordComponent = () => {
  const router = useRouter();

  const handleGoToAccountPortal = () => {
    // Optionally, you can redirect rather than open in a new tab
    window.open(CLERK_ACCOUNT_PORTAL_URL, '_blank');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-center">Manage Your Password</h2>
      <p className="mb-6 text-center text-muted-foreground">
        You can securely reset or update your password using the Clerk Account Portal.
      </p>
      <Button
        className="w-full rounded-lg h-[52px] text-sm mt-2 mb-4"
        onClick={handleGoToAccountPortal}
      >
        Go to Account Portal
      </Button>
      <div className="mt-4 text-center text-sm">
        <p>
          Not now? Return{' '}
          <Link
            href="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CreatePasswordComponent
