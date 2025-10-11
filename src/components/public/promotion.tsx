"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GiftIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function Promotion() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const isStandalone = pathname === "/promotion";

    useEffect(() => {
        if (isStandalone) setIsOpen(true);
    }, [isStandalone]);

    const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
    useEffect(() => {
        if (buttonRef.current && !isStandalone) {
            const rect = buttonRef.current.getBoundingClientRect();
            setOrigin({
                x: `${rect.left + rect.width / 2}px`,
                y: `${rect.top + rect.height / 2}px`,
            });
        }
    }, [isOpen, isStandalone]);

    const inputClass =
        "w-full p-3 border border-gray-300 rounded-[10px] bg-[#F4F4F4] focus:outline-none focus:ring-2 focus:ring-blue-400";

    return (
        <>
            {!isStandalone && (
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-40 bg-red-600 text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 hover:bg-red-700 transition-all"
                >
                    <GiftIcon className="w-5 h-5" />
                    <span>Đăng ký nhận ưu đãi</span>
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`${
                            isStandalone
                                ? "relative min-h-screen bg-white flex justify-center items-center py-16"
                                : "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
                        }`}
                        onClick={() => !isStandalone && setIsOpen(false)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{
                                scale: 0,
                                rotate: -10,
                                opacity: 0,
                                transformOrigin: `${origin.x} ${origin.y}`,
                            }}
                            animate={{
                                scale: 1,
                                rotate: 0,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 300, damping: 25 },
                            }}
                            exit={{
                                scale: 0,
                                rotate: 10,
                                opacity: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl p-8 md:p-12"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left: title */}
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-bold mb-2 text-gray-900">
                                        Đăng ký nhận ưu đãi
                                    </h2>
                                </div>

                                {/* Right: form */}
                                <form className="grid grid-cols-2 gap-3 text-[12px] font-normal text-[#8E8E93]">
                                    {/* Dòng 1: input đầu tiên, cùng hàng với tiêu đề */}
                                    <input type="text" placeholder="Tên nhà đầu tư" className={`${inputClass} col-span-2`} />

                                    {/* Dòng 2: tên người liên hệ */}
                                    <input type="text" placeholder="Tên người liên hệ" className={`${inputClass} col-span-2`} />

                                    {/* Dòng 3 & 4: 2 cột thông tin khác */}
                                    <input type="text" placeholder="Số điện thoại" className={inputClass} />
                                    <input type="email" placeholder="Email" className={inputClass} />

                                    <input type="text" placeholder="Nhu cầu diện tích đất" className={inputClass} />
                                    <input type="text" placeholder="Dự kiến vốn đầu tư" className={inputClass} />

                                    <input type="text" placeholder="Ngành nghề đầu tư" className={inputClass} />
                                    <input type="text" placeholder="Thời hạn đầu tư" className={inputClass} />

                                    {/* Nút tải lên tài liệu (không thay đổi màu chữ) */}
                                    <div className="col-span-2 border-2 border-dashed rounded-lg p-4 text-center text-gray-500">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center gap-2 mx-auto text-[#222222] bg-[#F4F4F4] w-[156px] h-[44px] rounded-[8px] hover:bg-[#E2E2E2] transition-colors"
                                        >
                                            <ArrowUpTrayIcon className="w-5 h-5" />
                                            Tải file tài liệu
                                        </button>
                                        <p className="text-sm mt-2">
                                            Tải lên giấy phép kinh doanh, hồ sơ đầu tư...
                                        </p>
                                    </div>

                                    {/* Nút đăng ký */}
                                    <button
                                        type="submit"
                                        className="col-span-2 bg-[#0056A6] text-white px-6 py-3 w-full rounded-[1000px] hover:bg-[#004080] transition-all"
                                    >
                                        Đăng ký
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
