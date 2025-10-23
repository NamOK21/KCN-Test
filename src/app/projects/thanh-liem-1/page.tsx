"use client";

import React, { useState } from "react";
import Header from "@/components/public/header";
import Footer from "@/components/public/footer";
import ThanhLiemI from "@/components/projects/thanh-liem-1/thanh-liem-1";
import ProjectTabs from "@/components/projects/project tabs/project-tabs";
import LotDetails from "@/components/projects/lotdetails";

export default function Page() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            {/* Header */}
            <Header variant="light" />

            {/* Khu công nghiệp Thanh Liêm I */}
            <ThanhLiemI showDetails={showDetails} setShowDetails={setShowDetails} />

            {/* Tabs thông tin dự án */}
            <ProjectTabs/>


            {/* Chi tiết phân lô (hiện khi bấm nút) */}
            <LotDetails show={showDetails} />

            {/* Footer */}
            <Footer />
        </>
    );
}
