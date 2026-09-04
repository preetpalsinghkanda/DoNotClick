import React, { useLayoutEffect, useRef, useState } from "react";
import tv from "../assets/cursetv.gif";
import gsap from "gsap";

const Tv = () => {
  const tvRef = useRef(null);
  const [click, setClick] = useState(0);

  // useLayoutEffect(()=>{
  // },[])

  function tvClick() {
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
          tvClick(), setClick(click + 1);
        }}
        className="border  cursor-pointer absolute top-1/3"
        src={tv}
      ></img>
    </div>
  );
};

export default Tv;
