"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoDatDetail({ id }: { id: string }) {
    return (
        <main className="max-w-[1110px] mx-auto px-4 md:px-8 py-16">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-blue-600 transition">
                    Trang chủ
                </Link>{" "}
                /{" "}
                <Link href="/projects/kim-bang-iv" className="hover:text-blue-600 transition">
                    KCN Kim Bảng IV
                </Link>{" "}
                / <span className="text-gray-800 font-semibold">{id}</span>
            </nav>

            {/* Tiêu đề với badge */}
            <div className="mb-8">
        <span className="inline-block text-[#0056A6] font-normal text-[13px] text-center px-4 py-1 border border-[#0056A6] rounded-[25px] max-w-[133px] w-max bg-white">
          KCN Kim Bảng
        </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">Lô đất {id}</h1>
            </div>

            {/* Thông tin chi tiết */}
            <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Thông tin chi tiết</h2>

                <div className="divide-y divide-gray-200">
                    {/* Trạng thái */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <span className="material-symbols-outlined text-gray-500 text-[22px]">category</span>
                            <span className="font-medium">Trạng thái</span>
                        </div>
                        <span className="bg-[#78D8EB] text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
              Trống
            </span>
                    </div>

                    {/* Diện tích */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <span className="material-symbols-outlined text-gray-500 text-[22px]">straighten</span>
                            <span className="font-medium">Diện tích</span>
                        </div>
                        <span className="text-gray-900 font-semibold">10,000 m²</span>
                    </div>

                    {/* Mặt tiền */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <span className="material-symbols-outlined text-gray-500 text-[22px]">distance</span>
                            <span className="font-medium">Mặt tiền</span>
                        </div>
                        <span className="text-gray-900 font-semibold">150 m</span>
                    </div>

                    {/* Loại lô */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <span className="material-symbols-outlined text-gray-500 text-[22px]">apartment</span>
                            <span className="font-medium">Loại lô</span>
                        </div>
                        <span className="text-gray-900 font-semibold">Góc / 2MT</span>
                    </div>

                    {/* Ngành phù hợp */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <span className="material-symbols-outlined text-gray-500 text-[22px]">sell</span>
                            <span className="font-medium">Ngành phù hợp</span>
                        </div>
                        <span className="text-gray-900 font-semibold">Điện tử, Cơ khí</span>
                    </div>
                </div>

                {/* Nút hành động */}
                <div className="flex flex-wrap gap-4 mt-8">
                    {/* Khóa lô */}
                    <button className="flex items-center gap-2 px-8 py-3 bg-[#004AAD] text-white rounded-full font-medium shadow-md hover:bg-[#003B8A] transition">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                        Khóa lô
                    </button>

                    {/* Chi tiết phân lô */}
                    <button className="flex items-center gap-2 px-8 py-3 bg-white text-[#0056A6] border border-[#0056A6] rounded-full font-medium shadow-md hover:bg-[#E6F0FA] transition">
                        <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                        Chi tiết phân lô
                    </button>
                </div>
            </section>

            {/* Ảnh chính sau thông tin chi tiết */}
            <div className="mb-16">
                <Image
                    src="/images/kim-bang-iv-demo.png"
                    alt={`Lô đất ${id}`}
                    width={1920}
                    height={795}
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                    priority
                />
            </div>

            {/* Hình ảnh & Video */}
            <section className="mb-16">
                <h2 className="text-xl font-semibold mb-5 text-gray-900">Hình ảnh & Video</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["img1.png", "img2.png", "img3.png"].map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                            <Image
                                src={`/images/${img}`}
                                alt=""
                                width={400}
                                height={250}
                                className="w-full h-[250px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Tài liệu liên quan */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-5 text-gray-900">Tài liệu liên quan</h2>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-4">
                    {[
                        "Giấy chứng nhận đăng ký lô đất",
                        "Bản đồ quy hoạch chi tiết",
                        "Hợp đồng mẫu cho thuê đất",
                    ].map((doc, i) => (
                        <div key={i} className="flex justify-between items-center border-b last:border-b-0 pb-3 last:pb-0">
                            <span className="text-gray-700">{doc}</span>
                            <a href="#" className="text-[#004AAD] hover:underline text-sm font-medium">
                                Xem chi tiết
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
