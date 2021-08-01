import { useState, useEffect } from "react";
import { Card } from "./Card";
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
  table: {
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
  // const [table, setTable] = useState<IState["table"]>([]);
  const [isFreshStart, setIsFreshStart] = useState(true);
  const [isWar, setIsWar] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    if (playerHand[0].value > computerHand[0].value) {
      console.log(`Player wins!`);
      setPlayerScore(playerScore + 1);
      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));
      setPlayerHand((playerHand) => [...playerHand, oldPlayerCard]);
      setPlayerHand((playerHand) => [...playerHand, oldComputerCard]);
    } else if (playerHand[0].value < computerHand[0].value) {
      console.log(`Computer wins!`);
      setComputerScore(computerScore + 1);
      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));

      setComputerHand((computerHand) => [...computerHand, oldPlayerCard]);
      setComputerHand((computerHand) => [...computerHand, oldComputerCard]);
    } else if (playerHand[0].value === computerHand[0].value) {
      console.log(`It is a tie!`);
      war();
    }
  };

  const warCheck = () => {
    if (isWar === false) {
      console.log(`Not at war...`);
    } else if (isWar === true) {
      console.log(`At war!`);
    }
  };

  const war = () => {
    console.log(`WARRRR!!!!`);
    // check if players have enough cards to WAR. If not, lose.
    if (computerHand.length > 5 && playerHand.length > 5) {
      console.log(`There are sufficient amount of cards in each players' hands to continue.`);
      // continue with the war.
      warRound();
    } else {
      if (computerHand.length < 5) {
        console.log(`Computer loses the whole game.`);
        setGameOver(true);
        setIsGameStarted(false);
      } else if (playerHand.length < 5) {
        console.log(`Player loses the whole game.`);
        setGameOver(true);
        setIsGameStarted(false);
      }
    }
    // because you haven't remove cards and present new ones from the line
    // when the war starts, the app stucks. REMOVE THE CARDS FROM THE TABLE!

    // the cards you already have on the table stays there, each player puts 3 cards face down.
    // on top of the face down cards, each player puts down 1 card face up. The higher value card's owner--
    // takes all the cards on the table. If the face up cards are equal again, then the process repeats, put another 3 face-down 1 face-up card, and so on.

    // if any of the players doesn't have enough cards (3 face down, 1 face up) to do a war, the one that doesn't have enough card loses. You should check this for every war, in the beginning of the function.
  };

  const warRound = () => {
    if (playerHand[4].value > computerHand[4].value) {
      console.log(`Player wins the War`);
      setPlayerScore(playerScore + 5);
      let oldPlayerCards = [playerHand[0], playerHand[1], playerHand[2], playerHand[3], playerHand[4]];
      let oldComputerCards = [computerHand[0], computerHand[1], computerHand[2], computerHand[3], computerHand[4]];

      let newPlayerHand = destroyer(playerHand, oldPlayerCards);
      setPlayerHand(newPlayerHand);
      let newComputerHand = destroyer(computerHand, oldComputerCards);
      setComputerHand(newComputerHand);

      setPlayerHand((playerHand) => [...playerHand, ...oldPlayerCards]);
      setPlayerHand((playerHand) => [...playerHand, ...oldComputerCards]);
      //
      //
    } else if (playerHand[4].value < computerHand[4].value) {
      console.log(`Computer Wins the War`);
      setComputerScore(computerScore + 5);
      let oldPlayerCards = [playerHand[0], playerHand[1], playerHand[2], playerHand[3], playerHand[4]];
      let oldComputerCards = [computerHand[0], computerHand[1], computerHand[2], computerHand[3], computerHand[4]];

      let newPlayerHand = destroyer(playerHand, oldPlayerCards);
      setPlayerHand(newPlayerHand);
      let newComputerHand = destroyer(computerHand, oldComputerCards);
      setComputerHand(newComputerHand);

      setComputerHand((computerHand) => [...computerHand, ...oldPlayerCards]);
      setComputerHand((computerHand) => [...computerHand, ...oldComputerCards]);
    }
  };

  const destroyer = (arr: any, toRemove: any) => {
    return arr.filter((item: any) => !toRemove.includes(item));
  };

  useEffect(() => {
    if (playerScore === 52 || computerScore === 52) {
      setGameOver(true);
      setIsGameStarted(false);
    }
  }, [playerHand]);

  // useEffect(() => {
  //   setPlayerScore(0);
  //   setComputerScore(0);
  // }, []);

  return (
    <div className="bg-gray-900 text-white p-10">
      <p>this is the card game</p>

      {isGameStarted === true && gameOver === false ? (
        <div className="flex">
          <div className="bg-gray-800 rounded-lg my-2 mr-2 inline-block p-4 font-bold">
            <p className="font-display uppercase">Player</p>
            <p className="text-xl font-body">Score: {playerScore}</p>
            <p className="text-xs text-gray-500 font-body">Card Count: {playerHand.length}</p>
            {!isWar ? <Card card={playerHand[0]} /> : <Card card={playerHand[4]} />}
          </div>
          <div className="bg-gray-800 rounded-lg my-2 mr-2 inline-block p-4 font-bold">
            <p className="font-display uppercase">Opponent</p>
            <p className="text-xl font-body">Score: {computerScore}</p>
            <p className="text-xs text-gray-500 font-body">Card Count: {computerHand.length}</p>
            {!isWar ? <Card card={computerHand[0]} /> : <Card card={computerHand[4]} />}

            {/* <p>Total: {playerHand.length + computerHand.length}</p> */}
          </div>
          <button className="bg-scarlet-400 px-4 py-2 rounded-lg my-2" onClick={handleClick}>
            Play a Card
          </button>
        </div>
      ) : (
        <div>
          <p>GAME OVER!</p>
          {playerScore === 52 && isFreshStart === false ? <p>YOU WIN!!!!!!</p> : null}
          {computerScore === 52 && isFreshStart === false ? <p>Your opponent wins :(</p> : null}
          <Deck
            deck={deck}
            setDeck={setDeck}
            setPlayerHand={setPlayerHand}
            setIsGameStarted={setIsGameStarted}
            setComputerHand={setComputerHand}
            setGameOver={setGameOver}
            setPlayerScore={setPlayerScore}
            setComputerScore={setComputerScore}
            setIsFreshStart={setIsFreshStart}
          />
        </div>
      )}
      <Chat />
    </div>
  );
};
