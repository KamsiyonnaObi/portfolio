import { create } from "zustand";

interface sliderState {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

export const useSliderState = create<sliderState>()((set) => ({
  sliderValue: 0,
  setSliderValue: (value) => set(() => ({ sliderValue: value })),
}));
