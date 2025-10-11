"use client";
import React from "react";
import Hero from "@/components/public/hero";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const KimBangIV: React.FC = () => {
    const TITLE = "Khu công nghiệp Kim Bảng IV";
    const DETAILS = [
        { label: "Diện tích", value: "295ha", icon: "🖊️" },
        { label: "Số lô", value: "120", icon: "🔢" },
    ];

    const DESCRIPTION_1 =
        "KCN Kim Bảng IV nằm trên trục cao tốc Cầu Giẽ – Ninh Bình, kết nối nhanh Hà Nội và các trung tâm công nghiệp – logistics miền Bắc, tạo lợi thế “tọa độ vàng” cho doanh nghiệp.";
    const DESCRIPTION_2 =
        "Quy mô toàn khu khoảng 295,21 ha (Giai đoạn I ~183,94 ha), quy hoạch giao thông & bản cốt, hạ tầng đồng bộ (điện, nước, viễn thông), trạm xử lý nước thải tập trung, mạng xanh và hồ điều hoà, bảo đảm vận hành bền vững.";
    const DESCRIPTION_3 =
        "Thời hạn hoạt động 50 năm, tổng vốn hạ tầng dự kiến ~2.465 tỷ đồng, mục tiêu hoàn thiện trong 36 tháng kể từ bàn giao đất. Định hướng thu hút các ngành điện tử, công nghệ cao, cơ khí chế tạo, công nghiệp hỗ trợ, logistics; người lao động dự kiến 16.000–20.000 người và được hưởng các ưu đãi đầu tư (thuế, tiền thuê đất, thủ tục).";

    const IMAGES = [
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
    ];

    return (
        <>
            {/* Hero Section */}
            <Hero
                title={TITLE}
                homepage="Trang chủ"
                currentPage="Dự án"
                bgImage={IMAGES[0]}
            />

            {/* Content Section */}
            <section className="px-4 md:px-10 py-16">
                <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row gap-8">
                    {/* Cột trái */}
                    <div className="md:w-1/3 space-y-5">
                        <h2 className="text-3xl font-bold text-gray-900">{TITLE}</h2>

                        <div className="space-y-2">
                            {DETAILS.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center border-b border-gray-200 py-2"
                                >
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                    <span className="font-medium">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300 text-sm font-medium">
                            Chi tiết phân lô
                        </button>
                    </div>

                    {/* Cột phải */}
                    <div className="md:w-[520px] w-full text-gray-700 space-y-4 text-justify lg:text-[16px] font-[500] leading-relaxed">
                        <p>{DESCRIPTION_1}</p>
                        <p>{DESCRIPTION_2}</p>
                        <p>{DESCRIPTION_3}</p>
                    </div>
                </div>
            </section>

            {/* Image Slider Section */}
            <section className="px-4 md:px-10 pb-20">
                <div className="max-w-[1110px] mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="rounded-xl"
                    >
                        {IMAGES.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                                    <Image
                                        src={src}
                                        alt={`KCN Kim Bảng IV ${idx + 1}`}
                                        width={400}
                                        height={260}
                                        className="w-full h-[260px] object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default KimBangIV;
