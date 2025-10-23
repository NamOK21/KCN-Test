import Header from "@/components/public/header";
import Footer from "@/components/public/footer";
import Introduction from "@/components/introduction/introduction";

export default function Home() {
    return (
        <>
            <Header variant={"light"} />
            <Introduction />
            <Footer />
        </>
    );
}
