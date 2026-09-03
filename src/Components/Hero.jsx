import React, { useState } from "react";
import ghost from "../assets/ghost.jpg";
import hand from "../assets/hand.png";

const Hero = () => {
  const [hands, setHands] = useState([]);

  const addHand = () => {
    const newHands = Array.from({ length: 10 }, () => ({
      id: Math.random(),
      top: Math.random() * 80,
      left: Math.random() * 90,
      width: Math.random() * 25,
    }));

    setHands((p) => [...p, ...newHands]);
  };






  return (
    <div className=" flex justify-center overflow-hidden h-screen">
      <img src={ghost} className="" alt="" />
      <img
        src={hand}
        className=" w-15 cursor-pointer absolute right-40 top-40"
        alt=""
      />
      <img
        src={hand}
        className="w-25 cursor-pointer bottom-30 absolute right-80"
        alt=""
      />

      <img
        onClick={addHand}
        src={hand}
        className="absolute cursor-pointer"
        alt=""
      />

      {hands.map((x) => (
        <img
          key={x.id}
          style={{ top: `${x.top}%`, left: `${x.left}%`, width: `${x.width}%` }}
          src={hand}
          className="absolute"
        />
      ))}
    </div>
  );
};

export default Hero;
