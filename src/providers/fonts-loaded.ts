"use client";

import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import React from "react";
import { getSingleFontFamilyFromNextFont } from "../utils/fonts";

const FPS = 120;
const SLOW_TICK_LENGTH = 1000 / FPS;

function setFontsLoaded(mode: "fast" | "slow") {
  document.documentElement.setAttribute("data-fonts-loaded", mode);
}

interface FontsLoadedProps {
  fonts: NextFontWithVariable[];
}

export function FontsLoaded({ fonts }: FontsLoadedProps) {
  React.useEffect(() => {
    const nativeFontsSupported = "fonts" in document;
    if (!nativeFontsSupported) {
      setFontsLoaded("fast");

      return;
    }

    async function run() {
      const start = performance.now();

      const fontChecks = fonts.map(async (font) => {
        const fontFamilyName = getSingleFontFamilyFromNextFont(font);
        return await document.fonts.load(`1em ${fontFamilyName}`);
      });

      await Promise.all(fontChecks);

      const end = performance.now();
      const time = end - start;
      const isSlowTick = time >= SLOW_TICK_LENGTH;
      setFontsLoaded(isSlowTick ? "slow" : "fast");
    }

    run();
  }, []);

  return null;
}
