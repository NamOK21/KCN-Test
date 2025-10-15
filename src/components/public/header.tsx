"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface MenuItem {
    label: string;
    link?: string;
    subItems?: { label: string; link: string }[];
}

interface HeaderProps {
    variant?: "dark" | "light";
}

const menuItems: MenuItem[] = [
    { label: "Giới thiệu", link: "/gioi-thieu" },
    { label: "Tin tức sự kiện", link: "/tin-tuc" },
    { label: "Pháp lý & Chính sách", link: "/phap-ly" },
    {
        label: "Dự án",
        subItems: [
            { label: "KCN Kim Bảng IV", link: "/projects/kim-bang-iv" },
            { label: "KCN Kim Bình", link: "/projects/kim-binh" },
            { label: "KCN Thanh Niêm 4", link: "/projects/than-nhiem-4" },
            { label: "KCN Thanh Niêm 5", link: "/projects/than-nhiem-5" },
            { label: "KCN Thanh Niêm 6", link: "/projects/than-nhiem-6" },
        ],
    },
    { label: "Liên hệ", link: "/ho-tro" },
];

const Header: React.FC<HeaderProps> = ({ variant = "dark" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔒 Khóa cuộn body khi menu mở
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    const bgClass = isScrolled
        ? "bg-white/90 backdrop-blur-md"
        : variant === "dark"
            ? "bg-transparent"
            : "bg-white";

    const textColor =
        isScrolled ? "text-black" : variant === "dark" ? "text-white" : "text-black";
    const iconFilter =
        isScrolled ? "invert(0%)" : variant === "dark" ? "invert(100%)" : "invert(0%)";
    const borderColor =
        isScrolled ? "border-black" : variant === "dark" ? "border-white" : "border-black";

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full h-[82px] flex items-center z-[100] px-6 lg:px-12 transition-all duration-300 ${bgClass}`}
            >
                <nav className="w-full flex items-center justify-between relative">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="max-h-12 object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6">
                        {menuItems.map((item) =>
                            item.subItems ? (
                                <div key={item.label} className="relative group">
                                    <span
                                        className={`${textColor} font-medium hover:text-blue-500 transition-colors cursor-pointer`}
                                    >
                                        {item.label}
                                    </span>
                                    <div className="absolute left-0 top-full mt-1 w-[362px] h-[288px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-75 z-50 overflow-hidden">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.link}
                                                className="flex justify-between items-center px-4 py-4 text-black hover:text-[rgba(0,86,166,1)] hover:font-bold transition"
                                            >
                                                <span>{subItem.label}</span>
                                                <img
                                                    src="/icons/arrow/chevron_right.svg"
                                                    alt=">"
                                                    className="w-4 h-4"
                                                    style={{ filter: "invert(0%)" }}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.link || "#"}
                                    className={`${textColor} font-medium hover:text-blue-500 transition-colors`}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Right buttons */}
                    <div className="flex items-center gap-3 md:gap-5">
                        {/* VN Button */}
                        <button
                            id="lang-toggle"
                            className={`flex items-center justify-center w-10 h-10 border ${borderColor} rounded-full ${textColor} font-bold bg-gray-50/10 hover:bg-white/20 transition transform hover:scale-110`}
                        >
                            VN
                        </button>

                        {/* User Button */}
                        <Link
                            href="#"
                            className={`flex items-center justify-center w-10 h-10 border ${borderColor} rounded-full bg-gray-50/10 hover:bg-white/20 transition transform hover:scale-110`}
                        >
                            <img
                                src="/icons/user/user_02.svg"
                                alt="Account"
                                className="w-5 h-5"
                                style={{ filter: iconFilter }}
                            />
                        </Link>

                        {/* Hamburger Menu (mobile only) */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`md:hidden flex items-center justify-center w-10 h-10 border ${borderColor} rounded-full bg-gray-50/10 hover:bg-white/20 transition transform hover:scale-110`}
                        >
                            <img
                                src="/icons/menu/hamburger_md.svg"
                                alt="Menu"
                                className="w-5 h-5"
                                style={{ filter: iconFilter }}
                            />
                        </button>
                    </div>
                </nav>
            </header>

            {/* MENU MOBILE */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-center z-[200] transition-all duration-500 ease-in-out ${
                    menuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-8"
                }`}
            >
                {menuItems.map((item) =>
                    item.subItems ? (
                        <div key={item.label} className="flex flex-col items-center gap-2">
                            <span className="text-lg font-semibold text-gray-900">
                                {item.label}
                            </span>
                            {item.subItems.map((sub) => (
                                <Link
                                    key={sub.label}
                                    href={sub.link}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-700 text-base hover:text-blue-600 transition-colors"
                                >
                                    {sub.label}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <Link
                            key={item.label}
                            href={item.link || "#"}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    )
                )}

                {/* Nút đóng menu */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="mt-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                    <img
                        src="/icons/menu/close_md.svg"
                        alt="Close"
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </>
    );
};

export default Header;
