import { Hero } from "../components/hero/hero";
import { FontsLoaded } from "../providers/fonts-loaded";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FontsLoaded />
    </main>
  );
}
