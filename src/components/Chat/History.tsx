import React, { useEffect } from "react";
import { IChatState as Props } from "./Chat";
import { v4 as uuidv4 } from "uuid";
interface IHistoryProps {
  chat: Props["chat"];
}

export const History: React.FC<IHistoryProps> = ({ chat }) => {
  useEffect(() => {}, [chat]);

  return (
    <div className="rounded-lg h-32 overflow-y-auto text-gray-200 py-2 font-body">
      {chat.length === 0 ? (
        <div>
          <span className="text-gray-600 font-bold">No chat messages yet.</span> <span className="font-bold"> </span>
          <span></span>
          <hr className="my-2 border-gray-800" />
        </div>
      ) : null}
      {chat.map((message) => (
        <div key={uuidv4()}>
          <span className="text-gray-600 font-bold">{message.timestamp}</span> <span className="font-bold">{message.username}: </span>
          <span>{message.message}</span>
          <hr className="my-2 border-gray-800" />
        </div>
      ))}
    </div>
  );
};
