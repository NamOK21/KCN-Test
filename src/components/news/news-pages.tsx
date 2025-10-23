"use client";
import React from "react";
import { FaFacebookF, FaHeart } from "react-icons/fa";

// Dữ liệu bài viết
const newsDetail = {
    category: "Tin tức KCN",
    title: "5 tỉnh thành có nhiều khu công nghiệp nhất Việt Nam",
    author: "Vũ Công Lập",
    date: "29/02/2024 08:33",
    image: "/images/factory-wide.jpg",
    content: [
        {
            subtitle: "Những con số đáng suy nghĩ",
            text: "Theo số liệu mới nhất của Bộ Kế hoạch Đầu tư, cả nước hiện có khoảng 563 khu công nghiệp nằm trong quy hoạch tại 61/63 tỉnh thành. Trong đó, 397 khu công nghiệp được thành lập; 292 khu công nghiệp đã đi vào hoạt động với tổng diện tích đất tự nhiên đạt khoảng hơn 87,100 ha, diện tích đất công nghiệp khoảng 56.000 ha. Số khu công nghiệp đang trong quá trình xây dựng với tổng diện tích đất tự nhiên khoảng 35.700 ha, diện tích đất công nghiệp khoảng 23.800 ha.",
        },
        {
            subtitle: "",
            text: "Các địa phương có nhiều khu công nghiệp nhất cả nước chủ yếu tập trung ở phía Nam Việt Nam.",
        },
    ],
    images: ["/images/factory-wide.jpg", "/images/factory2.jpg"],
    related: [
        { title: "Cơ hội đầu tư vào các khu công nghiệp tại Hà Nội", img: "/images/news1.jpg" },
        { title: "Phát triển bền vững - Xu hướng của KCN hiện đại", img: "/images/news2.jpg" },
        { title: "Khu công nghiệp thông minh tại TP.HCM", img: "/images/news3.jpg" },
        { title: "Hạ tầng giao thông kết nối thuận lợi", img: "/images/news4.jpg" },
        { title: "Chính sách ưu đãi đầu tư mới nhất", img: "/images/news5.jpg" },
    ],
};

// Dữ liệu comment mẫu
const comments = [
    {
        name: "Nguyễn Văn A",
        time: "2 giờ trước",
        content: "Bài viết rất hữu ích và chi tiết!",
        avatar: "/images/avatar1.jpg",
    },
    {
        name: "Trần Thị B",
        time: "5 giờ trước",
        content: "Cám ơn thông tin, rất chi tiết!",
        avatar: "/images/avatar2.jpg",
    },
];

const NewsDetailPage: React.FC = () => {
    return (
        <div className="font-roboto">
            {/* Hero Banner */}
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url('/images/img3.jpg')` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsDetail.title}</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <a href="/" className="hover:underline">Trang chủ</a>
                        <span>/</span>
                        <span>Tin tức sự kiện</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Side */}
                        <div className="lg:col-span-2">
                            <div className="text-blue-600 text-sm font-medium mb-2">{newsDetail.category}</div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{newsDetail.title}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
                                <span className="font-medium">{newsDetail.author}</span>
                                <span>•</span>
                                <span>{newsDetail.date}</span>
                            </div>

                            {/* Social Buttons */}
                            <div className="flex items-center gap-2 mb-6">
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                                    <FaFacebookF size={14} />
                                    <span>Thích 1,7k</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                                    Chia sẻ
                                </button>
                            </div>

                            {/* Summary */}
                            <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                                Các địa phương có nhiều khu công nghiệp nhất cả nước chủ yếu tập trung ở phía Nam Việt Nam.
                            </p>

                            {/* Main Image */}
                            <div className="mb-6">
                                <img src={newsDetail.image} alt={newsDetail.title} className="w-full h-auto rounded-lg object-cover" />
                            </div>

                            {/* Article Content */}
                            <div className="prose max-w-none">
                                {newsDetail.content.map((section, idx) => (
                                    <div key={idx} className="mb-6">
                                        {section.subtitle && (
                                            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.subtitle}</h2>
                                        )}
                                        <p className="text-gray-700 leading-relaxed">{section.text}</p>
                                    </div>
                                ))}

                                {newsDetail.images[1] && (
                                    <div className="my-6">
                                        <img src={newsDetail.images[1]} alt="Industrial zone" className="w-full h-auto rounded-lg object-cover" />
                                    </div>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
                                <span className="text-sm text-gray-600">Tags:</span>
                                <a href="#" className="text-sm text-blue-600 hover:underline">khu công nghiệp</a>
                                <a href="#" className="text-sm text-blue-600 hover:underline">đầu tư</a>
                                <a href="#" className="text-sm text-blue-600 hover:underline">bất động sản</a>
                            </div>

                            {/* Comments Section */}
                            <div className="mt-8 pt-8 border-t">
                                <h3
                                    className="text-xl mb-6"
                                    style={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }}
                                >
                                    Bình luận ({comments.length})
                                </h3>

                                {/* Comment Form */}
                                <div className="mb-6">
                                    <textarea
                                        className="w-[730px] h-[55px] p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Viết bình luận của bạn..."
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                // Gửi comment
                                                console.log("Gửi bình luận:", (e.target as HTMLTextAreaElement).value);
                                                (e.target as HTMLTextAreaElement).value = "";
                                            }
                                        }}
                                    ></textarea>
                                </div>

                                {/* Comments List */}
                                <div className="space-y-4">
                                    {comments.map((comment, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                                            <div className="flex-shrink-0">
                                                <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-gray-800">{comment.name}</span>
                                                    <span className="text-xs text-gray-500">{comment.time}</span>
                                                </div>
                                                <p className="mt-1 text-gray-700 text-sm">{comment.content}</p>
                                                <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                                                    <button className="hover:text-blue-600 flex items-center gap-1">
                                                        <FaHeart size={12} /> Thích
                                                    </button>
                                                    <button className="hover:text-blue-600">Trả lời</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg p-6 sticky top-4">
                                <h3 className="text-lg font-bold mb-4 pb-3 border-b">Bài viết liên quan</h3>
                                <div className="space-y-4">
                                    {newsDetail.related.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="flex gap-3 group hover:bg-gray-50 p-2 rounded-lg transition"
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-24 h-16 rounded object-cover flex-shrink-0"
                                            />
                                            <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 leading-tight line-clamp-3">
                                                {item.title}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
