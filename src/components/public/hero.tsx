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
        <section
            className="relative flex items-end justify-start min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[560px]"
            style={BGS}
        >
            {/* Overlay làm mờ và tối nền */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-[10px]" />

            {/* Nội dung breadcrumb + tiêu đề */}
            <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
                {/* Breadcrumb */}
                <p className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-1 font-[400] leading-[150%] tracking-[0px]">
                    <Link href="/" className="underline-hover hover:text-white/80 transition">
                        {homepage}
                    </Link>
                    <span className="material-symbols-outlined text-sm sm:text-base text-white">
                        chevron_right
                    </span>
                    <span className="truncate">{currentPage}</span>
                </p>

                {/* Tiêu đề */}
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight max-w-[800px]">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
