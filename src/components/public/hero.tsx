"use client";
import React from "react";
import Link from "next/link";

interface HeroProps {
    title: string;        // tiêu đề lớn
    homepage: string;     // breadcrumb đầu tiên
    currentPage: string;  // breadcrumb hiện tại
    bgImage: string;      // ảnh nền
}

const Hero: React.FC<HeroProps> = ({ title, homepage, currentPage, bgImage }) => {
    const BGS = {
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <section className="relative bg-cover bg-center min-h-[485px]" style={BGS}>
            {/* Lớp làm mờ overlay */}
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[12px]"></div>

            <div className="absolute bottom-0 left-0 z-10 px-4 py-8 md:py-12 md:px-10 text-left">
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-[12px] mb-4 flex items-center gap-1 font-[400] leading-[150%] tracking-[0px]">
                    <Link href="/" className="underline-hover">
                        {homepage}
                    </Link>
                    <span className="material-symbols-outlined text-base text-white">
                        chevron_right
                    </span>
                    <span>{currentPage}</span>
                </p>
                <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight max-w-[780px]">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
