import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            {/* Lưới bố cục chính */}
            <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Logo + Mạng xã hội */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center mb-4 transition-transform duration-500 hover:scale-105"
                    >
                        <img
                            src="/icons/logo/logo-white.svg"
                            alt="Logo HiTar"
                            className="h-10 md:h-12 object-contain"
                        />
                    </Link>
                    <p className="mb-2 text-sm font-medium">Follow Us</p>
                    <div className="flex gap-3 mt-2">
                        {["instagram", "twitter", "facebook", "youtube"].map((icon) => (
                            <a key={icon} href="#" aria-label={icon}>
                                <img
                                    src={`/icons/custom/${icon}.svg`}
                                    alt={icon}
                                    width={30}
                                    height={30}
                                    className="hover:scale-110 transition-transform duration-200"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Danh mục */}
                <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">Danh mục</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
                        <li><a href="#" className="hover:text-white transition">Tin tức & Sự kiện</a></li>
                        <li><a href="#" className="hover:text-white transition">Pháp lý & Chính sách</a></li>
                        <li><a href="#" className="hover:text-white transition">Dự án</a></li>
                    </ul>
                </div>

                {/* Liên hệ */}
                <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">Liên hệ</h4>
                    <p className="text-sm">Công ty TNHH Hai Pha Việt Nam</p>
                    <p className="text-sm">
                        Email:{" "}
                        <a href="mailto:welcome@HiTar.com.vn" className="hover:text-white underline">
                            welcome@HiTar.com.vn
                        </a>
                    </p>
                    <p className="text-sm">Điện thoại: (+84) 944 969 622</p>
                </div>

                {/* Địa chỉ */}
                <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">Địa chỉ</h4>
                    <p className="text-sm">Khu Công Nghiệp Châu Sơn, phường Châu Sơn</p>
                    <p className="text-sm">tỉnh Ninh Bình, Việt Nam</p>
                </div>
            </div>

            {/* Dòng bản quyền */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
                Copyright © 2025. HiFar
            </div>
        </footer>
    );
};

export default Footer;
