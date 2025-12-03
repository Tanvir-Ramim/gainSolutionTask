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
   // pagi
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100; 


  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 3) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages;
  };

  const changePage = (page) => {
    if (page === "..." || page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  //  status handlers
  const handleApprove = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index].status = "approved";
      return newStatuses;
    });
  };

  const handleReject = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index].status = "rejected";
      return newStatuses;
    });
  };

  const handleUndo = (index) => {
    setStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index].status = "default";
      return newStatuses;
    });
  };

  return (
    <div className="bg-white px-4 py-3 border border-gray-300 rounded-xl mt-6 overflow-hidden">
      <TableHeader />

      {/* TABLE */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
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
                className="border-b text-[16px] text-[#464255] border-[#E1E1E1] hover:bg-gray-50"
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
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      colour[item.department] || "bg-gray-100 text-gray-600"
                    } flex items-center gap-1.5`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {item.department}
                  </span>
                </td>
                <td className="p-3">{item.project}</td>
                <td className="p-3 line-clamp-1">{item.notes}</td>

                <td className="p-3">
                  <div className="min-w-[180px] flex justify-between">
                    {/* Default */}
                    {statuses[i]?.status === "default" && (
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleReject(i)}
                          className="text-[#E02600] font-semibold text-[12px] hover:opacity-80 px-2 py-1.5"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleApprove(i)}
                          className="bg-[#089624] px-5 rounded-lg py-1.5 text-white text-[12px] hover:bg-[#06751c]"
                        >
                          Approve
                        </button>
                      </div>
                    )}

                    {/* Approved */}
                    {statuses[i]?.status === "approved" && (
                      <div className="flex items-center space-x-2">
                        <button
                          disabled
                          className="flex items-center border-[1.5px] border-[#089624] space-x-1 px-[10px] py-1.5 rounded-lg text-[#089624] text-[12px] bg-[#E6F4E9]"
                        >
                          <IconSvg name="rightIcon" />
                          <span>Approved</span>
                        </button>
                        <button
                          onClick={() => handleUndo(i)}
                          className="border rounded-lg border-[#DBDFE2] py-1.5 px-2 text-[12px] hover:bg-gray-50"
                        >
                          Undo
                        </button>
                      </div>
                    )}

                    {/* Rejected */}
                    {statuses[i]?.status === "rejected" && (
                      <div className="flex items-center space-x-2">
                        <button
                          disabled
                          className="flex items-center border-[1.5px] border-[#E02600] space-x-1 px-3 py-1.5 rounded-lg text-[#E02600] text-[12px] bg-[#FEF7F4]"
                        >
                          <IconSvg name="crossIcon" />
                          <span>Rejected</span>
                        </button>
                        <button
                          onClick={() => handleUndo(i)}
                          className="border rounded-lg border-[#DBDFE2] py-1.5 px-2 text-[12px] hover:bg-gray-50"
                        >
                          Undo
                        </button>
                      </div>
                    )}

                    <div className="border rounded-lg py-1.5 px-1 cursor-pointer border-[#DBDFE2]">
                      <IconSvg name="threeDot" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- pagi ---------------- */}
      <div className="mt-6 flex items-center space-x-3 text-[#464255] font-medium justify-end">
      
      <button
        onClick={() => changePage(currentPage - 1)}
        className="flex items-center gap-1 hover:text-black transition-colors duration-200"
      >
        <span className="text-lg">←</span> Previous
      </button>

      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => changePage(page)}
          className={`
            w-8 h-8 flex items-center justify-center rounded-md
            transition-all duration-200 ease-in-out
            ${
              page === currentPage
                ? "bg-white border border-gray-300 shadow text-black"
                : "hover:bg-gray-200 border border-transparent"
            }
          `}
          style={{ minWidth: "32px" }} 
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => changePage(currentPage + 1)}
        className="flex items-center gap-1 hover:text-black transition-colors duration-200"
      >
        Next <span className="text-lg">→</span>
      </button>
    </div>
    </div>
  );
};

export default Table;
