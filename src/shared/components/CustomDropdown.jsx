import { useState, useEffect, useRef } from "react";
import IconSvg from "../utils/IconSvg";

const CustomDropdown = ({ data = [], placeholder = "Select", setState }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setState && setState(value);
    setOpen(false);
  };

  return (
    <div className="relative select-none  " ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="bg-white border border-[#E1E1E1] rounded-lg px-4 py-2.5 text-sm text-gray-700 cursor-pointer flex items-center justify-between"
      >
        <span>{selected || placeholder}</span>

        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <IconSvg name="arrowUp" size={10} />
        </span>
      </div>

      {open && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow">
          {data?.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.name)}
              className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50
                ${index !== data.length - 1 ? "border-b border-gray-200" : ""}
              `}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
