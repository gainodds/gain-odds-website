const LiveOddsTable = () => {
  const data = Array.from({ length: 8 });
  return (
    <div className="bg-brand-gray rounded-md space-y-4 divide-y-2 divide-divide">
      {/* live game Item */}
      {data.map((_, index) => (
        <div
          key={index}
          className="flex items-baseline justify-between gap-1 py-3 px-3 lg:py-5 lg:px-4 "
        >
          <div className="basis-1/2 space-y-3">
            <p className="text-xs md:text-sm">
              <span className="text-brand-green font-medium">19:00</span> United
              Arab Emirates - First Division
            </p>
            <div className="space-y-1 font-semibold text-sm md:text-base">
              <div className="flex items-center gap-8">
                <span className="flex items-center gap-1">
                  <div className="bg-[#D9D9D91A] rounded-full p-1 size-7 inline-flex items-center justify-center">
                    <img src="./chelsea_logo.png" alt="chelsea logo" />
                  </div>
                  Chelsea
                </span>
                <span>5</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="flex items-center gap-1">
                  <div className="bg-[#D9D9D91A] rounded-full p-1 size-7 inline-flex items-center justify-center">
                    <img src="./chelsea_logo.png" alt="chelsea logo" />
                  </div>
                  Arsenal
                </span>
                <span>2</span>
              </div>
            </div>
          </div>

          <div className="basis-1/2 space-y-7 h-full">
            <div className="flex items-center justify-around rounded-md bg-white/10 divide-x-2 divide-divide">
              <button className="flex-1 text-sm">1</button>
              <button className="flex-1 text-sm">x</button>
              <button className="flex-1 text-sm">2</button>
            </div>
            <div className="flex items-center justify-around rounded-md bg-white/10 divide-x-4 divide-brand-gray">
              <button className="flex-1 py-3 text-brand-green font-medium">
                1.34
              </button>
              <button className="flex-1 py-3  text-brand-green font-medium">
                3.23
              </button>
              <button className="flex-1 py-3 text-brand-green font-medium">
                2.00
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveOddsTable;
