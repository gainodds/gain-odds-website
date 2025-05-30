interface Props {
  title: string;
}

const OddsCard = ({ title }: Props) => {
  return (
    <div className="bg-[#1B2D3B] hover:bg-[#11111180] duration-300 flex flex-col gap-4 py-3 px-2 rounded-md">
      <p className="text-[#D7DBE0] text-center font-medium">{title}</p>

      <div className="flex justify-around  items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#D9D9D91A] rounded-full p-2">
            <img src="./chelsea_logo.png" alt="chelsea logo" />
          </div>
          <p className="text-sm">Arsenal</p>
        </div>
        <div>
          <p className="text-gray-400">Today</p>
          <p className="text-sm">23:00</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#D9D9D91A] rounded-full p-2">
            <img src="./chelsea_logo.png" alt="chelsea logo" />
          </div>
          <p className="text-sm">Chelsea</p>
        </div>
      </div>

      <div className="flex justify-around gap-1 text-sm">
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1">
          1 <span>1.22</span>
        </button>
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1">
          X <span>1.3</span>
        </button>
        <button className="border border-white/10 py-1 px-2 rounded flex gap-1">
          2 <span>7.06</span>
        </button>
      </div>
    </div>
  );
};

export default OddsCard;
