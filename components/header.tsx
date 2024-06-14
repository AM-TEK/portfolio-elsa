"use client"

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className='z-[999] relative'>
      <motion.div className="fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] custom-shadow"
      >

        <nav className="fixed flex items-center justify-center w-full h-12 py-2">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="relative flex items-center justify-center h-3/4"
                key={link.hash}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                    {
                      "text-gray-950":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 bg-gray-100 border-b-2 -z-10 border-gray-950"
                      layoutId="activeSection"
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

      </motion.div>
    </header>
  )
}
