import { useState, useEffect } from "react";
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
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    console.log(playerHand[0]);
    console.log(computerHand[0]);
    if (playerHand.length !== 0 || computerHand.length !== 0) {
      if (playerHand[0].value > computerHand[0].value) {
        setPlayerScore(playerScore + 1);
        setComputerScore(computerScore - 1);
        console.log(`Player Wins :Hand coUNT ${playerHand.length}`);
      } else if (playerHand[0].value < computerHand[0].value) {
        console.log(`Computer Wins :Hand coUNT ${computerHand.length}`);
        setPlayerScore(playerScore - 1);
        setComputerScore(computerScore + 1);
      } else if (playerHand[0].value === computerHand[0].value) {
        console.log(`IT IS WAR ${playerHand.length} / ${computerHand.length}`);
        // RUN WAR FUNCTION
      }
    } else {
      setGameOver(true);
    }
    const newPlayerHand = playerHand.filter((card) => card.id !== playerHand[0].id);
    setPlayerHand([]);
    setPlayerHand(newPlayerHand);
    const newComputerHand = computerHand.filter((card) => card.id !== computerHand[0].id);
    setComputerHand(newComputerHand);

    //
    // if (playerHand.length === 0 || computerHand.length === 0) {
    //   console.log(`Game Over`);
    //   setGameOver(true);
    // }
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
  useEffect(() => {
    console.log(`game over!`);
  }, [gameOver]);
  return (
    <div className="bg-gray-900 text-white p-10">
      <p>this is the card game</p>

      {isGameStarted === true && gameOver === false ? (
        <div className="flex">
          <p>Your Score: {playerScore}</p>
          <p>Opponent's score: {computerScore}</p>
          <button className="bg-red-500 px-4 py-2 rounded-lg my-2" onClick={handleClick}>
            Play a Card
          </button>
        </div>
      ) : (
        <Deck deck={deck} setDeck={setDeck} setPlayerHand={setPlayerHand} setIsGameStarted={setIsGameStarted} setComputerHand={setComputerHand} />
      )}
      <Chat />
    </div>
  );
};
