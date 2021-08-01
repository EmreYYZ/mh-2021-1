import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigation = [
    {
      name: "What?",
      url: "",
    },
    {
      name: "How?",
      url: "",
    },
    {
      name: "Rules",
      url: "",
    },
    {
      name: "About me",
      url: "",
    },
    {
      name: "Tech",
      url: "",
    },
  ];

  return (
    <div className="flex justify-between py-10 bg-gray-900 text-gray-300">
      <h1 className="font-display inline-block hover:text-gray-50 text-3xl">
        <Link to="/">WARG8</Link>
      </h1>

      <nav className="text-right font-body text-gray-300 font-bold">
        {navigation.map((link) => (
          <div className="inline-block mr-6 hover:text-gray-500">
            <a href={link.url}>{link.name}</a>
          </div>
        ))}
        <div className="inline-block mr-6">
          <button className="px-4 py-2 bg-malachite-500 hover:text-white rounded-lg hover:bg-malachite-600 font-bold text-gray-50">Play</button>
        </div>
      </nav>
    </div>
  );
};
