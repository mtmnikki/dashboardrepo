"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import LogoSidebar from "./shared/logo-sidebar";
import { data } from "./sidebar-data";
import { UserMenu } from "./user-menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="hidden xl:block">
      <SidebarHeader>
        <LogoSidebar />
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin scrollbar-invisible hover:scrollbar-visible">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-center">
          <UserMenu />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
