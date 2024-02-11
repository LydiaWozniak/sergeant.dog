"use client";

import React from "react";

const nativeFontsSupported = "fonts" in document;

const FPS = 120;

export function FontsLoaded() {
  React.useEffect(() => {
    if (!nativeFontsSupported) {
      document.documentElement.setAttribute("data-fonts-loaded", "fast");

      return;
    }

    const start = performance.now();

    const onLoadingDone = () => {
      const end = performance.now();
      const time = end - start;
      const timeToLoad = time >= 1000 / FPS ? "slow" : "fast";

      document.documentElement.setAttribute("data-fonts-loaded", timeToLoad);
    };
    const onLoadingError = () => {
      document.documentElement.setAttribute("data-fonts-loaded", "fast");
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
