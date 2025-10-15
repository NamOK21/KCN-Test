import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files") as File[];

        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

        const savedFiles: string[] = [];

        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const filePath = path.join(uploadDir, file.name);
            fs.writeFileSync(filePath, buffer);
            savedFiles.push(`/uploads/${file.name}`);
        }

        return NextResponse.json({ files: savedFiles });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Upload lỗi!" }, { status: 500 });
    }
};
