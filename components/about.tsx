"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 p-2 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28 border-[0.35rem] border-white shadow-xl rounded"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a seasoned Chief Officer with a comprehensive background in business and human resources, I have dedicated my career to driving organizational success through strategic leadership, innovative thinking, and a people-centric approach. With over two decades of experience across diverse industries, my expertise spans from corporate governance and operational excellence to talent management and organizational development. I am passionate about fostering a positive corporate culture, optimizing business processes, and ensuring that human capital is leveraged to its fullest potential.
      </p>

      <p>
      Looking ahead, I am committed to continuing my journey of strategic leadership and human capital development. I envision leading organizations that are agile, resilient, and capable of thriving in a competitive landscape. My goal is to drive sustainable growth by leveraging technology, fostering innovation, and nurturing a culture of continuous improvement.

      In a world where the only constant is change, I believe that organizations must be adaptable and forward-thinking. By integrating business acumen with a deep understanding of human dynamics, I aim to create environments where both businesses and individuals can flourish. My journey is guided by a passion for excellence, a commitment to ethical leadership, and a dedication to making a positive impact on the organizations I serve.
      </p>
    </motion.section>
  );
}