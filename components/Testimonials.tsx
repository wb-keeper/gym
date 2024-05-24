"use client";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
const testimonialData = [
  {
    img: "/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Lucy Anthony",
  },
  {
    img: "/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Michael Smith",
  },
  {
    img: "/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Maria Garcia",
  },
  {
    img: "/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Lucy Anthony",
  },
  {
    img: "/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Michael Smith",
  },
  {
    img: "/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at consectetur debitis, ducimus est fuga harum incidunt ipsam molestia.",
    name: "Maria Garcia",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <h2 className="h2 text-center">Our Testimonials</h2>
        <div>
          <Swiper>
            {testimonialData.map((person, index) => (
              <SwiperSlide key={index} className="h-full">
                <div>
                  <Image
                    src={person.img}
                    className="rounded-full border-2 border-accent"
                    width={90}
                    height={90}
                    alt="person"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <FaQuoteLeft className="text-2xl text-gray-300" />
                  <p>{person.message}</p>
                  <span>{person.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>{" "}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
