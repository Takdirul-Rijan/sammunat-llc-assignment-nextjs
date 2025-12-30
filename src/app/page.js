import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <Footer></Footer>
    </main>
  );
}
