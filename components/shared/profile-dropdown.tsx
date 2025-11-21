"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { User, Mail, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import userImg from "@/public/assets/images/user.png";
import { createClient } from "@/lib/supabase/client";

interface UserData {
  email?: string
  user_metadata?: {
    avatar_url?: string
    full_name?: string
  }
}

const ProfileDropdown = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase.auth]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full sm:w-10 sm:h-10 w-8 h-8 bg-gray-200/75 hover:bg-slate-200 focus-visible:ring-0 dark:bg-slate-700 dark:hover:bg-slate-600 border-0 cursor-pointer data-[state=open]:bg-gray-300 data-[state=open]:ring-4 data-[state=open]:ring-slate-300 dark:data-[state=open]:ring-slate-500 dark:data-[state=open]:bg-slate-600"
          )}
        >
          {user?.user_metadata?.avatar_url ? (
            <Image
              src={user.user_metadata.avatar_url}
              className="rounded-full"
              width={40}
              height={40}
              alt={user?.user_metadata?.full_name ?? "User profile"}
            />
          ) : (
            <Image
              src={userImg}
              className="rounded-full"
              width={40}
              height={40}
              alt={"User profile"}
            />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="sm:w-[300px] min-w-[250px] right-[40px] absolute p-4 rounded-2xl overflow-hidden shadow-lg"
        side="bottom"
        align="end"
      >
        <div className="py-3 px-4 rounded-lg bg-primary/10 dark:bg-primar flex items-center justify-between">
          <div>
            <h6 className="text-lg text-neutral-900 dark:text-white font-semibold mb-0">
              {user?.user_metadata?.full_name ?? user?.email?.split('@')[0] ?? "User"}
            </h6>
            <span className="text-sm text-neutral-500 dark:text-neutral-300">
              {user?.email}
            </span>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto scroll-sm pt-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/view-profile"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3"
              >
                <User className="w-5 h-5" /> My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/email"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3"
              >
                <Mail className="w-5 h-5" /> Inbox
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-3"
              >
                <Settings className="w-5 h-5" /> Settings
              </Link>
            </li>
          </ul>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
