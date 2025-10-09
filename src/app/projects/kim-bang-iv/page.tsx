import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import KimBangIv from "@/components/projects/kim-bang-iv/kim-bang-iv";

export default function Home() {
    return (
        <>
            <Header variant={"light"} />
            <KimBangIv />
            <Footer />
        </>
    );
}
