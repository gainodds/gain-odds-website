interface Props {
  title: string;
}

const OddsCard = ({ title }: Props) => {
  return (
    <div className="bg-[#1B2D3B] flex flex-col gap-2 py-2 rounded-md">
      <p className="text-[#D7DBE0] text-center font-medium">{title}</p>
      <div className="flex justify-around gap-1">
        <p className="border border-divide py-1 px-2 rounded">
          1 <span>1.22</span>
        </p>
        <p className="border border-divide py-1 px-2 rounded">
          X <span>1.3</span>
        </p>
        <p className="border border-divide py-1 px-2 rounded">
          2 <span>7.06</span>
        </p>
      </div>
    </div>
  );
};

export default OddsCard;
