import styles from "./Profile.module.scss"

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <h1 className={styles.profile__title}>My profile</h1>

        <div className={styles.profile__card}>
          <div className={styles.profile__row}>
            <span className={styles.profile__label}>Username</span>
            <span className={styles.profile__value}>avion_user</span>
          </div>

          <div className={styles.profile__row}>
            <span className={styles.profile__label}>Email</span>
            <span className={styles.profile__value}>user@avion.co.uk</span>
          </div>

          <div className={styles.profile__row}>
            <span className={styles.profile__label}>Account balance</span>
            <span className={styles.profile__balance}>£120.50</span>
          </div>

          <div className={styles.profile__row}>
            <span className={styles.profile__label}>Status</span>
            <span className={styles.profile__status}>Active</span>
          </div>
        </div>

        <div className={styles.profile__actions}>
          <button
            className={`${styles.profile__button} ${styles.profile__button_primary}`}
          >
            Edit profile
          </button>
          <button
            className={`${styles.profile__button} ${styles.profile__button_secondary}`}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

// import styles from "./Profile.module.scss"

// export default function Profile() {
//   return (
//     <div className={styles.profile}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>My profile</h1>

//         <div className={styles.card}>
//           <div className={styles.row}>
//             <span className={styles.label}>Username</span>
//             <span className={styles.value}>avion_user</span>
//           </div>

//           <div className={styles.row}>
//             <span className={styles.label}>Email</span>
//             <span className={styles.value}>user@avion.co.uk</span>
//           </div>

//           <div className={styles.row}>
//             <span className={styles.label}>Account balance</span>
//             <span className={styles.balance}>£120.50</span>
//           </div>

//           <div className={styles.row}>
//             <span className={styles.label}>Status</span>
//             <span className={styles.status}>Active</span>
//           </div>
//         </div>

//         <div className={styles.actions}>
//           <button className={styles.primary}>Edit profile</button>
//           <button className={styles.secondary}>Log out</button>
//         </div>
//       </div>
//     </div>
//   )
// }
