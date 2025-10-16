"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import OverviewTab from "@/components/projects/project tabs/OverviewTab";
import TechnicalTab from "@/components/projects/project tabs/TechnicalTab";
import PolicyTab from "@/components/projects/project tabs/PolicyTab";
import DocumentsSection from "@/components/projects/project tabs/DocumentsSection";
import PlanningMap from "@/components/projects/project tabs/PlanningMap";

const tabs = [
    "Tổng quan",
    "Bản đồ quy hoạch",
    "Thông số kỹ thuật",
    "Chính sách & Ưu đãi",
    "Pháp lý dự án",
    "Tài liệu",
];

const ProjectTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Tổng quan");
    const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

    const [legalDocs, setLegalDocs] = useState<any[]>([]);
    const [projectDocs, setProjectDocs] = useState<any[]>([]);
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

    // 🔄 Lấy danh sách file từ JSON tĩnh sinh ra trước
    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const res = await fetch("/project-files.json");
                const data = await res.json();
                setLegalDocs(data.legal || []);
                setProjectDocs(data.documents || []);
            } catch (err) {
                console.error("Lỗi khi tải danh sách file:", err);
            }
        };
        fetchFiles();
    }, []);

    // Gạch chân tab đang chọn
    useEffect(() => {
        const index = tabs.indexOf(activeTab);
        const el = tabRefs.current[index];
        if (el) {
            setUnderlineProps({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [activeTab]);

    return (
        <div className="bg-gray-50 pt-10 pb-20">
            {/* --- Tabs header --- */}
            <div className="border-b border-gray-200 relative">
                <div className="max-w-[1110px] mx-auto flex flex-wrap gap-6 px-4 md:px-10 text-gray-700 font-medium relative">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            ref={(el) => {
                                if (el) tabRefs.current[index] = el;
                            }}

                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-3 transition-colors ${
                                activeTab === tab
                                    ? "text-blue-700 font-semibold"
                                    : "text-gray-500 hover:text-blue-700"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}

                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute bottom-0 h-[2px] bg-blue-700"
                        style={{
                            left: underlineProps.left,
                            width: underlineProps.width,
                        }}
                    />
                </div>
            </div>

            {/* --- Nội dung --- */}
            <div className="max-w-[1110px] mx-auto px-4 md:px-10 mt-12">
                {activeTab === "Tổng quan" && <OverviewTab />}
                {activeTab === "Bản đồ quy hoạch" && <PlanningMap />}
                {activeTab === "Thông số kỹ thuật" && <TechnicalTab />}
                {activeTab === "Chính sách & Ưu đãi" && <PolicyTab />}
                {activeTab === "Pháp lý dự án" && (
                    <DocumentsSection title="Pháp lý dự án" mode="legal" items={legalDocs} />
                )}
                {activeTab === "Tài liệu" && (
                    <DocumentsSection title="Tài liệu dự án" mode="document" items={projectDocs} />
                )}
            </div>
        </div>
    );
};

export default ProjectTabs;
