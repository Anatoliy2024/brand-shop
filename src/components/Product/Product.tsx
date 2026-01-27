"use client"
import { useState } from "react"
import styles from "./Product.module.scss"

export default function Product() {
  const [quantity, setQuantity] = useState<number>(1)

  const incrementQuantity = () => setQuantity((q) => q + 1)
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1))

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__grid}>
          {/* Image */}
          <div className={styles.product__imageWrapper}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/24dbbce02a6d77e1a06044d652ece6cad61ad345?width=1214"
              alt="The Dandy Chair"
              className={styles.product__image}
            />
          </div>

          {/* Content */}
          <div className={styles.product__content}>
            {/* Title & price */}
            <div className={styles.product__header}>
              <h1 className={styles.product__title}>The Dandy Chair</h1>
              <p className={styles.product__price}>£250</p>
            </div>

            <div className={styles.product__divider} />

            {/* Description */}
            <div className={styles.product__section}>
              <h2 className={styles.product__sectionTitle}>
                Product description
              </h2>
              <p className={styles.product__text}>
                A timeless design, with premium materials…
              </p>
            </div>

            {/* Dimensions */}
            <div className={styles.product__section}>
              <h2 className={styles.product__sectionTitle}>Dimensions</h2>

              <div className={styles.product__dimensions}>
                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Height</span>
                  <span className={styles.product__dimValue}>110cm</span>
                </div>

                <div className={styles.product__dimDivider} />

                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Width</span>
                  <span className={styles.product__dimValue}>75cm</span>
                </div>

                <div className={styles.product__dimDivider} />

                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Depth</span>
                  <span className={styles.product__dimValue}>50cm</span>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className={styles.product__section}>
              <h2 className={styles.product__sectionTitle}>Quantity</h2>

              <div className={styles.product__quantityBox}>
                <button
                  onClick={decrementQuantity}
                  disabled={quantity === 1}
                  className={`${styles.product__quantityBtn} ${
                    quantity === 1
                      ? styles["product__quantityBtn--disabled"]
                      : ""
                  }`}
                >
                  -
                </button>

                <span className={styles.product__quantityValue}>
                  {quantity}
                </span>

                <button
                  onClick={incrementQuantity}
                  className={styles.product__quantityBtn}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.product__buttons}>
              <button className={styles.product__addBtn}>Add to cart</button>
              <button className={styles.product__saveBtn}>
                Save to favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
