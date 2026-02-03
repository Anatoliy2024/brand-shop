"use client"
import styles from "./Features.module.scss"
import Image from "next/image"

export function Features({
  title,
  srcImage,
  alt,
  children,
  type,
}: {
  title: string
  srcImage: string
  alt: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <div className={styles.features}>
      <div
        className={`${styles.features__container} ${
          type === "reverse" ? styles.features__containerReverse : ""
        }`}
      >
        <div className={styles.features__content}>
          <div className={styles.features__contentWrapper}>
            <div className={styles.features__top}>
              <h2 className={styles.features__title}>{title}</h2>
              <div className={styles.features__description}>{children}</div>
            </div>

            <div className={styles.features__actions}>
              <button className={styles.features__button}>Get in Touch</button>
            </div>
          </div>
        </div>

        <div className={styles.features__image}>
          <Image
            src={srcImage}
            alt={alt}
            className={styles.features__img}
            width={720}
            height={603}
          />
        </div>
      </div>
    </div>
  )
}
