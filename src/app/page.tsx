import NavFooter from "@/components/NavFooter";
import HeroSection from "@/views/home/HeroSection";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Toaster />
    </>  
  );
}
