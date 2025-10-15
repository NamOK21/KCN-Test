import React from "react";

const TechnicalTab = () => (
    <div className="max-w-[1110px] mx-auto">
        <h2 className="text-[42px] font-bold text-gray-900 mb-8">Thông số kỹ thuật</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {/* Chỉ tiêu quy hoạch */}
            <div className="bg-white rounded-xl shadow-[6px_6px_54px_0px_#0000000D] p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                    Chỉ tiêu quy hoạch
                </h3>
                <div className="divide-y">
                    {[
                        { label: "Mật độ xây dựng tối đa", value: "60%" },
                        { label: "Tầng cao tối đa", value: "5 tầng" },
                        { label: "Khoảng lùi công trình", value: "Tối thiểu 6m so với chỉ giới đường đỏ" },
                        { label: "Ngành nghề được phép", value: "Điện tử, công nghệ cao, cơ khí chính xác, hàng tiêu dùng, logistics…" },
                        { label: "Ngành nghề hạn chế", value: "Xi mạ, dệt nhuộm, sản xuất hóa chất độc hại" },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between py-3 text-sm text-gray-800">
                            <span className="font-medium max-w-[587px]">{row.label}</span>
                            <span>{row.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hạ tầng kỹ thuật */}
            <div className="bg-white rounded-xl shadow-[6px_6px_54px_0px_#0000000D] p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                    Hạ tầng kỹ thuật
                </h3>
                <div className="divide-y">
                    {[
                        { label: "Hệ thống điện", value: "Công suất 2x63 MVA, đường dây 110/22KV" },
                        { label: "Hệ thống nước", value: "15.000 m³/ngày đêm" },
                        { label: "Xử lý nước thải", value: "Công suất 10.000 m³/ngày đêm, đạt chuẩn QCVN 40:2011/BTNMT" },
                        { label: "Viễn thông", value: "Hệ thống cáp quang ngầm, đa nhà mạng (VNPT, Viettel, FPT)" },
                        { label: "Phòng cháy chữa cháy", value: "Hệ thống họng nước chữa cháy dọc các tuyến đường nội bộ" },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between py-3 text-sm text-gray-800">
                            <span className="font-medium max-w-[587px]">{row.label}</span>
                            <span>{row.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default TechnicalTab;
