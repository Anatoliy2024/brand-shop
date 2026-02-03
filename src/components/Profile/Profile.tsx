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
