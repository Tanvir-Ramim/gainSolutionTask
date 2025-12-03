import React, { useState } from "react";
import IconSvg from "../utils/IconSvg";
import CalendarPopup from "./CalendarPopup";

const DateRangeModal = ({ setIsModalOpen }) => {
  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [showStartCal, setShowStartCal] = useState(false);
  const [showEndCal, setShowEndCal] = useState(false);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  // const [todayDate] = useState();

  const dateRanges = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateSelect = (date, type) => {
    const formatted = `${String(date).padStart(2, "0")}/${String(
      currentMonth + 1
    ).padStart(2, "0")}/${currentYear}`;

    if (type === "start") {
      setStartDate(formatted);
      setEndDateError("");
    } else {
      setEndDate(formatted);
    }
  };

  // useEffect(() => {
  //   if (showStartCal) {
  //     const today = new Date();
  //     setCurrentMonth(today.getMonth());
  //     setCurrentYear(today.getFullYear());
  //     setTodayDate(today.getDate());
  //   }
  // }, [showStartCal]);

  // useEffect(() => {
  //   if (showEndCal) {
  //     const today = new Date();
  //     setCurrentMonth(today.getMonth());
  //     setCurrentYear(today.getFullYear());
  //     setTodayDate(today.getDate());
  //   }
  // }, [showEndCal]);

  return (
    <div className="px-4 py-2 relative">
      {/* Close */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute right-6 top-6"
      >
        <IconSvg name="crossModal" />
      </button>

      {/* CONTENT */}
      <div className="flex gap-6 mt-4">
        {/* Date Range */}
        <div className="w-[50%]">
          <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
            Date Range
          </label>

          <div className="border max-w-[268px] border-[#DFE0EB] rounded-lg px-4 flex items-center justify-between cursor-pointer">
            <select
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              className="w-full bg-transparent py-2.5 outline-none text-sm text-[#1E1E1E]"
            >
              {dateRanges.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Start Date */}
        <div className="relative">
          <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
            Start date
          </label>

          <div
            className="border max-w-[172px] border-[#DFE0EB] rounded-lg px-4 flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setShowStartCal(true);
              setShowEndCal(false);
            }}
          >
            <input
              type="text"
              value={startDate || "dd/mm/yy"}
              readOnly
              className={`w-full py-2.5 bg-transparent outline-none text-sm ${
                !startDate && "text-[#A4A4A4]"
              }`}
            />
            <IconSvg name="calendar" />
          </div>

          {/* Calendar Popup */}
          {showStartCal && (
            <CalendarPopup
              currentMonth={currentMonth}
              currentYear={currentYear}
              setCurrentMonth={setCurrentMonth}
              setCurrentYear={setCurrentYear}
              firstDay={firstDay}
              daysInMonth={daysInMonth}
              onSelect={(d) => handleDateSelect(d, "start")}
              onClose={() => setShowStartCal(false)}
              todayDate={today.getDate()}
              isEndCalendar={false}
              startDate={null}
            />
          )}
        </div>

        {/* End Date */}
        <div className="relative">
          <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
            End date
          </label>

          <div
            className="border max-w-[172px] border-[#DFE0EB] rounded-lg px-4 flex items-center gap-2 cursor-pointer"
            onClick={() => {
              if (!startDate) {
                setEndDateError("select start date first");
                return;
              }

              setEndDateError("");
              setShowEndCal(true);
              setShowStartCal(false);
            }}
          >
            <input
              type="text"
              value={endDate || "dd/mm/yy"}
              readOnly
              className={`w-full py-2.5 bg-transparent outline-none text-sm ${
                !endDate && "text-[#A4A4A4]"
              }`}
            />
            <IconSvg name="calendar" />
          </div>

          {/* ERROR MESSAGE */}
          {endDateError && (
            <p className="text-red-500 text-xs mt-1">{endDateError}</p>
          )}

          {/* CALENDAR */}
          {showEndCal && (
            <CalendarPopup
              currentMonth={currentMonth}
              currentYear={currentYear}
              setCurrentMonth={setCurrentMonth}
              setCurrentYear={setCurrentYear}
              firstDay={firstDay}
              daysInMonth={daysInMonth}
              onSelect={(d) => handleDateSelect(d, "end")}
              onClose={() => setShowEndCal(false)}
              todayDate={today.getDate()}
              startDate={startDate}
              isEndCalendar={true}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center gap-6 mt-10">
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-[#606060] text-base"
        >
          Cancel
        </button>

        <button
          className="h-[46px] px-8 rounded-lg text-white text-base"
          style={{ backgroundColor: "#3E50F7" }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DateRangeModal;
