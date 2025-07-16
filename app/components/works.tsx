import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

interface NavbarProps {
  isDarkMode: boolean;
}
const Works = ({ isDarkMode }: NavbarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-6 scroll-mt-20 font-Ovo"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My latest work
      </motion.h2>
      <motion.p 
       initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center mx-auto mt-5 mb-12 max-w-4xl">
        Here’s a selection of the projects I’ve built — from desktop software
        and responsive websites to mobile applications. Each project reflects my
        focus on creating functional, user-friendly solutions tailored to
        real-world needs.
      </motion.p>

      <motion.div 
       initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
       className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <motion.div           
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center group-hover:bg-rose-200 shadow-[2px_2px_0_#000]">
                <Image src={assets.send_icon} alt="send" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
       initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-rose-200 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Works;
