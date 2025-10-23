import Header from "@/components/public/header";
import Footer from "@/components/public/footer";
import PageLayout from "@/components/phaply-uudai/PageLayout";

export default function PhapLyPage() {
    return (
        <>
            <Header variant="light" />
            <PageLayout type="phap-ly" />
            <Footer />
        </>
    );
}
