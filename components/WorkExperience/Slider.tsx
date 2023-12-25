import React from "react";

const Slider = () => {
  return (
    <div className="h-full">
      <input
        className="h-full w-full appearance-none bg-transparent"
        type="range"
        min={0}
        max={3}
      />
    </div>
  );
};

export default Slider;
