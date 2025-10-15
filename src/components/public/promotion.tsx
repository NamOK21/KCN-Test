"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GiftIcon, ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface UploadedFile {
    name: string;
    type: string;
    size: number;
    url?: string;
    fileObject?: File;
}

export default function Promotion() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const isStandalone = pathname === "/promotion";

    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const uploaded = Array.from(e.target.files).map((file) => ({
            name: file.name,
            type: file.type,
            size: file.size,
            url: URL.createObjectURL(file),
            fileObject: file,
        }));
        setFiles((prev) => [...prev, ...uploaded]);
    };

    const removeFile = (index: number) => {
        setFiles((prev) => {
            const newFiles = [...prev];
            if (newFiles[index].url) URL.revokeObjectURL(newFiles[index].url);
            newFiles.splice(index, 1);
            return newFiles;
        });
    };

    useEffect(() => { if (isStandalone) setIsOpen(true); }, [isStandalone]);

    const [origin, setOrigin] = useState<{ x: string; y: string }>({ x: "50%", y: "50%" });
    useEffect(() => {
        if (buttonRef.current && !isStandalone) {
            const rect = buttonRef.current.getBoundingClientRect();
            setOrigin({
                x: `${rect.left + rect.width / 2 + window.scrollX}px`,
                y: `${rect.top + rect.height / 2 + window.scrollY}px`,
            });
        } else {
            setOrigin({ x: "50%", y: "50%" });
        }
    }, [isOpen, isStandalone]);

    useEffect(() => {
        if (isOpen) {
            const original = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = original; };
        }
    }, [isOpen]);

    useEffect(() => {
        return () => { files.forEach((f) => f.url && URL.revokeObjectURL(f.url)); };
    }, [files]);

    const inputClass = "w-full p-3 border border-gray-300 rounded-[10px] bg-[#F4F4F4] focus:outline-none focus:ring-2 focus:ring-blue-400";

    // ...giữ nguyên phần trên của component...

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const newErrors: { [key: string]: string } = {};

        Array.from(form.elements).forEach((el: any) => {
            if (el.tagName === "INPUT" && el.required && !el.value.trim()) {
                newErrors[el.name] = "Trường này không được để trống"; // <-- tiếng Việt
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        if (files.length === 0) {
            alert("Vui lòng chọn file trước khi submit!");
            return;
        }

        const formData = new FormData();
        files.forEach((f) => f.fileObject && formData.append("files", f.fileObject));

        try {
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            if (!res.ok) throw new Error("Upload lỗi");
            await res.json();
            alert("Upload thành công!");
            setFiles([]);
        } catch (err) {
            console.error(err);
            alert("Upload lỗi!");
        }
    };


    return (
        <>
            {!isStandalone && !isOpen && (
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 z-[200] bg-red-600 text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 hover:bg-red-700 transition-all"
                >
                    <GiftIcon className="w-5 h-5" />
                    <span className="hidden sm:inline text-sm">Đăng ký nhận ưu đãi</span>
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] flex justify-center items-center"
                        onClick={() => !isStandalone && setIsOpen(false)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, y: 10, opacity: 0, transformOrigin: `${origin.x} ${origin.y}` }}
                            animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25 } }}
                            exit={{ scale: 0.96, opacity: 0, transition: { duration: 0.2 } }}
                            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md md:max-w-4xl p-6 md:p-10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Đóng"
                                className="absolute top-4 right-4 bg-white/90 rounded-full p-1 hover:bg-white transition"
                            >
                                <XMarkIcon className="w-6 h-6 text-gray-700" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Đăng ký nhận ưu đãi</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] font-normal text-[#6B6B6B]">
                                    {["Tên nhà đầu tư", "Tên người liên hệ"].map((placeholder, idx) => (
                                        <div key={idx} className="md:col-span-2">
                                            <input
                                                type="text"
                                                name={placeholder}
                                                placeholder={placeholder}
                                                className={inputClass}
                                                required
                                            />
                                            {errors[placeholder] && (
                                                <p className="text-red-500 text-xs mt-1">{errors[placeholder]}</p>
                                            )}
                                        </div>
                                    ))}
                                    <input type="text" name="Số điện thoại" placeholder="Số điện thoại" className={inputClass} required />
                                    {errors["Số điện thoại"] && <p className="text-red-500 text-xs mt-1">{errors["Số điện thoại"]}</p>}

                                    <input type="email" name="Email" placeholder="Email" className={inputClass} required />
                                    {errors["Email"] && <p className="text-red-500 text-xs mt-1">{errors["Email"]}</p>}

                                    {["Nhu cầu diện tích đất", "Dự kiến vốn đầu tư", "Ngành nghề đầu tư", "Thời hạn đầu tư"].map((placeholder, idx) => (
                                        <div key={idx}>
                                            <input type="text" name={placeholder} placeholder={placeholder} className={inputClass} required />
                                            {errors[placeholder] && <p className="text-red-500 text-xs mt-1">{errors[placeholder]}</p>}
                                        </div>
                                    ))}

                                    <div className="md:col-span-2 border-2 border-dashed rounded-lg p-4 text-center text-gray-500 overflow-hidden">
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,.docx,.png,.jpg,.jpeg"
                                            ref={fileInputRef}
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex items-center justify-center gap-2 mx-auto text-[#222222] bg-[#F4F4F4] w-[156px] h-[44px] rounded-[8px] hover:bg-[#E2E2E2] transition-colors"
                                        >
                                            <ArrowUpTrayIcon className="w-5 h-5" />
                                            Tải file tài liệu
                                        </button>
                                        <p className="text-sm mt-2">Tải lên giấy phép kinh doanh, hồ sơ đầu tư...</p>

                                        {files.length > 0 && (
                                            <div className="mt-2 text-left max-h-40 overflow-y-auto">
                                                {files.map((f, i) => (
                                                    <div key={i} className="flex justify-between items-center text-sm mb-1">
                                                        <span className="truncate max-w-[80%]">{f.name}</span>
                                                        <button type="button" className="text-red-500 ml-2" onClick={() => removeFile(i)}>
                                                            Xóa
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button type="submit" className="md:col-span-2 bg-[#0056A6] text-white px-6 py-3 w-full rounded-[1000px] hover:bg-[#004080] transition-all">
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
