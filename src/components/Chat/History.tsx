import React, { useEffect } from "react";
import { IChatState as Props } from "./Chat";

interface IHistoryProps {
  chat: Props["chat"];
}

export const History: React.FC<IHistoryProps> = ({ chat }) => {
  useEffect(() => {}, [chat]);

  return (
    <div className="rounded-lg h-32 overflow-scroll overflow-x-hidden bg-gray-100 text-gray-700 px-4 py-2">
      {chat.map((message) => (
        <div>
          <span className="text-gray-400">[{message.timestamp}]</span> <span>{message.message}</span>
        </div>
      ))}
    </div>
  );
};
