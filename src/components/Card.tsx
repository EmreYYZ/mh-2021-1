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
    <div className="inline-block w-28 h-36 m-2 border-4 border-gray-300 rounded-lg cursor-pointer bg-gray-50">
      <p className={`text-2xl text-left m-1 font-bold ${card.isRed ? "text-red-500" : "text-gray-900"}`}>
        <span className="block">{card.number}</span> <span className="block">{card.symbol}</span>
      </p>
    </div>
  );
};
