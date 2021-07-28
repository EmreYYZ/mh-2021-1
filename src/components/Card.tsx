import React from "react";

interface IProps {
  card: {
    id: string;
    number: string;
    suit: string;
  };
}

export const Card: React.FC<IProps> = ({ card }) => {
  return (
    <div className="px-4 py-10 m-4 border-4 rounded-lg cursor-pointer">
      <p className="text-2xl font-bold">
        <span>{card.number}</span> of <span>{card.suit}</span>
      </p>
    </div>
  );
};
