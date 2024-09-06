import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import Vehicles from "@/components/Vehicles";
import Report from "@/components/Report";
import Questions from "@/components/Questions";
import Contact from "@/components/Contact";
import Statistics from "@/components/Statistics";
import Maintnance from "@/components/Maintnance";
import Cards from "@/components/Cards";
import FaqSection from "@/components/FaqSection";
import ServiceList from "@/components/ServiceList";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      {/*
      <Homepage/>
      <ServiceList/>
      <Statistics/>
      <Cards/>
      <Reviews/>
      <FaqSection/>
      <Contact/>
      */}
      <Maintnance/>
    </div>
  );
}
