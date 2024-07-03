"use client"
import React, { useEffect } from 'react';
import { FaBriefcase, FaChalkboardUser, FaChartLine, FaHandshakeSimple, FaPeopleGroup, FaRegCompass } from "react-icons/fa6";


export default function Services() {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    addAnimation();

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='scroller' data-speed="slow">
      <ul className='tag-list scroller__inner'>
        <li>Executive Coaching</li>
        <li><FaPeopleGroup /></li>
        <li>Leadership Development</li>
        <li><FaChalkboardUser /></li>
        <li>Succession Management</li>
        <li><FaChartLine /></li>
        <li>Change Management</li>
        <li><FaHandshakeSimple /></li>
        <li>Transformation strategies</li>
        <li><FaBriefcase /></li>
        <li>Acquisition, Mergers & Divestures</li>
        <li><FaRegCompass /></li>
      </ul>
    </div>
  );
}
