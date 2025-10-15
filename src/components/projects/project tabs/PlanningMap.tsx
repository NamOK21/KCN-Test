"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, Minus, Plus } from "lucide-react";

const PlanningMapTab: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setOrigin({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging) {
            setPosition({ x: e.clientX - origin.x, y: e.clientY - origin.y });
        }
    };

    const handleMouseUp = () => setDragging(false);
    const handleMouseLeave = () => setDragging(false);

    return (
        <div className="w-full px-4 md:px-6">
            {/* Header */}
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 px-0 py-2 mb-6">
                <div className="flex-1">
                    <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-gray-900">
                        Mặt bằng quy hoạch lô
                    </h2>
                    <p className="text-gray-500 text-[12px] md:text-[13px] mt-1">
                        Sử dụng con lăn chuột hoặc nút +/- để phóng to/thu nhỏ. Kéo để di chuyển bản đồ.
                    </p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3">
                    <select
                        aria-label="Diện tích"
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg focus:outline-none"
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
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg focus:outline-none"
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
                        className="w-[120px] sm:w-[140px] h-[36px] text-sm px-3 border border-gray-200 rounded-lg focus:outline-none"
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

            {/* Map */}
            <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden rounded-[24px] cursor-grab select-none">
                <div
                    ref={mapRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                        transformOrigin: "top left",
                        transition: dragging ? "none" : "transform 0.2s ease-in-out",
                    }}
                    className="relative w-full pb-[48.7%] rounded-[24px]"
                >
                    <Image
                        src="/images/quyhoach.png"
                        alt="Bản đồ khu công nghiệp"
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>

                {/* Zoom + fullscreen buttons */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-2 sm:gap-3 z-10">
                    <button
                        title="Phóng to toàn màn hình"
                        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center text-gray-800 rounded-[10.67px] shadow-md hover:bg-gray-100 active:scale-95 transition"
                    >
                        <Maximize2 size={18} className="sm:size-5" />
                    </button>

                    <div className="flex flex-col rounded-[10.67px] overflow-hidden shadow-md">
                        <button
                            title="Thu nhỏ"
                            onClick={handleZoomOut}
                            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95 transition"
                        >
                            <Minus size={18} className="sm:size-5" />
                        </button>
                        <button
                            title="Phóng to"
                            onClick={handleZoomIn}
                            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95 transition"
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
