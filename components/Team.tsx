"use client";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const trainerData = [
  {
    image: "/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis!",
    social: [
      { icon: FaFacebook, href: "#" },
      { icon: FaTwitter, href: "#" },
      { icon: FaYoutube, href: "#" },
    ],
  },
  {
    image: "/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis!",
    social: [
      { icon: FaFacebook, href: "#" },
      { icon: FaTwitter, href: "#" },
      { icon: FaYoutube, href: "#" },
    ],
  },
  {
    image: "/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis!",
    social: [
      { icon: FaFacebook, href: "#" },
      { icon: FaTwitter, href: "#" },
      { icon: FaYoutube, href: "#" },
    ],
  },
  {
    image: "/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis!",
    social: [
      { icon: FaFacebook, href: "#" },
      { icon: FaTwitter, href: "#" },
      { icon: FaYoutube, href: "#" },
    ],
  },
];
const Team = () => {
  return (
    <section className="h-screen bg-red-300" id="team">
      <div className="container mx-auto">
        <h2 className="h2">Our trainers</h2>
        <div>
          {trainerData.map((trainer, index) => (
            <div key={index}>
              <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                <Image src={trainer.image} fill alt="trainer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
