import React from "react";
import fingerHand from "../assets/pointer.png";
import gate from "../assets/gate.png";
import gateGif from "../assets/gate.gif";
import written from "../assets/written.png";

const Game = ({ setIsGameOn , setPage}) => {
  return (
    <div className="flex gap-30  flex-col justify-center items-center h-screen">
      <div className="flex items-center gap-20">
        <img className="h-50" src={fingerHand} alt="" />
        <div className="relative">
          <img
            onClick={() => {
              (setIsGameOn(true), setPage(""));
            }}
            className="absolute cursor-pointer"
            src={gate}
            alt=""
          />{" "}
          <img src={gateGif} className="h-100 " alt="" />
        </div>
        <img className="h-50 -scale-x-100" src={fingerHand} alt="" />
      </div>

      <img className="mx-auto" src={written} alt="" />
    </div>
  );
};

export default Game;
