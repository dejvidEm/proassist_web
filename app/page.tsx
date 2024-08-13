import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import Vehicles from "@/components/Vehicles";
import Report from "@/components/Report";
import Image from "next/image";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <About/>
      <Report/>
      <Vehicles/>
      <Questions/>
      <Footer/>
    </div>
  );
}
