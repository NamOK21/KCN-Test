import React from "react";
import { FileText, ClipboardList, FileCheck } from "lucide-react";

const PolicyTab = () => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Chính sách & Ưu đãi</h2>
        {/* Ưu đãi */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
                {
                    icon: <FileText className="text-blue-600 w-8 h-8 mb-3" />,
                    title: "Ưu đãi thuế TNDN",
                    text: "Miễn 4 năm, giảm 50% trong 9 năm tiếp theo cho dự án công nghệ cao.",
                },
                {
                    icon: <ClipboardList className="text-blue-600 w-8 h-8 mb-3" />,
                    title: "Ưu đãi tiền thuê đất",
                    text: "Miễn tiền thuê đất trong thời gian xây dựng và 15 năm tiếp theo.",
                },
                {
                    icon: <FileCheck className="text-blue-600 w-8 h-8 mb-3" />,
                    title: "Miễn thuế nhập khẩu",
                    text: "Áp dụng cho máy móc, thiết bị, vật tư tạo tài sản cố định.",
                },
            ].map((item, i) => (
                <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all"
                >
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
            ))}
        </div>

        {/* Quy trình đăng ký */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quy trình đăng ký</h2>
        <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, i) => {
                const steps = [
                    "Tiếp nhận hồ sơ",
                    "Thẩm định",
                    "Ký thỏa thuận",
                    "Ký hợp đồng",
                ];
                const desc = [
                    "Xem xét và xác nhận hồ sơ đăng ký đầu tư.",
                    "Đánh giá năng lực, quy mô, ngành nghề đăng ký.",
                    "Ký biên bản nguyên tắc thuê đất & đầu tư.",
                    "Ký hợp đồng chính thức và bàn giao mặt bằng.",
                ];
                return (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all"
                    >
                        <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                            {num}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{steps[i]}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{desc[i]}</p>
                    </div>
                );
            })}
        </div>
    </div>
);

export default PolicyTab;
