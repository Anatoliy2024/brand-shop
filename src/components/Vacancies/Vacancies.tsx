import styles from "./Vacancies.module.scss"

export function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <div className={styles.container}>
        <h1 className={styles.title}>Careers at Avion</h1>
        <p className={styles.text}>
          We don’t have any open positions at the moment.
        </p>
        <p className={styles.subtext}>
          We’re always happy to hear from talented people.
        </p>
        <button className={styles.button}>Get in touch</button>
      </div>
    </div>
  )
}
