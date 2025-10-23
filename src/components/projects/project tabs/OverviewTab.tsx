"use client";
import React from "react";
import { motion } from "framer-motion";

const OverviewTab = () => {
    const overviewItems = [
        {
            title: "Vị trí & liên kết vùng",
            desc: "Trên cao tốc Cầu Giẽ – Ninh Bình, gần Vành đai 5 Hà Nội; 15 km Phủ Lý, 30 km Nam Định, 40 km Ninh Bình, ~50 km Hà Nội/ Nội Bài, ~120 km cảng Hải Phòng.",
        },
        {
            title: "Hạ tầng đồng bộ",
            desc: "Quy hoạch cơ bản cốt, điện–nước–viễn thông theo chuẩn quốc gia; trạm XLNT tập trung, khu cây xanh & hồ điều hoà.",
        },
        {
            title: "Quy mô & thời hạn",
            desc: "~295,21 ha toàn khu; GĐ I ~183,94 ha; thời hạn hoạt động 50 năm.",
        },
        {
            title: "Nguồn nhân lực",
            desc: "Dự kiến 16.000–20.000 lao động, thuận lợi tuyển dụng & đào tạo từ khu vực phụ cận.",
        },
        {
            title: "Tiến độ & vốn hạ tầng",
            desc: "Hoàn thành trong 36 tháng kể từ khi bàn giao đất; tổng vốn hạ tầng ~2.465 tỷ đồng.",
        },
    ];

    const highlights = [
        { icon: "/icons/highlight/plane.svg", text: "Cách sân bay Nội Bài 1.5h lái xe." },
        { icon: "/icons/highlight/school.svg", text: "Bán kính 5km: trường học quốc tế." },
        { icon: "/icons/highlight/hospital.svg", text: "Bán kính 5km: bệnh viện Bạch Mai, bệnh viện Việt Đức." },
        { icon: "/icons/highlight/port.svg", text: "Cách cảng Hải Phòng 100km." },
        { icon: "/icons/highlight/paper.svg", text: "Thủ tục cấp giấy chứng nhận đầu tư: 5 ngày." },
    ];

    return (
        <section className="w-full bg-white">
            {/* --- Giới thiệu tổng quan --- */}
            <div className="max-w-[1110px] mx-auto px-4 md:px-10 py-10">
                <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-8 text-center md:text-left">
                    Tổng quan
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    {overviewItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="group border-l-4 border-transparent hover:border-blue-600 pl-4 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} // 👈 lặp lại khi cuộn ra/vào
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Liên kết vùng + bản đồ --- */}
            <div className="flex flex-col md:grid md:grid-cols-2 md:h-[700px] gap-8 md:gap-0">
                {/* --- Google Map --- */}
                <motion.div
                    className="w-full h-[400px] md:h-[700px] max-h-[900px] order-2 md:order-1 rounded-lg overflow-hidden shadow-lg"
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

                {/* --- Highlights --- */}
                <motion.div
                    className="flex flex-col justify-center p-6 md:p-12 order-1 md:order-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center w-[180px] h-8 bg-white rounded-full border border-white/20 gap-2 mb-4 shadow-md">
                        <img src="/images/div.type-icon.jpg" alt="" className="w-5 h-5 object-contain" />
                        <p className="text-[12px] font-medium text-[#0056A6] m-0">
                            Liên kết vùng
                        </p>
                    </div>

                    <h3 className="text-3xl font-bold mb-8 text-[#222]">
                        Khu công nghiệp Thanh Liêm 1
                    </h3>

                    <ul className="mb-8 space-y-4">
                        {highlights.map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }} // 👈 hiệu ứng lặp lại khi cuộn
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <img
                                    src={item.icon}
                                    alt=""
                                    width={60}
                                    height={60}
                                    className="w-[60px] h-[60px] flex-shrink-0"
                                    aria-hidden="true"
                                />
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    {item.text}
                                </p>
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
    );
};

export default OverviewTab;
