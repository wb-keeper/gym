"use client";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
const testimonialData = [
  {
    img: "/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Lucy Anthony",
  },
];
const Testimonials = () => {
  return (
    <section className="h-[50vh] bg-teal-300" id="testimonial">
      Testimonials Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
      at consectetur debitis, ducimus est fuga harum incidunt ipsam molestias
      mollitia nesciunt nisi nostrum nulla quidem quis quos repellat similique,
      veritatis.
    </section>
  );
};

export default Testimonials;
