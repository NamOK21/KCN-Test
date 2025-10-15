"use client";

import React from "react";

// Dữ liệu Ưu đãi
const incentives = [
    { icon: "/icons/custom/uudaithue.svg", title: "Ưu đãi thuế TNDN", text: "Miễn 4 năm, giảm 50% trong 9 năm tiếp theo cho dự án công nghệ cao." },
    { icon: "/icons/custom/thue-dat.svg", title: "Ưu đãi tiền thuê đất", text: "Miễn tiền thuê đất trong thời gian xây dựng và 15 năm tiếp theo." },
    { icon: "/icons/custom/nhapkhau.svg", title: "Miễn thuế nhập khẩu", text: "Áp dụng cho máy móc, thiết bị, vật tư tạo tài sản cố định." },
];

// Dữ liệu Quy trình đăng ký
const registrationSteps = [
    { step: "Tiếp nhận hồ sơ", desc: "Xem xét và xác nhận hồ sơ đăng ký đầu tư." },
    { step: "Thẩm định", desc: "Đánh giá năng lực, quy mô, ngành nghề đăng ký." },
    { step: "Ký thỏa thuận", desc: "Ký biên bản nguyên tắc thuê đất & đầu tư." },
    { step: "Ký hợp đồng", desc: "Ký hợp đồng chính thức và bàn giao mặt bằng." },
];

// Card component cho Chính sách & Ưu đãi
const IncentiveCard: React.FC<{ icon?: string; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="text-center p-4" style={{ width: "240px" }}>
        {icon && <div className="flex justify-center mb-3"><img src={icon} alt={title} className="w-8 h-8" /></div>}
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
);

// Card component cho Quy trình đăng ký
const StepCard: React.FC<{ number: number; step: string; desc: string }> = ({ number, step, desc }) => (
    <div className="text-center p-4" style={{ width: "240px" }}>
        <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#77D1DE] text-white font-bold">
            {number}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{step}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

const PolicyTab: React.FC = () => (
    <div className="flex flex-col items-center">
        {/* Chính sách & Ưu đãi */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Chính sách & Ưu đãi</h2>
        <div className="flex justify-center gap-10 mb-10">
            {incentives.map((item, i) => (
                <IncentiveCard key={i} icon={item.icon} title={item.title} text={item.text} />
            ))}
        </div>

        {/* Quy trình đăng ký */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quy trình đăng ký</h2>
        <div className="flex justify-center gap-10">
            {registrationSteps.map((item, i) => (
                <StepCard key={i} number={i + 1} step={item.step} desc={item.desc} />
            ))}
        </div>
    </div>
);

export default PolicyTab;
