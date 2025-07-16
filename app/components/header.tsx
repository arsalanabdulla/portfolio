import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 font-Ovo">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
      initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
       className="flex items-center gap-2 text-xl md:text-2xl mb-3">
        Hi! i&apos;m Arsalan Abdulla{" "}
        <Image src={assets.hand_icon} alt="hand image" className="w-6" />
      </motion.h3>
      <motion.h1
      initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
       className="text-3xl sm:text-6xl lg:text-[66px]">
        Web, mobile, and desktop developer.
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      className="max-w-2xl mx-auto ">
        Crafting seamless, high-performance applications across desktop, web,
        and mobile platforms with a focus on user experience and reliability.
      </motion.p>
      <div className="font-Outfit flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 rounded-full border border-white flex items-center gap-2 bg-black text-white dark:bg-transparent"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </motion.a>
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
          href="/Arsalan-CV.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 dark:text-black bg-white"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
