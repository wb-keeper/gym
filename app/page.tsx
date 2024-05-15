import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <div className="h-[3000px]"></div>
    </main>
  );
}
