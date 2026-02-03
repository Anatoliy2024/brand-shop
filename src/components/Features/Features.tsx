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

// "use client"
// import styles from "./Features.module.scss"
// import Image from "next/image"

// export function Features({
//   title,
//   srcImage,
//   alt,
//   children,
//   type,
// }: {
//   title: string
//   srcImage: string
//   alt: string
//   children: React.ReactNode
//   type?: string
// }) {
//   return (
//     <div className={styles.features}>
//       <div
//         className={`${styles.container} ${
//           type === "revers" ? styles.container__revers : ""
//         }`}
//       >
//         <div className={styles.contentColumn}>
//           <div className={styles.contentWrapper}>
//             <div className={styles.topContent}>
//               <h2 className={styles.title}>{title}</h2>
//               <div className={styles.description}>{children}</div>
//             </div>
//             <div className={styles.buttonWrapper}>
//               <button>Get in Touch</button>
//             </div>
//           </div>
//         </div>
//         <div className={styles.imageColumn}>
//           <Image
//             src={srcImage}
//             alt={alt}
//             className={styles.image}
//             width={720}
//             height={603}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
