const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 sm:h-12 w-8 sm:w-12 rounded-xl bg-gradient-to-br from-picto-primary to-picto-primary-dark center text-white font-bold">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18" />
          <path d="M12 3v18" />
        </svg>
      </div>
      <span className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">Rasakumar Vivekan</span>
    </div>
  );
};

export default Logo;


