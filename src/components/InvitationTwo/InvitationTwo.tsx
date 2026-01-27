"use client"
import React, { useState } from "react"
import styles from "./InvitationTwo.module.scss"

export const InvitationTwo: React.FC = () => {
  const [email, setEmail] = useState("")

  return (
    <div className={styles.join}>
      <div className={styles.join__grid}>
        {/* Image */}
        <div className={styles.join__imageWrapper}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2cbf591338280a3fa3c36b56d4bb802c8184e23b?width=1440"
            alt="Modern interior"
            className={styles.join__image}
          />
        </div>

        {/* Content */}
        <div className={styles.join__content}>
          <div className={styles.join__inner}>
            <h2 className={styles.join__title}>
              Join the club and get the benefits
            </h2>

            <p className={styles.join__text}>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>

            <div className={styles.join__form}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.join__input}
              />
              <button className={styles.join__button}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
