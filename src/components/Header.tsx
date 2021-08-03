import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const Header = () => {
  let location = useLocation();
  const navigation = [
    {
      name: "What?",
      url: "#what-is",
    },
    {
      name: "How?",
      url: "#how-to",
    },
    {
      name: "Rules",
      url: "#rules",
    },
    {
      name: "About me",
      url: "#about-me",
    },
    {
      name: "Tech",
      url: "#tech",
    },
  ];

  return (
    <div className="md:flex md:justify-between text-center  m-auto md:max-w-screen-md py-10  bg-gray-900 text-gray-300">
      <h1 className="animation font-display md:inline-block mb-2 hover:text-gray-50 text-3xl">
        <Link to="/">WARG8</Link>
      </h1>
      {/* Navigation links */}
      <nav className=" md:text-right mx-10 text-center  font-body text-gray-300 font-bold ">
        {navigation.map((link) => (
          <div className="animation inline-block mb-2 mt-2 sm:mt-0 sm:mb-0 bg-gray-700 py-1 px-2 rounded-lg hover:bg-gray-800 mr-2 md:mr-4" key={uuidv4()}>
            <a href={link.url}>{link.name}</a>
          </div>
        ))}

        {location.pathname !== "/play" ? (
          <div className="hidden lg:inline-block mr-6">
            <Link to="/play">
              <button className="animation px-4 py-2 bg-emerald-600 hover:text-white rounded-lg hover:bg-emerald-800 font-bold text-gray-50">Play</button>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};
