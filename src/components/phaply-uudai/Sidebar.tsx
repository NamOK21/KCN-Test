"use client";
import { useState } from "react";
import Image from "next/image";

interface SidebarProps {
    current: "phap-ly" | "uu-dai" | "du-an" | "gioi-thieu" | "tin-tuc" | "lien-he";
}

export default function Sidebar({ current }: SidebarProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (value: string) => {
        setOpenDropdown(openDropdown === value ? null : value);
    };

    return (
        <aside className="w-full space-y-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Tìm kiếm thông tin..."
                    className="w-full border rounded-lg py-2 pl-3 pr-3 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Image
                    src="/icons/arrow/chevron_right.svg"
                    alt="arrow"
                    width={0}
                    height={0}
                    className="hidden"
                />
            </div>

            <nav className="space-y-1 text-[15px]">
                <SidebarItem
                    label="Giới thiệu"
                    href="/gioi-thieu"
                    active={current === "gioi-thieu"}
                />
                <SidebarItem
                    label="Tin tức & Sự kiện"
                    href="/tin-tuc-su-kien"
                    active={current === "tin-tuc"}
                />
                <SidebarDropdown
                    label="Chính sách pháp lý"
                    value="phap-ly"
                    openDropdown={openDropdown}
                    toggleDropdown={toggleDropdown}
                    active={current === "phap-ly"}
                    items={[
                        {
                            label: "Chính sách Trung ương",
                            href: "#",
                        },
                        {
                            label: "Chính sách Địa phương",
                            href: "#",
                        },
                    ]}
                />
                <SidebarItem
                    label="Chính sách ưu đãi"
                    href="/uu-dai"
                    active={current === "uu-dai"}
                />
                <SidebarDropdown
                    label="Dự án"
                    value="du-an"
                    openDropdown={openDropdown}
                    toggleDropdown={toggleDropdown}
                    active={current === "du-an"}
                    items={[
                        { label: "KCN Kim Bảng IV", href: "/du-an/kim-bang-iv" },
                        { label: "KCN Thanh Liêm I", href: "/du-an/thanh-liem-i" },
                    ]}
                />
                <SidebarItem
                    label="Liên hệ"
                    href="/lien-he"
                    active={current === "lien-he"}
                />
            </nav>
        </aside>
    );
}

function SidebarItem({
                         label,
                         href,
                         active,
                     }: {
    label: string;
    href: string;
    active?: boolean;
}) {
    return (
        <a
            href={href}
            className={`flex items-center justify-between px-3 py-2 rounded-md transition-all duration-150 ${
                active
                    ? "text-[#0056A6] font-semibold"
                    : "text-black hover:text-[#0056A6]"
            }`}
        >
            <span>{label}</span>
            <Image
                src="/icons/arrow/chevron_right.svg"
                alt="arrow"
                width={16}
                height={16}
                className={`transition-transform duration-200 ${
                    active ? "translate-x-1" : "opacity-60"
                }`}
            />
        </a>
    );
}
function SidebarDropdown({
                             label,
                             value,
                             openDropdown,
                             toggleDropdown,
                             active,
                             items,
                         }: {
    label: string;
    value: string;
    openDropdown: string | null;
    toggleDropdown: (val: string) => void;
    active?: boolean;
    items: { label: string; href: string }[];
}) {
    const isOpen = openDropdown === value;
    return (
        <div>
            <button
                onClick={() => toggleDropdown(value)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-150 ${
                    active
                        ? "text-[#0056A6] font-semibold"
                        : "text-black hover:text-[#0056A6]"
                }`}
            >
                <span>{label}</span>
                <Image
                    src="/icons/arrow/chevron_right.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className={`transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="ml-4 mt-1 space-y-1">
                    {items.map((sub) => (
                        <a
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-2 text-black/70 hover:text-[#0056A6] text-[14px] transition-colors"
                        >
                            {sub.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
