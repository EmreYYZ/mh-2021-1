import React from "react";
import { v4 as uuidv4 } from "uuid";
import { SiTailwindcss, SiReact, SiTypescript, SiAdobephotoshop } from "react-icons/si";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const tools = [
    {
      name: "ReactJS",
      url: "https://reactjs.org/",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
    },
    {
      name: "Procreate",
      url: "https://procreate.art/",
    },
    {
      name: "Adobe Photoshop",
      url: "https://www.adobe.com/ca/products/photoshop.html",
    },
  ];

  const libraries = [
    {
      name: "React Router",
      url: "https://reactrouter.com/",
    },
    {
      name: "Lodash",
      url: "https://lodash.com/",
    },
    {
      name: "DayJS",
      url: "https://day.js.org/",
    },
    {
      name: "UUID",
      url: "https://github.com/uuidjs/uuid",
    },
    {
      name: "React Icons",
      url: "https://react-icons.github.io/react-icons/",
    },
  ];

  const social = [
    {
      name: "Portfolio",
      url: "https://emre.la",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/johnaydin/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/emre.la/",
    },
    {
      name: "GitHub",
      url: "https://github.com/EmreYYZ",
    },
    {
      name: "Medium",
      url: "https://medium.com/@emreca",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/emre.la?si=a07faf72c9cb4289",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-body">
      <section className="lg:hidden  pt-10 pb-20 text-center">
        <Link to="/play">
          <button className="px-4 animation py-2 text-xl bg-emerald-600 hover:text-white rounded-lg hover:bg-emerald-800 font-bold text-gray-50">Play the game</button>
        </Link>
      </section>
      {/* First Section - About */}
      <section className="landing-section" id="what-is">
        <div className="landing-text-block bg-gray-50 text-gray-900">
          <h2 className="landing-title">What is WarG8?</h2>
          <div className="font-body">
            <p className="landing-p">
              The War of the G8 or also known as "WarG8" is a war that took place in the year 3000 between the G8 member countries for total domination. The main aggressor is thought to be Justin
              Trudeau 8000, representing Canada, however, there isn't enough evidence to support this claim.
            </p>
            <p className="landing-p">This website lets you relive the war by following J.T 8000's footsteps during the war. Conquer the rest of the G8 countries and win the war!</p>
          </div>
        </div>
        <div className="landing-irrelevant">
          <div className="m-auto">
            <img className="object-cover h-full rounded-lg w-full" src="/Trudeau-Header-Tr.png" alt="" />
          </div>
        </div>
      </section>
      {/* Second Section - How To Play */}
      <section className="landing-section" id="how-to">
        <div className="landing-irrelevant"></div>
        <div className="landing-text-block text-gray-50">
          <h2 className="landing-title">How to play?</h2>
          <p className="landing-p">
            <span className="font-display uppercase">WARG8</span> is a modified version of the card game <span className="font-display uppercase">WAR</span>.
          </p>
          <p className="landing-p">At the beginning of the game, both players are given 26 cards from a 52-card standard deck.</p>
          <p className="landing-p">Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.</p>
          <p className="landing-p">
            If the cards are the same rank, it is War. Each player turns up one card face-down and one card face-up. The player with the higher cards takes both piles (six cards). If the turned-up
            cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
          </p>
        </div>
      </section>
      {/* Third Section - Rules */}
      <section className="landing-section" id="rules">
        <div className="landing-text-block bg-gray-50 text-gray-900">
          <h2 className="landing-title">Rules</h2>
          <p className="landing-p">The rules of the game are pretty simple:</p>
          <ul className="list-disc list-inside  landing-p">
            <li>
              Every <span className="font-display uppercase">regular</span> win earns you 1 point.
            </li>
            <li>
              Every <span className="font-display uppercase">war</span> win earns you 5 points.
            </li>
            <li>The player who collects 52 points or 52 cards first wins.</li>
            <li>The player who runs out of cards or has fewer points loses.</li>
          </ul>
        </div>
        <div className="landing-irrelevant"></div>
      </section>
      {/* About me */}
      <section className="landing-section" id="about-me">
        <div className="landing-irrelevant"></div>
        <div className="landing-text-block">
          <h2 className="landing-title">About me</h2>
          <p className="landing-p">
            My name is Emre, (Pronounced like "Em-rae") I'm a product designer with 2 years of experience turned front-end developer. I was born in the capital city of{" "}
            <span className="font-bold"> Turkey</span>, called <span className="font-bold"> Ankara</span>. However, I've been living in
            <span className="font-bold"> Toronto, ON Canada </span>
            for the last 5 years. In fact, I just passed my citizenship test!
          </p>
          <p className="landing-p">I love tech. All of my hobbies revolve around tech and the biggest one is contributing to digital archiving efforts.</p>
          <div>
            {social.map((link) => (
              <div className="animation inline-block landing-p bg-gray-100 rounded-lg text-gray-900 hover:bg-gray-300 mt-2 pl-4 py-1 mr-2" key={uuidv4()}>
                <a className=" font-bold mr-4 inline-block" href={link.url} target="_blank" rel="noreferrer">
                  {link.name} <IoMdOpen className="inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technicals */}
      <section className="landing-section" id="tech">
        <div className="landing-text-block bg-gray-50 text-gray-900">
          <h2 className="landing-title">Tech</h2>
          <p className="landing-p">
            <span className="font-display uppercase">WarG8</span> is built with:
          </p>
          <div>
            {tools.map((tool) => (
              <div className="animation inline-block landing-p rounded-lg bg-gray-700 hover:bg-gray-900  text-gray-50 mt-2 pl-4 py-1 mr-2" key={uuidv4()}>
                <a className="font-bold mr-4 hover:text-gray-50 inline-block" href={tool.url} target="_blank" rel="noreferrer">
                  {tool.name} <IoMdOpen className="inline-block" />
                </a>
              </div>
            ))}
          </div>
          {/* logos */}

          <p className="landing-p mt-4">I also used additional third-party libraries including:</p>
          <div>
            {libraries.map((library) => (
              <div className="animation inline-block landing-p bg-gray-700 hover:bg-gray-900 rounded-lg text-gray-50 mt-2 pl-4 py-1 mr-2" key={uuidv4()}>
                <a className=" font-bold mr-4 hover:text-gray-50 inline-block" href={library.url} target="_blank" rel="noreferrer">
                  {library.name} <IoMdOpen className="inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Short Description, screenshot, play button */}
      {/* Contact */}
    </div>
  );
};
