/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image'
import React from 'react'
import profilePic from '@/public/intro-profile-pic.jpg'
import elsaIntroPic from '@/public/elsaIntroPic.jpg';
import logo from '@/public/pivotLogo1.png';
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
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" ref={ref}
    id="home">
      <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center gap-8 sm:flex-row'>
          <div className=''>
            <Image
              src={logo} // Add the logo
              alt='Logo'
              width="768"
              height="768"
              quality="95"
              priority={true}
              className="object-cover h-auto w-96"
            />
          </div>
          <div className=''>
            <Image
              src={elsaIntroPic}
              alt='Elsa Profile Picture'
              width="768"
              height="768"
              quality="95"
              priority={true}
              className="h-auto w-96 rounded object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Senior executive with the proven ability to execute on solutions to drive business results. Successful in C-Suite roles with increasing levels of complexity and in diverse industries. Experience with PE and Non-profit Boards. Ability to simplify the complex. Strong competence in agility; ability to roll up sleeves to tackle challenges with small cross-functional teams.
      </motion.h1>

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
