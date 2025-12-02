import { useState } from "react";
import TableHeader from "./TableHeader";
import IconSvg from "../utils/IconSvg";
import { mockData } from "../constants/TableData";

const colour = {
  Design: "bg-[#F0FDF4] text-[#16A34A]",
  Development: "bg-[#F0F6FD] text-[#1653A3]",
  Product: "bg-[#FDF3F0] text-[#A36616]",
  Sales: "bg-[#F9F0FD] text-[#8216A3]",
};

const Table = () => {
  const [statuses, setStatuses] = useState(
    mockData.map(() => ({ status: "default", id: null }))
  );

  const handleApprove = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = { ...newStatuses[index], status: "approved" };
      return newStatuses;
    });
  };

  const handleReject = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = { ...newStatuses[index], status: "rejected" };
      return newStatuses;
    });
  };

  const handleUndo = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = { ...newStatuses[index], status: "default" };
      return newStatuses;
    });
  };

  return (
    <div className="bg-white px-4 py-3 border border-gray-300 rounded-xl mt-6 overflow-hidden">
      <TableHeader></TableHeader>
      <div>
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead className="">
              <tr className="bg-[#F3F5F6] text-[#464255] text-[16px] font-bold">
                <th className="p-3 rounded-l-lg">ID</th>
                <th className="p-3">Employee Name</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Start Time - End Time</th>
                <th className="p-3">Due Hours</th>
                <th className="p-3">Department</th>
                <th className="p-3">Project</th>
                <th className="p-3">Notes</th>
                <th className="p-3 rounded-r-lg">Action</th>
              </tr>
            </thead>

            <tbody>
              {mockData.map((item, i) => (
                <tr
                  key={i}
                  className="border-b text-[16px] text-[#464255] border-[#E1E1E1] hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.duration}</td>
                  <td className="p-3">
                    {item.start} - {item.end}
                  </td>
                  <td className="p-3">{item.due}</td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-1 w-fit rounded-full text-xs font-medium ${
                        colour[item.department] || "bg-gray-100 text-gray-600"
                      } flex items-center gap-1.5`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      <span className="text-current">{item.department}</span>
                    </span>
                  </td>
                  <td className="p-3">{item.project}</td>
                  <td className="p-3 line-clamp-1">{item.notes}</td>
                  <td className="p-3">
                    <div className="min-w-[180px] flex justify-between">
                      {statuses[i]?.status === "default" && (
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleReject(i)}
                            className="text-[#E02600] cursor-pointer font-semibold text-[12px] hover:opacity-80 transition-opacity duration-200 px-2 py-1.5  "
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleApprove(i)}
                            className="bg-[#089624] cursor-pointer px-5 rounded-lg py-1.5 text-white text-[12px] hover:bg-[#06751c] transition-colors duration-200"
                          >
                            Approve
                          </button>
                        </div>
                      )}
                    
                      {statuses[i]?.status === "approved" && (
                        <div className="flex items-center space-x-2 transition-all duration-300">
                          <button
                            disabled
                            className="flex items-center border-[1.5px] border-[#089624] space-x-1 px-[10px] py-1.5 rounded-lg text-[#089624] text-[12px] bg-[#E6F4E9] cursor-not-allowed transition-all duration-200"
                          >
                            <IconSvg name={"rightIcon"} />
                            <span>Approved</span>
                          </button>
                          <button
                            onClick={() => handleUndo(i)}
                            className="border rounded-lg border-[#DBDFE2] py-1.5 px-2 text-[12px] cursor-pointer hover:bg-gray-50 transition-all duration-200"
                          >
                            Undo
                          </button>
                        </div>
                      )}

                      {statuses[i]?.status === "rejected" && (
                        <div className="flex items-center space-x-2 transition-all duration-300">
                          <button
                            disabled
                            className="flex items-center border-[1.5px] border-[#E02600] space-x-1 px-3 py-1.5 rounded-lg text-[#E02600] text-[12px] bg-[#FEF7F4] cursor-not-allowed transition-all duration-200"
                          >
                            <IconSvg name={"crossIcon"} />
                            <span>Rejected</span>
                          </button>
                          <button
                            onClick={() => handleUndo(i)}
                            className="border rounded-lg border-[#DBDFE2] py-1.5 px-2 text-[12px] cursor-pointer hover:bg-gray-50 transition-all duration-200"
                          >
                            Undo
                          </button>
                        </div>
                      )}
                        <div className="border rounded-lg pb-1 pt-1.5 cursor-pointer px-1 border-[#DBDFE2]">
                        <IconSvg name={"threeDot"} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
