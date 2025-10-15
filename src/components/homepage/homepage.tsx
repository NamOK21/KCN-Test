"use client";

import React from "react";
import Link from "next/link";

const Homepage: React.FC = () => {
    const searchTags = [
        { src: "/icons/custom/chungcu.svg", label: "Chung cư" },
        { src: "/icons/custom/khucongnghiep.svg", label: "Khu công nghiệp" },
        { src: "/icons/custom/toanha.svg", label: "Toà nhà" },
    ];

    const projects = [
        { img: "KB4.png", name: "KCN Kim Bảng IV", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "/projects/kim-bang-iv" },
        { img: "KB.png", name: "KCN Kim Bình", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
        { img: "TN4.png", name: "KCN Thanh niêm 4", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
        { img: "TN5.png", name: "KCN Thanh niêm 5", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm", link: "#" },
    ];

    const features = [
        { img: "vitri.png", title: "Vị trí chiến lược", desc: "Kết nối trực tiếp cao tốc & vành đai, đi Hà Nội–Hải Phòng nhanh." },
        { img: "hatang.png", title: "Hạ tầng đồng bộ", desc: "Điện–nước–viễn thông đạt chuẩn; trạm XLNT tập trung, hồ điều hòa." },
        { img: "tiemnang.png", title: "Tiềm năng sinh lời cao", desc: "Ưu đãi thuế & tiền thuê đất; tỷ lệ lấp đầy dự báo tăng ổn định." },
    ];

    const whyChoose = [
        { img: "why1.png", title: "Vị trí chiến lược", desc: "Gần cao tốc Cầu Giẽ–Ninh Bình & Vành đai 5, kết nối logistics miền Bắc." },
        { img: "why2.png", title: "Quy hoạch hiện đại", desc: "Mặt bằng ô bàn cờ, quỹ đất linh hoạt theo nhu cầu từ 0.5–20ha." },
        { img: "why3.png", title: "Hạ tầng kỹ thuật mạnh", desc: "Nguồn điện ổn định, nước công nghiệp, XLNT tập trung, PCCC đồng bộ." },
    ];

    const infoList = [
        { title: "Vị trí & liên kết vùng", text: "Tiện cao tốc Cầu Giẽ – Ninh Bình, Vành đai 5 Hà Nội: 15 km Phủ Lý, 30 km Nam Định, 40 km Ninh Bình, ~50 km Hà Nội/ Nội Bài." },
        { title: "Quy mô & thời hạn", text: "~295,2 ha toàn khu; GĐ I ~183,9 ha; thời hạn hoạt động 50 năm." },
        { title: "Hạ tầng đồng bộ", text: "Điện – nước – viễn thông theo chuẩn quốc gia, trạm XLNT tập trung, khu cây xanh & bãi đỗ xe nội khu." },
        { title: "Nguồn nhân lực", text: "Kết nối hơn 600.000 lao động, thuận lợi tuyển dụng và đào tạo." },
        { title: "Tiến độ & vốn hạ tầng", text: "Hoàn thành trong 36 tháng kể từ khi bàn giao đất, tổng vốn hạ tầng ~2.465 tỷ đồng." },
    ];

    return (
        <>
            {/* HERO */}
            <section
                className="relative bg-cover bg-center min-h-[80vh] sm:min-h-screen flex items-center justify-center"
                style={{ backgroundImage: "url('/images/background.png')" }}
            >
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <button className="mb-4 px-4 py-2 rounded-full bg-blue-800 text-white text-xs font-medium">
                        Dự án tiêu biểu
                    </button>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-snug">
                        Khám phá cơ hội đầu tư tại khu công nghiệp
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                        Nơi chiến lược kinh doanh của bạn gặp gỡ cơ sở hạ tầng hiện đại và tiềm năng tăng trưởng vượt trội.
                    </p>

                    {/* SEARCH BAR */}
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="flex w-full bg-white rounded-full shadow-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Hãy nhập từ khóa bạn quan tâm.."
                                className="flex-1 px-5 py-3 text-gray-700 outline-none text-sm sm:text-base"
                            />
                            <button className="w-12 h-12 flex items-center justify-center rounded-full m-1 bg-[#0056A6]">
                                <img src="/icons/interface/search_magnifying_glass.svg" alt="Search" className="w-5 h-5 invert" />
                            </button>
                        </div>
                        <p className="text-white mt-3 text-sm">Bạn đang tìm kiếm điều gì?</p>
                        <div className="flex flex-wrap justify-center gap-3 mt-2">
                            {searchTags.map((tag) => (
                                <div
                                    key={tag.label}
                                    className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full pl-1 pr-5 py-1 cursor-pointer hover:bg-white/40 transition-all"
                                >
                                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                                        <img src={tag.src} alt={tag.label} className="w-5 h-5" />
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

                {/* Thanh trượt ngang (scrollable) */}
                <div className="max-w-[1110px] mx-auto">
                    <div
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {projects.map((p) => (
                            <Link
                                key={p.name}
                                href={p.link}
                                className="flex-shrink-0 snap-center relative w-[256px] h-[319px] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300"
                            >
                                {/* Ảnh nền */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                                    style={{ backgroundImage: `url(/images/${p.img})` }}
                                />
                                {/* Lớp phủ tối */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                {/* Nội dung */}
                                <div className="relative z-10 p-5 text-white">
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#77d1de]">{p.name}</h3>
                                    <p className="text-sm">{p.area}</p>
                                    <p className="text-sm">{p.cost}</p>
                                    <p className="text-sm">{p.duration}</p>
                                </div>
                            </Link>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="bg-white p-6 rounded-xl flex flex-col items-center">
                                <img src={`/images/${f.img}`} alt={f.title} className="w-16 h-16 mb-4" />
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                    {/* Text + content */}
                    <div className="flex-1 max-w-lg text-center lg:text-left">
                        <h2 className="text-4xl font-bold mb-4">
                            Tại sao chọn<br />khu công nghiệp của chúng tôi?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Chúng tôi cam kết mang đến môi trường kinh doanh tối ưu và năng động cho các nhà đầu tư.
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            {whyChoose.map((w) => (
                                <div key={w.title} className="flex items-start gap-4">
                                    <img
                                        src={`/images/${w.img}`}
                                        alt={w.title}
                                        className="w-8 h-8"
                                    />
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">{w.title}</h3>
                                        <p className="text-gray-600 text-sm">{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-900 transition"
                        >
                            Khám phá
                            <span className="material-symbols-rounded text-lg">arrow_forward</span>
                        </a>
                    </div>

                    {/* Hình ảnh minh họa */}
                    <div className="flex-1 w-full">
                        {/* PC view: hiển thị grid */}
                        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-full">
                            <img
                                src="/images/img1.png"
                                alt="Ảnh 1"
                                className="col-span-2 rounded-lg object-cover w-full h-full shadow-lg"
                            />
                            <img
                                src="/images/img2.png"
                                alt="Ảnh 2"
                                className="justify-self-end rounded-lg object-cover w-11/12 h-full shadow-lg"
                            />
                            <img
                                src="/images/img3.png"
                                alt="Ảnh 3"
                                className="justify-self-end rounded-lg object-cover w-full h-full shadow-lg"
                            />
                        </div>

                        {/* Mobile view: chỉ hiển thị img1 */}
                        <div className="md:hidden flex justify-center">
                            <img
                                src="/images/img1.png"
                                alt="Ảnh minh họa"
                                className="rounded-lg object-cover w-full max-w-sm shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== MAP + INFO ========== */}
            <section className="w-full bg-white overflow-hidden">
                {/* Mobile: flex-col-reverse để map xuống dưới; Desktop: chia 2 cột */}
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:h-[700px]">
                    {/* LEFT SIDE: TEXT */}
                    <div className="flex flex-col justify-center p-6 md:p-12 order-2 md:order-1">
                        <div className="flex items-center justify-center w-[180px] h-8 bg-white rounded-full border border-white/20 gap-2 mb-4 shadow-md">
                            <img
                                src="/images/div.type-icon.png"
                                alt=""
                                className="w-5 h-5 object-contain"
                            />
                            <p className="text-[12px] font-medium text-[#0056A6] m-0">
                                Bản đồ quy hoạch chi tiết
                            </p>
                        </div>

                        <h2 className="text-4xl font-bold mb-8 text-[#222]">
                            Khu công nghiệp Kim Bảng IV
                        </h2>

                        <ul className="space-y-4 mb-12">
                            {infoList.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-[#2A56E6] text-xl leading-6">➜</span>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 flex-wrap">
                            <a
                                href="#"
                                className="px-7 py-3 rounded-full font-medium border border-[#2A56E6] text-[#2A56E6] hover:bg-[#2A56E6] hover:text-white transition"
                            >
                                Xem chi tiết
                            </a>
                            <a
                                href="#"
                                className="px-7 py-3 rounded-full font-medium bg-[#2A56E6] text-white hover:opacity-90 transition"
                            >
                                Đăng ký dự án
                            </a>
                        </div>

                    </div>

                    {/* RIGHT SIDE: MAP */}
                    <div className="w-full h-[400px] md:h-full order-1 md:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.718408065446!2d-73.86391138459234!3d40.71393947933145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8ebc7f0f57%3A0x9d62c7d45d7b5ea!2sForest%20Hills%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1694288280884!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>



            {/* ========== INFRASTRUCTURE ========== */}
            <section className="infrastructure py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-4 text-gray-900">Hạ tầng đẳng cấp</h2>
                    <p className="text-gray-600 text-base max-w-3xl mx-auto mb-16 leading-relaxed">
                        Hạ tầng đồng bộ, hiện đại, đáp ứng tiêu chuẩn quốc tế. Mang đến lợi thế vượt trội cho doanh nghiệp trong sản xuất, logistics và kết nối toàn cầu.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["electric", "water", "telecom"].map((type) => (
                            <div key={type} className="w-72 h-96 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                                <div>
                                    <img src={`/images/${type}.png`} alt={type} className="w-full h-40 object-cover rounded-lg" />
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
                                <a href="#" className="text-blue-600 font-medium mt-4 hover:text-blue-800 flex items-center justify-center">
                                    Chi tiết <span className="material-symbols-outlined ml-1 text-base">chevron_right</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TẠI SAO LỰA CHỌN CHÚNG TÔI ========== */}
            <section className="w-full bg-white flex justify-center overflow-hidden">
                <div className="relative w-full px-4 py-12 lg:py-20">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#222]">
                            Lý do lựa chọn chúng tôi
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Khám phá những giá trị nổi bật của khu công nghiệp
                        </p>
                    </div>

                    {/* MAIN GRID (1400 x 700 layout) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[685px_685px] gap-6 items-stretch justify-center mx-auto max-w-[1400px]">

                        {/* LEFT IMAGE (685 x 700) */}
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-[16px] overflow-hidden">
                            <img
                                src="/images/img1.png"
                                alt="Khu công nghiệp Kim Bảng IV"
                                className="w-full h-full object-cover"
                            />

                            {/* Tag góc trên bên trái */}
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                    <span className="bg-[#0056A6] text-xs text-white px-3 py-1 rounded-full">
                        FOR SALE
                    </span>
                                <span className="bg-[#77D1DE] text-xs text-white px-3 py-1 rounded-full">
                        FEATURED
                    </span>
                            </div>

                            {/* Nội dung góc dưới bên trái (nền trong suốt) */}
                            <div className="absolute bottom-6 left-6 text-white max-w-[90%]">
                                <h3 className="text-xl font-semibold mb-2">
                                    Khu công nghiệp Kim Bảng IV
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    Trên cao tốc Cầu Giẽ - Ninh Bình, gần Vành đai 5 Hà Nội
                                </p>
                                <div className="flex items-center gap-6 text-sm">
                                    <span>~295,21 ha</span>
                                    <span>~16.000–20.000 lao động</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="grid grid-rows-[334px_342px] grid-cols-2 gap-6">

                            {/* TOP RIGHT IMAGE */}
                            <div className="col-span-2 relative h-[334px] rounded-[16px] overflow-hidden">
                                <img
                                    src="/images/img2.png"
                                    alt="Khu công nghiệp hiện đại"
                                    className="w-full h-full object-cover"
                                />
                                {/* Nút chuyển ảnh */}
                                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/50 transition">
                        <span className="material-symbols-rounded text-white text-2xl">
                        chevron_left
                        </span>
                                </button>
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/50 transition">
                        <span className="material-symbols-rounded text-white text-2xl">
                        chevron_right
                        </span>
                                </button>
                            </div>

                            {/* BOTTOM LEFT IMAGE */}
                            <div className="h-[342px] rounded-[16px] overflow-hidden">
                                <img
                                    src="/images/img3.png"
                                    alt="Cơ sở hạ tầng"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* BOTTOM RIGHT TEXT CARD */}
                            <div className="bg-[#77D1DE] rounded-[16px] flex flex-col justify-between p-6 text-white h-[342px]">
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">
                                        Hệ thống cấp nước hiện đại
                                    </h4>
                                    <p className="text-sm text-white/90">
                                        Đảm bảo được nhu cầu cho sản xuất, sinh hoạt trong khu vực và các xí nghiệp.
                                    </p>
                                </div>
                                <button className="mt-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-blue-50 transition">
                        <span className="material-symbols-rounded text-2xl text-[#004aad]">
                        arrow_forward
                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* ========== TESTIMONIAL ========== */}
            <section className="w-full bg-[#2d5fa8] text-white py-24">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                    <div className="flex justify-center lg:flex-1">
                        <img src="/images/client.png" alt="Khách hàng" className="w-80 h-96 rounded-xl object-cover shadow-xl" />
                    </div>
                    <div className="flex flex-col justify-center lg:flex-[1.2] gap-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-5xl text-[#77d1de]">“</span>
                            <div>
                                <h3 className="text-lg font-semibold">DuyNguyen</h3>
                                <p className="text-sm text-[#b7d8ff]">Designer</p>
                            </div>
                        </div>
                        <p className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Môi trường kinh doanh chuyên nghiệp tạo niềm tin cho nhà đầu tư và đối tác, sự năng động
                            và đổi mới giúp doanh nghiệp dễ dàng thích ứng với thị trường, đây thực sự là lựa chọn tối
                            ưu để triển khai và hiện thực hóa chiến lược phát triển bền vững.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-3 mt-4">
                            <button className="w-9 h-9 rounded-full border border-white text-white hover:bg-[#77d1de] transition">{"<"}</button>
                            <button className="w-9 h-9 rounded-full border border-white text-white hover:bg-[#77d1de] transition">{">"}</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== NEWS ========== */}
            <section className="w-full bg-white py-20 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-3">Tin tức và sự kiện</h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                        Những cập nhật mới nhất về quy hoạch, thu hút đầu tư và chính sách ưu đãi. Nắm bắt xu hướng, đánh giá cơ hội & rủi ro trong thời gian thực.
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {[
                            { img: "/images/news1.png", date: "20/09/2025", category: "Đầu tư", title: "Ưu đãi vượt trội, thu hút doanh nghiệp phát triển bền vững" },
                            { img: "/images/news2.png", date: "20/09/2025", category: "Sự kiện", title: "Cơ hội hợp tác, chia sẻ và phát triển bền vững" },
                            { img: "/images/news3.png", date: "20/09/2025", category: "Phát triển", title: "Tiến độ phát triển hạ tầng mới, cập nhật nhanh chóng, hiện đại" },
                        ].map((n, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-opacity hover:opacity-90" />
                                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded px-3 py-1 shadow">
                                        <span className="text-xs text-gray-800">{n.date}</span>
                                        <div className="w-px h-4 bg-gray-400"></div>
                                        <span className="text-xs text-gray-800">{n.category}</span>
                                    </div>
                                </div>
                                <div className="p-4 text-left">
                                    <h3 className="text-md font-semibold mb-2">{n.title}</h3>
                                    <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
                                        Read more <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;
