import { ButtonUi } from "@/ui/button-ui/ButtonUi"
import styles from "./Vacancies.module.scss"

export function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <div className={styles.vacancies__container}>
        <h1 className={styles.vacancies__title}>Careers at Avion</h1>
        <p className={styles.vacancies__text}>
          We do not have any open positions at the moment.
        </p>
        <p className={styles.vacancies__subtext}>
          We are always happy to hear from talented people.
        </p>
        <ButtonUi text={"Get in touch"} className="grey" />

        {/* <button className={styles.vacancies__button}>Get in touch</button> */}
      </div>
    </div>
  )
}
