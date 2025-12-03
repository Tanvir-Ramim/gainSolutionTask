import { useEffect, useRef, useState } from "react";
import IconSvg from "../utils/IconSvg";
import CalendarPopup from "./CalendarPopup";
import CustomDropdown from "./CustomDropdown";
import { dateRanges } from "../constants/AllDropDownData";

const DateRangeModal = ({ setIsModalOpen }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [showStartCal, setShowStartCal] = useState(false);
  const [showEndCal, setShowEndCal] = useState(false);
  const calendarRef = useRef(null);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  // const [todayDate] = useState();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowStartCal(false);
        setShowEndCal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:pr-16 md:pr-10 sm:pr-6  pr-4 md:pl-6 sm:pl-4 pl-3 pt-9 pb-5 relative">
      {/* Close */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute cursor-pointer right-6 top-6"
      >
        <IconSvg name="crossModal" />
      </button>

      <div className="flex sm:flex-row flex-col gap-6 mt-4">
        <div className="sm:w-[43%] ">
          <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
            Date Range
          </label>

          <div className=" rounded-lg cursor-pointer">
            <div className="md:w-[268px] min-w-[268px]">
              <CustomDropdown data={dateRanges} />
            </div>
          </div>
        </div>

        <div className="flex  md:gap-5 gap-2">
          <div className="relative">
            <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
              Start date
            </label>

            <div
              className="border max-w-[172px] border-[#DFE0EB] rounded-lg sm:px-4 px-2 flex items-center gap-2 cursor-pointer"
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

            {showStartCal && (
              <div ref={calendarRef}>
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
              </div>
            )}
            <div className="@4xl:ml-20 @2xl:ml-10 @md:ml-8 @xs:ml-2.5">
              {showEndCal && (
                <div ref={calendarRef}>
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
                </div>
              )}
            </div>
          </div>

          <div className="relative">
  <label className="block text-[#1E1E1E] text-sm font-medium mb-2">
    End date
  </label>

  <div className="relative">
    <div
      className="border max-w-[172px] border-[#DFE0EB] rounded-lg sm:px-4 px-2 flex items-center gap-2 cursor-pointer"
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
    
    {/* Error message with absolute positioning */}
    {endDateError && (
      <p className="absolute left-0 -bottom-6 text-red-500 text-xs">
        {endDateError}
      </p>
    )}
  </div>
</div>
        </div>
      </div>

      <div className="flex justify-end  items-center gap-6 mt-9">
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-[#606060]  cursor-pointer  text-base"
        >
          Cancel
        </button>

        <button
          onClick={() => setIsModalOpen(false)}
          className=" md:px-10 px-7 md:py-1.5 bg-primary cursor-pointer py-1 rounded-lg text-white text-base"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DateRangeModal;
