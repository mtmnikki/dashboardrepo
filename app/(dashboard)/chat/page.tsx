"use client";

import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading-skeleton";
import ChatBox from "./components/chat-box";

export const dynamic = 'force-dynamic';

const EmailPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Chat" text="Chat" />

            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                <ChatBox />
            </Suspense>

        </>
    );
};
export default EmailPage;