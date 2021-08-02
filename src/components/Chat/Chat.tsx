import React, { useState } from "react";
import { History } from "./History";
import { Input } from "./Input";

export interface IChatState {
  chat: {
    timestamp: string;
    message: string;
    username: string;
  }[];
}

export const Chat = () => {
  const [chat, setChat] = useState<IChatState["chat"]>([]);
  return (
    <div className="w-6/6 sm:w-96 max-w-screen-sm rounded-lg mt-4 m-auto px-4 py-6 text-gray-200">
      <History chat={chat} />
      <Input chat={chat} setChat={setChat} />
    </div>
  );
};
