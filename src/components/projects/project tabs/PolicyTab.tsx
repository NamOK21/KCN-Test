"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const incentives = [
    {
        title: "Ưu đãi thuế TNDN (2+4)",
        text: "Miễn 2 năm, giảm 50% 4 năm tiếp theo cho dự án thuộc lĩnh vực ưu đãi trong KCN không thuộc địa bàn thuận lợi.",
        type: "Thuê đất",
        label: "Có chấp thuận/IRC; thời gian thi công được cơ quan có thẩm quyền xác nhận.",
    },
    {
        title: "Miễn tiền thuê đất giai đoạn xây dựng cơ bản",
        text: "Miễn tiền thuê đất trong thời gian xây dựng cơ bản (tối đa theo quy định), sau đó áp dụng khung miễn/giảm theo tỉnh.",
        type: "Thuê đất",
        label: "Có chấp thuận/IRC; thời gian thi công được cơ quan có thẩm quyền xác nhận.",
    },
    {
        title: "Miễn/giảm tiền thuê đất – Tỉnh Ninh Bình",
        text: "Ưu đãi tiền thuê đất theo nghị quyết của tỉnh cho dự án thuộc lĩnh vực ưu đãi, áp dụng trong KCN trên địa bàn.",
        type: "Thuê đất",
        label: "Thuộc danh mục ưu đãi; hồ sơ đề nghị theo mẫu của tỉnh.",
    },
    {
        title: "Miễn/giảm tiền thuê đất – Tỉnh Hà Nam",
        text: "Chính sách miễn/giảm tiền thuê đất đối với dự án ưu đãi, xã hội hoá hoặc phi lợi nhuận theo quy định của tỉnh.",
        type: "Ưu đãi thuế",
        label: "Thuộc ngành ưu đãi, có quyết định/biên bản xác nhận của cơ quan tỉnh",
    },
    {
        title: "Miễn thuế nhập khẩu máy móc tạo TSCĐ",
        text: "Miễn thuế NK cho máy móc, thiết bị nhập khẩu tạo tài sản cố định, theo danh mục đăng ký phục vụ dự án.",
        type: "Nhập khẩu",
        label: "Danh mục được phê duyệt; sử dụng đúng mục đích trong dự án.",
    },
    {
        title: "Chấp thuận chủ trương đầu tư (BQL KCN)",
        text: "Thủ tục xin chấp thuận chủ trương đầu tư đối với dự án trong KCN; làm cơ sở cấp IRC/thuê đất.",
        type: "Thủ tục",
        label: "Hồ sơ theo mẫu; thuyết minh công nghệ, mặt bằng, nhu cầu đất/đấu nối",
    },
    {
        title: "Giấy chứng nhận đăng ký đầu tư (IRC)",
        text: "Cấp IRC cho nhà đầu tư; ghi nhận mục tiêu, quy mô, địa điểm, tiến độ và ưu đãi dự án.",
        type: "Thủ tục",
        label: "Có chấp thuận chủ trương (nếu thuộc diện); hồ sơ pháp lý nhà đầu tư đầy đủ.",
    },
    {
        title: "Giấy phép môi trường / ĐTM",
        text: "Thẩm định ĐTM/giấy phép môi trường cho dự án sản xuất trong KCN; điều kiện vận hành theo quy chuẩn.",
        type: "Môi trường",
        label: "Hồ sơ theo Luật BVMT; công nghệ đáp ứng tiêu chuẩn xả thải/PCCC.",
    },
    {
        title: "Ưu đãi thuế TNDN cho dự án công nghệ cao/R&D",
        text: "Mức ưu đãi nâng cao theo danh mục đặc biệt ưu đãi; áp dụng khi đáp ứng tiêu chí công nghệ cao/R&D.",
        type: "Ưu đãi thuế (đặc thù)",
        label: "Được xác nhận là dự án công nghệ cao/R&D; đáp ứng tiêu chí về tỷ lệ chi R&D, nhân lực, công nghệ.",
    },
];

const IncentiveCard: React.FC<{
    title: string;
    text: string;
    type: string;
    label: string;
}> = ({ title, text, type, label }) => (
    <div
        className="flex flex-col justify-between bg-white shadow-sm rounded-2xl p-6 border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
        style={{ width: "350px", height: "330px" }}
    >
        <div className="flex flex-col justify-between flex-grow">
            <div>
                <h3 className="text-[#222222] text-[21px] font-medium mb-3">{title}</h3>
                <p className="text-gray-700 text-[15px] font-normal leading-relaxed mb-4 line-clamp-3 min-h-[72px]">
                    {text}
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
                <div className="flex items-center gap-2">
                    <img
                        src="/icons/interface/label.svg"
                        alt="label icon"
                        className="w-4 h-4 opacity-80"
                    />
                    <span className="text-gray-800 text-[14px] font-normal">{type}</span>
                </div>
                <div className="flex items-center gap-2">
                    <img
                        src="/icons/interface/tag.svg"
                        alt="tag icon"
                        className="w-4 h-4 opacity-80"
                    />
                    <span className="text-gray-800 text-[14px] font-normal">{label}</span>
                </div>
            </div>
        </div>

        <div className="mt-4">
            <span className="inline-block bg-[#4D88EF4D] text-[#1E3A8A] px-4 py-1 rounded-full text-[12px] font-normal">
                Đang sử dụng
            </span>
        </div>
    </div>
);

const PolicyTab: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? incentives : incentives.slice(0, 3);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Chính sách & Ưu đãi</h2>

            <AnimatePresence>
                <motion.div
                    key={showAll ? "expanded" : "collapsed"}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden w-full flex flex-wrap justify-center gap-8 mb-8"
                >
                    {visibleItems.map((item, i) => (
                        <IncentiveCard
                            key={i}
                            title={item.title}
                            text={item.text}
                            type={item.type}
                            label={item.label}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-medium text-sm shadow-md hover:bg-blue-800 transition-all"
            >
                {showAll ? "Thu gọn" : "Xem thêm"}
            </motion.button>
        </div>
    );
};

export default PolicyTab;
