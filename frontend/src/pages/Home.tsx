import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroText from "../components/IntroText";
import LookbookGrid from "../components/LookbookGrid";
import ProductPreview from "../components/ProductPreview";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const Home = () => {
  return (
    <main className="bg-black text-white min-h-screen pb-20">
      <Header />
      <Hero />
      <IntroText />
      <LookbookGrid />
      <ProductPreview />
      <ProductDetail />
      <Footer />
    </main>
  );
};

export default Home;
