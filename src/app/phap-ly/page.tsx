import Footer from "@/components/public/footer";
import Header from "@/components/public/header";
import PhapLy from "@/components/phap-ly/phap-ly";

export default function Home() {
    return (
        <>
            <Header variant={"light"} />
            <PhapLy />
            <Footer />
        </>
    );
}
