"use client";
import React from "react";
import { Eye, Download } from "lucide-react";

interface DocumentItem {
    name: string;
    type: string;
    url: string;
    issuedDate?: string; // ngày ban hành
    authority?: string;  // cơ quan ban hành
    tagMain?: string;    // dòng mô tả chính (format như dòng ban hành)
    tags?: {
        type: string;       // Loại tài liệu (Quyết định, Báo cáo...)
        location: string;   // Địa điểm (Hà Nam, Bắc Ninh...)
        status: string;     // Tình trạng (Còn hiệu lực, Hết hiệu lực, Đã khoá)
        category: string;   // Hạng mục (Thuế, Thuê đất...)
    };
}

interface DocumentsSectionProps {
    title: string;
    items: DocumentItem[];
    mode: "legal" | "document";
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({ title, items, mode }) => {
    return (
        <section className="max-w-[1110px] mx-auto px-4 my-10">
            <h2 className="text-[42px] font-bold text-gray-900 mb-6">{title}</h2>

            <div className="bg-white rounded-[8px] shadow-[6px_6px_54px_0px_#0000000D] divide-y">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row md:justify-between md:items-center p-5 gap-4 hover:bg-gray-50 transition"
                    >
                        {/* --- Bên trái --- */}
                        <div className="flex items-start gap-4 flex-1">
                            {mode === "legal" ? (
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                            ) : (
                                <img
                                    src="/icons/custom/file.svg"
                                    alt={`File icon for ${item.name}`}
                                    className="w-5 h-5 mt-1"
                                />
                            )}

                            <div className="flex flex-col gap-1">
                                {/* Tên tài liệu */}
                                <p className="text-gray-800 text-[15px] font-[400] leading-relaxed max-w-[587px]">
                                    {item.name}
                                </p>

                                {/* Loại tài liệu */}
                                <p className="text-gray-500 text-[12px] font-[400] mt-[-2px]">
                                    {item.type}
                                </p>

                                {/* --- Dòng ban hành --- */}
                                {(item.issuedDate || item.authority) && (
                                    <div className="flex items-center gap-2 mt-1 text-[13px] font-[400] text-gray-700">
                                        <img
                                            src="/icons/interface/book.svg"
                                            alt="book icon"
                                            className="w-4 h-4"
                                        />
                                        <span>
                                            Ban hành:{" "}
                                            <strong>{item.issuedDate ?? "—"}</strong>
                                            {item.authority ? ` – ${item.authority}` : ""}
                                        </span>
                                    </div>
                                )}

                                {/* --- Tag chính (giống dòng ban hành) --- */}
                                {item.tagMain && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <img
                                            src="/icons/interface/tag.svg"
                                            alt="Tag icon"
                                            className="w-4 h-4 opacity-70"
                                        />
                                        <p className="text-gray-600 text-[13px] font-[400]">
                                            {item.tagMain}
                                        </p>
                                    </div>
                                )}

                                {/* --- 4 tag nhỏ --- */}
                                {item.tags && (
                                    <div className="flex flex-wrap gap-2 mt-2 items-center">
                                        {/* Tag 1: Loại tài liệu */}
                                        <span className="px-3 py-1 rounded-full text-[12px] font-[400] bg-[#F4F4F4] text-[#606060]">
                                            {item.tags.type}
                                        </span>

                                        {/* Tag 2: Địa điểm */}
                                        <span className="px-3 py-1 rounded-full text-[12px] font-[400] bg-[#7FCBD94D] text-[#7FCBD9]">
                                            {item.tags.location}
                                        </span>

                                        {/* Tag 3: Tình trạng */}
                                        <span
                                            className={`px-3 py-1 rounded-full text-[12px] font-[400] ${
                                                item.tags.status === "Còn hiệu lực"
                                                    ? "bg-[#4D88EF4D] text-[#4D88EF]"
                                                    : "bg-[#939393] text-black"
                                            }`}
                                        >
                                            {item.tags.status}
                                        </span>

                                        {/* Tag 4: Hạng mục */}
                                        <span className="px-3 py-1 rounded-full text-[12px] font-[400] bg-[#F57C7C4D] text-[#F57C7C]">
                                            {item.tags.category}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* --- Bên phải --- */}
                        <div className="flex gap-3 min-w-[220px]">
                            {/* Xem tài liệu */}
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-[#F4F4F4] text-black text-[15px] font-[400] rounded-[8px] max-h-[42px]
                                shadow-[6px_6px_54px_0px_#0000000D] hover:bg-[#7e7e7e] hover:text-[#DCEAFE] transition-all duration-200"
                            >
                                <span>Xem tài liệu</span>
                                <Eye className="w-4 h-4" />
                            </a>

                            {/* Tải tài liệu */}
                            <a
                                href={item.url}
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
};

export default DocumentsSection;
