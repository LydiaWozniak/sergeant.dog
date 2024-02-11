import { Hero } from "../components/hero/hero";
import { FontsLoaded } from "../providers/fonts-loaded";
import { brutalTypeFont, interFont } from "../utils/fonts";
import styles from "./page.module.css";

const WAIT_FOR_FONTS = [
  brutalTypeFont,
  interFont,
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FontsLoaded fonts={WAIT_FOR_FONTS} />
    </main>
  );
}
