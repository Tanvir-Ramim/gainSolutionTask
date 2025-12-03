import IconSvg from "../utils/IconSvg";
import {
  tableSearchDepartmentData,
  tableSearchStatusData,
} from "../constants/AllDropDownData";
import { useEffect, useRef, useState } from "react";
import DateRangeModal from "./DateRangeModal";
import "./ModalAndScroll.css";
import CustomDropdown from "./CustomDropdown";

const TableHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const dropdownRef = useRef(null);

  const handleSelect = (name) => {
    setSelectedStatus(name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      <div className="w-full flex @6xl:flex-row flex-col @6xl:items-center justify-between py-4">
        <h2 className="text-lg @6xl:w-[30%] font-semibold text-[#0A0A0A]">
          Employee Time Logs
        </h2>

        <div className="grid @6xl:grid-cols-5 @5xl:grid-cols-4 @md:grid-cols-2   items-center gap-3">
          <div className="flex items-center gap-2 @6xl:col-span-2 border border-[#DBDFE2] rounded-lg px-4 py-2">
            <IconSvg name={"search"}></IconSvg>

            <input
              type="text"
              placeholder="Search by ID, Name"
              className="w-full outline-none placeholder:text-[16px] placeholder:text-[#464255]"
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex cursor-pointer items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700"
          >
            <IconSvg name={"calendar"}></IconSvg>
            Date Range
          </button>

          {/* status drop donw */}
          <div className="relative  @6xl:w-40" ref={dropdownRef}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 cursor-pointer flex items-center justify-between"
            >
              <span>{selectedStatus}</span>
              <span
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                <IconSvg name="arrowUp" size={10} />
              </span>
            </div>

            {isOpen && (
              <div className="absolute w-full bg-white border border-[#E1E1E1] rounded-lg shadow-md z-10">
                {tableSearchStatusData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.name)}
                    className="flex items-center gap-2 px-4 py-2.5 border-[#E1E1E1] hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    {item.name === "Approved" && (
                      <IconSvg name="rightIcon" size={16} />
                    )}
                    {item.name === "Rejected" && (
                      <IconSvg name="crossIcon" size={16} />
                    )}

                    <span
                      className={`text-sm ${
                        item.name === "Approved"
                          ? "text-green-600"
                          : item.name === "Rejected"
                          ? "text-red-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* <select className="bg-white border  cursor-pointer border-[#E1E1E1] rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none">
            <option disabled selected hidden>
              Department
            </option>

            {tableSearchDepartmentData?.map((status) => (
              <option className="text-sm" key={status?.id}>
                {status?.name}
              </option>
            ))}
          </select> */}
          <CustomDropdown
            placeholder="Department"
            data={tableSearchDepartmentData}
          ></CustomDropdown>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-white modal-shadow    rounded-lg    modal-slide-down relative">
            <DateRangeModal setIsModalOpen={setIsModalOpen}></DateRangeModal>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableHeader;
