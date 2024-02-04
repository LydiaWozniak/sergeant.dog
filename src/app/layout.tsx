import "./globals.css";
import clsx from "clsx";
import "the-new-css-reset/css/reset.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// This font subset only includes the characters necessary to
// spell "Braden Marshall".
const brutalTypeFont = localFont({
  src: "../../public/fonts/BrutalType-Bold.FontimizeSubset.woff2",
  variable: "--font-brutal-type",
});

export const metadata = {
  title: "Braden Marshall",
  description: "Senior Software Engineer at Attio. Specialising in React Native development for mobile.",
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
