interface Props {
  title: string;
}

const OddsCard = ({ title }: Props) => {
  return (
    <div className="bg-brand-gray hover:bg-[#11111180] duration-300 flex flex-col gap-4 py-4 px-3 lg:py-5 lg:px-4 rounded-md snap-start snap-normal resize">
      <p className="text-[#D7DBE0] text-center font-medium text-xs sm:text-sm ">
        {title}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#D9D9D91A] rounded-full p-2 size-12 md:size-14 flex items-center justify-center">
            <img src="./chelsea_logo.png" alt="chelsea logo" />
          </div>
          <p className="text-sm">Arsenal</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm md:text-base">Today</p>
          <p className="text-xs md:text-sm">23:00</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#D9D9D91A] rounded-full p-2 size-12 md:size-14 flex items-center justify-center">
            <img src="./chelsea_logo.png" alt="chelsea logo" />
          </div>
          <p className="text-sm">Chelsea</p>
        </div>
      </div>

      <div className="flex justify-around gap-1 lg:gap-2 text-xs md:text-sm">
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1 cursor-pointer">
          <span className="text-gray-400">1 </span>
          <span>1.22</span>
        </button>
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1 cursor-pointer">
          <span className="text-gray-400">X </span> <span>1.3</span>
        </button>
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1 cursor-pointer">
          <span className="text-gray-400">2 </span>
          <span>7.06</span>
        </button>
      </div>
    </div>
  );
};

export default OddsCard;
