import React, { useState } from "react";
import Warning from "./Components/Warning";
import Warning2 from "./Components/Warning2";

const App = () => {
  const [fate, setFate] = useState(false);

  return (
    <div className="">
      {!fate && <Warning fate={fate} setFate={setFate} />}
      {fate && <Warning2 />}
    </div>
  );
};

export default App;
