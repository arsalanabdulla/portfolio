import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
    return ( 
        <motion.div 
              initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
        id="Services" className="w-full px-[12%] pt-6 pb-32 scroll-mt-20 font-Ovo">
            <motion.h4 
            initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-2 text-lg">What i offers</motion.h4>
            <motion.h2 
            initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-5xl">My services</motion.h2>
            <motion.p
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
             className="text-center mx-auto mt-5 mb-12 max-w-2xl">I build modern, reliable apps for desktop, web, and mobile — with a strong focus on clean design, smooth performance, and a great user experience.</motion.p>
            <motion.div 
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 ">
                {serviceData.map(({icon,title,description,link},index) => (
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                     className="border border-gray-400 rounded-lg py-12 px-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-sm hover:shadow-boxShadow dark:hover:bg-darkHover dark:hover:shadow-white" key={index}>
                        <Image className="w-10" src={icon} alt={title} />
                        <h3 className="my-4 text-lg text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-gray-600 text-sm leading-5 dark:text-white">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5">Read more <Image src={assets.right_arrow} alt="readmore" className="w-4"/></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
     );
}
 
export default Services;