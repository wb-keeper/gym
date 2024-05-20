"use client";
import { motion } from "framer-motion";
import MembershipSlider from "@/components/MembershipSlider";

const Membership = () => {
  return (
    <section
      className="py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative"
      id="prices"
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20">
        <h2 className="h2 text-white text-center mb-8">Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
