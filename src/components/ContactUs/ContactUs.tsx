import styles from "./ContactUs.module.scss"

export default function ContactUs() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <h1 className={styles.contact__title}>Contact us</h1>

        <p className={styles.contact__text}>
          Have a question, idea or just want to say hello - we’d love to hear
          from you.
        </p>

        <div className={styles.contact__info}>
          <div className={styles.contact__item}>
            <span className={styles.contact__label}>Email</span>
            <span className={styles.contact__value}>hello@avion.co.uk</span>
          </div>

          <div className={styles.contact__item}>
            <span className={styles.contact__label}>Phone</span>
            <span className={styles.contact__value}>+44 20 1234 5678</span>
          </div>

          <div className={styles.contact__item}>
            <span className={styles.contact__label}>Studio</span>
            <span className={styles.contact__value}>
              21 Chelsea Street, London
            </span>
          </div>
        </div>

        <button className={styles.contact__button}>Get in touch</button>
      </div>
    </div>
  )
}

// import styles from "./ContactUs.module.scss"

// export default function ContactUs() {
//   return (
//     <div className={styles.contact}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>Contact us</h1>

//         <p className={styles.text}>
//           Have a question, idea or just want to say hello - we’d love to hear
//           from you.
//         </p>

//         <div className={styles.info}>
//           <div className={styles.block}>
//             <span className={styles.label}>Email</span>
//             <span className={styles.value}>hello@avion.co.uk</span>
//           </div>

//           <div className={styles.block}>
//             <span className={styles.label}>Phone</span>
//             <span className={styles.value}>+44 20 1234 5678</span>
//           </div>

//           <div className={styles.block}>
//             <span className={styles.label}>Studio</span>
//             <span className={styles.value}>21 Chelsea Street, London</span>
//           </div>
//         </div>

//         <button className={styles.button}>Get in touch</button>
//       </div>
//     </div>
//   )
// }
