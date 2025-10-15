"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import OverviewTab from "./OverviewTab";
import TechnicalTab from "./TechnicalTab";
import PolicyTab from "./PolicyTab";
import DocumentsSection from "./DocumentsSection";
import PlanningMap from "./PlanningMap";

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
    const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentIndex = tabs.indexOf(activeTab);
        const currentTab = tabRefs.current[currentIndex];
        if (currentTab) {
            setUnderlineProps({ left: currentTab.offsetLeft, width: currentTab.offsetWidth });
        }
    }, [activeTab]);

    return (
        <div className="bg-gray-50 pt-10 pb-20">
            {/* --- Thanh tab --- */}
            <div className="border-b border-gray-200 relative">
                <div className="max-w-[1110px] mx-auto flex flex-wrap gap-6 px-4 md:px-10 text-gray-700 font-medium relative">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            ref={(el) => (tabRefs.current[index] = el)}
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-3 transition-colors ${
                                activeTab === tab ? "text-blue-700 font-semibold" : "text-gray-500 hover:text-blue-700"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}

                    {/* Underline dùng framer-motion */}
                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute bottom-0 h-[2px] bg-blue-700"
                        style={{ left: underlineProps.left, width: underlineProps.width }}
                    />
                </div>
            </div>

            {/* --- Nội dung tab --- */}
            <div className="max-w-[1110px] mx-auto px-4 md:px-10 mt-12">
                {activeTab === "Tổng quan" && <OverviewTab />}
                {activeTab === "Bản đồ quy hoạch" && <PlanningMap />}
                {activeTab === "Thông số kỹ thuật" && <TechnicalTab />}
                {activeTab === "Chính sách & Ưu đãi" && <PolicyTab />}
                {activeTab === "Pháp lý dự án" && (
                    <DocumentsSection
                        title="Pháp lý dự án"
                        mode="legal"
                        items={[
                            { name: "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại Khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP", type: "Quyết định" },
                            { name: "Giấy chứng nhận đăng ký đầu tư", type: "Giấy phép" },
                            { name: "Quyết định phê duyệt đánh giá môi trường đầu tư", type: "Quyết định" },
                            { name: "Báo cáo đánh giá tác động môi trường (ĐTM)", type: "Báo cáo" },
                        ]}
                    />
                )}
                {activeTab === "Tài liệu" && (
                    <DocumentsSection
                        title="Tài liệu dự án"
                        mode="document"
                        items={[
                            { name: "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại Khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP", type: "Quyết định" },
                            { name: "Giấy chứng nhận đăng ký đầu tư", type: "Giấy phép" },
                            { name: "Quyết định phê duyệt đánh giá môi trường đầu tư", type: "Quyết định" },
                            { name: "Báo cáo đánh giá tác động môi trường (ĐTM)", type: "Báo cáo" },
                        ]}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectTabs;
