import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="z-50 flex flex-col items-center justify-center h-auto gap-10 px-8 py-10 mx-auto -mt-20 text-white max-w-7xl lg:gap-0 lg:flex-row lg:h-60 bg-bgColor">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase font-bodyFont text-white/50">
          My Blog
        </p>
        <h3 className="text-xl font-bold md:text-3xl">
          These 7 things will change the way you approach learning!
        </h3>
        <p className="text-xs text-white/50">Camila Hoffman / 4 weeks ago</p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        <div className="flex flex-col items-center w-full group">
          <MdOutlineMonitor className="text-4xl text-gray-300 duration-300 group-hover:text-white" />
          <p className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            watch on youtube
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full group">
          <IoMdHeartEmpty className="text-4xl text-gray-300 duration-300 group-hover:text-white" />
          <p className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            like our contents
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full group">
          <GoComment className="text-4xl text-gray-300 duration-300 group-hover:text-white" />
          <p className="text-xs md:text-sm font-titleFont text-white/50 group-hover:text-white">
            place comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
