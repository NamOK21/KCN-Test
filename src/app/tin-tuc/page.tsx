import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import News from "@/components/news/news";
export default function Home() {
    return (
        <>
            <Header variant={"light"} />
            <News />
            <Footer />
        </>
    );
}