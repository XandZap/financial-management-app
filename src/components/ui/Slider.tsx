"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

type props = {
  children: React.ReactNode;
};

export default function SliderCard({ children }: props) {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      // classes: {
      //   nav: {
      //     active: "[&>*]:bg-wuiSlate-700",
      //   },
      // },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-white rounded shadow-xl glide-06 shadow-slate-200">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {children}
          </ul>
        </div>
        {/* <div className="absolute bottom-2 flex items-center justify-between w-full " data-glide-el="controls">
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300  text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <BsArrowLeft />
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300  text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <BsArrowRight />
          </button>
        </div> */}

        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button className="p-4 group" data-glide-dir="=0" aria-label="goto slide 1">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button className="p-4 group" data-glide-dir="=1" aria-label="goto slide 2">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button className="p-4 group" data-glide-dir="=2" aria-label="goto slide 3">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button className="p-4 group" data-glide-dir="=3" aria-label="goto slide 4">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
    </>
  );
}

