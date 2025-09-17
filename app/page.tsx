import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="dark:bg-[#0f0f0f]">
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}
