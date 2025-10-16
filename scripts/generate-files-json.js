// ✅ Sử dụng cú pháp CommonJS
const fs = require("fs");
const path = require("path");

function readFiles(subfolder) {
    const dir = path.join("public", "files", "thanhliem1", subfolder);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).map((file) => ({
        name: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim(),
        type: path.extname(file).replace(".", "").toUpperCase(),
        url: `/files/thanhliem1/${subfolder}/${file}`,
    }));
}

const legal = readFiles("legal");
const documents = readFiles("documents");

const output = { legal, documents };
fs.writeFileSync("public/project-files.json", JSON.stringify(output, null, 2));

console.log("✅ Đã tạo file public/project-files.json thành công!");
