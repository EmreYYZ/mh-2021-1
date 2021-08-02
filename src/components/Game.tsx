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
      // console.log(`There are sufficient amount of cards in each players' hands to continue.`);
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
    if (playerHand.length === 0 || computerScore === 0) {
      // setGameOver(true);
      // setIsGameStarted(false);
    }
  }, [playerHand]);

  // useEffect(() => {
  //   setPlayerScore(0);
  //   setComputerScore(0);
  // }, []);

  return (
    <div className="bg-gray-900 w-5/6 m-auto text-white p-10">
      {/* <h2 className="font-body block">Justin Trudeau 3000 vs J0e BID3n</h2> */}
      <div className="m-auto">
        {isGameStarted === true && gameOver === false ? (
          <div>
            <div className="flex justify-between">
              <div className="bg-gray-800 rounded-lg my-2 mr-2 inline-block p-4 font-bold">
                <p className="text-sm font-display uppercase tracking-wider">Player</p>
                <p className="text-2xl font-body">Score: {playerScore}</p>
                <p className="text-sm text-gray-500 font-body">Card Count: {playerHand.length}</p>
                {!isWar ? <Card card={playerHand[0]} /> : <Card card={playerHand[4]} />}
              </div>
              <button className="bg-scarlet-800 hover:bg-scarlet-600 font-body font-bold text-2xl px-4 py-2 rounded-lg my-2" onClick={handleClick}>
                Play a Card
              </button>
              <div className="bg-gray-800 rounded-lg my-2 mr-2 inline-block p-4 font-bold">
                <p className="text-sm font-display uppercase tracking-wider">Opponent</p>
                <p className="text-2xl font-body">Score: {computerScore}</p>
                <p className="text-sm text-gray-500 font-body">Card Count: {computerHand.length}</p>
                {!isWar ? <Card card={computerHand[0]} /> : <Card card={computerHand[4]} />}

                {/* <p>Total: {playerHand.length + computerHand.length}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-initial text-center">
            <div className="my-6">
              {playerScore === 52 && isFreshStart === false ? <p className="font-display">YOU WIN!!!!!!</p> : null}
              {computerScore === 52 && isFreshStart === false ? <p className="font-display uppercase text-gray-300 text-3xl">Your opponent wins</p> : null}
            </div>
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
      </div>
      <Chat />
    </div>
  );
};
