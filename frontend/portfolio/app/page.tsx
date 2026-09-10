import Navbar from "../app/pages/navbar/page";
import HeroSection from "../app/pages/homepage/page";
import Footer from "../app/pages/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        {/* Add the next sections here */}
      </main>
      <Footer />
    </>
  );
}