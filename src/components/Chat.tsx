import React from "react";
import { ChatHistory } from "./ChatHistory";
import { ChatInput } from "./ChatInput";

export const Chat = () => {
  return (
    <div className="bg-gray-800 text-gray-200">
      <p>This is chat</p>
      <ChatHistory />
      <ChatInput />
    </div>
  );
};
