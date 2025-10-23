"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import OverviewTab from "@/components/projects/project tabs/OverviewTab";
import TechnicalTab from "@/components/projects/project tabs/TechnicalTab";
import PolicyTab from "@/components/projects/project tabs/PolicyTab";
import DocumentsSection from "@/components/projects/project tabs/DocumentsSection";
import PlanningMap from "@/components/projects/project tabs/PlanningMap";

const tabs = [
    { label: "Tổng quan", icon: "tongquan" },
    { label: "Bản đồ quy hoạch", icon: "bando" },
    { label: "Thông số kỹ thuật", icon: "thongsokythuat" },
    { label: "Chính sách & Ưu đãi", icon: "chinhsach" },
    { label: "Pháp lý dự án", icon: "phaply" },
    { label: "Tài liệu dự án", icon: "tailieu" },
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

    // 🔄 Lấy danh sách file JSON
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

    // 📏 Gạch chân tab động
    useEffect(() => {
        const index = tabs.findIndex((t) => t.label === activeTab);
        const el = tabRefs.current[index];
        if (el) {
            setUnderlineProps({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [activeTab]);

    return (
        <div className="bg-gray-50 pt-10 pb-20 flex flex-col items-center w-full">
            {/* --- Tabs header --- */}
            <div className="relative w-full flex flex-col items-center">
                {/* Giới hạn chiều rộng chỉ cho phần thanh tab */}
                <div className="max-w-[1110px] w-full flex justify-between px-3 sm:px-6 md:px-10 text-gray-700 font-medium relative gap-[2px]">
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === tab.label;
                        const iconPath = isActive
                            ? `/icons/custom/colored/${tab.icon}.svg`
                            : `/icons/custom/${tab.icon}.svg`;

                        return (
                            <button
                                key={tab.label}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => setActiveTab(tab.label)}
                                className={`group flex flex-col items-center justify-center flex-1 py-3 sm:py-4 rounded-t-xl transition-all duration-300 ease-in-out ${
                                    isActive
                                        ? "bg-[#0056A6] text-white shadow-md"
                                        : "bg-white text-gray-700 hover:text-[#0056A6] hover:bg-[#E6F0FA]"
                                }`}
                            >
                                <motion.div
                                    whileHover={!isActive ? { scale: 1.05 } : {}}
                                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Image
                                        src={iconPath}
                                        alt={tab.label}
                                        width={26}
                                        height={26}
                                        className="mb-2 transition-transform duration-300"
                                    />
                                </motion.div>
                                <span className="text-[13px] sm:text-sm font-semibold text-center">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* --- Đường kẻ ngang --- */}
                <div className="max-w-[1110px] w-full h-[2px] bg-[#0056A6]/30 mt-0 mx-auto rounded-full" />
            </div>

            {/* --- Nội dung --- */}
            <div className="w-full mt-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {activeTab === "Tổng quan" && <OverviewTab />}
                        {activeTab === "Bản đồ quy hoạch" && <PlanningMap />}
                        {activeTab === "Thông số kỹ thuật" && <TechnicalTab />}
                        {activeTab === "Chính sách & Ưu đãi" && <PolicyTab />}
                        {activeTab === "Pháp lý dự án" && (
                            <DocumentsSection title="Pháp lý dự án" mode="legal" items={legalDocs} />
                        )}
                        {activeTab === "Tài liệu dự án" && (
                            <DocumentsSection title="Tài liệu dự án" mode="document" items={projectDocs} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectTabs;
