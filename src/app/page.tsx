import { CarouselDemo } from "@/components/CarouselDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";

export default function Home() {
  return (
      <>
      <Header />
      {/* <CarouselDemo /> */}
      <Slider />
      <ProductCard  />
      <Footer />
      </>
      

  );
}
