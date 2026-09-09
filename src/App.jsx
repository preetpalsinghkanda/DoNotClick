import React, { useEffect, useState } from "react";
import Warning from "./Components/Warning";
import Warning2 from "./Components/Warning2";
import Hero from "./Components/Hero";
import Cctv from "./Components/Cctv";
import Tv from "./Components/Tv";
import Creepy from "./Components/Creepy";
import Game from "./Components/Game";
import Game2 from "./Components/Game2";

const App = () => {
  const [fate, setFate] = useState(false);
  const [accept, setAccept] = useState(false);
  const [page, setPage] = useState("");
  const [isGameOn, setIsGameOn] = useState(false);
  const [input, setInput] = useState("");
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (input === "101") {
      setPage("");
      setWon(true);
      setIsGameOn(false);
    }
  }, [input]);

  return (
    <div className="">
      {!won && (
        <>
          {!fate && !accept && !page && (
            <Warning fate={fate} setFate={setFate} />
          )}
          {fate && !accept && !page && (
            <Warning2 setAccept={setAccept} setFate={setFate} />
          )}
          {accept && !page && <Hero setAccept={setAccept} setPage={setPage} />}
          {page === "cctv" && <Cctv />}
          {page === "tv" && <Tv />}
          {page === "creepy" && <Creepy />}
          {page === "game" && !isGameOn && (
            <Game
              // isGameOn={isGameOn}
              setPage={setPage}
              setIsGameOn={setIsGameOn}
            />
          )}

          {isGameOn && <Game2 input={input} setInput={setInput} />}
        </>
      )}
      {won && (
        <p
          style={{ fontFamily: "Kranky, serif" }}
          className="text-white text-4xl  flex absolute left-10 top-1/2"
        >
          You Won :(
        </p>
      )}
    </div>
  );
};

export default App;
