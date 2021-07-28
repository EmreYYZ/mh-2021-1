import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Card } from "./Card";

interface IState {
  ogDeck: {
    id: string;
    number: string;
    suit: string;
  }[];
}

export const Deck = () => {
  const [ogDeck, setDeck] = useState<IState["ogDeck"]>([]);
  const suits: string[] = ["hearts", "clubs", "diamonds", "spades"];
  const numbers: string[] = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // Create a deck
  const handleClick = () => {
    setDeck([]);
    let temporaryDeck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let n = 0; n < numbers.length; n++) {
        let card = {
          id: `${suits[i]}-${numbers[n]}`,
          number: numbers[n],
          suit: suits[i],
        };
        temporaryDeck.push(card);
      }
    }
    //shuffle and assign deck
    setDeck(_.shuffle(temporaryDeck));
  };

  return (
    <div>
      <p>a deck</p>
      <button onClick={handleClick}>DEAL THE CARDS</button>
      {ogDeck !== [] ? ogDeck.map((card) => <Card key={uuidv4()} card={card} />) : null}
    </div>
  );
};
