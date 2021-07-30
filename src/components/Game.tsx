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
    ownedByPlayer?: boolean | null | undefined;
    value: number;
  }[];
  playerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null | undefined;
    value: number;
  }[];
  computerHand: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null | undefined;
    value: number;
  }[];
  playedCards: {
    id: string;
    number: string;
    suit: string;
    isRed: boolean;
    symbol: string;
    symbolAlt: string;
    ownedByPlayer?: boolean | null | undefined;
    value: number;
  }[];
}

export const Game = () => {
  const [deck, setDeck] = useState<IState["deck"]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerHand, setPlayerHand] = useState<IState["playerHand"]>([]);
  const [computerHand, setComputerHand] = useState<IState["computerHand"]>([]);
  // const [playerScore, setPlayerScore] = useState(26);
  // const [computerScore, setComputerScore] = useState(26);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    if (playerHand[0].value > computerHand[0].value) {
      playerWin();
    } else if (playerHand[0].value < computerHand[0].value) {
      computerWin();
    } else if (playerHand[0].value === computerHand[0].value) {
      console.log(`IT IS WAR ${playerHand.length} / ${computerHand.length}`);
      war();
    }
  };

  const playerWin = () => {
    console.log(playerHand[0].id);

    let inHand = playerHand[0];

    // remove the played card from the first spot
    const newPlayerHand = playerHand.filter((card) => card.id !== playerHand[0].id);
    setPlayerHand(newPlayerHand);

    // add the computer's card to player's deck
    setPlayerHand((playerHand) => [...playerHand, computerHand[0]]);

    // add the played card to the end of the deck
    setPlayerHand((playerHand) => [...playerHand, inHand]);

    // remove computer's card from computer's dec.
    const newComputerHand = computerHand.filter((card) => card.id !== computerHand[0].id);
    setComputerHand(newComputerHand);

    console.log(`Player Wins :Hand coUNT ${playerHand.length}`);
    // remove the cards on the table and add them to player's hand
  };

  const computerWin = () => {
    console.log(computerHand[0].id);

    let inHand = computerHand[0];

    // remove the played card from the first spot
    const newComputerHand = computerHand.filter((card) => card.id !== computerHand[0].id);
    setComputerHand(newComputerHand);

    // add the player's card to computer's deck
    setComputerHand((computerHand) => [...computerHand, playerHand[0]]);

    // add the played card to the end of the deck
    setComputerHand((computerHand) => [...computerHand, inHand]);

    // remove player's card from player's dec.
    const newPlayerHand = playerHand.filter((card) => card.id !== playerHand[0].id);
    setPlayerHand(newPlayerHand);

    console.log(`Computer Wins :Hand coUNT ${computerHand.length}`);
  };

  const war = () => {
    console.log(`WARRRR!!!!`);
    // because you haven't remove cards and present new ones from the line
    // when the war starts, the app stucks. REMOVE THE CARDS FROM THE TABLE!

    // the cards you already have on the table stays there, each player puts 3 cards face down.
    // on top of the face down cards, each player puts down 1 card face up. The higher value card's owner--
    // takes all the cards on the table. If the face up cards are equal again, then the process repeats, put another 3 face-down 1 face-up card, and so on.

    // if any of the players doesn't have enough cards (3 face down, 1 face up) to do a war, the one that doesn't have enough card loses. You should check this for every war, in the beginning of the function.
  };
  useEffect(() => {
    if (playerHand.length === 52 || playerHand.length === 0) {
      setGameOver(true);
      console.log(`game over`);
    }
  }, [playerHand]);

  return (
    <div className="bg-gray-900 text-white p-10">
      <p>this is the card game</p>

      {isGameStarted === true && gameOver === false ? (
        <div className="flex">
          <p>Your Score: {playerHand.length}</p>
          <p>Opponent's score: {computerHand.length}</p>
          <button className="bg-red-500 px-4 py-2 rounded-lg my-2" onClick={handleClick}>
            Play a Card
          </button>
        </div>
      ) : (
        <Deck deck={deck} setDeck={setDeck} setPlayerHand={setPlayerHand} setIsGameStarted={setIsGameStarted} setComputerHand={setComputerHand} setGameOver={setGameOver} />
      )}
      <Chat />
    </div>
  );
};
