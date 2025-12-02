import React from "react";
import IconSvg from "../utils/IconSvg";
import {
  tableSearchDepartmentData,
  tableSearchStatusData,
} from "../constants/AllDropDownData";

const TableHeader = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between py-4">
        <h2 className="text-lg font-semibold text-[#0A0A0A]">
          Employee Time Logs
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-[#DBDFE2] rounded-lg px-4 py-2">
            <IconSvg name={"search"}></IconSvg>

            <input
              type="text"
              placeholder="Search by ID, Name"
              className="w-full outline-none placeholder:text-[16px] placeholder:text-[#464255]"
            />
          </div>

          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
            <IconSvg name={"calendar"}></IconSvg>
            Date Range
          </button>

          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none">
            <option disabled selected hidden>
              Status
            </option>
            {tableSearchStatusData?.map((status) => (
              <option key={status?.id}>{status?.name}</option>
            ))}
          </select>

          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none">
            <option disabled selected hidden>
              Department
            </option>

            {tableSearchDepartmentData?.map((status) => (
              <option key={status?.id}>{status?.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
