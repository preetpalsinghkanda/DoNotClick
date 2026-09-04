import React, { useLayoutEffect, useRef } from "react";
import cctvFootage from "../assets/cctv.mp4";
import eyeMp4 from "../assets/eye.mp4";
import gsap from "gsap";
import eyeMp3 from "../assets/fasttrack.mp3";

const Cctv = () => {
  const eyeRef = useRef(null);
  const eyeMp3Ref = useRef(null);

  useLayoutEffect(() => {
    const t3 = gsap.timeline();

    gsap.set([".cctv", ".eye"], {
      opacity: 0,
    });

    t3.to(".cctv", {
      opacity: 1,
      duration: 6,
    });

    t3.call(
      () => {
        eyeRef.current?.play();
        eyeMp3Ref.current?.play();
      },
      [],
      "8",
    );

    t3.to(".eye", {
      opacity: 1,
      duration: 8,
    });

    t3.to(
      ".cctv",
      {
        opacity: 0,
        duration: 2,
      },
      "<",
    );

    return () => {
      t3.kill();
      eyeMp3Ref.current?.pause();
      eyeRef.current?.pause();
    };
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <video
        className="absolute left-20 cctv"
        muted
        playsInline
        autoPlay
        loop
        src={cctvFootage}
      ></video>

      <video
        ref={eyeRef}
        muted
        loop
        playsInline
        className="eye relative top-10"
        src={eyeMp4}
      ></video>

      <audio ref={eyeMp3Ref} loop preload="auto" src={eyeMp3}></audio>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/90 to-transparent" />
    </div>
  );
};

export default Cctv;
