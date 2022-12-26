import React from "react";
import Image from "next/image";
import iphone from "../assets/iPhone-12-PNG-HD.png";

function Landing() {
  return (
    <section className=" sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className=" space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-5xl xl:text-6xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Best Deals
          </span>
          <span className="block">Grab The Best</span>
          <span className="block">For Yours</span>
        </h1>
        <div>
          <a className="link">Learn More</a>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[450px] lg:w-[550px]">
        <Image src={iphone} alt="iphone" fill objectFit="contain"></Image>
      </div>
    </section>
  );
}

export default Landing;
