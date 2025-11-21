"use client";

import React from "react";
import ValidateForm from "@/app/(dashboard)/form-validation/validate-form";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";

export const dynamic = 'force-dynamic';

const FormValidation = () => {
    return (
        <>
            <DashboardBreadcrumb title="Form Validation" text="Form Validation" />

            <ValidateForm />

        </>
    );
};

export default FormValidation;
