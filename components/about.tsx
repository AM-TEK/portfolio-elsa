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
      <SectionHeading>Expertise</SectionHeading>
      <div className="mb-3">
        <div className="expertise-heading">Coaching</div>
        <br/>
        <div>
        Engagements that focus on your growth, transitions or hurdles in career.  Utilizing a reflective method that builds trust through a partnership focused on your success. 
        </div>
        <br/>
        <div className="italic">
        3-, 6- or 12-month coaching packages to address your needs 
        </div>
      </div>

      <div className="mb-3">
        <div className="expertise-heading">Consulting: HR STRATEGY, CULTURE, ENGAGEMENT </div>
        <br/>
        <div> 
        Culture strategy and development of programmatic solutions to strengthen your workplace.
        </div>
        <div>
        Leadership program design to develop your mid-level and senior leaders that enable high organizational performance.
        </div>
        <div>
        Facilitation of people strategies that support business growth or transformation. 
        </div>
      </div>
      
      <div>
        <div className="expertise-heading">Fractional HR LEADER</div>
        <br/>
        <div>
        Able to lead the HR function and teams in a transition era or leadership disruption.   I have served as leader of large and small HR teams across tech and service organizations, in local and global organizations.  
        </div>
        <br/>
        <div className="italic">
        HR Process Automation
        <br/>
        Compensation
        <br/>
        HR Operations
        <br/>
        Recruitment Strategies
        <br/>
        Diversity Strategies 
        <br/>
        </div>
      </div>
    </motion.section>
  );
}