import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  );
}
