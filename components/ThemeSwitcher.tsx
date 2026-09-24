"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import lightIcon from "../public/theme.svg";
import darkIcon from "../public/moon.svg";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // hydration guard: the active theme is unknown until the client mounts
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className={`focus-ring p-2 rounded-md hover:scale-110 duration-200 `}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <div className="flex items-center w-6 h-6">
          <div>
            <Image className="object-fit" src={darkIcon} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex items-center w-6 h-6">
          <div>
            <Image className="object-fit" src={lightIcon} alt="" />
          </div>
        </div>
      )}
    </button>
  );
};
