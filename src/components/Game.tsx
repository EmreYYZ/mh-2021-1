import React, { useState } from "react";
import { Chat } from "./Chat/Chat";
import { Deck } from "./Deck";

export interface IState {
  deck: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
  }[];
  playerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
  }[];
  computerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
  }[];
}

export const Game = () => {
  const [deck, setDeck] = useState<IState["deck"]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerHand, setPlayerHand] = useState<IState["playerHand"]>([]);
  const [computerHand, setComputerHand] = useState<IState["computerHand"]>([]);

  const handleClick = () => {};

  return (
    <div>
      <p>this is the card game</p>

      {isGameStarted ? (
        <button onClick={handleClick}>Play a Card</button>
      ) : (
        <Deck deck={deck} setDeck={setDeck} setPlayerHand={setPlayerHand} setIsGameStarted={setIsGameStarted} setComputerHand={setComputerHand} />
      )}
      <Chat />
    </div>
  );
};
