import os

# Thư mục gốc project
root_folder = "."

# Các loại file code cần update
code_extensions = (".js", ".jsx", ".ts", ".tsx", ".html", ".css")

for folder, _, files in os.walk(root_folder):
    for file in files:
        if file.lower().endswith(code_extensions):
            path = os.path.join(folder, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            new_content = content.replace(".png", ".jpg")
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"✅ Updated: {path}")

print("🎉 Hoàn tất! Tất cả reference .png đã đổi sang .jpg")
