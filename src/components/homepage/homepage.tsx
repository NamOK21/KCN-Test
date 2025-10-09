import React from "react";

const Homepage: React.FC = () => {
    const searchTags = [
        { img: "chungcu.png", label: "Chung cư" },
        { img: "khucongnghiep.png", label: "Khu công nghiệp" },
        { img: "toanha.png", label: "Toà nhà" },
    ];

    const projects = [
        { img: "KB4.png", name: "KCN Kim Bảng IV", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm" },
        { img: "KB.png", name: "KCN Kim Bình", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm" },
        { img: "TN4.png", name: "KCN Thanh niêm 4", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm" },
        { img: "TN5.png", name: "KCN Thanh niêm 5", area: "~295,21 ha", cost: "2.465 tỷ đồng", duration: "50 năm" },
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
        {
            title: "Vị trí & liên kết vùng",
            text: "Tiện cao tốc Cầu Giẽ – Ninh Bình, Vành đai 5 Hà Nội: 15 km Phủ Lý, 30 km Nam Định, 40 km Ninh Bình, ~50 km Hà Nội/ Nội Bài.",
        },
        {
            title: "Quy mô & thời hạn",
            text: "~295,2 ha toàn khu; GĐ I ~183,9 ha; thời hạn hoạt động 50 năm.",
        },
        {
            title: "Hạ tầng đồng bộ",
            text: "Điện – nước – viễn thông theo chuẩn quốc gia, trạm XLNT tập trung, khu cây xanh & bãi đỗ xe nội khu.",
        },
        {
            title: "Nguồn nhân lực",
            text: "Kết nối hơn 600.000 lao động, thuận lợi tuyển dụng và đào tạo.",
        },
        {
            title: "Tiến độ & vốn hạ tầng",
            text: "Hoàn thành trong 36 tháng kể từ khi bàn giao đất, tổng vốn hạ tầng ~2.465 tỷ đồng.",
        },
    ];


    return (
        <>
            {/* Hero */}
            <section className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="relative z-10 pt-[138px] flex flex-col items-center justify-center text-center px-4 py-20">
                    <button className="mb-5 px-4 py-2 rounded-full bg-blue-800 text-white text-xs font-medium">
                        Dự án tiêu biểu
                    </button>
                    <h1 className="text-white font-bold text-5xl pt-10 md:text-6xl mb-5 max-w-[780px] leading-tight">
                        Khám phá cơ hội đầu tư tại khu công nghiệp
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
                        Nơi chiến lược kinh doanh của bạn gặp gỡ cơ sở hạ tầng hiện đại và tiềm năng tăng trưởng vượt trội.
                    </p>

                    {/* Search */}
                    <div className="w-full max-w-3xl flex flex-col items-center">
                        <div className="flex w-full bg-white rounded-full shadow-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Hãy nhập từ khóa bạn quan tâm.."
                                className="flex-1 px-5 py-3 text-gray-700 outline-none text-base"
                            />
                            <button
                                className="w-12 h-12 flex items-center justify-center rounded-full m-1"
                                style={{ background: 'rgba(0,86,166,1)' }}
                            >
                                <img src="/images/search.png" alt="Search" className="w-4 h-4 brightness-0 invert" />
                            </button>
                        </div>
                        <p className="text-white mt-3 text-sm">Bạn đang tìm kiếm điều gì?</p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {searchTags.map((tag) => (
                                <div
                                    key={tag.label}
                                    className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full pl-1 pr-5 py-1 cursor-pointer hover:bg-white/40 transition-all"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <img
                                            src={`/images/${tag.img}`}
                                            alt={tag.label}
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    <span className="text-white font-medium text-sm">{tag.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* projects */}
            <section className="py-16 bg-white">
                {/* Tiêu đề */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">Dự án tiêu biểu</h2>
                    <p className="text-gray-500 text-md">
                        Dự án tiêu biểu thể hiện năng lực, uy tín và dấu ấn của doanh nghiệp trong từng lĩnh vực hoạt động.
                    </p>
                </div>

                {/* Grid dự án */}
                <div className="max-w-[1110px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    {projects.map((p) => (
                        <a
                            key={p.name}
                            className="relative w-[256px] h-[319px] rounded-[16px] overflow-hidden group shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
                        >
                            {/* Background ảnh */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                                style={{ backgroundImage: `url(/images/${p.img})` }}
                            ></div>

                            {/* Overlay đen mờ */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

                            {/* Nội dung trên góc trái */}
                            <div className="relative z-10 p-5 flex flex-col justify-start items-start h-full text-white">
                                <h3 className="text-lg font-bold mb-1 group-hover:text-[#77d1de] transition-colors">{p.name}</h3>
                                <p className="text-sm">{p.area}</p>
                                <p className="text-sm">{p.cost}</p>
                                <p className="text-sm">{p.duration}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>



            {/* Features */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-2">Lý do lựa chọn chúng tôi</h2>
                    <p className="text-gray-600 mb-10">Khám phá những giá trị nổi bật của khu công nghiệp</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="bg-white p-6 rounded-lg flex flex-col items-center">
                                <img src={`/images/${f.img}`} alt={f.title} className="w-16 h-16 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                    {/* Left */}
                    <div className="flex-1 max-w-lg text-center lg:text-left">
                        <h2 className="text-4xl font-bold mb-4">Tại sao chọn<br />khu công nghiệp của chúng tôi?</h2>
                        <p className="text-gray-600 mb-8">Chúng tôi cam kết mang đến môi trường kinh doanh tối ưu và năng động cho các nhà đầu tư.</p>
                        <div className="flex flex-col gap-6 mb-8">
                            {whyChoose.map((w) => (
                                <div key={w.title} className="flex items-start gap-4">
                                    <img src={`/images/${w.img}`} alt={w.title} className="w-8 h-8" />
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">{w.title}</h3>
                                        <p className="text-gray-600 text-sm">{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-900 transition">
                            Khám phá
                            <span className="material-symbols-rounded text-lg">arrow_forward</span>
                        </a>
                    </div>

                    {/* Right Images */}
                    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 w-full">
                        <img src="/images/img1.png" alt="Ảnh 1" className="col-span-2 rounded-lg object-cover w-full h-full shadow-lg" />
                        <img src="/images/img2.png" alt="Ảnh 2" className="justify-self-end rounded-lg object-cover w-11/12 h-full shadow-lg" />
                        <img src="/images/img3.png" alt="Ảnh 3" className="justify-self-end rounded-lg object-cover w-full h-full shadow-lg" />
                    </div>
                </div>
            </section>

            <section className="w-full bg-white overflow-hidden">
                <div className="grid md:grid-cols-2 h-[700px] md:h-[700px]">
                    {/* LEFT: Google Map */}
                    <div className="w-full h-[400px] md:h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.718408065446!2d-73.86391138459234!3d40.71393947933145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8ebc7f0f57%3A0x9d62c7d45d7b5ea!2sForest%20Hills%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1694288280884!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* RIGHT: Info */}
                    <div className="flex flex-col justify-center p-6 md:p-12">
                        <div className="flex items-center justify-center w-[180px] h-8 bg-white rounded-full border border-white/20 gap-2 mb-4 shadow-md">
                            <img src="/images/div.type-icon.png" alt="" className="w-5 h-5 object-contain" />
                            <p className="text-[12px] font-medium text-[#0056A6] m-0">Bản đồ quy hoạch chi tiết</p>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-[#222]">
                            Khu công nghiệp <br />Kim Bảng IV
                        </h2>

                        <ul className="space-y-4 mb-6 md:mb-12 text-sm md:text-base">
                            {infoList.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 md:gap-3">
                                    <span className="text-[#2A56E6] text-lg md:text-xl leading-5 md:leading-6">➜</span>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-gray-600 leading-5 md:leading-6">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-2 md:gap-4 flex-wrap">
                            <a
                                href="#"
                                className="px-5 py-2 md:px-7 md:py-3 rounded-md font-medium border border-[#2A56E6] text-[#2A56E6] hover:bg-[#2A56E6] hover:text-white transition"
                            >
                                Xem chi tiết
                            </a>
                            <a
                                href="#"
                                className="px-5 py-2 md:px-7 md:py-3 rounded-md font-medium bg-[#2A56E6] text-white hover:opacity-90 transition"
                            >
                                Đăng ký dự án
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INFRASTRUCTURE ================= */}
            <section className="infrastructure py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Hạ tầng đẳng cấp</h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
                        Hạ tầng đồng bộ, hiện đại, đáp ứng tiêu chuẩn quốc tế.
                        Mang đến lợi thế vượt trội cho doanh nghiệp trong sản xuất, logistics và kết nối toàn cầu.
                    </p>

                    <div className="infra-grid flex flex-wrap justify-center gap-6">
                        {/* Card 1 */}
                        <div className="infra-card flex flex-col justify-between w-72 h-96 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                            <div>
                                <img src="/images/electric.png" alt="Điện" className="w-full h-40 object-cover rounded-lg" />
                                <span className="inline-block bg-[#77d1de] text-white mt-2 px-3 py-1 rounded-full text-xs font-medium">Điện</span>
                                <h3 className="text-base font-medium mt-2 text-gray-900">Hệ thống điện ổn định</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Đảm bảo nguồn điện liên tục, an toàn và đáp ứng nhu cầu sản xuất – kinh doanh.
                                </p>
                            </div>
                            <a href="#" className="text-blue-600 font-medium mt-4 hover:text-blue-800 flex items-center justify-center">
                                Chi tiết <span className="material-symbols-outlined ml-1 text-base">chevron_right</span>
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="infra-card flex flex-col justify-between w-72 h-96 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                            <div>
                                <img src="/images/water.png" alt="Nước" className="w-full h-40 object-cover rounded-lg" />
                                <span className="inline-block bg-[#77d1de] text-white mt-2 px-3 py-1 rounded-full text-xs font-medium">Nước</span>
                                <h3 className="text-base font-medium mt-2 text-gray-900">Hệ thống cấp nước hiện đại</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Cung cấp nước sạch đạt chuẩn, vận hành thông minh và tiết kiệm.
                                </p>
                            </div>
                            <a href="#" className="text-blue-600 font-medium mt-4 hover:text-blue-800 flex items-center justify-center">
                                Chi tiết <span className="material-symbols-outlined ml-1 text-base">chevron_right</span>
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="infra-card flex flex-col justify-between w-72 h-96 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                            <div>
                                <img src="/images/telecom.png" alt="Viễn thông" className="w-full h-40 object-cover rounded-lg" />
                                <span className="inline-block bg-[#77d1de] text-white mt-2 px-3 py-1 rounded-full text-xs font-medium">Viễn thông</span>
                                <h3 className="text-base font-medium mt-2 text-gray-900">Hạ tầng viễn thông tiên tiến</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Mạng lưới kết nối tốc độ cao, ổn định, hỗ trợ toàn diện cho công nghệ và dịch vụ số.
                                </p>
                            </div>
                            <a href="#" className="text-blue-600 font-medium mt-4 hover:text-blue-800 flex items-center justify-center">
                                Chi tiết <span className="material-symbols-outlined ml-1 text-base">chevron_right</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="w-full bg-[#f9fbfd] py-24">
                <div className="container mx-auto px-4 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-3">
                        Lý do lựa chọn chúng tôi
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-16">
                        Khám phá những giá trị nổi bật của khu công nghiệp
                    </p>


                <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
                        {/* Left card */}
                        <div className="relative w-full rounded-xl overflow-hidden shadow-xl h-96 md:h-[700px]">
                            <img
                                src="/images/kim-bang.png"
                                alt="Khu công nghiệp Kim Bảng IV"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <div className="flex justify-center md:justify-start gap-2 mb-2">
                                    <span className="bg-[#3879f9] text-xs px-2 py-1 rounded-full">FOR SALE</span>
                                    <span className="bg-[#77d1de] text-xs px-2 py-1 rounded-full">FEATURED</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-1">Khu công nghiệp Kim Bảng IV</h3>
                                <p className="text-sm mb-2">
                                    Trên cao tốc Cầu Giẽ – Ninh Bình, gần Vành đai 5 Hà Nội
                                </p>
                                <div className="flex gap-3 text-sm">
                                    <span>~295,21 ha</span>
                                    <span>~16.000–20.000 lao động</span>
                                </div>
                            </div>
                        </div>

                        {/* Right grid */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-64 md:h-[350px] rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src="/images/factory-wide.png"
                                    alt="Ảnh nhà xưởng"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="w-full h-64 md:h-[350px] rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/factory-square.png"
                                        alt="Ảnh khu công nghiệp nhỏ"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-[#77d1de] text-white rounded-xl flex flex-col justify-center items-center p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-2">Hệ thống cấp nước hiện đại</h3>
                                    <p className="text-sm mb-4">
                                        Cung cấp nước sạch đạt chuẩn, vận hành thông minh và tiết kiệm.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-white text-2xl font-bold hover:translate-x-1 transition-transform"
                                    >
                                        →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="w-full bg-[#2d5fa8] text-white py-24">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                    {/* Ảnh bên trái */}
                    <div className="flex justify-center lg:flex-1">
                        <img
                            src="/images/client.png"
                            alt="Khách hàng"
                            className="w-80 h-96 rounded-xl object-cover shadow-xl"
                        />
                    </div>

                    {/* Nội dung bên phải */}
                    <div className="flex flex-col justify-center lg:flex-[1.2] gap-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-5xl text-[#77d1de]">“</span>
                            <div>
                                <h3 className="text-lg font-semibold">DuyNguyen</h3>
                                <p className="text-sm text-[#b7d8ff]">Designer</p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
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

            {/* News */}
            <section className="w-full bg-white py-20 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-3">Tin tức và sự kiện</h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                        Những cập nhật mới nhất về quy hoạch, thu hút đầu tư và chính sách ưu đãi.
                        Nắm bắt xu hướng, đánh giá cơ hội & rủi ro trong thời gian thực.
                    </p>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden">
                                <img src="/images/news1.png" alt="Ưu đãi vượt trội" className="w-full h-full object-cover transition-opacity hover:opacity-90"/>
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded px-3 py-1 shadow">
                                    <span className="text-xs text-gray-800">20/09/2025</span>
                                    <div className="w-px h-4 bg-gray-400"></div>
                                    <span className="text-xs text-gray-800">Đầu tư</span>
                                </div>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-md font-semibold mb-2">Ưu đãi vượt trội, thu hút doanh nghiệp phát triển bền vững</h3>
                                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
                                    Read more <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden">
                                <img src="/images/news2.png" alt="Cơ hội hợp tác" className="w-full h-full object-cover transition-opacity hover:opacity-90"/>
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded px-3 py-1 shadow">
                                    <span className="text-xs text-gray-800">20/09/2025</span>
                                    <div className="w-px h-4 bg-gray-400"></div>
                                    <span className="text-xs text-gray-800">Sự kiện</span>
                                </div>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-md font-semibold mb-2">Cơ hội hợp tác, chia sẻ và phát triển bền vững</h3>
                                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
                                    Read more <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden">
                                <img src="/images/news3.png" alt="Tiến độ phát triển" className="w-full h-full object-cover transition-opacity hover:opacity-90"/>
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded px-3 py-1 shadow">
                                    <span className="text-xs text-gray-800">20/09/2025</span>
                                    <div className="w-px h-4 bg-gray-400"></div>
                                    <span className="text-xs text-gray-800">Phát triển</span>
                                </div>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-md font-semibold mb-2">Tiến độ phát triển hạ tầng mới, cập nhật nhanh chóng, hiện đại</h3>
                                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
                                    Read more <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;
