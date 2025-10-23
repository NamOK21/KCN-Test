"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: "Tin tức & sự kiện", link: "/tin-tuc" },
    { label: "Pháp lý", link: "/phap-ly" },
    { label: "Ưu đãi", link: "/uu-dai" },
    {
        label: "Dự án",
        subItems: [
            { label: "KCN Kim Bảng IV", link: "/projects/kim-bang-iv" },
            { label: "KCN Thanh Liêm I", link: "/projects/thanh-liem-1" },
        ],
    },
    { label: "Liên hệ", link: "/ho-tro" },
];

const languages = [
    { code: "VN", label: "Tiếng Việt", flag: "vn" },
    { code: "EN", label: "English", flag: "gb" },
    { code: "JP", label: "日本語", flag: "jp" },
];

const Header: React.FC<HeaderProps> = ({ variant = "dark" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
    const [hoverLang, setHoverLang] = useState(false);
    const [language, setLanguage] = useState("VN");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const bgClass = isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : variant === "dark"
            ? "bg-transparent"
            : "bg-white";

    const textColor =
        isScrolled || variant === "light" ? "text-black" : "text-white";

    const hoverTextColor =
        variant === "dark" && !isScrolled
            ? "hover:text-blue-400"
            : "hover:text-blue-600";

    const borderColor =
        isScrolled || variant === "light" ? "border-black" : "border-white";

    const mobileIconColor =
        menuOpen || (variant === "dark" && !isScrolled)
            ? "invert(100%)"
            : "invert(0%)";

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full h-[68px] sm:h-[80px] flex items-center z-[100] px-4 sm:px-6 md:px-10 transition-all duration-300 ${bgClass}`}
            >
                <nav className="w-full flex items-center justify-between relative">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center transition-transform duration-500 hover:scale-105"
                    >
                        <img
                            src="/icons/logo/logo.svg"
                            alt="Logo"
                            className="h-8 sm:h-10 md:h-11 lg:h-12 object-contain"
                        />
                    </Link>

                    <div
                        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 xl:gap-10`}
                    >
                        {menuItems.map((item) =>
                                item.subItems ? (
                                    <div
                                        key={item.label}
                                        className="relative whitespace-nowrap"
                                        onMouseEnter={() => setHoverDropdown(item.label)}
                                        onMouseLeave={() => setHoverDropdown(null)}
                                    >
                  <span
                      className={`${textColor} ${hoverTextColor} font-medium cursor-pointer text-[14px] lg:text-[15px] relative transition-colors duration-300`}
                  >
                    {item.label}
                      <motion.span
                          className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 origin-left rounded-full"
                          animate={{
                              scaleX: hoverDropdown === item.label ? 1 : 0,
                          }}
                          initial={{ scaleX: 0 }}
                          transition={{ duration: 0.3 }}
                      />
                  </span>

                                        <AnimatePresence>
                                            {hoverDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="absolute left-0 mt-3 bg-white rounded-xl shadow-xl py-2 min-w-[220px] z-50"
                                                >
                                                    {item.subItems.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            href={sub.link}
                                                            className="flex items-center justify-between px-5 py-3 text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 text-[14px]"
                                                        >
                                                            <span>{sub.label}</span>
                                                            <img
                                                                src="/icons/arrow/chevron_right.svg"
                                                                alt=">"
                                                                className="w-4 h-4"
                                                            />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.link || "#"}
                                        className={`${textColor} ${hoverTextColor} font-medium text-[14px] lg:text-[15px] whitespace-nowrap relative transition-colors duration-300`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                        )}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div
                            className="relative"
                            onMouseEnter={() => setHoverLang(true)}
                            onMouseLeave={() => setHoverLang(false)}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border ${borderColor} rounded-full overflow-hidden transition-all duration-300`}
                            >
                                <img
                                    src={`/icons/flags/${
                                        languages.find((l) => l.code === language)?.flag || "vn"
                                    }.svg`}
                                    alt={language}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>
                            <AnimatePresence>
                                {hoverLang && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                        className="absolute right-0 mt-2 bg-white shadow-xl rounded-xl py-2 w-36 z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setLanguage(lang.code)}
                                                className={`flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm ${
                                                    lang.code === language
                                                        ? "font-medium text-blue-600"
                                                        : ""
                                                }`}
                                            >
                                                <img
                                                    src={`/icons/flags/${lang.flag}.svg`}
                                                    alt={lang.code}
                                                    className="w-5 h-5 mr-2"
                                                />
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.div whileHover={{ scale: 1.15 }}>
                            <Link
                                href="#"
                                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border ${borderColor} rounded-full bg-gray-50/10 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-purple-400/10 transition-all duration-300`}
                            >
                                <img
                                    src="/icons/user/user_02.svg"
                                    alt="Account"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    style={{
                                        filter: isScrolled
                                            ? "invert(0%)"
                                            : variant === "dark"
                                                ? "invert(100%)"
                                                : "invert(0%)",
                                    }}
                                />
                            </Link>
                        </motion.div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border ${borderColor} rounded-full transition-all hover:scale-110 duration-300`}
                        >
                            <img
                                src={
                                    menuOpen
                                        ? "/icons/menu/close_md.svg"
                                        : "/icons/menu/hamburger_md.svg"
                                }
                                alt="Menu"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                style={{ filter: mobileIconColor }}
                            />
                        </button>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center text-center z-[200] px-6"
                    >
                        {menuItems.map((item) =>
                                item.subItems ? (
                                    <div
                                        key={item.label}
                                        className="flex flex-col items-center gap-2 mb-4"
                                    >
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
                                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-4"
                                    >
                                        {item.label}
                                    </Link>
                                )
                        )}

                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            onClick={() => setMenuOpen(false)}
                            className="mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <img src="/icons/menu/close_md.svg" alt="Close" className="w-6 h-6" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
