import React from "react";
import Hero from "@/components/public/hero";

const News: React.FC = () => {



    return (
        <>
            {/* Hero */}
            <Hero
                title="Dự án khu công nghiệp Kim Bảng IV"
                homepage="Trang chủ"
                currentPage="Tin tức sự kiện"
                bgImage="/images/img3.png"
            />
        </>
    );
};

export default News;
