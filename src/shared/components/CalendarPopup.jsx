import { useState } from "react";
import { months } from "../constants/AllDropDownData";

const CalendarPopup = ({
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear,
  firstDay,
  daysInMonth,
  onSelect,
  onClose,
  todayDate,
  startDate,       
  isEndCalendar,     
}) => {
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const currentYearNum = currentYear;
  const years = Array.from({ length: 21 }, (_, i) => currentYearNum - 10 + i);

  const startDateObj =
    startDate &&
    new Date(
      startDate.split("/")[2],
      startDate.split("/")[1] - 1,
      startDate.split("/")[0]
    );

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleSetDate = () => {
    if (selectedDay) {
      onSelect(selectedDay);
    }
    onClose();
  };

  return (
    <div className="absolute z-50 mt-2 bg-white shadow-xl rounded-xl p-4 w-[280px]">
    
      <div className="flex justify-between items-center px-2 mb-4">
        <button
          onClick={() =>
            currentMonth === 0
              ? (setCurrentMonth(11), setCurrentYear(currentYear - 1))
              : setCurrentMonth(currentMonth - 1)
          }
        >
          <span className="text-[#606060] text-lg">&#8249;</span>
        </button>

        <div className="flex items-center gap-2">
    
          <div className="relative">
            <button
              onClick={() => {
                setShowMonthPicker(!showMonthPicker);
                setShowYearPicker(false);
              }}
              className="text-[#1E1E1E] font-medium flex items-center gap-1"
            >
              {months[currentMonth]}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  showMonthPicker ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showMonthPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg p-2 w-32 z-10 grid grid-cols-3 gap-1">
                {months.map((month, index) => (
                  <button
                    key={month}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentMonth(index);
                      setShowMonthPicker(false);
                    }}
                    className={`text-xs p-1 rounded hover:bg-gray-100 ${
                      currentMonth === index ? "bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    {month.substring(0, 3)}
                  </button>
                ))}
              </div>
            )}
          </div>

         
          <div className="relative">
            <button
              onClick={() => {
                setShowYearPicker(!showYearPicker);
                setShowMonthPicker(false);
              }}
              className="text-[#1E1E1E] font-medium flex items-center gap-1"
            >
              {currentYear}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  showYearPicker ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showYearPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg p-2 w-24 max-h-48 overflow-y-auto z-10 grid grid-cols-1 gap-1">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentYear(year);
                      setShowYearPicker(false);
                    }}
                    className={`text-xs p-2 rounded hover:bg-gray-100 ${
                      currentYear === year ? "bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() =>
            currentMonth === 11
              ? (setCurrentMonth(0), setCurrentYear(currentYear + 1))
              : setCurrentMonth(currentMonth + 1)
          }
        >
          <span className="text-[#606060] text-lg">&#8250;</span>
        </button>
      </div>


      {(showMonthPicker || showYearPicker) && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setShowMonthPicker(false);
            setShowYearPicker(false);
          }}
        />
      )}

      {/* Days */}
      <div className="grid grid-cols-7 text-center text-[#606060] text-sm mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center gap-y-2">
        {Array(firstDay)
          .fill(null)
          .map((_, i) => (
            <div key={i}></div>
          ))}

        {Array(daysInMonth)
          .fill(null)
          .map((_, i) => {
            const day = i + 1;

            const currentLoopDate = new Date(currentYear, currentMonth, day);

            const disableDay =
              isEndCalendar && startDateObj && currentLoopDate < startDateObj;

            const isSelected = selectedDay === day;
            const isToday =
              day === todayDate &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear();

            return (
              <div key={i}>
                <button
                  disabled={disableDay}
                  onClick={() => !disableDay && handleDaySelect(day)}
                  className={`w-8 h-8 rounded-lg text-sm 
                    ${
                      disableDay
                        ? "text-gray-300 cursor-not-allowed"
                        : "hover:bg-primary/10"
                    }
                    ${
                      isSelected
                        ? "bg-primary text-white"
                        : isToday
                        ? "border border-primary"
                        : ""
                    }
                  `}
                >
                  {day}
                </button>
              </div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center gap-2 mt-4">
        <button onClick={onClose} className=" border border-[#CBD5E1]  px-4 py-2 rounded-lg  w-full cursor-pointer text-sm">
          Cancel
        </button>
        <button
          onClick={handleSetDate}
          className="rounded-lg bg-primary w-full  cursor-pointer px-4 py-2 text-white text-sm"
         
        >
          Set Date
        </button>
      </div>
    </div>
  );
};

export default CalendarPopup;
