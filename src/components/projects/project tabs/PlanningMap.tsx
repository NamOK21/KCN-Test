"use client";
import React from "react";
import Image from "next/image";
import { Maximize2, Minus, Plus } from "lucide-react";

const PlanningMapTab: React.FC = () => {
    return (
        <div className="w-full max-w-[1110px] mx-auto px-4 md:px-6">
            {/* --- Header box: title left, 3 selects right --- */}
            <div className="w-full bg-white rounded-[12px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 px-4 md:px-6 py-4 shadow-sm mb-6">
                {/* Title */}
                <div className="flex-1">
                    <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-gray-900">
                        Mặt bằng quy hoạch lô
                    </h2>
                    <p className="text-gray-500 text-[12px] md:text-[13px] mt-1">
                        Sử dụng con lăn chuột hoặc nút +/- để phóng to/thu nhỏ. Kéo để di chuyển bản đồ.
                    </p>
                </div>

                {/* Dropdowns */}
                <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3">
                    <select
                        aria-label="Diện tích"
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg bg-white focus:outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Diện tích
                        </option>
                        <option>50 - 100 m²</option>
                        <option>100 - 200 m²</option>
                    </select>

                    <select
                        aria-label="Quy mô"
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg bg-white focus:outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Quy mô
                        </option>
                        <option>Khu I</option>
                        <option>Khu II</option>
                        <option>Khu III</option>
                    </select>

                    <select
                        aria-label="Nguồn lực"
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg bg-white focus:outline-none"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Nguồn lực
                        </option>
                        <option>Đất công nghiệp</option>
                        <option>Đất dịch vụ</option>
                    </select>
                </div>
            </div>

            {/* --- Khung bản đồ --- */}
            <div className="relative w-full bg-white rounded-[24px] shadow-[6px_6px_54px_0px_#0000000D] overflow-hidden">
                {/* Container crop giữ tỉ lệ 1632/795 ≈ 2.05 */}
                <div className="relative w-full aspect-[1632/795] overflow-hidden rounded-[24px]">
                    <Image
                        src="/images/quyhoach.png"
                        alt="Bản đồ khu công nghiệp"
                        fill
                        className="object-cover object-center scale-[1.02] translate-x-[-0.7%] translate-y-[-2%]"
                        sizes="(max-width: 768px) 100vw, 80vw"
                    />
                </div>

                {/* --- Nút điều khiển --- */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-2 sm:gap-3 z-10">
                    {/* Fullscreen */}
                    <button
                        title="Phóng to toàn màn hình"
                        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-white text-gray-800 rounded-[10.67px] shadow-md hover:bg-gray-100 active:scale-95 transition"
                    >
                        <Maximize2 size={18} className="sm:size-5" />
                    </button>

                    {/* + và - liền nhau */}
                    <div className="flex flex-col rounded-[10.67px] overflow-hidden shadow-md">
                        <button
                            title="Thu nhỏ"
                            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 active:scale-95 transition"
                        >
                            <Minus size={18} className="sm:size-5" />
                        </button>
                        <button
                            title="Phóng to"
                            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 active:scale-95 transition"
                        >
                            <Plus size={18} className="sm:size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanningMapTab;
