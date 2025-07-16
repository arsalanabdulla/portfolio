import { assets } from "@/assets/assets";
import Image from "next/image";
interface NavbarProps {
  isDarkMode: boolean;  
}
const Footer = ({isDarkMode}:NavbarProps) => {
    return ( 
        <div className="mt-20">
            <div className="text-center">
                <Image src={isDarkMode?assets.logo_dark:assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt="mail" className="w-6" /><span className="tracking-widest">arsalanabdulla5@gmail.com</span> 
            </div>
            </div>
            <div className="text-center sm:flex items-center justify-between mt-12 border-t border-gray-400 mx-[10%] py-6">
                <p className="text-gray-500 dark:text-white">© 2025 Arsalan Abdulla. All rights reserved.</p>  
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/arsalanabdulla">Github</a></li>
                    <li><a target="_blank" href="https://iq.linkedin.com/in/arsalan-abdulla-4a55a3141">LinkedIn</a></li>
                    <li><a target="_blank" href="https://web.facebook.com/Arsalan.Abdolla">Facebook</a></li>
                </ul>
                </div>       
        </div>
     );
}
 
export default Footer;