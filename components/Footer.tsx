"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image src="/logo.png" width={117} height={55} alt="logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aspernatur atque natus.
            </p>
            <ul>
              <li>
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
            </ul>
          </div>
          <div className="bg-pink-300">blog</div>
          <div className="bg-pink-300">gallery</div>
          <div className="bg-pink-300">newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
