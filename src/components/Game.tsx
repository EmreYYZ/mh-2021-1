import { useState } from "react";
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
    ownedByPlayer?: boolean | null;
    value: number;
  }[];
  playerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean;
    value: number;
  }[];
  computerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null;
    value: number;
  }[];
  playedCards: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null;
    value: number;
  }[];
}

export const Game = () => {
  const [deck, setDeck] = useState<IState["deck"]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerHand, setPlayerHand] = useState<IState["playerHand"]>([]);
  const [computerHand, setComputerHand] = useState<IState["computerHand"]>([]);
  const [playedCards, setPlayedCards] = useState<IState["playedCards"]>([]);
  const [playerScore, setPlayerScore] = useState(26);
  const [computerScore, setComputerScore] = useState(26);

  const handleClick = () => {
    console.log(playerHand[0]);
    console.log(computerHand[0]);
    const newHand = playerHand.filter((card) => card.id !== playerHand[0].id);
    setPlayerHand([]);
    setPlayerHand(newHand);
    console.log(playerHand);
  };

  const removeCardFromHand = (player: string) => {
    switch (player) {
      case "player":
        // take the card and delete it.
        break;
      case "computer":
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p>this is the card game</p>

      {isGameStarted ? (
        <div>
          <p>Your Cards left: {playerHand.length}</p>
          <p>Opponent's cards left: {computerHand.length}</p>
          <button onClick={handleClick}>Play a Card</button>
        </div>
      ) : (
        <Deck deck={deck} setDeck={setDeck} setPlayerHand={setPlayerHand} setIsGameStarted={setIsGameStarted} setComputerHand={setComputerHand} />
      )}
      <Chat />
    </div>
  );
};
