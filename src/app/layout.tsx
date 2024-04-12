import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import "the-new-css-reset/css/reset.css";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { brutalTypeFont, interFont } from "../utils/fonts";

config.autoAddCss = false;

export const metadata = {
  title: "Sergeant Dribbles",
  description: "Sergeant is a newfoundland good boy, with a special affinity for dribbling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(interFont.variable, brutalTypeFont.variable)}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
