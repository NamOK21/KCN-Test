"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import DocumentList from "./DocumentList";
import { phapLyData } from "./phap-ly/phaply";
import { uuDaiData } from "./uu-dai/uudai";
import Hero from "@/components/public/hero";
import Image from "next/image";

interface PageLayoutProps {
    type: "phap-ly" | "uu-dai";
}

export default function PageLayout({ type }: PageLayoutProps) {
    const [isGridView, setIsGridView] = useState(false);
    const data = type === "phap-ly" ? phapLyData : uuDaiData;

    const heroConfig =
        type === "phap-ly"
            ? {
                title: "Chính sách pháp lý",
                homepage: "Trang chủ",
                currentPage: "Chính sách pháp lý",
                bgImage: "/images/img3.jpg",
            }
            : {
                title: "Chính sách ưu đãi",
                homepage: "Trang chủ",
                currentPage: "Chính sách ưu đãi",
                bgImage: "/images/img2.jpg",
            };

    return (
        <div className="flex flex-col min-h-screen bg-white text-[#333]">
            {/* 🔹 Hero Section */}
            <Hero
                title={heroConfig.title}
                homepage={heroConfig.homepage}
                currentPage={heroConfig.currentPage}
                bgImage={heroConfig.bgImage}
            />

            {/* 🔹 Nội dung chính */}
            <div className="flex flex-1">
                <main className="flex-1 px-10 py-8">
                    {/* Bộ lọc + Icon chế độ hiển thị */}
                    <div className="flex items-center justify-between mb-8">
                        {/* Bộ lọc bên trái */}
                        <div className="flex gap-4">
                            <select
                                className="text-[14px] font-[400] text-[#333]
                                    border border-[#E0E0E0] rounded-[8px]
                                    px-3 py-2 bg-[#F9F9F9]
                                    shadow-[0_2px_4px_#0000000D]
                                    focus:outline-none focus:ring-1 focus:ring-[#0056A6]
                                    transition-all duration-200"
                            >
                                <option value="">Cấp ban hành</option>
                                <option value="tw">Trung ương</option>
                                <option value="dp">Địa phương</option>
                            </select>

                            <select
                                className="text-[14px] font-[400] text-[#333]
                                    border border-[#E0E0E0] rounded-[8px]
                                    px-3 py-2 bg-[#F9F9F9]
                                    shadow-[0_2px_4px_#0000000D]
                                    focus:outline-none focus:ring-1 focus:ring-[#0056A6]
                                    transition-all duration-200"
                            >
                                <option value="">Lĩnh vực</option>
                                <option value="dt">Đầu tư</option>
                                <option value="thue">Thuế</option>
                                <option value="dd">Đất đai</option>
                            </select>
                        </div>

                        {/* Hai icon bên phải */}
                        <div className="flex items-center gap-3">
                            {/* List view */}
                            <button
                                title="Hiển thị dạng danh sách"
                                className={`w-[44px] h-[42px] rounded-[8px] flex items-center justify-center 
                                    shadow-[0_2px_4px_#0000000D] transition-all duration-200
                                    ${
                                    !isGridView
                                        ? "bg-[#0056A6]"
                                        : "bg-[#F4F4F4] hover:shadow-[0_3px_6px_#0000001A]"
                                }`}
                                onClick={() => setIsGridView(false)}
                            >
                                <Image
                                    src="/icons/menu/hamburger_md.svg"
                                    alt="List View"
                                    width={20}
                                    height={20}
                                    className={`${
                                        isGridView
                                            ? "opacity-70"
                                            : "invert brightness-200"
                                    }`}
                                />
                            </button>

                            {/* Grid view */}
                            <button
                                title="Hiển thị dạng lưới"
                                className={`w-[44px] h-[42px] rounded-[8px] flex items-center justify-center 
                                    shadow-[0_2px_4px_#0000000D] transition-all duration-200
                                    ${
                                    isGridView
                                        ? "bg-[#0056A6]"
                                        : "bg-[#F4F4F4] hover:shadow-[0_3px_6px_#0000001A]"
                                }`}
                                onClick={() => setIsGridView(true)}
                            >
                                <Image
                                    src="/icons/menu/more_grid_big.svg"
                                    alt="Grid View"
                                    width={20}
                                    height={20}
                                    className={`${
                                        isGridView
                                            ? "invert brightness-200"
                                            : "opacity-70"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Danh sách tài liệu */}
                    <DocumentList data={data} />
                </main>

                {/* Sidebar */}
                <aside className="w-72 border-l bg-[#F9F9F9] px-6 py-8">
                    <Sidebar current={type} />
                </aside>
            </div>
        </div>
    );
}
