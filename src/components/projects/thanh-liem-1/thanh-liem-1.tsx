"use client";
import React, { useRef, useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import Hero from "@/components/public/hero";
import Image from "next/image";

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
        "/images/thanhliem1.jpg",
        "/images/thanhliem2.jpg",
        "/images/thanhliem3.jpg",
        "/images/thanhliem4.jpg",
        "/images/thanhliem5.jpg",
        "/images/thanhliem6.jpg",
    ];

    // --- Slider logic ---
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);

    // Responsive: thay đổi số lượng ảnh hiển thị tùy theo độ rộng
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const scrollToItem = (index: number) => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / IMAGES.length;
            scrollRef.current.scrollTo({
                left: itemWidth * index,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.scrollWidth / IMAGES.length;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    // --- Handle drag ---
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        setIsUserInteracting(true);
        const startX = e.pageX - scrollRef.current.offsetLeft;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const x = moveEvent.pageX - scrollRef.current!.offsetLeft;
            scrollRef.current!.scrollLeft = scrollLeft - (x - startX);
        };

        const handleMouseUp = () => {
            setTimeout(() => setIsUserInteracting(false), 2000);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    // --- Auto scroll ---
    useEffect(() => {
        if (isUserInteracting) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + visibleCount) % IMAGES.length;
                scrollToItem(next);
                return next;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [isUserInteracting, visibleCount]);

    return (
        <>
            <Hero title={TITLE} homepage="Trang chủ" currentPage="Dự án" bgImage={IMAGES[0]} />

            {/* --- Giới thiệu --- */}
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

            {/* --- Slider ảnh --- */}
            <section className="px-4 md:px-10 pb-20">
                <div className="max-w-[1110px] mx-auto">
                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 cursor-grab active:cursor-grabbing select-none"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 snap-center overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                                style={{
                                    width:
                                        visibleCount === 3
                                            ? "calc(33.333% - 16px)"
                                            : visibleCount === 2
                                                ? "calc(50% - 12px)"
                                                : "100%",
                                    height: "260px",
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`KCN Thanh Liêm I ${idx + 1}`}
                                    width={400}
                                    height={260}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({
                            length: Math.ceil(IMAGES.length / visibleCount),
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToItem(index * visibleCount)}
                                className={`w-[30px] h-[30px] flex items-center justify-center rounded-full transition ${
                                    activeIndex >= index * visibleCount &&
                                    activeIndex < (index + 1) * visibleCount
                                        ? "border border-[#222222]"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`w-[10px] h-[10px] rounded-full transition-all ${
                                        activeIndex >= index * visibleCount &&
                                        activeIndex < (index + 1) * visibleCount
                                            ? "bg-[#222222]"
                                            : "bg-[#12222333]"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx global>{`
                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </>
    );
};

export default ThanhLiemI;
