import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 flex flex-col ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 ${
          hover ? "bg-picto-primary" : "bg-[#DBEAFE80]"
        } text-center center rounded-md mx-auto sm:mx-0`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d={data?.svgPath} fill={`${hover ? "#FFFFFF" : "#2563eb"}`} />
        </svg>
      </div>
      <div className="mt-4 text-center sm:text-left">
        <p className="font-semibold text-lg sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-sm sm:text-base text-[#697482] leading-relaxed">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
