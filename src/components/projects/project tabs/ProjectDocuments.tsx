"use client";
import React from "react";
import DocumentsSection from "./DocumentsSection";

// Hàm tự tạo danh sách file trong thư mục cụ thể
const generateFileList = (basePath: string, folder: string, files: string[]) => {
    return files.map((filename) => ({
        name: filename.replace(".pdf", "").replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        type: "PDF",
        url: `${basePath}/${folder}/${filename}`,
    }));
};

const ProjectDocuments: React.FC = () => {
    const basePath = "/files/thanhliem1";

    // ⚖️ Phần pháp lý
    const legalFiles = [
        "giay-phep-xay-dung.pdf",
        "quyet-dinh-phe-duyet.pdf",
    ];

    // 📄 Phần tài liệu
    const documentFiles = [
        "ho-so-thiet-ke.pdf",
        "bao-cao-tai-chinh.pdf",
        "ban-ve-quy-hoach.pdf",
    ];

    const legalItems = generateFileList(basePath, "legal", legalFiles);
    const documentItems = generateFileList(basePath, "documents", documentFiles);

    return (
        <div className="w-full">
            <DocumentsSection
                title="Hồ sơ pháp lý"
                mode="legal"
                items={legalItems}
            />
            <DocumentsSection
                title="Tài liệu dự án"
                mode="document"
                items={documentItems}
            />
        </div>
    );
};

export default ProjectDocuments;
