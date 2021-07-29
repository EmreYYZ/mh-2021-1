import React, { useState } from "react";
import { History } from "./History";
import { Input } from "./Input";

export interface IChatState {
  chat: {
    timestamp: string;
    message: string;
  }[];
}

export const Chat = () => {
  const [chat, setChat] = useState<IChatState["chat"]>([]);
  return (
    <div className="bg-gray-800 w-96 rounded-lg mt-4 px-4 py-6 text-gray-200">
      <History chat={chat} />
      <Input chat={chat} setChat={setChat} />
    </div>
  );
};
