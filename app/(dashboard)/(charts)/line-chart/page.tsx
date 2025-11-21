"use client";

import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "@/app/(dashboard)/components/default-card-component";
import LineChart from "@/components/charts/line-chart";
import ZoomableChart from "@/components/charts/zoomable-chart";
import LineChartLabel from "@/components/charts/line-chart-label";
import LineChartAnimation from "@/components/charts/line-chart-animation";
import SteplineChart from "@/components/charts/stepline-chart";
import GradientChart from "@/components/charts/gradient-chart";

export const dynamic = 'force-dynamic';

const LineChartPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Line Chart" text="Line Chart" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefaultCardComponent title="Default Line Chart">
                    
                        <LineChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Zoomable Chart">
                    
                        <ZoomableChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Line Chart with Data Labels">
                    
                        <LineChartLabel />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Line Chart Animation">
                    
                        <LineChartAnimation />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Stepline Charts">
                    
                        <SteplineChart />
                    
                </DefaultCardComponent>
                <DefaultCardComponent title="Gradient Charts">
                    
                        <GradientChart />
                    
                </DefaultCardComponent>
            </div>
        </>
    );
};
export default LineChartPage;
