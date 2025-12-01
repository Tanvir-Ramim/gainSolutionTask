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
    if (!menuOpen) {
      setProfileOpen(false);
      setSearchOpen(false);
    }
  };
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    if (!profileOpen) {
      setMenuOpen(false);
      setSearchOpen(false);
    }
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setMenuOpen(false);
      setProfileOpen(false);
    }
  };

  return (
    <div className="w-full  bg-white shadow-black/5 shadow lg:px-9 md:px-6 xs:px-3 px-2 sm:py-4.5 py-3">
      <div className="flex items-center max-w-[1800px]  mx-auto justify-between">
        {/* left side */}
        <div className="flex lg:w-[20%]  items-center gap-2">
          <img src={logo} alt="logo" className="h-7" />
        </div>

        {/* middle */}
        <div className="hidden @2xl:flex items-center gap-8 text-[15px]">
          {navdata?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className={`text-[18px] ${
                item?.title === "Employee" ? "text-primary" : "text-[#5A5B5F]"
              }`}
            >
              {item?.title}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden xl:flex items-center   gap-6">
          <div className="">
            <div className="flex items-center gap-2 border border-[#DBDFE2] rounded-lg px-4 py-1">
              <IconSvg name={"search"}></IconSvg>

              <input
                type="text"
                placeholder="Search Anything...."
                className="w-full outline-none placeholder:text-[16px] placeholder:text-[#464255]"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-between  items-center gap-3">
            <div className="whitespace-nowrap">
              <p className="font-bold text-[16px]">{profileData?.name}</p>
              <p className="text-[#5A5B5F] text-[14px]">{profileData?.date}</p>
            </div>
            <img
              src={profileData?.picture}
              alt="profile"
              className="h-[46px] b w-[46px] rounded border-[#CDCFD2] border object-cover"
            />
          </div>
        </div>

        <div className="flex xl:hidden items-center gap-3">
          <button onClick={toggleSearch} className="p-2">
          
             <IconSvg name={"search2"}></IconSvg>
          </button>

          <button onClick={toggleProfile}>
            <img
              src={profileData.picture}
              alt="profile"
              className="h-8 w-8 rounded-full border border-[#CDCFD2] object-cover"
            />
          </button>

          {/* menu icon */}
          <button onClick={toggleMenu} className="p-2 cursor-pointer  @2xl:hidden block">
            {menuOpen ? (
            
                   <IconSvg name={"menu1"}></IconSvg>
            ) : (
                  <IconSvg name={"menu2"}></IconSvg>
         
            )}
          </button>
        </div>
      </div>

      {/*    ///////////////////////       all mobile                 ////////////////////////// */}
      {/* mobile search */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          searchOpen ? "max-h-[70px] mt-3" : "max-h-0"
        }`}
      >
        <div className="flex items-center gap-2 border border-[#DBDFE2] rounded-lg px-4 py-1">
          <IconSvg name={"search1"}></IconSvg>
          <input
            type="text"
            placeholder="Search Anything...."
            className="w-full outline-none placeholder:text-[16px]"
          />
        </div>
      </div>

      {/* mobile menu*/}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] mt-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-[18px] text-[#5A5B5F]">
          {navdata?.map((item, index) => (
            <a key={index} href={item?.link} className="py-2">
              {item?.title}
            </a>
          ))}
        </div>
      </div>

      {/* mobile profile */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          profileOpen ? "max-h-[200px] mt-3" : "max-h-0"
        }`}
      >
        <div className="flex items-center gap-3 text-[16px]">
          <img
            src={profileData.picture}
            alt="profile"
            className="h-12 w-12 rounded-full border border-[#CDCFD2] object-cover"
          />
          <div>
            <p className="font-bold text-[16px]">{profileData?.name}</p>
            <p className="text-[#5A5B5F] text-[14px]">{profileData?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
