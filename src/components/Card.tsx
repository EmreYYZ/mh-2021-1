import React from "react";

interface IProps {
  card: {
    id: string;
    number: string;
    suit: string;
  };
}

export const Card = (props: IProps) => {
  return (
    <div>
      <p>a card</p>
    </div>
  );
};
