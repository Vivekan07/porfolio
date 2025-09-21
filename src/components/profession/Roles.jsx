import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="group relative my-3 rounded-xl border border-gray-200/80 bg-white p-3 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-picto-primary/0 to-picto-primary/0 transition-all duration-300 ${mouseHover ? "from-picto-primary/5 to-picto-primary/10" : ""}`}></div>
      <div className="relative flex items-start gap-3">
        <div className="shrink-0 h-8 w-8 rounded-lg bg-picto-primary/10 center text-picto-primary font-semibold">
          {role?.title?.[0] || "S"}
        </div>
        <div>
          <p className="text-base sm:text-[18px] font-semibold text-gray-900">
            {role?.title}
          </p>
          <p className="mt-1.5 text-[12px] sm:text-[13px] text-gray-600">
            {role?.description}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-picto-primary/80 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </div>
    </div>
  );
};

export default Roles;
