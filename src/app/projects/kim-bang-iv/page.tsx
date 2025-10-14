"use client";
import React, { useState } from "react";
import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import KimBangIv from "@/components/projects/kim-bang-iv/kim-bang-iv";
import ProjectTabs from "@/components/projects/project tabs/project-tabs";
import LotDetails from "@/components/projects/lotdetails";

export default function Page() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <Header variant={"light"} />

            {/* KimBangIv nhận props để toggle */}
            <KimBangIv showDetails={showDetails} setShowDetails={setShowDetails} />

            {/* ProjectTabs nằm dưới KimBangIv */}
            <ProjectTabs />

            {/* LotDetails nằm SAU ProjectTabs — hiển thị dựa trên state ở page */}
            <LotDetails show={showDetails} />

            <Footer />
        </>
    );
}
