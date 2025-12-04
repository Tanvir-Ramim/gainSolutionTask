import { useState } from "react";

import IconSvg from "../utils/IconSvg";
import AddEmployeeModa from "./AddEmployeeModa";
import "./ModalAndScroll.css";
import MainButton from "../utils/MainButton";
const addButtonIcon = <IconSvg name={"add"}></IconSvg>;
const downloadIcon = <IconSvg name={"download"}></IconSvg>;
const TableTitle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex   @xl:flex-row flex-col @xl:items-center justify-between">
      <div className="flex items-center gap-3    w-fit">
        <div className="md:px-4 px-3 border border-gray-300 md:py-4 py-2 bg-white   rounded-xl flex items-center justify-center">
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

      <div className="flex h-fit @xl:mt-0 mt-6 gap-4">
        <MainButton
          icon={downloadIcon}
          iconPosition={"right"}
          className=" text-black @sm:text-base text-[13px] bg-white border border-gray-300"
        >
          Export Excel
        </MainButton>
        <div onClick={() => setIsModalOpen(true)}>
          <MainButton icon={addButtonIcon} className="bg-primary @sm:text-base text-[13px] text-white">
            Add Employee
          </MainButton>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0  z-50 flex items-center justify-center backdrop-blur-sm bg-white/50 ">
          <div className="bg-white  shadow-xl rounded-lg    max-w-[882px] modal-slide-down relative">
            <AddEmployeeModa setIsModalOpen={setIsModalOpen}></AddEmployeeModa>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableTitle;
