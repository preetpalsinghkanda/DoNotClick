import React, { useRef, useState } from "react";
import "./Warning.css";
import { useEffect } from "react";
import { Howl } from "howler";
import warningSoundMp3 from "../assets/warning.mp3";
import bloodPng from "../assets/blood.png";

const Warning = ({ fate, setFate }) => {
  const [entered, setEntered] = useState(false);
  const soundWarningRef = useRef(null);

  useEffect(() => {
    soundWarningRef.current = new Howl({
      src: warningSoundMp3,
      loop: true,
      volume: 1,
      autoplay: true,
      onload: () => {
        soundWarningRef.current.seek(26);
      },
    });

    return () => {
      soundWarningRef.current?.unload();
    };
  }, []);

  const handleEnter = () => {
    soundWarningRef.current?.play();
    setEntered(true);
  };

  if (!entered) {
    return (
      <div
        style={{ backgroundImage: `url(${bloodPng})` }}
        className=" min-h-screen bg-no-repeat bg-cover bg-center w-full flex items-center justify-center"
      >
        <button
          className="text-black relative top-25 cursor-pointer py-1 font-extrabold text-2xl   px-8 -leading-5 bg-[#c41717]"
          onClick={handleEnter}
        >
          ENTER
        </button>
      </div>
    );
  }

  return (
    <div className="text-white  flex-col gap-40 my-10  flex items-center justify-center">
      <h1
        className="font-[600]  animate-[glitchShake_0.7s_infinite] transform scale-y-[2] origin-top  text-9xl text-[red]"
        style={{ fontFamily: "Uncial Antiqua, system-ui" }}
      >
        WARNING
      </h1>
      <p
        style={{ fontFamily: "Kranky, serif" }}
        className="text-5xl   px-40 text-center"
      >
        This website contains scary images, creepy sounds, flashing effects, and
        horror content.
        <br />
        If you feel uncomfortable or scared, please leave the website now...
      </p>
      <button
        onClick={() => {
          soundWarningRef.current?.stop();
          setFate(true);
        }}
        style={{ fontFamily: "Kranky" }}
        className="relative bottom-20 scale-x-80 scale-y-180 cursor-pointer  text-[#9b9b9b] font-extrabold text-3xl uppercase"
      >
        i accept my fate
      </button>
    </div>
  );
};

export default Warning;
