import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading-skeleton";
import BasicFullCalendar from "./components/basic-full-calendar";
import CalendarSidebar from "./components/calendar-sidebar";


const CalendarPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Chat" text="Chat" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
                        <CalendarSidebar />
                    </div>

                    <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                        <BasicFullCalendar />
                    </div>

                </div>
            </Suspense>

        </>
    );
};
export default CalendarPage;