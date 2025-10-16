"use client";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import Hero from "@/components/public/hero";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ThanhLiemIProps {
    showDetails: boolean;
    setShowDetails: Dispatch<SetStateAction<boolean>>;
}

const ThanhLiemI: React.FC<ThanhLiemIProps> = ({ showDetails, setShowDetails }) => {
    const TITLE = "Khu công nghiệp Thanh Liêm I";
    const DETAILS = [
        { label: "Diện tích", value: "293,3ha", icon: "📏" },
        { label: "Số lô", value: "110", icon: "📦" },
        { label: "Thời hạn", value: "50 năm", icon: "⏳" },
    ];

    const DESCRIPTION_1 =
        "KCN Thanh Liêm I tọa lạc tại huyện Thanh Liêm, tỉnh Hà Nam – vị trí chiến lược ngay trên Quốc lộ 1A và cao tốc Pháp Vân – Cầu Giẽ, thuận tiện kết nối đến Hà Nội, cảng Hải Phòng và sân bay Nội Bài.";
    const DESCRIPTION_2 =
        "Tổng diện tích quy hoạch khoảng 293,3 ha, được đầu tư đồng bộ hạ tầng kỹ thuật: hệ thống điện trung thế, cấp thoát nước, viễn thông, giao thông nội khu và trạm xử lý nước thải công suất cao, đảm bảo tiêu chuẩn môi trường quốc gia.";
    const DESCRIPTION_3 =
        "KCN định hướng thu hút các ngành công nghiệp sạch, cơ khí chính xác, linh kiện điện tử, thực phẩm và vật liệu xây dựng nhẹ, với chính sách ưu đãi đầu tư hấp dẫn và thời hạn sử dụng đất 50 năm.";

    const IMAGES = [
        "/images/thanhliem1.png",
        "/images/thanhliem2.png",
        "/images/thanhliem3.png",
    ];

    return (
        <>
            <Hero title={TITLE} homepage="Trang chủ" currentPage="Dự án" bgImage={IMAGES[0]} />

            <section className="px-4 md:px-10 py-16">
                <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row gap-8">
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

                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className={`px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300 text-sm font-medium ${
                                showDetails ? "bg-blue-600 text-white" : ""
                            }`}
                        >
                            {showDetails ? "Ẩn chi tiết phân lô" : "Chi tiết phân lô"}
                        </button>
                    </div>

                    <div className="md:w-[520px] w-full text-gray-700 space-y-4 text-justify lg:text-[16px] font-[500] leading-relaxed">
                        <p>{DESCRIPTION_1}</p>
                        <p>{DESCRIPTION_2}</p>
                        <p>{DESCRIPTION_3}</p>
                    </div>
                </div>
            </section>

            {/* Slider ảnh */}
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
                        speed={800}
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
                                        alt={`KCN Thanh Liêm I ${idx + 1}`}
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

export default ThanhLiemI;
