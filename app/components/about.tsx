import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
interface NavbarProps {
  isDarkMode: boolean;
}
const About = ({ isDarkMode }: NavbarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-6 scroll-mt-20 font-Ovo"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        About me
      </motion.h2>

      <motion.div
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8}}
       className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
        initial={{ opacity: 0,scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6}}
         className="w-64  sm:w-80 max-w-none rounded-3xl">
          <Image
            src={assets.user_image}            
            alt="user"
            className="w-full h-3/12 rounded-3xl"
          />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6,delay:0.8}}
        className="flex-1">
          <p className="mb-10 max-w-2xl ">
            I build modern, reliable apps for desktop, web, and mobile — with a
            strong focus on clean design, smooth performance, and a great user
            experience. Whether it&apos;s a business tool, a customer-facing
            app, or something in between, I enjoy turning ideas into polished,
            real-world products that work beautifully across platforms.
          </p>
          <motion.ul
          initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8,delay:1}}
           className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
              whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 shadow-sm hover:shadow-boxShadow dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
           initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
           className="my-4 text-gray-700 font-Ovo dark:text-white">
            Tools i use:
          </motion.h4>
          <motion.ul
          initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6,delay:1.5}}
           className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-300 shadow-sm hover:shadow-boxShadow dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image className="w-5 sm:w-7" src={tool} alt="tool" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
