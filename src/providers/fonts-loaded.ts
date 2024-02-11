"use client";

import React from "react";

const FPS = 120;
const SLOW_TICK_LENGTH = 1000 / FPS;

function setFontsLoaded(mode: "fast" | "slow") {
  document.documentElement.setAttribute("data-fonts-loaded", mode);
}

export function FontsLoaded() {
  React.useEffect(() => {
    const nativeFontsSupported = "fonts" in document;
    if (!nativeFontsSupported) {
      setFontsLoaded("fast");

      return;
    }

    const fontsAlreadyLoaded = document.fonts.status === "loaded";
    if (fontsAlreadyLoaded) {
      setFontsLoaded("fast");

      return;
    }

    const start = performance.now();

    const onLoadingDone = () => {
      const end = performance.now();
      const time = end - start;
      const isSlowTick = time >= SLOW_TICK_LENGTH;

      setFontsLoaded(isSlowTick ? "slow" : "fast");
    };
    const onLoadingError = () => {
      setFontsLoaded("fast");
    };

    document.fonts.addEventListener("loadingdone", onLoadingDone);
    document.fonts.addEventListener("loadingerror", onLoadingError);

    return () => {
      document.fonts.removeEventListener("loadingdone", onLoadingDone);
      document.fonts.removeEventListener("loadingerror", onLoadingError);
    };
  }, []);

  return null;
}
