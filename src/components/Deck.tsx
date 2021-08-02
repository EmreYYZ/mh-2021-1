import React from "react";
import _ from "lodash";
import { IState as Props } from "./Game";

interface IProps {
  deck: Props["deck"];

  setDeck: React.Dispatch<React.SetStateAction<Props["deck"]>>;
  setPlayerHand: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        number: string;
        suit: string;
        isRed: boolean;
        symbol: string;
        symbolAlt: string;
        ownedByPlayer?: boolean | null | undefined;
        value: number;
      }[]
    >
  >;
  setComputerHand: React.Dispatch<React.SetStateAction<Props["deck"]>>;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  setComputerScore: React.Dispatch<React.SetStateAction<number>>;
  setIsFreshStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Deck: React.FC<IProps> = ({ deck, setDeck, setPlayerHand, setComputerHand, setIsGameStarted, setGameOver, setPlayerScore, setComputerScore, setIsFreshStart }) => {
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
  const numbers: { name: string; value: number }[] = [
    {
      name: "A",
      value: 14,
    },
    {
      name: "K",
      value: 13,
    },
    {
      name: "Q",
      value: 12,
    },
    {
      name: "J",
      value: 11,
    },
    {
      name: "2",
      value: 2,
    },
    {
      name: "3",
      value: 3,
    },
    {
      name: "4",
      value: 4,
    },
    {
      name: "5",
      value: 5,
    },
    {
      name: "6",
      value: 6,
    },
    {
      name: "7",
      value: 7,
    },
    {
      name: "8",
      value: 8,
    },
    {
      name: "9",
      value: 9,
    },
    {
      name: "10",
      value: 10,
    },
  ];

  // Create a deck
  const handleClick = () => {
    setGameOver(false);
    setPlayerScore(0);
    setComputerScore(0);
    setIsFreshStart(false);

    setDeck([]);
    let temporaryDeck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let n = 0; n < numbers.length; n++) {
        let card = {
          id: `${suits[i].suit}-${numbers[n].name}`,
          number: numbers[n].name,
          suit: suits[i].suit,
          isRed: suits[i].isRed,
          symbol: suits[i].symbol,
          symbolAlt: suits[i].symbolAlt,
          ownedByPlayer: false,
          value: numbers[n].value,
        };
        temporaryDeck.push(card);
      }
    }
    let shuffledDeck = _.shuffle(temporaryDeck);
    //shuffle and assign deck
    setDeck(shuffledDeck);

    let playerCards = shuffledDeck.slice(0, 26);
    playerCards.forEach((singleCard) => (singleCard.ownedByPlayer = true));
    let computerCards = shuffledDeck.slice(26, 52);
    computerCards.forEach((card) => (card.ownedByPlayer = false));
    // setPlayerHand
    setPlayerHand(playerCards);
    // setComputerHand
    setComputerHand(computerCards);
    // start the game ui
    setIsGameStarted(true);
  };

  return (
    <div>
      <button onClick={handleClick} className="bg-malachite-600 hover:bg-malachite-700 font-body font-bold text-gray-50 px-4 py-2 rounded-lg">
        Start Game
      </button>
      {/* {deck !== [] ? deck.map((card) => <Card key={uuidv4()} card={card} />) : null} */}
    </div>
  );
};
