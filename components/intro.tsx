/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image'
import React from 'react'
import profilePic from '@/public/intro-profile-pic.jpg'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className='flex items-center justify-center'>
        <div className=''>
          <Image 
            src={profilePic} 
            alt='Elsa Profile Picture' 
            width="768"
            height="768"
            quality="95"
            priority={true}
            className="h-96 w-96 rounded object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>

      <motion.h3
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        As Chief Officer, I'm dedicated to leading my team with vision and integrity. My mission is to drive innovation and deliver exceptional solutions that empower my clients. Welcome to my journey!
      </motion.h3>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      </motion.div>
    </section>
  )
}
