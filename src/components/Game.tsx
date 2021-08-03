import { useState, useEffect } from "react";
import { isTemplateSpan } from "typescript";
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
  const [enemyCountry, setEnemyCountry] = useState("");

  const handleClick = () => {
    if (playerHand[0].value > computerHand[0].value) {
      setPlayerScore(playerScore + 1);
      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));
      setPlayerHand((playerHand) => [...playerHand, oldPlayerCard]);
      setPlayerHand((playerHand) => [...playerHand, oldComputerCard]);
    } else if (playerHand[0].value < computerHand[0].value) {
      setComputerScore(computerScore + 1);
      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));

      setComputerHand((computerHand) => [...computerHand, oldPlayerCard]);
      setComputerHand((computerHand) => [...computerHand, oldComputerCard]);
    } else if (playerHand[0].value === computerHand[0].value) {
      war();
    }
  };

  const war = () => {
    // check if players have enough cards to WAR. If not, lose.
    if (computerHand.length > 5 && playerHand.length > 5) {
      // console.log(`There are sufficient amount of cards in each players' hands to continue.`);
      // continue with the war.
      warRound();
    } else {
      if (computerHand.length < 5) {
        setGameOver(true);
        setIsGameStarted(false);
      } else if (playerHand.length < 5) {
        setGameOver(true);
        setIsGameStarted(false);
      }
    }
  };

  const warRound = () => {
    if (playerHand[4].value > computerHand[4].value) {
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
    <div className="bg-gray-900 w-6/6 md:w-5/6 lg:w-4/6 xl:w-7/12 m-auto text-white sm:p-10">
      {/* <h2 className="font-body block">Justin Trudeau 3000 vs J0e BID3n</h2> */}

      <div>
        {isGameStarted === true && gameOver === false ? (
          <div>
            <div className="inline sm:hidden uppercase font-display mx-4 text-center text-3xl ">
              <p className="my-4 py-10">Canada vs {enemyCountry}</p>
            </div>
            <div className="flex justify-between mx-4 sm:mx-0">
              <div className="bg-gray-800 rounded-lg mt-0 mb-6 mr-2 sm:mr-0 inline-block p-4 font-bold">
                <p className="text-sm font-display uppercase tracking-wider">Player</p>
                <p className="text-2xl font-body">Score: {playerScore}</p>
                <p className="text-sm text-gray-500 font-body">Card Count: {playerHand.length}</p>
                {!isWar ? <Card card={playerHand[0]} /> : <Card card={playerHand[4]} />}
              </div>
              <div className="hidden sm:flex uppercase font-display mx-4 text-center text-3xl ">
                <div className="block align-middle py-10">
                  <p className="my-4">Canada</p>
                  <p className="my-4">vs</p>
                  <p className="my-4">{enemyCountry}</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg mt-0 mb-6 inline-block p-4 font-bold">
                <p className="text-sm font-display uppercase tracking-wider">Opponent</p>
                <p className="text-2xl font-body">Score: {computerScore}</p>
                <p className="text-sm text-gray-500 font-body">Card Count: {computerHand.length}</p>
                {!isWar ? <Card card={computerHand[0]} /> : <Card card={computerHand[4]} />}

                {/* <p>Total: {playerHand.length + computerHand.length}</p> */}
              </div>
            </div>
            <div className="text-center">
              <button className="animate bg-scarlet-600 hover:bg-scarlet-800 font-body font-bold text-2xl px-4 py-2 rounded-lg my-2" onClick={handleClick}>
                Play a Card
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-initial text-center">
            <div className="my-6">
              {playerScore === 52 && isFreshStart === false ? <p className="font-display uppercase text-gray-300 text-3xl">You win!</p> : null}
              {computerScore === 52 && isFreshStart === false ? <p className="font-display uppercase text-gray-300 text-3xl">Your opponent wins!</p> : null}
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
              setEnemyCountry={setEnemyCountry}
            />
          </div>
        )}
      </div>
      {isGameStarted ? <Chat /> : null}
    </div>
  );
};
