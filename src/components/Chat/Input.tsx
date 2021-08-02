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
        username: string;
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
        username: "jt8000",
      },
    ]);
    setMessage("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          value={message}
          className="text-gray-50 font-body w-full px-2 py-2 rounded-lg bg-gray-900 focus:bg-gray-800 border-gray-400 border-4"
          onChange={handleChange}
          placeholder="Send a message"
        ></textarea>
        <div className="text-right">
          <button type="submit" className="px-4 py-2 mt-2 font-body font-bold rounded-lg text-white inline-block bg-green-600 hover:bg-green-700">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
