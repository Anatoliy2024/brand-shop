import styles from "./ReturnsPolicy.module.scss"

export default function ReturnsPolicy() {
  return (
    <div className={styles.returns}>
      <div className={styles.returns__container}>
        <h1 className={styles.returns__title}>Returns policy</h1>

        <p className={styles.returns__intro}>
          We want you to be completely satisfied with your purchase. This
          Returns Policy explains how returns and refunds are handled.
        </p>

        <div className={styles.returns__content}>
          <h2 className={styles.returns__subtitle}>Eligibility for returns</h2>
          <p className={styles.returns__text}>
            You may return items within 14 days of receiving your order,
            provided that the products are unused, in their original condition
            and packaging.
          </p>

          <h2 className={styles.returns__subtitle}>Non-returnable items</h2>
          <p className={styles.returns__text}>
            Certain items cannot be returned, including personalized products,
            gift cards and items purchased on sale, unless they are faulty.
          </p>

          <h2 className={styles.returns__subtitle}>How to request a return</h2>
          <p className={styles.returns__text}>
            To initiate a return, please contact our support team at
            hello@avion.co.uk with your order number and reason for return.
          </p>

          <h2 className={styles.returns__subtitle}>Refunds</h2>
          <p className={styles.returns__text}>
            Once we receive and inspect the returned items, we will process your
            refund within 5-7 business days. Refunds will be issued to the
            original payment method.
          </p>

          <h2 className={styles.returns__subtitle}>Damaged or faulty items</h2>
          <p className={styles.returns__text}>
            If your item arrives damaged or faulty, please contact us as soon as
            possible with photos so we can resolve the issue promptly.
          </p>
        </div>
      </div>
    </div>
  )
}

// import styles from "./ReturnsPolicy.module.scss"

// export default function ReturnsPolicy() {
//   return (
//     <div className={styles.returns}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>Returns policy</h1>

//         <p className={styles.text}>
//           We want you to be completely satisfied with your purchase. This
//           Returns Policy explains how returns and refunds are handled.
//         </p>

//         <div className={styles.content}>
//           <h2>Eligibility for returns</h2>
//           <p>
//             You may return items within 14 days of receiving your order,
//             provided that the products are unused, in their original condition
//             and packaging.
//           </p>

//           <h2>Non-returnable items</h2>
//           <p>
//             Certain items cannot be returned, including personalized products,
//             gift cards and items purchased on sale, unless they are faulty.
//           </p>

//           <h2>How to request a return</h2>
//           <p>
//             To initiate a return, please contact our support team at
//             hello@avion.co.uk with your order number and reason for return.
//           </p>

//           <h2>Refunds</h2>
//           <p>
//             Once we receive and inspect the returned items, we will process your
//             refund within 5-7 business days. Refunds will be issued to the
//             original payment method.
//           </p>

//           <h2>Damaged or faulty items</h2>
//           <p>
//             If your item arrives damaged or faulty, please contact us as soon as
//             possible with photos so we can resolve the issue promptly.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
