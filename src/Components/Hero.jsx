import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ghost from "../assets/ghost.jpg";
import hand from "../assets/hand.png";
import gsap from "gsap";
import { Howl } from "howler";
import demonMp3 from "../assets/demon.mp3";
import laughMp3 from "../assets/chucky_echo_laugh.mp3";

const Hero = ({ setAccept, setPage }) => {
  const [hands, setHands] = useState([]);
  const sound3Ref = useRef(null);
  const laughRef = useRef(null);

  const addHand = () => {
    const newHands = Array.from({ length: 10 }, () => ({
      id: Math.random(),
      top: Math.random() * 80,
      left: Math.random() * 90,
      width: Math.random() * 25,
    }));

    newHands.forEach((hand, index) => {
      gsap.delayedCall(index * 0.3, () => {
        setHands((p) => [...p, hand]);
      });
    });

    // setHands((p) => [...p, ...newHands]);
  };

  useLayoutEffect(() => {
    const t2 = gsap.timeline();

    gsap.set([".ghost_img", ".hand_img"], {
      opacity: 0,
    });

    t2.to(".ghost_img", {
      opacity: 0.9,
      duration: 10,
      ease: "power2.in",
    });

    t2.to(
      ".hand_img",
      {
        opacity: 0.8,
        duration: 7,
        ease: "power1.out",
      },
      ">3",
    );

    t2.to(
      ".ghost_img",
      {
        scale: 20,
        opacity: 0,
        duration: 1,
        onStart: () => {
          laughRef.current?.play();
        },
      },
      "-=2",
    );
  }, []);

  useEffect(() => {
    sound3Ref.current = new Howl({
      src: demonMp3,
      loop: true,
      volume: 0.6,
      autoplay: true,
    });

    laughRef.current = new Howl({
      src: laughMp3,
      autoplay: false,
      loop: false,
      volume: 1,
    });

    return () => {
      sound3Ref.current?.unload();
      laughRef.current?.unload();
    };
  }, []);

  return (
    <div className=" flex justify-center overflow-hidden h-screen">
      <img src={ghost} className="ghost_img" alt="" />
      <img
        onClick={() => {setAccept(false),setPage("cctv")}}
        src={hand}
        className="hand_img w-15 z-20 cursor-pointer absolute right-40 top-40"
        alt=""
      />
      <img
        src={hand}
        className="w-25  z-20 hand_img cursor-pointer bottom-30 absolute right-80"
        alt=""
      />

      <img
        onClick={addHand}
        src={hand}
        className="absolute z-20 hand_img cursor-pointer"
        alt=""
      />

      {hands.map((x) => (
        <img
          key={x.id}
          style={{ top: `${x.top}%`, left: `${x.left}%`, width: `${x.width}%` }}
          src={hand}
          className="absolute "
        />
      ))}
    </div>
  );
};

export default Hero;
