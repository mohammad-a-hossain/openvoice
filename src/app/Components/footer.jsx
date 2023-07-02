import Image from "next/image";
import logoLight from "/public/images/logoLight.png";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full px-4 py-10 bg-bgColor text-white/80">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto max-w-7xl md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoLight} width={80} height={80} alt="logo" />
          <p className="flex items-center gap-1 text-sm font-titleFont">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            reactBD || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="w-6 h-6 duration-300 cursor-pointer text-white/50 hover:text-white" />
          <BsFacebook className="w-6 h-6 duration-300 cursor-pointer text-white/50 hover:text-white" />
          <BsGithub className="w-6 h-6 duration-300 cursor-pointer text-white/50 hover:text-white" />
          <BsLinkedin className="w-6 h-6 duration-300 cursor-pointer text-white/50 hover:text-white" />
          <BsTwitter className="w-6 h-6 duration-300 cursor-pointer text-white/50 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
