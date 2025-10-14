import React from "react";

const OverviewTab = () => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tổng quan</h2>
        <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-sm">
            {[
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
                    title: "Hạ tầng đồng bộ",
                    desc: "Quy hoạch 6 bản cốt; điện–nước–viễn thông theo chuẩn quốc gia; trạm XLNT tập trung, khu cây xanh & hồ điều hòa.",
                },
                {
                    title: "Tiến độ & vốn hạ tầng",
                    desc: "Hoàn thành trong 36 tháng kể từ khi bàn giao đất; tổng vốn hạ tầng ~2.465 tỷ đồng.",
                },
            ].map((item, idx) => (
                <div key={idx}>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

export default OverviewTab;
