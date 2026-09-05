import React, { useLayoutEffect, useRef, useState } from "react";
import tv from "../assets/cursetv.gif";
import gsap from "gsap";
import buzzSound from "../assets/buzz.mp3";

const Tv = () => {
  const tvRef = useRef(null);
  const textRef = useRef(null);
  const [click, setClick] = useState(0);
  const buzzRef = useRef(null);

  const msg = {
    2: ["Stop", "clicking", "the", "TV…", "again", "and", "again"],
    3: ["Why", "are", "u", "still", "clicking?"],
    4: ["I", "told", "you", "to", "STOPPP"],
  };

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

  return (
    <div className=" flex items-center justify-center">
      <img
        ref={tvRef}
        onClick={() => {
          (tvClick(), setClick(click + 1));
        }}
        className="border  cursor-pointer absolute top-1/3"
        src={tv}
      ></img>

      <audio src={buzzSound} preload="auto" ref={buzzRef}></audio>

      {msg[click] && (
        <p
          ref={textRef}
          className="text-white sec_line text-3xl absolute top-1/3"
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
    </div>
  );
};

export default Tv;
