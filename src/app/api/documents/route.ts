import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const basePath = path.join(process.cwd(), "public/files/thanhliem1");

    const folders = ["legal", "documents"];
    const allData: Record<string, any[]> = {};

    folders.forEach((folder) => {
        const dir = path.join(basePath, folder);
        if (!fs.existsSync(dir)) {
            allData[folder] = [];
            return;
        }

        const files = fs
            .readdirSync(dir)
            .filter((f) => !fs.lstatSync(path.join(dir, f)).isDirectory());

        allData[folder] = files.map((file) => ({
            name: file.replace(/\.[^/.]+$/, ""),
            type: file.split(".").pop()?.toUpperCase() || "",
            url: `/files/thanhliem1/${folder}/${file}`,
        }));
    });

    return NextResponse.json(allData);
}
