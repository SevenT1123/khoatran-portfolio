import AboutView from "@/views/about/AboutView";
import HeroSection from "@/views/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutView />
    </>  
  );
}
