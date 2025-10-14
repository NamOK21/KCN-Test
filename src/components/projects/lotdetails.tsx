"use client";
import React, { useState } from "react";
import Link from "next/link"; // ✅ thêm import này

interface LotDetailsProps {
    show: boolean;
}

const lots = Array.from({ length: 50 }, (_, i) => ({
    id: `KB-L${(i + 1).toString().padStart(3, "0")}`,
    status: i % 3 === 0 ? "Đã cọc" : "Còn trống",
    area: `${(Math.random() * 3000 + 5000).toFixed(0)}m²`,
    type: i % 2 === 0 ? "Thường" : "Góc",
    color:
        i % 4 === 0
            ? "#ef4444"
            : i % 4 === 1
                ? "#3b82f6"
                : i % 4 === 2
                    ? "#22d3ee"
                    : "#9ca3af",
}));

const LotDetails: React.FC<LotDetailsProps> = ({ show }) => {
    const [hoveredLot, setHoveredLot] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    if (!show) return null;

    const visibleLots = showAll ? lots : lots.slice(0, 19);

    return (
        <section className="bg-[#f9fafb] py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Chi tiết phân lô
            </h2>

            <div className="flex justify-center">
                <div className="grid grid-cols-10 gap-[10px]">
                    {visibleLots.map((lot) => (
                        <Link
                            href={`/lo-dat/${lot.id}`} // ✅ chuyển hướng khi click
                            key={lot.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredLot(lot.id)}
                            onMouseLeave={() => setHoveredLot(null)}
                        >
                            {/* Ô vuông */}
                            <div
                                className="w-[100px] h-[100px] flex items-center justify-center text-white text-sm font-semibold rounded-[12px] shadow-md transition-transform duration-150 hover:scale-105"
                                style={{ backgroundColor: lot.color }}
                            >
                                {lot.id}
                            </div>

                            {/* Tooltip chi tiết */}
                            {hoveredLot === lot.id && (
                                <div className="absolute z-20 top-[110px] left-1/2 -translate-x-1/2 w-[180px] bg-white rounded-xl shadow-xl p-3 text-sm animate-fadeIn border border-gray-200">
                                    <p>
                                        <span className="font-medium">Mã lô:</span> {lot.id}
                                    </p>
                                    <p>
                                        <span className="font-medium">Trạng thái:</span>{" "}
                                        {lot.status}
                                    </p>
                                    <p>
                                        <span className="font-medium">Diện tích:</span> {lot.area}
                                    </p>
                                    <p>
                                        <span className="font-medium">Loại:</span> {lot.type}
                                    </p>

                                    {/* Mũi tên tooltip */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200"></div>
                                </div>
                            )}
                        </Link>
                    ))}

                    {/* Ô "xem thêm" */}
                    {!showAll && (
                        <div
                            onClick={() => setShowAll(true)}
                            className="w-[100px] h-[100px] rounded-[12px] border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-600 text-sm cursor-pointer hover:bg-gray-100 transition"
                        >
                            <span className="text-xl font-bold">+</span>
                            <span className="text-xs">+{lots.length - 19}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LotDetails;
