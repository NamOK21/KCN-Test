"use client";
import React from "react";
import Hero from "@/components/public/hero";

const KimBangIV: React.FC = () => {
    const TITLE = "KCN Kim Bảng IV – Hà Nam";

    const DESCRIPTION_1 =
        "KCN Kim Bảng IV nằm trên trục cao tốc Cầu Giẽ – Ninh Bình, kết nối nhanh Hà Nội và các trung tâm công nghiệp – " +
        "logistics miền Bắc, tạo lợi thế “tọa độ vàng” cho doanh nghiệp.";

    const DESCRIPTION_2 =
        "Quy mô toàn khu khoảng 295,21 ha (Giai đoạn 1 ~183,94 ha), quy hoạch giao thông & bản cốt, hạ tầng đồng bộ (điện, nước, viễn thông), " +
        "trạm xử lý nước thải tập trung, mạng xanh và hồ điều hoà, bảo đảm vận hành bền vững.";

    const DESCRIPTION_3 =
        "Thời hạn hoạt động 50 năm, tổng vốn hạ tầng dự kiến ~2.465 tỷ đồng, mục tiêu hoàn thiện trong 36 tháng kể từ bàn giao đất. " +
        "Định hướng thu hút các ngành điện tử, công nghệ cao, cơ khí chế tạo, công nghiệp hỗ trợ, logistics; người lao động dự kiến 16.000–20.000 " +
        "người và được hưởng các ưu đãi đầu tư (thuế, tiền thuê đất, thủ tục).";

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Khu công nghiệp Kim Bảng IV"
                homepage="Trang chủ"
                currentPage="Dự án"
                bgImage="/images/img1.png"
            />

            {/* Content Section */}
            <section className="px-4 md:px-10 py-16">
                <div className="w-full md:w-[1110px] mx-auto flex flex-col md:flex-row gap-8">
                    {/* Cột trái: tiêu đề */}
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {TITLE.split("\n").map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h2>
                    </div>

                    {/* Cột phải: nội dung */}
                    <div className="md:w-[520px] w-full text-gray-700 space-y-4 lg:text-[16px] font-[500]">
                        <p>{DESCRIPTION_1}</p>
                        <p>{DESCRIPTION_2}</p>
                        <p>{DESCRIPTION_3}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default KimBangIV;
