import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function readFilesInDir(subfolder: string) {
    try {
        const folderPath = path.join(process.cwd(), "public", "files", "thanhliem1", subfolder);
        const files = fs.readdirSync(folderPath);

        return files.map((file) => ({
            // ✨ Loại bỏ đuôi và ký tự đặc biệt để làm "name"
            name: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim(),
            type: path.extname(file).replace(".", "").toUpperCase(),
            url: `/files/thanhliem1/${subfolder}/${file}`,
        }));
    } catch (error) {
        console.error(`❌ Lỗi đọc thư mục ${subfolder}:`, error);
        return [];
    }
}

export async function GET() {
    const legal = readFilesInDir("legal");
    const documents = readFilesInDir("documents");

    return NextResponse.json({ legal, documents });
}
