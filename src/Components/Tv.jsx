import React, { useLayoutEffect, useRef, useState } from "react";
import tv from "../assets/cursetv.gif";
import gsap from "gsap";
import buzzSound from "../assets/buzz.mp3";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import horrorSound from "../assets/horrorsound.mp3";
import { useEffect } from "react";
import { Howl } from "howler";
import glitchVideo from "../assets/GlitchVideo.mp4";
import "./Tv.css"

const Tv = () => {
  const tvRef = useRef(null);
  const textRef = useRef(null);
  const [click, setClick] = useState(0);
  const buzzRef = useRef(null);
  const soundRef = useRef(null);

  const msg = {
    2: ["Stop", "clicking", "the", "TV…", "again", "and", "again"],
    3: ["Why", "are", "u", "still", "clicking?"],
    4: ["I", "told", "you", "to", "STOPPP"],
  };

  useEffect(() => {
    soundRef.current = new Howl({
      src: horrorSound,
      loop: true,
      volume: 0.8,
    });
  }, []);

  useEffect(() => {
    if (click === 6 && soundRef.current) {
      soundRef.current.play();
    }
  }, [click]);

  useLayoutEffect(() => {
    if (!msg[click] || !textRef.current) return;

    const revert = gsap.context(() => {
      gsap.fromTo(
        ".sec_word",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: 0.6,
        },
      );
    }, textRef);

    return () => revert.revert();
  }, [click]);

  function tvClick() {
    if (buzzRef.current) {
      buzzRef.current.play();
    }

    gsap.to(tvRef.current, {
      x: gsap.utils.random(-700, 700),
      y: gsap.utils.random(-300, 300),
      duration: 0.1,
    });
    console.log(click);
  }

  useLayoutEffect(() => {
    if (click < 6) return;
    const t1 = gsap.timeline();

    gsap.set([".g1", ".g2", ".g3"], {
      opacity: 0,
    });

    t1.to(".g1", {
      opacity: 0.5,
      duration: 5,
    });

    t1.to(".g1", {
      opacity: 0,
      duration: 4,
    });

    t1.to(".g2", {
      opacity: 0.8,
      duration: 5,
    });

    t1.to(".g2", {
      opacity: 0,
      duration: 4,
    });

    t1.to(".g3", {
      opacity: 1,
      duration: 7,
    });

    t1.to(".g3", {
      opacity: 0,
      duration: 5,
      scaleX: 500,
    });

  
  }, [click]);

  return (
    <div className=" flex items-center justify-center">
      <img
        ref={tvRef}
        onClick={() => {
          (tvClick(), setClick(click + 1));
        }}
        className="border opacity-[0.7]  cursor-pointer z-10 absolute top-1/3"
        src={tv}
      ></img>

      <audio src={buzzSound} preload="auto" ref={buzzRef}></audio>

      {msg[click] && (
        <p
          ref={textRef}
          className="text-white z-11 sec_line text-3xl absolute top-1/3"
        >
          {msg[click].map((word, x) => (
            <span
              key={x}
              className="inline-block sec_word mr-2 text-[#ff0000db] font-bold"
            >
              {word}
            </span>
          ))}
        </p>
      )}

      {click >= 6 && (
        <img className="g1 h-200 absolute top-1/16" src={g1} alt="" />
      )}

      {click >= 7 && <img className="g2 absolute top-1/30" src={g2}></img>}

      {click >= 8 && (
        <img
          className="g3 absolute
         top-1/45 h-200"
          src={g3}
        ></img>
      )}

      {click > 9 && (
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="z-[20]  fixed inset-0  h-screen w-full object-cover"
            src={glitchVideo}
          ></video>
          <h2 className="z-[21] end flex inset-0 fixed items-center justify-center text-8xl text-[#bd1a1a]  font-bold">GAME OVER</h2>
        </div>
      )}
    </div>
  );
};

export default Tv;
