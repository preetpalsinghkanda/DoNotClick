import React, { useEffect, useRef } from "react";
import { Howl } from "howler";
import creepyMp3 from "../assets/creepy.mp3";

const Creepy = () => {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: creepyMp3,
      loop: true,
      autoplay: true,
      volume: 1,
      preload: true,
    });
    soundRef.current.play();
  }, []);

  return (
    <div className=" w-full">
      <iframe
        className="w-full h-screen"
        src="https://galdrux.com/?pathologictimezone"
      ></iframe>
    </div>
  );
};

export default Creepy;
