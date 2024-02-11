"use client";

import React from "react";

export function JsEnabled() {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-js-enabled", "true");
  }, []);

  return null;
}
