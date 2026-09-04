import React, { useState } from "react";
import Warning from "./Components/Warning";
import Warning2 from "./Components/Warning2";
import Hero from "./Components/Hero";
import Cctv from "./Components/Cctv";
import Tv from "./Components/Tv";

const App = () => {
  const [fate, setFate] = useState(false);
  const [accept, setAccept] = useState(false);
  const [page , setPage] = useState("tv")

  return (
    <div className="">
      {/* {!fate && !accept && !page && <Warning fate={fate} setFate={setFate} />}
      {fate && !accept && !page && <Warning2 setAccept={setAccept} setFate={setFate} />}    */}
      {/* {accept && !page && <Hero setAccept={setAccept} setPage={setPage} />}  */}
      {/* {page=== "cctv" && <Cctv/>} */}
      {page==="tv" && <Tv/>}
    </div>
  );
};

export default App;
