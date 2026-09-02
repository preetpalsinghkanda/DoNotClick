import React from "react";
import "./Warning.css";
import { useEffect } from "react";
import { Howl } from "howler";
import warningSoundMp3 from "../assets/warning.mp3";

const Warning = () => {
  useEffect(() => {
    const warningSound = new Howl({
      src: warningSoundMp3,
      loop: true,
      volume: 1,
      autoplay: true,
      onload: () => {
        warningSound.seek(26);
      },
    });
  }, []);

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
        style={{ fontFamily: "Kranky" }}
        className="relative bottom-20 scale-x-80 scale-y-180 cursor-pointer  text-[#9b9b9b] font-extrabold text-3xl uppercase"
      >
        i accept my fate
      </button>
    </div>
  );
};

export default Warning;
