"use client";

import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "@/app/(dashboard)/components/default-card-component";
import GenerateContentChart from "@/components/charts/generate-content-chart";
import RevenueStatisticsChartUpdown from "@/components/charts/revenue-statistics-chart-updown";
import ColumnGroupBarChart from "@/components/charts/column-group-bar-chart";
import GroupColumnChart from "@/components/charts/group-column-chart";

export const dynamic = 'force-dynamic';

const ColumnChartPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Column Chart" text="Column Chart" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefaultCardComponent title="Column Charts">
                    
                        <GenerateContentChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Column Charts">
                    
                        <ColumnGroupBarChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Group Columns">
                    
                        <GroupColumnChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Simple Column">
                    
                        <RevenueStatisticsChartUpdown />
                    
                </DefaultCardComponent>
            </div>
        </>
    );
};
export default ColumnChartPage;
