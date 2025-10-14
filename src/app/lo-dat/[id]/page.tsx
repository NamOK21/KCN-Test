import React from "react";
import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import LoDatDetail from "@/components/projects/lo-dat-details/lo-dat-details";

interface LotDetailProps {
    params: { id: string };
}

export async function generateStaticParams() {
    const lots = Array.from({ length: 50 }, (_, i) => ({
        id: `KB-L${(i + 1).toString().padStart(3, "0")}`,
    }));
    return lots;
}

export default function Page({ params }: LotDetailProps) {
    return (
        <>
            <Header variant="light" />
            <LoDatDetail id={params.id} />
            <Footer />
        </>
    );
}
