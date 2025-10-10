"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Hero from "@/components/public/hero";

// ==== IMPORT ICONS ====
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";

// ===== DỮ LIỆU GIẢ MẪU =====
const latestNews = {
    title: "Ưu đãi vượt trội, thu hút doanh nghiệp phát triển bền vững",
    link: "/news/hanam",
    image: "/images/factory-wide.png",
    date: "28/03/2024",
    description:
        "Trường ĐH FPT vừa tổ chức hội nghị ACBSP khu vực 10, quy tụ hơn 300 chuyên gia, giảng viên, nghiên cứu viên... đến từ Mỹ, châu Âu, khu vực Nam Á, Đông Nam Á và nhiều ĐH ở Việt Nam.",
    likes: 20,
    comments: 16,
    time: "8 giờ trước",
};

const relatedNews = [
    {
        img: "/images/news1.png",
        title: "Khánh thành nhà máy mới tại KCN Kim Bình",
        link: "/news/kim-binh",
        time: "5 giờ trước",
    },
    {
        img: "/images/news2.png",
        title: "Hạ tầng giao thông kết nối thuận lợi",
        link: "/news/giao-thong",
        time: "7 giờ trước",
    },
    {
        img: "/images/news3.png",
        title: "Tiềm năng thu hút đầu tư FDI 2025",
        link: "/news/fdi-2025",
        time: "1 ngày trước",
    },
    {
        img: "/images/news1.png",
        title: "KCN Thanh Niêm 4 – điểm sáng mới",
        link: "/news/thanh-niem-4",
        time: "2 ngày trước",
    },
    {
        img: "/images/news2.png",
        title: "Hà Nam hướng đến trung tâm công nghiệp phía Bắc",
        link: "/news/ha-nam",
        time: "3 ngày trước",
    },
];

const allNews = [
    {
        img: "/images/img1.png",
        title: "Khởi công nhà máy linh kiện điện tử tại Hà Nam",
        desc: "KCN Kim Bảng IV thu hút thêm dự án sản xuất linh kiện cao cấp, tạo 2.000 việc làm.",
        date: "08/10/2025",
        link: "/news/nha-may-linh-kien",
    },
    {
        img: "/images/img2.png",
        title: "Đầu tư mở rộng hạ tầng công nghiệp tại miền Bắc",
        desc: "Hệ thống giao thông và logistic được đồng bộ giúp thu hút dòng vốn FDI mạnh mẽ.",
        date: "05/10/2025",
        link: "/news/mo-rong-ha-tang",
    },
    {
        img: "/images/img3.png",
        title: "Phát triển bền vững tại các khu công nghiệp thế hệ mới",
        desc: "Các khu công nghiệp xanh giúp cân bằng phát triển và môi trường, thu hút nhà đầu tư lớn.",
        date: "02/10/2025",
        link: "/news/phat-trien-ben-vung",
    },
];

// ===== STYLE CHO TIÊU ĐỀ (hover line) =====
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative inline-block text-2xl md:text-3xl font-bold mb-6 pl-3 border-l-4 border-[#0056A6]">
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#0056A6] hover:after:w-full after:transition-all after:duration-300">
      {children}
    </span>
    </h2>
);

export default function NewsPage() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Cho phép kéo ngang bằng chuột
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const start = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };
        const stop = () => {
            isDown = false;
        };
        const move = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
        };

        el.addEventListener("mousedown", start);
        el.addEventListener("mouseleave", stop);
        el.addEventListener("mouseup", stop);
        el.addEventListener("mousemove", move);

        return () => {
            el.removeEventListener("mousedown", start);
            el.removeEventListener("mouseleave", stop);
            el.removeEventListener("mouseup", stop);
            el.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <>
            {/* Hero */}
            <Hero
                title="Dự án khu công nghiệp Kim Bảng IV"
                homepage="Trang chủ"
                currentPage="Tin tức sự kiện"
                bgImage="/images/img3.png"
            />

            <section className="bg-white py-12 px-4 md:px-8">
                {/* === TIN MỚI NHẤT === */}
                <div className="max-w-[1110px] mx-auto mb-16">
                    <SectionTitle>Tin mới nhất</SectionTitle>

                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                        {/* Tin chính */}
                        <div className="md:w-2/3">
                            <Link href={latestNews.link}>
                                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition relative">
                                    <Image
                                        src={latestNews.image}
                                        alt={latestNews.title}
                                        width={720}
                                        height={400}
                                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <span className="text-[#0056A6] font-medium">Tin tức</span>
                                        <span>•</span>
                                        <span>{latestNews.date}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold hover:text-[#0056A6] transition-colors">
                                        {latestNews.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        {latestNews.description}
                                    </p>

                                    {/* Icon tương tác */}
                                    <div className="flex items-center gap-5 mt-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <FaHeart className="text-red-500" />
                                            <span>{latestNews.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaRegCommentDots className="text-blue-500" />
                                            <span>{latestNews.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MdSchedule className="text-gray-400" />
                                            <span>{latestNews.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Tin phụ */}
                        <div className="md:w-1/3 flex flex-col gap-4">
                            {relatedNews.map((n, idx) => (
                                <Link
                                    key={idx}
                                    href={n.link}
                                    className="flex gap-3 items-center hover:text-[#0056A6] transition-colors"
                                >
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src={n.img}
                                            alt={n.title}
                                            width={120}
                                            height={80}
                                            className="w-[120px] h-[80px] rounded-md object-cover"
                                        />
                                        {/* Mốc thời gian góc dưới bên trái */}
                                        <div className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-2 py-[2px] rounded">
                                            {n.time}
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium leading-snug">{n.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Thanh nhỏ bên dưới — cuộn ngang */}
                    <div
                        ref={scrollRef}
                        className="mt-8 flex gap-6 overflow-x-auto whitespace-nowrap pb-2 cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                    >
                        {relatedNews.map((n, idx) => (
                            <Link
                                key={idx}
                                href={n.link}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-w-[260px] sm:min-w-[280px] md:min-w-[300px]"
                            >
                                <div className="overflow-hidden">
                                    <Image
                                        src={n.img}
                                        alt={n.title}
                                        width={280}
                                        height={180}
                                        className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-3">
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                        <span className="text-red-500 font-medium">Tin tức</span>
                                        <span>28/03/2025</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 leading-snug group-hover:text-[#0056A6] transition-colors">
                                        {n.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* === TẤT CẢ CÁC TIN === */}
                <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row gap-10">
                    {/* Danh sách tin */}
                    <div className="md:w-2/3 space-y-6">
                        <SectionTitle>Tất cả các tin</SectionTitle>
                        {allNews.map((n, idx) => (
                            <Link
                                key={idx}
                                href={n.link}
                                className="flex flex-col sm:flex-row gap-4 hover:bg-gray-50 rounded-lg p-3 transition"
                            >
                                <Image
                                    src={n.img}
                                    alt={n.title}
                                    width={210}
                                    height={140}
                                    className="w-full sm:w-[210px] h-[200px] sm:h-[140px] object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold hover:text-[#0056A6] transition-colors">
                                        {n.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{n.date}</p>
                                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                        {n.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="md:w-1/3 space-y-4">
                        <h3 className="text-lg font-bold border-l-4 border-[#0056A6] pl-3">
                            Tin xem nhiều
                        </h3>
                        {relatedNews.map((n, idx) => (
                            <Link
                                key={idx}
                                href={n.link}
                                className="flex gap-3 hover:text-[#0056A6] transition-colors"
                            >
                                <Image
                                    src={n.img}
                                    alt={n.title}
                                    width={80}
                                    height={60}
                                    className="w-[80px] h-[60px] rounded object-cover"
                                />
                                <p className="text-sm font-medium leading-snug">{n.title}</p>
                            </Link>
                        ))}
                    </aside>
                </div>
            </section>
        </>
    );
}
