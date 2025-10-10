import React from "react";
import Hero from "@/components/public/hero";

const PhapLy: React.FC = () => {
    const features = [
        { img: "phaply1.png", title: "Giấy tờ pháp lý đầy đủ và minh bạch", desc: "Có sổ đỏ hợp pháp, quy hoạch chi tiết 1/500, giấy phép xây dựng đầy đủ. Đảm bảo khu công nghiệp được cấp phép hoạt động theo quy định." },
        { img: "phaply2.png", title: "Hỗ trợ pháp lý cho khách thuê", desc: "Chủ đầu tư hỗ trợ thủ tục đầu tư, cấp phép xây dựng, pháp lý doanh nghiệp. Có cơ chế giải quyết tranh chấp và cam kết bảo vệ quyền lợi khách thuê." },
        { img: "phaply3.png", title: "Hợp đồng thuê đất rõ ràng, chặt chẽ", desc: "Hợp đồng minh bạch về thời hạn, quyền và nghĩa vụ của các bên.\n" + "Quy định rõ quyền sử dụng, xây dựng và chuyển nhượng tài sản" },
        { img: "phaply4.png", title: "Tuân thủ pháp luật hiện hành", desc: "Khu công nghiệp tuân thủ Luật Đất đai, Đầu tư, Xây dựng, Môi trường.\n" + "Có đầy đủ ĐTM, giấy phép xả thải và hồ sơ pháp lý liên quan." },
    ];

    const policies = [
        {
            id: "01",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "02",
            title: "Giấy chứng nhận đăng ký đầu tư",
            type: "Quyết định",
        },
        {
            id: "03",
            title: "Quyết định chấp thuận chủ trương đầu tư",
            type: "Bộ Công an",
        },
        {
            id: "04",
            title: "Báo cáo đánh giá tác động môi trường (ĐTM)",
            type: "Quyết định",
        },
        {
            id: "05",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "06",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "07",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "08",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "09",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
        {
            id: "10",
            title:
                "Thủ tục chấp thuận chủ trương đầu tư của Ban Quản lý quy định tại khoản 7 Điều 33 Nghị định số 31/2021/NĐ-CP",
            type: "Quyết định",
        },
    ];

    return (
        <>
            {/* Hero */}
            <Hero
                title="Pháp lý và Chính sách ưu đãi"
                homepage="Trang chủ"
                currentPage="Pháp lý và Chính sách ưu đãi"
                bgImage="/images/img2.png"
            />

            {/* Features */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-2">Pháp lý dự án</h2>
                    <p className="text-gray-600 mb-10">Đảm bảo tính minh bạch, an toàn và bền vững trong quá trình khai thác và vận hành</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="bg-white rounded-lg flex flex-col items-center justify-center p-6 w-[253.5px] h-[295.17px] mx-auto"
                            >
                                <img
                                    src={`/images/${f.img}`}
                                    alt={f.title}
                                    className="w-16 h-16 mb-4 object-contain"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-center">{f.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 px-4 md:px-10">
                <div className="max-w-6xl mx-auto">
                    {/* Tiêu đề */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#222] mb-2">
                        Chính sách ưu đãi
                    </h2>
                    <p className="text-center text-gray-600 text-sm md:text-base mb-10">
                        Đảm bảo tính minh bạch, an toàn và bền vững trong quá trình khai thác
                        và vận hành
                    </p>

                    {/* Danh sách */}
                    <div className="space-y-3">
                        {policies.map((p) => (
                            <div
                                key={p.id}
                                className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg py-4 px-5 hover:bg-gray-50 transition duration-200"
                            >
                                {/* Bên trái */}
                                <div className="flex items-start gap-4 mb-3 md:mb-0">
                                    <div className="w-[46px] h-[46px] flex items-center justify-center bg-[rgba(0,86,166,0.1)] text-[rgba(0,86,166,1)] font-semibold rounded-full text-lg">
                                        {p.id}
                                    </div>
                                    <div className="max-w-[587px] max-h-[79px] overflow-hidden">
                                        <h3 className="text-[16px] md:text-[16px] sm:text-[14px] font-medium leading-[30.4px] sm:leading-[24px] text-gray-800">
                                            {p.title}
                                        </h3>
                                        <p className="text-[12px] sm:text-[11px] font-normal leading-[150%]text-gray-500 mt-[4px] truncate">
                                            {p.type}
                                        </p>
                                    </div>

                                </div>

                                {/* Bên phải: nút */}
                                <div className="flex gap-3 justify-end">
                                    <button className="border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
                                        Xem tài liệu 👁
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded-md text-sm text-[#3b2379] font-medium"
                                        style={{
                                            backgroundColor: "rgba(16, 8, 33, 0.1)",
                                        }}
                                    >
                                        ⬇ Tải tài liệu
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PhapLy;
