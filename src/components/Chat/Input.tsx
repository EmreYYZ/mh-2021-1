import React, { useState } from "react";
import { IChatState as Props } from "./Chat";
import dayjs from "dayjs";

interface IInputState {
  message: string;
}

interface IInputProps {
  chat: Props["chat"];
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        timestamp: string;
        message: string;
      }[]
    >
  >;
}

export const Input: React.FC<IInputProps> = ({ chat, setChat }) => {
  const [message, setMessage] = useState<IInputState["message"]>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const logTime = () => {
    return dayjs(Date.now()).format("HH:mm:ss");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChat((chat) => [
      ...chat,
      {
        timestamp: logTime(),
        message: message,
      },
    ]);
    setMessage("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <textarea name="" id="" value={message} cols={30} rows={2} className="text-gray-800 rounded-lg" onChange={handleChange} placeholder="Your message..."></textarea>

        <button type="submit" className="px-4 py-2 rounded-lg text-white bg-green-400">
          Send
        </button>
      </form>
    </div>
  );
};
