"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface SlideItem {
    type: "image" | "card";
    src?: string;
    title?: string;
    text?: string;
}

const Homepage: React.FC = () => {
    const searchTags = [
        { src: "/icons/custom/chungcu.svg", label: "Chung cư" },
        { src: "/icons/custom/khucongnghiep.svg", label: "Khu công nghiệp" },
        { src: "/icons/custom/toanha.svg", label: "Toà nhà" },
    ];

    const projects = [
        { img: "KB4.jpg", name: "KCN Kim Bảng IV", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "/projects/kim-bang-iv" },
        { img: "KB.jpg", name: "KCN Kim Bình", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
        { img: "TN4.jpg", name: "KCN Thanh Liêm 1", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "/projects/thanh-liem-1" },
        { img: "TN4.jpg", name: "KCN Thanh Liêm 4", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
        { img: "TN5.jpg", name: "KCN Thanh Liêm 5", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
    ];

    const features = [
        { img: "vitri.jpg", title: "Vị trí chiến lược", desc: "Kết nối trực tiếp cao tốc & vành đai, đi Hà Nội–Hải Phòng nhanh." },
        { img: "hatang.jpg", title: "Hạ tầng đồng bộ", desc: "Điện–nước–viễn thông đạt chuẩn; trạm XLNT tập trung, hồ điều hòa." },
        { img: "tiemnang.jpg", title: "Tiềm năng sinh lời cao", desc: "Ưu đãi thuế & tiền thuê đất; tỷ lệ lấp đầy dự báo tăng ổn định." },
    ];

    const whyChoose = [
        { img: "why1.jpg", title: "Vị trí chiến lược", desc: "Gần cao tốc Cầu Giẽ–Ninh Bình & Vành đai 5, kết nối logistics miền Bắc." },
        { img: "why2.jpg", title: "Quy hoạch hiện đại", desc: "Mặt bằng ô bàn cờ, quỹ đất linh hoạt theo nhu cầu từ 0.5–20ha." },
        { img: "why3.jpg", title: "Hạ tầng kỹ thuật mạnh", desc: "Nguồn điện ổn định, nước công nghiệp, XLNT tập trung, PCCC đồng bộ." },
    ];

    const infoList = [
        { title: "Vị trí & liên kết vùng", text: "Tiện cao tốc Cầu Giẽ – Ninh Bình, Vành đai 5 Hà Nội: 15 km Phủ Lý, 30 km Nam Định, 40 km Ninh Bình, ~50 km Hà Nội/ Nội Bài." },
        { title: "Quy mô & thời hạn", text: "~295,2 ha toàn khu; GĐ I ~183,9 ha; thời hạn hoạt động 50 năm." },
        { title: "Hạ tầng đồng bộ", text: "Điện – nước – viễn thông theo chuẩn quốc gia, trạm XLNT tập trung, khu cây xanh & bãi đỗ xe nội khu." },
        { title: "Nguồn nhân lực", text: "Kết nối hơn 600.000 lao động, thuận lợi tuyển dụng và đào tạo." },
        { title: "Tiến độ & vốn hạ tầng", text: "Hoàn thành trong 36 tháng kể từ khi bàn giao đất, tổng vốn hạ tầng ~2.465 tỷ đồng." },
    ];

    const slidesData = [
        {
            type: "image",
            src: "/images/img1.jpg",
            tags: ["FOR SALE", "FEATURED"],
            title: "Khu công nghiệp Kim Bảng IV",
            subtitle: "Trên cao tốc Cầu Giẽ - Ninh Bình, gần Vành đai 5 Hà Nội",
            info: ["~295,21 ha", "~16.000–20.000 lao động"],
        },
        { type: "image", src: "/images/img2.jpg", title: "Khu công nghiệp hiện đại" },
        { type: "image", src: "/images/img3.jpg", title: "Cơ sở hạ tầng" },
        {
            type: "card",
            title: "Hệ thống cấp nước hiện đại",
            text: "Đảm bảo nhu cầu sản xuất, sinh hoạt trong khu vực và các xí nghiệp.",
        },
    ];

    const swiperRef = useRef<any>(null);
    // ======= SLIDER INFINITE LOGIC =======
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const extendedProjects = [...projects, ...projects, ...projects]; // duplicate for infinite
    const itemWidth = 256 + 24; // width + gap

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // scroll tới set giữa lúc mount
        container.scrollLeft = projects.length * itemWidth;

        const handleScroll = () => {
            if (!container) return;
            const scrollIndex = Math.round(container.scrollLeft / itemWidth) % projects.length;
            setActiveIndex(scrollIndex);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToItem = (index: number) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: projects.length * itemWidth + index * itemWidth,
            behavior: "smooth",
        });
    };
    // =======================================

    return (
        <>
            {/* HERO */}
            <section className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 -z-10">
                    <Image src="/images/background.jpg" alt="Hero Background" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/45" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <button className="mb-4 px-4 py-2 rounded-full bg-[#0056A6] text-white text-xs font-medium">Dự án tiêu biểu</button>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-snug">
                        Khám phá cơ hội đầu tư tại khu công nghiệp
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                        Nơi chiến lược kinh doanh của bạn gặp gỡ cơ sở hạ tầng hiện đại và tiềm năng tăng trưởng vượt trội.
                    </p>
                    {/* Search Bar */}
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="flex w-full bg-white rounded-full shadow-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Hãy nhập từ khóa bạn quan tâm.."
                                className="flex-1 px-5 py-3 text-gray-700 outline-none text-sm sm:text-base"
                            />
                            <button className="w-12 h-12 flex items-center justify-center rounded-full m-1 bg-[#0056A6]">
                                <Image src="/icons/interface/search_magnifying_glass.svg" alt="Search" width={20} height={20} className="invert" />
                            </button>
                        </div>
                        <p className="text-white mt-3 text-sm">Bạn đang tìm kiếm điều gì?</p>
                        <div className="flex flex-wrap justify-center gap-3 mt-2">
                            {searchTags.map((tag) => (
                                <div key={tag.label} className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full pl-1 pr-5 py-1 cursor-pointer hover:bg-white/40 transition-all">
                                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                                        <Image src={tag.src} alt={tag.label} width={20} height={20} />
                                    </div>
                                    <span className="text-white text-sm font-medium">{tag.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="py-12 sm:py-16 bg-white px-4">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">Dự án tiêu biểu</h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Dự án tiêu biểu thể hiện năng lực, uy tín và dấu ấn của doanh nghiệp trong từng lĩnh vực hoạt động.
                    </p>
                </div>

                <div className="max-w-[1110px] mx-auto">
                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1">
                        {extendedProjects.map((p, idx) => (
                            <Link
                                key={idx}
                                href={p.link}
                                className="flex-shrink-0 snap-center relative w-[256px] h-[319px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300"
                            >
                                <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-105">
                                    <Image src={`/images/${p.img}`} alt={p.name} fill className="object-cover" />
                                </div>
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="relative z-10 p-5 text-white">
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#77d1de]">{p.name}</h3>
                                    <p className="text-sm">{p.area}</p>
                                    <p className="text-sm">{p.cost}</p>
                                    <p className="text-sm">{p.duration}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-6 gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToItem(index)}
                                className={`w-[30px] h-[30px] flex items-center justify-center rounded-full transition ${
                                    activeIndex === index ? "border border-[#222222]" : ""
                                }`}
                            >
                                <span className={`w-[10px] h-[10px] rounded-full transition-all ${activeIndex === index ? "bg-[#222222]" : "bg-[#12222333]"}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </section>


            {/* FEATURES */}
            <section className="py-16 bg-gray-100 text-center px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">Lý do lựa chọn chúng tôi</h2>
                    <p className="text-gray-600 mb-10 text-sm sm:text-base">
                        Khám phá những giá trị nổi bật của khu công nghiệp
                    </p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }} // fade-in khi 20% section xuất hiện, có thể cuộn lại
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                className="bg-white p-6 rounded-xl flex flex-col items-center shadow-md group cursor-pointer min-h-[200px] overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6 + i * 0.1 }} // mỗi ảnh fade-in nhanh/chậm khác nhau
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-16 h-16 mb-4 flex-shrink-0">
                                    <img src={`/images/${f.img}`} alt={f.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                    {/* Text + content */}
                    <motion.div
                        className="flex-1 max-w-lg text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Tại sao chọn<br />khu công nghiệp của chúng tôi?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Chúng tôi cam kết mang đến môi trường kinh doanh tối ưu và năng động cho các nhà đầu tư.
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            {whyChoose.map((w, i) => (
                                <motion.div
                                    key={w.title}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: 0 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <img src={`/images/${w.img}`} alt={w.title} className="w-8 h-8 flex-shrink-0" />
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">{w.title}</h3>
                                        <p className="text-gray-600 text-sm">{w.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0056A6] text-white rounded-full font-medium hover:bg-blue-900 transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Khám phá
                            <span className="material-symbols-rounded text-lg">arrow_forward</span>
                        </motion.a>
                    </motion.div>

                    {/* Hình ảnh minh họa */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* PC view */}
                        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-full">
                            <motion.img
                                src="/images/img1.jpg"
                                alt="Ảnh 1"
                                className="col-span-2 rounded-lg object-cover w-full h-full shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            />
                            <motion.img
                                src="/images/img2.jpg"
                                alt="Ảnh 2"
                                className="justify-self-end rounded-lg object-cover w-11/12 h-full shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                            <motion.img
                                src="/images/img3.jpg"
                                alt="Ảnh 3"
                                className="justify-self-end rounded-lg object-cover w-full h-full shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            />
                        </div>

                        {/* Mobile view */}
                        <div className="md:hidden flex justify-center">
                            <motion.img
                                src="/images/img1.jpg"
                                alt="Ảnh minh họa"
                                className="rounded-lg object-cover w-full max-w-sm shadow-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="w-full bg-white overflow-hidden">
                <div className="flex flex-col md:grid md:grid-cols-2 md:h-[700px] gap-8 md:gap-0">
                    {/* LEFT SIDE: MAP trên PC, mobile map xuống dưới */}
                    <motion.div
                        className="w-full h-[400px] md:h-full order-2 md:order-1 rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.718408065446!2d-73.86391138459234!3d40.71393947933145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8ebc7f0f57%3A0x9d62c7d45d7b5ea!2sForest%20Hills%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1694288280884!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>

                    {/* RIGHT SIDE: TEXT + INFO */}
                    <motion.div
                        className="flex flex-col justify-center p-6 md:p-12 order-1 md:order-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Label */}
                        <div className="flex items-center justify-center w-[180px] h-8 bg-white rounded-full border border-white/20 gap-2 mb-4 shadow-md">
                            <img src="/images/div.type-icon.jpg" alt="" className="w-5 h-5 object-contain" />
                            <p className="text-[12px] font-medium text-[#0056A6] m-0">
                                Bản đồ quy hoạch chi tiết
                            </p>
                        </div>

                        <h2 className="text-4xl font-bold mb-8 text-[#222]">
                            Khu công nghiệp Kim Bảng IV
                        </h2>

                        <ul className="space-y-4 mb-12">
                            {infoList.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 hover:translate-x-1 transition-all duration-300 group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    {/* Mũi tên trắng trong vòng tròn xanh */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0056A6] flex items-center justify-center">
                                        <img
                                            src="/icons/arrow/arrow_right_md.svg"
                                            alt="arrow"
                                            className="w-5 h-5"
                                        />
                                    </div>

                                    {/* Nội dung text */}
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.text}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>


                        <div className="flex gap-4 flex-wrap">
                            <a
                                href="#"
                                className="px-7 py-3 rounded-full font-medium border border-[#2A56E6] text-[#2A56E6] hover:bg-[#2A56E6] hover:text-white hover:scale-105 transition transform"
                            >
                                Xem chi tiết
                            </a>
                            <a
                                href="#"
                                className="px-7 py-3 rounded-full font-medium bg-[#0056A6] text-white hover:opacity-90 hover:scale-105 transition transform"
                            >
                                Đăng ký dự án
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ========== INFRASTRUCTURE ========== */}
            <section className="infrastructure py-24 bg-white text-center overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-4 text-gray-900">Hạ tầng đẳng cấp</h2>
                    <p className="text-gray-600 text-base max-w-3xl mx-auto mb-16 leading-relaxed">
                        Hạ tầng đồng bộ, hiện đại, đáp ứng tiêu chuẩn quốc tế. Mang đến lợi thế vượt trội cho doanh nghiệp trong sản xuất, logistics và kết nối toàn cầu.
                    </p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {["electric", "water", "telecom"].map((type, idx) => (
                            <motion.div
                                key={type}
                                className="w-72 h-96 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            >
                                <div>
                                    <img src={`/images/${type}.jpg`} alt={type} className="w-full h-40 object-cover rounded-lg" />
                                    <span className="inline-block bg-[#77d1de] text-white mt-2 px-3 py-1 rounded-full text-xs font-medium">
              {type === "electric" ? "Điện" : type === "water" ? "Nước" : "Viễn thông"}
            </span>
                                    <h3 className="text-base font-medium mt-2 text-gray-900">
                                        {type === "electric"
                                            ? "Hệ thống điện ổn định"
                                            : type === "water"
                                                ? "Hệ thống cấp nước hiện đại"
                                                : "Hạ tầng viễn thông tiên tiến"}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {type === "electric"
                                            ? "Đảm bảo nguồn điện liên tục, an toàn và đáp ứng nhu cầu sản xuất – kinh doanh."
                                            : type === "water"
                                                ? "Cung cấp nước sạch đạt chuẩn, vận hành thông minh và tiết kiệm."
                                                : "Mạng lưới kết nối tốc độ cao, ổn định, hỗ trợ toàn diện cho công nghệ và dịch vụ số."}
                                    </p>
                                </div>

                                {/* Mũi tên trắng trên nền tròn xanh */}
                                {/* Nút Chi tiết ở dưới mỗi card */}
                                <a
                                    href="#"
                                    className="mt-4 inline-flex items-center justify-center gap-2 text-[#0056A6] font-medium hover:text-blue-800 transition w-full"
                                >
                                    Chi tiết
                                    <img
                                        src="/icons/arrow/chevron_right.svg"
                                        alt="arrow"
                                        className="w-4 h-4"
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            <section className="w-full bg-white flex justify-center overflow-hidden">
                <div className="relative w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    {/* Heading */}
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#222]">
                            Lý do lựa chọn chúng tôi
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Khám phá những giá trị nổi bật của khu công nghiệp
                        </p>
                    </motion.div>

                    {/* Desktop Grid */}
                    <div className="hidden lg:grid grid-cols-[minmax(0,685px)_minmax(0,685px)] gap-4 sm:gap-6 items-stretch justify-center mx-auto w-full">
                        {/* Left Image */}
                        <motion.div
                            className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-[16px] overflow-hidden min-w-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/images/img1.jpg"
                                alt="Khu công nghiệp Kim Bảng IV"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            {/* Tags */}
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
          <span className="bg-[#0056A6] text-xs text-white px-3 py-1 rounded-full">
            FOR SALE
          </span>
                                <span className="bg-[#77D1DE] text-xs text-white px-3 py-1 rounded-full">
            FEATURED
          </span>
                            </div>
                            {/* Info */}
                            <motion.div
                                className="absolute bottom-6 left-6 text-white max-w-[90%]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    Khu công nghiệp Kim Bảng IV
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    Trên cao tốc Cầu Giẽ - Ninh Bình, gần Vành đai 5 Hà Nội
                                </p>
                                <div className="flex items-center gap-4 text-sm flex-wrap">
                                    <span>~295,21 ha</span>
                                    <span>~16.000–20.000 lao động</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                            {/* Top Image */}
                            <motion.div
                                className="col-span-1 sm:col-span-2 relative h-[300px] sm:h-[334px] rounded-[16px] overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/images/img2.jpg"
                                    alt="Khu công nghiệp hiện đại"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                {/* Desktop Arrows */}
                                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-full flex items-center justify-center bg-white hover:bg-black/10 transition">
                                    <img
                                        src="/icons/arrow/arrow_right_md.svg"
                                        alt="prev"
                                        className="w-5 h-5 rotate-180" // rotate 180 để thành left
                                    />
                                </button>
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-full flex items-center justify-center bg-white hover:bg-black/10 transition">
                                    <img
                                        src="/icons/arrow/arrow_right_md.svg"
                                        alt="next"
                                        className="w-5 h-5"
                                    />
                                </button>
                            </motion.div>

                            {/* Bottom Left Image */}
                            <motion.div
                                className="h-[300px] sm:h-[342px] rounded-[16px] overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <img
                                    src="/images/img3.jpg"
                                    alt="Cơ sở hạ tầng"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Bottom Right Card */}
                            <motion.div
                                className="bg-[#77D1DE] rounded-[16px] flex flex-col justify-between p-6 h-[300px] sm:h-[342px]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h4 className="text-xl font-semibold text-black mb-2">
                                            Hệ thống cấp nước hiện đại
                                        </h4>
                                        <p className="text-sm text-black/90">
                                            Đảm bảo nhu cầu sản xuất, sinh hoạt trong khu vực và các xí nghiệp.
                                        </p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100 transition">
                                            <img
                                                src="/icons/arrow/arrow_right_md.svg"
                                                alt="arrow"
                                                className="w-5 h-5"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Swiper */}
                    <div className="lg:hidden">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {slidesData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div
                                        className={`mx-auto w-[353px] h-[395px] rounded-[16px] overflow-hidden ${
                                            item.type === "card" ? "bg-[#77D1DE] flex flex-col justify-between p-4" : ""
                                        }`}
                                    >
                                        {item.type === "image" ? (
                                            <img
                                                src={item.src}
                                                alt={`slide-${idx}`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex flex-col justify-between h-full">
                                                <div>
                                                    <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
                                                    <p className="text-sm text-black/90">{item.text}</p>
                                                </div>
                                                <div className="flex justify-end mt-4">
                                                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100 transition">
                                                        <img src="/icons/arrow/arrow_right_md.svg" alt="arrow" className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Dots indicator */}
                        <div className="flex justify-center mt-6 gap-2">
                            {slidesData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current?.slideToLoop(index)}
                                    className={`w-[30px] h-[30px] flex items-center justify-center rounded-full transition ${
                                        activeIndex === index ? "border border-[#222222]" : ""
                                    }`}
                                >
            <span
                className={`w-[10px] h-[10px] rounded-full transition-all ${
                    activeIndex === index ? "bg-[#222222]" : "bg-[#12222333]"
                }`}
            />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* ========== TESTIMONIAL ========== */}
            <section className="w-full bg-[#2d5fa8] text-white py-24">
                <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">

                    {/* Hình khách hàng */}
                    <motion.div
                        className="flex justify-center lg:flex-1 flex-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/images/client.jpg"
                            alt="Khách hàng"
                            className="w-full max-w-sm lg:max-w-[320px] h-auto rounded-xl object-cover shadow-xl"
                        />
                    </motion.div>

                    {/* Nội dung testimonial */}
                    <motion.div
                        className="flex flex-col justify-center lg:flex-[1.2] gap-4 lg:gap-6 text-center lg:text-left w-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >

                        {/* Tên + icon ngoặc móc */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <img
                                src="/icons/custom/ngoacmoc.svg"
                                alt="quote"
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">DuyNguyen</h3>
                                <p className="text-sm text-[#b7d8ff]">Designer</p>
                            </div>
                        </div>

                        {/* Nội dung phản hồi */}
                        <p className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Môi trường kinh doanh chuyên nghiệp tạo niềm tin cho nhà đầu tư và đối tác, sự năng động
                            và đổi mới giúp doanh nghiệp dễ dàng thích ứng với thị trường, đây thực sự là lựa chọn tối
                            ưu để triển khai và hiện thực hóa chiến lược phát triển bền vững.
                        </p>

                        {/* Nút điều hướng */}
                        <div className="flex justify-center lg:justify-start gap-3 mt-4">
                            <motion.button
                                className="w-[60px] h-[40px] rounded-[40px] border border-white bg-transparent flex items-center justify-center transition hover:scale-110"
                            >
                                <img
                                    src="/icons/arrow/chevron_left.svg"
                                    alt="prev"
                                    className="w-4 h-4 filter brightness-0 invert"
                                />
                            </motion.button>
                            <motion.button
                                className="w-[60px] h-[40px] rounded-[40px] border border-white bg-transparent flex items-center justify-center transition hover:scale-110"
                            >
                                <img
                                    src="/icons/arrow/chevron_right.svg"
                                    alt="next"
                                    className="w-4 h-4 filter brightness-0 invert"
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="w-full bg-white py-20 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                            Tin tức và sự kiện
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Những cập nhật mới nhất về quy hoạch, thu hút đầu tư và chính sách ưu đãi. Nắm bắt xu hướng, đánh giá cơ hội & rủi ro trong thời gian thực.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { img: "/images/news1.jpg", date: "20/09/2025", category: "Đầu tư", title: "Ưu đãi vượt trội, thu hút doanh nghiệp phát triển bền vững" },
                            { img: "/images/news2.jpg", date: "20/09/2025", category: "Sự kiện", title: "Cơ hội hợp tác, chia sẻ và phát triển bền vững" },
                            { img: "/images/news3.jpg", date: "20/09/2025", category: "Phát triển", title: "Tiến độ phát triển hạ tầng mới, cập nhật nhanh chóng, hiện đại" },
                        ].map((n, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="relative h-52 overflow-hidden rounded-t-xl">
                                    <img
                                        src={n.img}
                                        alt={n.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded px-3 py-1 shadow text-xs text-gray-800">
                                        <span>{n.date}</span>
                                        <div className="w-px h-4 bg-gray-400"></div>
                                        <span>{n.category}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-md font-semibold mb-4">{n.title}</h3>
                                    <div className="text-center">
                                        <a
                                            href="#"
                                            className="text-[#0056A6] font-medium inline-flex items-center gap-2 hover:text-[#003d7a]"
                                        >
                                            Đọc thêm
                                            <img
                                                src="/icons/arrow/chevron_right.svg"
                                                alt="arrow"
                                                className="w-4 h-4"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Homepage;
