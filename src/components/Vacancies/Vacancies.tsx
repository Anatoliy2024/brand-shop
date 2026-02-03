import styles from "./Vacancies.module.scss"

export function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <div className={styles.vacancies__container}>
        <h1 className={styles.vacancies__title}>Careers at Avion</h1>
        <p className={styles.vacancies__text}>
          We don’t have any open positions at the moment.
        </p>
        <p className={styles.vacancies__subtext}>
          We’re always happy to hear from talented people.
        </p>
        <button className={styles.vacancies__button}>Get in touch</button>
      </div>
    </div>
  )
}

// import styles from "./Vacancies.module.scss"

// export function Vacancies() {
//   return (
//     <div className={styles.vacancies}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>Careers at Avion</h1>
//         <p className={styles.text}>
//           We don’t have any open positions at the moment.
//         </p>
//         <p className={styles.subtext}>
//           We’re always happy to hear from talented people.
//         </p>
//         <button className={styles.button}>Get in touch</button>
//       </div>
//     </div>
//   )
// }
