import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "KCN Ninh Binh",
    description: "Nein",
};

// import Roboto
const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={roboto.className}>
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
                rel="stylesheet"
                precedence="default"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right" />
        </head>
        <body className="antialiased text-gray-800">
        {children}
        </body>
        </html>
    );
}
