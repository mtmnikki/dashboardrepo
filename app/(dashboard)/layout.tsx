'use client'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { EmailSidebarProvider } from '@/contexts/email-sidebar-context'

export const dynamic = 'force-dynamic';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <EmailSidebarProvider>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar/>
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Toaster />
        </SidebarProvider>
      </EmailSidebarProvider>
    </ThemeProvider>
  )
}
