import React, { useState } from "react";
import { Chat } from "./Chat";
import { Deck } from "./Deck";

export interface IState {
  deck: {
    id: string;
    number: string;
    suit: string;
  }[];
  playerHand: {
    id: string;
    number: string;
    suit: string;
  }[];
  computerHand: {
    id: string;
    number: string;
    suit: string;
  }[];
  chat: {
    timestamp: string;
    message: string;
  }[];
}

export const Game = () => {
  const [deck, setDeck] = useState<IState["deck"]>([]);
  const [playerHand, setPlayerHand] = useState<IState["playerHand"]>([]);
  const [computerHand, setComputerHand] = useState<IState["computerHand"]>([]);
  const [chat, setChat] = useState<IState["computerHand"]>([]);

  return (
    <div>
      <p>this is the card game</p>
      <Deck deck={deck} setDeck={setDeck} />
      <Chat />
    </div>
  );
};
