import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.textName}>Braden Marshall</h1>
        <p className={styles.textCaption}>Building mobile at <a href="https://attio.com/">attio</a>.</p>
      </header>
    </main>
  )
}
