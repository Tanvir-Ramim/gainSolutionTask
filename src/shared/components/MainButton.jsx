import React from "react";

const MainButton = ({
  children,
          
  icon,             
  iconPosition = "left",
  px = "sm:px-4 px-3 ",
  py = "sm:py-2 py-1.5 ",
  className = "",
  ...rest
}) => {




  return (
    <button
      className={`
        flex items-center  sm:gap-2 gap-0.5 rounded-lg  font-semibold  sm:text-base  xs:text-sm text-xs
     
        ${px} ${py} 
        transition-all duration-200 
        hover:opacity-90
        ${className}
      `}
      {...rest}
    >

     
      {icon && iconPosition === "left" && (
        <span className="flex items-center">
          {typeof icon === "string" ? (
            <img src={icon} alt="icon" className="w-4 h-4" />
          ) : icon}
        </span>
      )}


      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center">
          {typeof icon === "string" ? (
            <img src={icon} alt="icon" className="w-4 h-4" />
          ) : icon}
        </span>
      )}

    </button>
  );
};

export default MainButton;
