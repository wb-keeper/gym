"use client";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { fadeIn } from "@/lib/variants";
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
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-4"
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((person, index) => (
              <SwiperSlide key={index} className="h-ful mb-6">
                <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
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
                  <p className="max-w-[380px] mb-4">{person.message}</p>
                  <span className="text-2xl text-accent">{person.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
