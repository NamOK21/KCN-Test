// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo + Social */}
                <div>
                    <img src="/images/logo-white.png" alt="HiTar logo" className="w-24 mb-4" />
                    <p className="mb-2">Follow Us</p>
                    <div className="flex gap-4 mt-2">
                        <a href="#">
                            <img
                                src="/icons/custom/instagram.svg"
                                alt="Instagram"
                                style={{ width: "30.88px", height: "30.88px" }}
                                className="hover:scale-110 transition"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/icons/custom/twitter.svg"
                                alt="Twitter"
                                style={{ width: "30.88px", height: "30.88px" }}
                                className="hover:scale-110 transition"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/icons/custom/facebook.svg"
                                alt="Facebook"
                                style={{ width: "30.88px", height: "30.88px" }}
                                className="hover:scale-110 transition"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/icons/custom/youtube.svg"
                                alt="YouTube"
                                style={{ width: "30.88px", height: "30.88px" }}
                                className="hover:scale-110 transition"
                            />
                        </a>
                    </div>
                </div>

                {/* Danh mục */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Danh mục</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
                        <li><a href="#" className="hover:text-white transition">Tin tức sự kiện</a></li>
                        <li><a href="#" className="hover:text-white transition">Pháp lý & Chính sách</a></li>
                        <li><a href="#" className="hover:text-white transition">Dự án</a></li>
                    </ul>
                </div>

                {/* Liên hệ */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Liên hệ</h4>
                    <p>Công ty TNHH KSCO Việt Nam</p>
                    <p>Email: <a href="mailto:welcome@HiTar.com.vn" className="hover:text-white">welcome@HiTar.com.vn</a></p>
                    <p>Điện thoại: (+84) 944969622</p>
                </div>

                {/* Địa chỉ */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Địa chỉ</h4>
                    <p>Số 7, ngõ 96 đường Lê Công Thanh, phường Phù Ly,</p>
                    <p>thành phố Ninh Bình</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                Copyright © 2025. HiTar
            </div>
        </footer>
    );
};

export default Footer;
