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
    <div className="inline-block w-28 h-36 my-2 border-4 border-black-300 rounded-lg cursor-pointer bg-black-50">
      <p className={`text-2xl text-left m-1 font-bold ${card.isRed ? "text-scarlet-500" : "text-black-900"}`}>
        <span className="block">{card.number}</span> <span className="block">{card.symbol}</span>
      </p>
    </div>
  );
};
