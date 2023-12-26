"use client";
import React, { ChangeEvent } from "react";

import { useSliderState } from "@/store/sliderStore";

const Slider = () => {
  const { sliderValue, setSliderValue } = useSliderState();

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="h-full">
      <input
        className="h-full w-full appearance-none bg-transparent"
        type="range"
        min={0}
        max={99}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
