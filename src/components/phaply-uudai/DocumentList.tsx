"use client";

import React from "react";
import { Eye, Download } from "lucide-react";

interface DocumentItem {
    title: string;
    date?: string;
    issuedBy?: string;
    summary?: string;
    tags?: string[];
    url?: string;
}

interface DocumentListProps {
    data: DocumentItem[];
}

export default function DocumentList({ data }: DocumentListProps) {
    if (!data || !Array.isArray(data)) {
        console.error("❌ Dữ liệu DocumentList không hợp lệ:", data);
        return null;
    }

    if (data.length === 0) {
        return (
            <div className="text-center text-gray-500 py-8">
                Không có tài liệu nào để hiển thị.
            </div>
        );
    }

    return (
        <section className="max-w-[1110px] mx-auto">
            <div className="bg-white rounded-[8px] shadow-[6px_6px_54px_0px_#0000000D] divide-y">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row md:justify-between md:items-center p-5 gap-4 hover:bg-gray-50 transition"
                    >
                        {/* Bên trái */}
                        <div className="flex items-start gap-4 flex-1">
                            {/* Số thứ tự */}
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold shrink-0">
                                {String(idx + 1).padStart(2, "0")}
                            </div>

                            {/* Nội dung tài liệu */}
                            <div className="flex flex-col gap-1">
                                {/* Tiêu đề */}
                                <p className="text-[#1A1A1A] text-[15px] font-[500] leading-relaxed max-w-[587px]">
                                    {item.title}
                                </p>

                                {/* Ngày ban hành (nếu có) */}
                                {item.date && (
                                    <p className="text-gray-500 text-[12px] font-[400] mt-[-2px]">
                                        Ngày: {item.date}
                                    </p>
                                )}

                                {/* Dòng ban hành có icon book.svg */}
                                {item.issuedBy && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <img
                                            src="/icons/interface/book.svg"
                                            alt="Book icon"
                                            className="w-4 h-4 opacity-70"
                                        />
                                        <p className="text-gray-600 text-[13px] font-[400] leading-snug">
                                            {item.issuedBy}
                                        </p>
                                    </div>
                                )}

                                {/* Tóm tắt có icon tag.svg */}
                                {item.summary && (
                                    <div className="flex items-start gap-2 mt-1">
                                        <img
                                            src="/icons/interface/tag.svg"
                                            alt="Tag icon"
                                            className="w-4 h-4 opacity-70 mt-[2px]"
                                        />
                                        <p className="text-gray-600 text-[13px] font-[400] leading-snug">
                                            {item.summary}
                                        </p>
                                    </div>
                                )}

                                {/* Tag phụ */}
                                {item.tags && item.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.tags.map((t, i) => (
                                            <span
                                                key={i}
                                                className="bg-[#F4F4F4] text-gray-700 text-[12px] font-[400] px-3 py-1 rounded-[100px]"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bên phải */}
                        <div className="flex gap-3 min-w-[220px]">
                            <a
                                href={item.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-[#F4F4F4] text-black text-[15px] font-[400] rounded-[8px] max-h-[42px]
                shadow-[6px_6px_54px_0px_#0000000D] hover:bg-[#7e7e7e] hover:text-[#DCEAFE] transition-all duration-200"
                            >
                                <span>Xem tài liệu</span>
                                <Eye className="w-4 h-4" />
                            </a>

                            <a
                                href={item.url || "#"}
                                download
                                className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-[#F4F4F4] text-black text-[15px] font-[400] rounded-[8px] max-h-[42px]
                shadow-[6px_6px_54px_0px_#0000000D] hover:bg-[#7e7e7e] hover:text-[#DCEAFE] transition-all duration-200"
                            >
                                <span>Tải tài liệu</span>
                                <Download className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
