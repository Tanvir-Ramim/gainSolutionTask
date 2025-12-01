import React from "react";
import Navbar from "../shared/components/Navbar";
import MainButton from "../shared/components/MainButton";
import IconSvg from "../shared/utils/IconSvg";

const addButtonIcon = <IconSvg name={"add"}></IconSvg>;
const downloadIcon = <IconSvg name={"download"}></IconSvg>;

const Home = () => {
  return (
    <div className="@container w-full">
      <Navbar></Navbar>
      <div className="max-w-[1800px]  mt-[34px] lg:px-9 md:px-6 xs:px-3 px-2  mx-auto">
        {/* table title */}
        <div className="flex  @xl:flex-row flex-col @xl:items-center justify-between">
          <div className="flex items-center gap-3    w-fit">
            <div className="md:px-4.5 px-3 border border-gray-300 md:py-4.5 py-3 bg-white   rounded-xl flex items-center justify-center">
              <IconSvg name={"user"}></IconSvg>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold text-gray-900 leading-tight">
          Employee Time
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-tight mt-1">
          Manage your time logs
        </p>
            </div>
          </div>

          <div className="flex h-fit gap-4">
            <MainButton
              icon={downloadIcon}
              iconPosition={"right"}
              className=" text-black bg-white border border-gray-300"
            >
              Export Excel
            </MainButton>
            <MainButton icon={addButtonIcon} className="bg-primary text-white">
              Add Employee
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
