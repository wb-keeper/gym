import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonials />
      <Blog />
      <Brands />
      {/*<div className="h-[3000px]"></div>*/}
    </main>
  );
}
