// import React from 'react'

// export default function Services() {
  
//   const scrollers = document.querySelectorAll(".scroller");
  
//   addAnimation();

//   function addAnimation() {
//     scrollers.forEach((scroller) => {
//       // add data-animated="true" to every `.scroller` on the page
//       scroller.setAttribute("data-animated", true);

//       // Make an array from the elements within `.scroller-inner`
//       const scrollerInner = scroller.querySelector(".scroller__inner");
//       const scrollerContent = Array.from(scrollerInner.children);

//       // For each item in the array, clone it
//       // add aria-hidden to it
//       // add it into the `.scroller-inner`
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         duplicatedItem.setAttribute("aria-hidden", true);
//         scrollerInner.appendChild(duplicatedItem);
//       });
//     });
//   }

//   return (
//     <div className='scroller' data-speed="fast">
//       <ul className='tag-list scroller__inner'>
//         <li>Executive Coaching</li>
//         <li>Leadership Development</li>
//         <li>Succession Management</li>
//         <li>Change Management</li>
//         <li>Transformation strategies	</li>
//         <li>Acquisition, Mergers & Divestures</li>
//       </ul>
//     </div>
//   )
// }
"use client"
import React, { useEffect } from 'react';

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
        <li>Leadership Development</li>
        <li>Succession Management</li>
        <li>Change Management</li>
        <li>Transformation strategies</li>
        <li>Acquisition, Mergers & Divestures</li>
      </ul>
    </div>
  );
}
