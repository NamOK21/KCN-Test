"use client";
import React from "react";
import { Eye, Download } from "lucide-react";

interface DocumentItem {
    name: string;
    type: string;
    url: string;
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
                        className="flex justify-between items-center p-5 hover:bg-gray-50 transition"
                    >
                        {/* --- Bên trái --- */}
                        <div className="flex items-start gap-4">
                            {mode === "legal" ? (
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                            ) : (
                                <img
                                    src="/icons/custom/file.svg"
                                    alt="file icon"
                                    className="w-5 h-5 mt-1"
                                />
                            )}

                            <div>
                                <p className="text-gray-800 text-[15px] font-[400] leading-relaxed max-w-[587px]">
                                    {item.name}
                                </p>
                                <p className="text-gray-500 text-[12px] font-[400] mt-1">
                                    {item.type}
                                </p>
                            </div>
                        </div>

                        {/* --- Bên phải --- */}
                        <div className="flex gap-3">
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
