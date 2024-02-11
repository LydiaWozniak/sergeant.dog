import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: false,
});

// This font subset only includes the characters necessary to
// spell "Braden Marshall".
export const brutalTypeFont = localFont({
  src: "../../public/fonts/BrutalType-Bold.FontimizeSubset.woff2",
  variable: "--font-brutal-type",
  preload: false,
});

const FONT_FAMILY_REGEX = /'([^']+)'/g;

export function getSingleFontFamilyFromNextFont(font: NextFontWithVariable) {
  const match = font.style.fontFamily.match(FONT_FAMILY_REGEX)?.at(0);

  if (!match) {
    throw new Error("Could not find font family in NextFont");
  }

  const surroundingQuotes = "'";
  return match.slice(surroundingQuotes.length, -surroundingQuotes.length);
}
