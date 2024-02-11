"use client";

import clsx from "clsx";
import Link from "next/link";
import { Icon } from "../icon";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <header className={styles.container}>
      <h1 className={styles.textName}>Braden Marshall</h1>
      <div className={styles.captionContainer}>
        <p className={styles.textCaption}>
          Building mobile at <a href="https://attio.com/">attio</a>.
        </p>
        <div className={styles.socialContainer}>
          <Link
            href="https://x.com/SirBraden1996"
            aria-label="Link to Braden's X profile."
            className={clsx(styles.socialLink, styles.x)}
          >
            <Icon icon="faXTwitter" size="xl" />
          </Link>
          <Link
            href="https://github.com/Braden1996"
            aria-label="Link to Braden's GitHub profile."
            className={clsx(styles.socialLink, styles.gitHub)}
          >
            <Icon icon="faGithub" size="xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/braden-marshall/"
            aria-label="Link to Braden's LinkedIn profile."
            className={clsx(styles.socialLink, styles.linkedIn)}
          >
            <Icon icon="faLinkedin" size="xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}
