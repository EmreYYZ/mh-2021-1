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
  const [isWar, setIsWar] = useState(false);
  // const [playerScore, setPlayerScore] = useState(26);
  // const [computerScore, setComputerScore] = useState(26);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    // reset the table if the state is not war
    // if (isWar === false) {
    //   setTable([]);
    // }
    // setTable([]);
    // setTable((table) => [...table, playerHand[0]]);
    // setTable((table) => [...table, computerHand[0]]);

    // remove the played card from the first spot of the player's hand

    // remove computer's card from computer's dec.

    if (playerHand[0].value > computerHand[0].value) {
      console.log(`Player wins!`);

      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));
      setPlayerHand((playerHand) => [...playerHand, oldPlayerCard]);
      setPlayerHand((playerHand) => [...playerHand, oldComputerCard]);
    } else if (playerHand[0].value < computerHand[0].value) {
      console.log(`Computer wins!`);

      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));

      setComputerHand((computerHand) => [...computerHand, oldPlayerCard]);
      setComputerHand((computerHand) => [...computerHand, oldComputerCard]);
    } else if (playerHand[0].value === computerHand[0].value) {
      console.log(`It is a tie!`);
      war();
      // let oldPlayerCard = playerHand[0];
      // let oldComputerCard = computerHand[0];
      // setPlayerHand(playerHand.filter((card) => card.id !== playerHand[0].id));
      // setComputerHand(computerHand.filter((card) => card.id !== computerHand[0].id));

      // setPlayerHand((playerHand) => [...playerHand, oldPlayerCard]);
      // setComputerHand((computerHand) => [...computerHand, oldComputerCard]);
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
    if (computerHand.length > 4 && playerHand.length > 4) {
      console.log(`There are sufficient amount of cards in each players' hands to continue.`);
      // continue with the war.
      warRound();
    } else {
      if (computerHand.length < 4) {
        console.log(`Computer loses the whole game.`);
      } else if (playerHand.length < 4) {
        console.log(`Player loses the whole game.`);
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

      let oldPlayerCard = playerHand[0];
      let oldComputerCard = computerHand[0];

      for (let i = 0; i < 5; i++) {
        setPlayerHand(playerHand.filter((card) => card.id !== playerHand[i].id));
        setComputerHand(computerHand.filter((card) => card.id !== computerHand[i].id));
      }
      // setPlayerHand((playerHand) => [...playerHand, ...table]); THIS DOESN'T WORK I DON'T KNOW WHY.
      // setThings((things) => [...things, ...moreThings]);
      setPlayerHand((playerHand) => [...playerHand, oldPlayerCard]);
      setPlayerHand((playerHand) => [...playerHand, oldComputerCard]);
    } else if (playerHand[4].value < computerHand[4].value) {
      console.log(`Computer Wins the War`);
    }
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
          <p>Total: {playerHand.length + computerHand.length}</p>
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
