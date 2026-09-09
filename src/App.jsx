import React, { useState } from "react";
import Warning from "./Components/Warning";
import Warning2 from "./Components/Warning2";
import Hero from "./Components/Hero";
import Cctv from "./Components/Cctv";
import Tv from "./Components/Tv";
import Creepy from "./Components/Creepy";
import Game from "./Components/Game";
import Game2 from './Components/Game2'

const App = () => {
  const [fate, setFate] = useState(false);
  const [accept, setAccept] = useState(true);
  const [page, setPage] = useState("game");
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <div className="">
      {/* {!fate && !accept && !page && <Warning fate={fate} setFate={setFate} />}
      {fate && !accept && !page && <Warning2 setAccept={setAccept} setFate={setFate} />}     */}
      {/* {accept && !page && <Hero setAccept={setAccept} setPage={setPage} />}
      {page === "cctv" && <Cctv />}
      {page === "tv" && <Tv />} */}
      {/* {page === "creepy" && <Creepy />} */}
      {page === "game" && (
        <Game isGameOn={isGameOn} setPage={setPage} setIsGameOn={setIsGameOn} />
      )}

      {isGameOn && <Game2/>}
    </div>
  );
};

export default App;
