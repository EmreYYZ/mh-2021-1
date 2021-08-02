import React from "react";
import { SiTailwindcss, SiReact, SiTypescript, SiAdobephotoshop, SiFirebase } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-gray-900 py-10 text-center">
      <p className="text-gray-500 text-xl font-display uppercase text-center">
        Made by{" "}
        <a className="hover:text-gray-300 animation text-gray-400" href="https://emre.la" target="_blank" rel="noreferrer">
          emre
        </a>
      </p>
      <p className="text-gray-700  inline-block font-bold font-body">
        Check the code on{" "}
        <a className="hover:text-gray-400 animation text-gray-600  cursor-pointer" href="https://github.com/EmreYYZ/mh-2021-1" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <div>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <SiReact className="landing-tech-icon animation" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <SiTypescript className="landing-tech-icon animation" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <SiTailwindcss className="landing-tech-icon animation" />
        </a>
        <a href="https://www.adobe.com/ca/products/photoshop.html" target="_blank" rel="noopener noreferrer">
          <SiAdobephotoshop className="landing-tech-icon animation" />
        </a>
        <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
          <SiFirebase className="landing-tech-icon animation" />
        </a>
      </div>
    </div>
  );
};
