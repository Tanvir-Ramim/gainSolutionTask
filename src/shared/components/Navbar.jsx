import { useState } from "react";
import logo from "../../assets/logo.png";
import dp from "../../assets/dp.png";
import navdata from "../constants/NavbarData";
import IconSvg from "../utils/IconSvg";

const profileData = {
  name: "Sadik Hasan",
  date: "Friday, 29 September",
  picture: dp,
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProfileOpen(false);
    setSearchOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <div className="relative w-full bg-white shadow-black/5 shadow lg:px-9 md:px-6 px-3 sm:py-4.5 py-3 z-50">
      <div className="flex items-center max-w-[1900px] mx-auto justify-between">
        {/* Left */}
        <div className="flex lg:w-[20%] items-center gap-2">
          <img src={logo} alt="logo" className="h-7" />
        </div>

        {/* Middle */}
        <div className="hidden @2xl:flex items-center gap-8">
          {navdata?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className={`md:text-[18px] text-[17px] ${
                item?.title === "Employee"
                  ? "text-primary"
                  : "text-[#5A5B5F]"
              }`}
            >
              {item?.title}
            </a>
          ))}
        </div>

        {/* Right Desktop */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-2 border border-[#DBDFE2] rounded-lg px-4 py-1">
            <IconSvg name={"search"} />
            <input
              type="text"
              placeholder="Search Anything...."
              className="w-full outline-none placeholder:text-[16px] placeholder:text-[#464255]"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="whitespace-nowrap text-right">
              <p className="font-bold text-[16px]">{profileData?.name}</p>
              <p className="text-[#5A5B5F] text-[14px]">
                {profileData?.date}
              </p>
            </div>
            <img
              src={profileData?.picture}
              alt="profile"
              className="h-[46px] w-[46px] rounded border border-[#CDCFD2] object-cover"
            />
          </div>
        </div>

     
        <div className="flex xl:hidden items-center  gap-4">
          <button onClick={toggleSearch} className="pt-2 cursor-pointer">
            <IconSvg name={"search2"} />
          </button>

          <button className="cursor-pointer" onClick={toggleProfile}>
            <img
              src={profileData.picture}
              alt="profile"
              className="h-7 w-7 rounded-full border border-[#CDCFD2] object-cover"
            />
          </button>

          <button
            onClick={toggleMenu}
            className=" cursor-pointer pt-1 @2xl:hidden block"
          >
            {menuOpen ? (
              <IconSvg size={32} name={"menu1"} />
            ) : (
              <IconSvg size={32} name={"menu2"} />
            )}
          </button>
        </div>
      </div>

      
      <div
        className={`xl:hidden absolute left-0 top-full w-full bg-white shadow-md z-40 transition-all duration-300 ${
          searchOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 border m-4 border-[#DBDFE2] rounded-lg px-4 py-2">
          <IconSvg name={"search1"} />
          <input
            type="text"
            placeholder="Search Anything...."
            className="w-full outline-none placeholder:text-[16px]"
          />
        </div>
      </div>

    
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-white shadow-lg z-50 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 text-[16px] text-[#5A5B5F] p-4">
          {navdata?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className="py-2 border-b border-b-gray-300"
            >
              {item?.title}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`xl:hidden absolute left-0 top-full w-full bg-white shadow-md z-40 transition-all duration-300 ${
          profileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 p-4">
          <img
            src={profileData.picture}
            alt="profile"
            className="h-12 w-12 rounded-full border border-[#CDCFD2] object-cover"
          />
          <div>
            <p className="font-bold text-[16px]">
              {profileData?.name}
            </p>
            <p className="text-[#5A5B5F] text-[14px]">
              {profileData?.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
