"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useCombinedRefs } from "@/lib/utils";

export default function Contact() {
  // const { ref } = useSectionInView("Contact");
  // const ref = useRef<HTMLFormElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { ref: inViewRef } = useSectionInView("Contact");
  const combinedRef = useCombinedRefs(formRef, inViewRef);

  return (
    <motion.section
      id="contact"
      ref={inViewRef}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          ELSAZAMBRANO516@GMAIL.COM
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={combinedRef}
        className="flex flex-col mt-10 "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);          

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          formRef.current?.reset()
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}