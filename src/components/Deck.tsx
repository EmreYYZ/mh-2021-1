import React from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Card } from "./Card";
import { IState as Props } from "./Game";

interface IProps {
  deck: Props["deck"];

  setDeck: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        number: string;
        suit: string;
        isRed: boolean;
        symbol: string;
        symbolAlt: string;
      }[]
    >
  >;
  setPlayerHand: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        number: string;
        suit: string;
        isRed: boolean;
        symbol: string;
        symbolAlt: string;
      }[]
    >
  >;
  setComputerHand: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        number: string;
        suit: string;
        isRed: boolean;
        symbol: string;
        symbolAlt: string;
      }[]
    >
  >;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Deck: React.FC<IProps> = ({ deck, setDeck, setPlayerHand, setComputerHand, setIsGameStarted }) => {
  const suits: { suit: string; symbol: string; symbolAlt: string; isRed: boolean }[] = [
    {
      suit: "heart",
      symbol: "♥",
      symbolAlt: "♡",
      isRed: true,
    },
    {
      suit: "club",
      symbol: "♣",
      symbolAlt: "♧",
      isRed: false,
    },
    {
      suit: "diamond",
      symbol: "♦",
      symbolAlt: "♢",
      isRed: true,
    },
    {
      suit: "spade",
      symbol: "♠",
      symbolAlt: "♤",
      isRed: false,
    },
  ];
  const numbers: string[] = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // Create a deck
  const handleClick = () => {
    setDeck([]);
    let temporaryDeck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let n = 0; n < numbers.length; n++) {
        let card = {
          id: `${suits[i]}-${numbers[n]}`,
          number: numbers[n],
          suit: suits[i].suit,
          isRed: suits[i].isRed,
          symbol: suits[i].symbol,
          symbolAlt: suits[i].symbolAlt,
        };
        temporaryDeck.push(card);
      }
    }
    let shuffledDeck = _.shuffle(temporaryDeck);
    //shuffle and assign deck
    setDeck(shuffledDeck);

    // setPlayerHand
    setPlayerHand(shuffledDeck.slice(0, 26));
    // setComputerHand
    setComputerHand(shuffledDeck.slice(26, 52));
    // start the game ui
    setIsGameStarted(true);
  };

  return (
    <div>
      <p>a deck</p>
      <button onClick={handleClick} className="bg-gray-900 text-blue-400 px-4 py-2 rounded-lg">
        DEAL THE CARDS
      </button>
      {/* {deck !== [] ? deck.map((card) => <Card key={uuidv4()} card={card} />) : null} */}
    </div>
  );
};
