import React, { useState } from "react";
import Warning from "./Components/Warning";
import Warning2 from "./Components/Warning2";
import Hero from "./Components/Hero";
import Cctv from "./Components/Cctv";

const App = () => {
  const [fate, setFate] = useState(false);
  const [accept, setAccept] = useState(true);
  const [page , setPage] = useState("cctv")

  return (
    <div className="">
       {/* {!fate && !accept && <Warning fate={fate} setFate={setFate} />}
      {fate && !accept && <Warning2 setAccept={setAccept} setFate={setFate} />}   */}
      {/* {accept && <Hero setAccept={setAccept} setPage={setPage} />} */}
      {page=== "cctv" && <Cctv/>}
    </div>
  );
};

export default App;
