import Image from "next/image";
import Link from "next/link";
import logoDark from "/public/images/logoDark.png";
import Photo from '/public/images/photo.png'

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
        <Link href="/">
          <div>
           {/*  <Image width={80} height={80} src={logoDark} alt="logoDark" /> */}
           Open-Voice
          </div>
        </Link>
        <div>
          <ul className="hidden gap-8 text-sm font-semibold uppercase lg:inline-flex">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <Image
              className="w-8 h-8 rounded-full"
              src={Photo}
              alt="logo"
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
