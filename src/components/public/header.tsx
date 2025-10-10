"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface MenuItem {
    label: string;
    link?: string;
    subItems?: { label: string; link: string }[];
}

interface HeaderProps {
    variant?: "dark" | "light"; // dark = nền tối (mặc định), light = nền sáng
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

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLight = variant === "light";

    const headerBg = isScrolled
        ? isLight
            ? "bg-white/90 backdrop-blur-md"
            : "bg-gray-900/90 backdrop-blur-md"
        : isLight
            ? "bg-white"
            : "bg-transparent";

    const textColor = isLight ? "text-black" : "text-white";
    const borderColor = isLight ? "border-black" : "border-white";

    return (
        <header
            className={`fixed top-0 left-0 w-full h-[82px] flex items-center z-50 px-6 lg:px-12 transition-all duration-300 ${headerBg}`}
        >
            <nav className="w-full flex items-center justify-between relative">
                {/* === BÊN TRÁI: LOGO === */}
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src={isLight ? "/images/logo.png" : "/images/logo.png"}
                            alt="Logo"
                            className="max-h-12 object-contain"
                        />
                    </Link>
                </div>

                {/* === MENU GIỮA (CĂN GIỮA TUYỆT ĐỐI) === */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6">
                    {menuItems.map((item) =>
                            item.subItems ? (
                                <div key={item.label} className="relative group">
                <span
                    className={`${textColor} font-medium hover:text-blue-500 transition-colors cursor-pointer`}
                >
                  {item.label}
                </span>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 top-full mt-1 w-[362px] h-[288px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-75 z-50 overflow-hidden">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.link}
                                                className="flex justify-between items-center px-4 py-4 text-black hover:text-[rgba(0,86,166,1)] hover:font-bold transition"
                                            >
                                                <span>{subItem.label}</span>
                                                <span className="material-symbols-outlined text-black group-hover:text-[rgba(0,86,166,1)]">
                        chevron_right
                      </span>
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

                {/* === BÊN PHẢI === */}
                <div className="flex items-center gap-4 md:gap-5">
                    <img
                        src={isLight ? "/images/call-light.png" : "/images/call.png"}
                        alt="Call"
                        className="max-h-6 object-contain"
                    />
                    <span className={`${textColor} font-bold text-[15px]`}>
            +84 090 0238888
          </span>

                    <button
                        id="lang-toggle"
                        className={`flex items-center justify-center w-10 h-10 border ${borderColor} rounded-full ${textColor} font-bold hover:bg-white/20 transition transform hover:scale-110`}
                        data-lang="vi"
                    >
                        VN
                    </button>

                    <Link
                        href="#"
                        className={`flex items-center justify-center w-10 h-10 border ${borderColor} rounded-full hover:bg-white/20 transition transform hover:scale-110`}
                    >
                        <img
                            src={isLight ? "/images/account-light.png" : "/images/account.png"}
                            alt="Login"
                            className="w-5 h-auto"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
