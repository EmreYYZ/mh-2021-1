import React from "react";

interface IProps {
  card: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null;
    value: number;
  };
}

export const Card: React.FC<IProps> = ({ card }) => {
  return (
    <div className="inline-block w-36 h-48 my-2 border-4 border-black-300 rounded-lg bg-black-50">
      <div>
        <p className={`text-2xl  ml-2 mt-1 text-left font-bold leading-none ${card.isRed ? "text-scarlet-500" : "text-black-900"}`}>
          <span className="block">{card.number}</span> <span className="block">{card.symbol}</span>
        </p>
      </div>
      <div className={` text-7xl text-center leading-none font-bold ${card.isRed ? "text-scarlet-500" : "text-black-900"}`}>{card.symbol}</div>
      <div>
        <p className={` transform rotate-180 text-2xl text-left mt-2 mr-2 font-bold leading-none ${card.isRed ? "text-scarlet-500" : "text-black-900"}`}>
          <span className="block">{card.number}</span> <span className="block">{card.symbol}</span>
        </p>
      </div>
    </div>
  );
};
