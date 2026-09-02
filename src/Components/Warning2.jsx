import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import warning2bg from "../assets/warning2bg.jpg";
import gsap from "gsap";
import { Howl } from "howler";
import warningSound2Mp3 from "../assets/warning2.mp3";
import borderImg from "../assets/border.png"

const Warning2 = () => {
  const warningContainerRef = useRef(null);
  const soundWarning2Ref = useRef(null);

  const warning =
    "I’m giving you one last chance to think this through… You still have time. Leave this place. Turn back now… before it’s too late";

  useEffect(() => {
    soundWarning2Ref.current = new Howl({
      src: warningSound2Mp3,
      loop: true,
      volume: 1,
      autoplay: false,
      onload: () => {
        soundWarning2Ref.current.seek(62);
      },
    });
  }, []);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    t1.from(".warning2", {
      opacity: 0,
      y: 20,
      scale: 1.1,
      filter: "blur(8px)",
      ease: "power2.inOut",
      duration: 0.6,
      stagger: {
        each: 0.35,
        from: "start",
      },
    });

    t1.to(
      ".warning2",
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.05,
        filter: "blur(1px)",
        ease: "power2.out",
        stagger: {
          each: 0.35,
          from: "end",
        },
        repeat: 1,
      },
      "<0.1",
    );
  }, []);

  return (
    <div
      ref={warningContainerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center "
    >
      <div
        style={{ backgroundImage: `url(${warning2bg})` }}
        className="  bg-repeat min-h-170 absolute inset-0 bg-center w-full"
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className=" relative bottom-30 border-white z-1 text-white">
        <p
          style={{ fontFamily: "Kranky" }}
          className="text-[#c0121284] font-bold text-4xl text-center mx-80 leading-relaxed"
        >
          {warning.split(" ").map((warn, key) => (
            <span key={key} className="warning2 inline-block mr-3">
              {warn}
            </span>
          ))}
        </p>

        <div   style={{fontFamily: "Uncial Antiqua"}} className="border border-white flex  text-3xl">
          <div>
            <img  style={{
    filter:
      "brightness(0) saturate(100%) invert(13%) sepia(91%) saturate(3515%) hue-rotate(350deg) brightness(79%) contrast(102%)",
    opacity: 0.52,
  }} className="border " src={borderImg} alt="" />
            <button className="">
            <a href="https://youtu.be/XqZsoesa55w?start=27">Leave now</a>
          </button></div>
          <div><img src={borderImg} alt="" /><button>Risk My Life</button></div>
        </div>
      </div>
    </div>
  );
};

export default Warning2;
