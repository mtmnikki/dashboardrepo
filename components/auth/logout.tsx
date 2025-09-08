
"use client";

import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

const Logout = () => {
  return (
    <SignOutButton redirectUrl="/auth/login">
      <Button
        type="button"
        className="hover:text-red-600 flex items-center gap-3 py-0.5 text-neutral-900 dark:text-white text-base !px-0.5 cursor-pointer leading-[0] w-full justify-start hover:no-underline h-[25px]"
        variant="link"
      >
        <LogOutIcon width={24} height={24} className="!w-4.5 !h-4.5" />
        Logout
      </Button>
    </SignOutButton>
  );
};

export default Logout;
