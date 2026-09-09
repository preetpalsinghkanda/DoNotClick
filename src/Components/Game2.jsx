import React, { useEffect } from "react";
import lightRoom from "../assets/lightroom.mp4";
import roomMp3 from "../assets/room.mp3";
// import eyeGif from "../assets/eye.gif";
import devil from "../assets/devil.png";
import gsap from "gsap";
import { Howl } from "howler";

const Game2 = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    gsap.set(".devil", {
      opacity: 0,
    });

    t1.to(".devil", {
      opacity: 0.6,
      duration: 8,
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="h-auto relative w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="h-[100vh] w-full object-cover"
        src={lightRoom}
      ></video>
      {/* <img src={eyeGif} alt="" /> */}
      <img
        className="absolute devil z-[20] right-0 bottom-0  "
        src={devil}
        alt=""
      />
    </div>
  );
};

export default Game2;
