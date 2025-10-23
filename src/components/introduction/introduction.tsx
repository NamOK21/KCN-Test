import React from "react";
import Hero from "@/components/public/hero";
import ProjectCard from "@/components/introduction/project-intro";

const projects = [
    {
        image: "/images/kim-bang.jpg",
        title: "KCN Kim Bảng IV",
        area: "295 ha",
        lots: "120",
        location: "Phường Duy Tiên – Ninh Bình",
        description: [
            "KCN Kim Bảng IV nằm trên trục cao tốc Cầu Giẽ – Ninh Bình, kết nối nhanh Hà Nội và các trung tâm công nghiệp – logistics miền Bắc, tạo lợi thế “tọa độ vàng” cho doanh nghiệp.",
            "Quy mô toàn khu khoảng 295,21 ha (Giai đoạn I ~183,94 ha), hạ tầng giao thông ô bàn cờ, hệ thống xử lý nước thải tập trung, mảng xanh và hồ điều hòa đảm bảo vận hành bền vững.",
        ],
        tags: [
            "Ưu đãi thuế TNCN (2+4)",
            "Cấp giấy chứng nhận trong 5 ngày",
            "Miễn thuế đất giai đoạn xây dựng",
        ],
    },
    {
        image: "/images/thanh-niem-4.jpg",
        title: "KCN Thanh Niêm 4",
        area: "210 ha",
        lots: "85",
        location: "Thành phố Nam Định",
        description: [
            "KCN Thanh Niêm 4 nằm tại trung tâm vùng kinh tế Nam Đồng bằng, sở hữu vị trí chiến lược gần Quốc lộ 10 và cao tốc Ninh Bình – Hải Phòng.",
            "Hạ tầng đồng bộ, quy hoạch hiện đại với khu logistic, trạm xử lý nước thải, hệ thống năng lượng sạch và mạng lưới giao thông nội khu 4–6 làn, phù hợp cho các ngành công nghiệp nhẹ, điện tử, cơ khí chính xác.",
        ],
        tags: [
            "Miễn thuế TNDN 4 năm đầu",
            "Giảm 50% trong 9 năm tiếp theo",
            "Hỗ trợ thủ tục đầu tư nhanh chóng",
        ],
    }
];

const Introduction: React.FC = () => {
    return (
        <>
            <Hero
                title="Dự án tiêu biểu"
                homepage="Trang chủ"
                currentPage="Dự án tiêu biểu"
                bgImage="/images/thanhliem6.jpg"
            />

            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex flex-col items-center gap-12 w-full max-w-[1110px]">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Introduction;
