import React, { FormEvent } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(e.currentTarget); // Get form data
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
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

      {/* <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
      </p> */}

      <div className="flex flex-wrap justify-center gap-4">
        <a className="flex justify-center items-center rounded-full w-12 h-12 overflow-hidden hover:scale-110 shadow transition-transform duration-150 bg-white" href="mailto:bezirgenyaylymow955@gmail.com">
          <Icon icon={'logos:google-gmail'} width={30} height={30}/>
        </a>
        <a className="flex justify-center items-center rounded-full w-12 h-12 overflow-hidden hover:scale-110 shadow transition-transform duration-150 bg-white" href="https://t.me/Vati955" target="_blank">
          <Icon icon={'logos:telegram'} width={30} height={30}/>
        </a>
        <a className="flex justify-center items-center rounded-full w-12 h-12 overflow-hidden hover:scale-110 shadow transition-transform duration-150 bg-white" href="https://www.linkedin.com/in/bezirgen-yaylymow-5954ab244/" target="_blank">
          <Icon icon={'logos:linkedin-icon'} width={30} height={30}/>
        </a>
      </div>

      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit} // Handle form submission here
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}
