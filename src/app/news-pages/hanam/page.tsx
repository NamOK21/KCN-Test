import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import Hanam from "@/components/news/news-pages";

export default function Home() {
    return (
        <>
            <Header variant={"light"} />
            <Hanam />
            <Footer />
        </>
    );
}
