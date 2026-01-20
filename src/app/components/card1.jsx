import React from "react";

const Card1 = ({ title, description, count, label, accentColor, dotColor }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.28)] text-white rounded-lg p-8 max-w-md">
      <div className={`border-l-4 ${accentColor} pl-4 mb-6`}>
        <h2 className="text-[28px] font-normal">{title}</h2>
      </div>

      <p className="text-[18px] text-gray-400 leading-relaxed mb-8">
        {description}
      </p>

      <div>
        <div className="relative inline-block">
          <div
            className={`absolute top-1 -left-2 rounded-full ${dotColor}`}
            style={{ width: "4.29px", height: "4.29px" }}
          ></div>

          <p className="text-[25px] font-normal">{count}</p>
        </div>

        <p className="text-[16px] text-gray-500 font-medium tracking-wider pt-4">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Card1;
