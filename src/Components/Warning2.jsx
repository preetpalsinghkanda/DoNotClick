import React from "react";
import warning2bg from "../assets/warning2bg.jpg";
import gsap from "gsap";

const Warning2 = () => {

    const warning = "I’m giving you one last chance to think this through… You still have time. Leave this place. Turn back now… before it’s too late"

    

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center ">
      <div
        style={{ backgroundImage: `url(${warning2bg})` }}
        className="  bg-repeat min-h-170 absolute inset-0 bg-center w-full"
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className=" relative bottom-30 border-white z-1 text-white">
            <p style={{fontFamily : "Kranky"}} className="text-[#c0121284] font-bold text-4xl text-center mx-80"></p>
      </div>
    </div>
  );
};

export default Warning2;
