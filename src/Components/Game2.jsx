import React, { useEffect, useRef, useState } from "react";
import lightRoom from "../assets/lightroom.mp4";
import roomMp3 from "../assets/room.mp3";
// import eyeGif from "../assets/eye.gif";
import devil from "../assets/devil.png";
import gsap from "gsap";
import { Howl } from "howler";
import devil2 from "../assets/devil2.png";

const Game2 = ({input , setInput}) => {
 
  const lightSoundRef = useRef(null);

  useEffect(() => {
    lightSoundRef.current = new Howl({
      src: roomMp3,
      autoplay: true,
      volume: 1,
      loop: true,
    });


    return ()=>{
      lightSoundRef.current?.unload()
    }

  }, []);

  useEffect(() => {
    const t1 = gsap.timeline();

    gsap.set([".devil", ".devil2"], {
      opacity: 0,
    });

    t1.to(".devil", {
      opacity: 0.6,
      duration: 8,
    });

    t1.to(".devil2", {
      opacity: 0.5,
      duration: 10,
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

      <div className="z-20 absolute  inset-0 flex flex-col gap-40 items-center justify-center">
        <a href="https://evil.com/">
          <h1
            style={{ fontFamily: "Uncial Antiqua, system-ui" }}
            className="text-[#9f1c1c] text-7xl "
          >
            EVIL &lt;3
          </h1>
        </a>
        <div className="flex items-center justify-center">
          <h4
            style={{ fontFamily: "Kranky, serif" }}
            className="text-4xl font-extrabold  text-[#ffffff9d]"
          >
            Conspiracy Theory -
          </h4>
          <input
            onChange={(x) => setInput(x.target.value)}
            value={input}
            style={{ fontFamily: "Uncial Antiqua, system-ui" }}
            className="text-[red] ml-2 w-25 ouline-0 focus:border-0 focus:outline-0 border-[#861313] border-4  bg-transparent  text-3xl cursor-pointer px-5 py-1 "
            type="text"
          />
        </div>
      </div>

      {/* <img src={eyeGif} alt="" /> */}
      <img
        className="absolute devil z-[20] right-0 bottom-0  "
        src={devil}
        alt=""
      />

      <img
        className="absolute devil2 z-[20] -left-20 -bottom-10"
        src={devil2}
        alt=""
      />
    </div>
  );
};

export default Game2;
