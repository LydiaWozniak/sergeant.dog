import clsx from 'clsx'
import Link from 'next/link'
import { Icon } from '../components/icon'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.textName}>Braden Marshall</h1>
        <div className={styles.captionContainer}>
        <p className={styles.textCaption}>Building mobile at <a href="https://attio.com/">attio</a>.</p>
        <div className={styles.socialContainer}>
        <Link href="https://twitter.com/SirBraden1996" className={clsx(styles.socialLink, styles.twitter)}>
          <Icon icon='faTwitter' size='xl' />
          </Link>
        <Link href="https://github.com/Braden1996"  className={clsx(styles.socialLink, styles.gitHub)}>
          <Icon icon='faGithub' size='xl' />
          </Link>
        <Link href="https://www.linkedin.com/in/braden-marshall/"  className={clsx(styles.socialLink, styles.linkedIn)}>
          <Icon icon='faLinkedin' size='xl' />
          </Link>
        </div>
        </div>
      </header>
    </main>
  )
}
