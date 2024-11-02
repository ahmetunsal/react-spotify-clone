import React from "react";



const RangeSlider = ({className}) => {
  return (
    <div className={`flex items-center rounded-full w-full h-2 bg-zinc-600 relative group`}>
      <div className={`w-1/3 h-full flex items-center bg-zinc-400 rounded-full ${className} duration-200 ease-in`}>
        <div className="w-full hidden opacity-0 relative items-center group-hover:flex group-hover:opacity-100 duration-150 ease-in">
          <div className="w-3 h-3 right-0 opacity-0 bg-white shadow-lg absolute rounded-full group-hover:opacity-100 duration-300 ease-in"></div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
