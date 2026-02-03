"use client"
import { useState } from "react"
import styles from "./Product.module.scss"
import { catalogBd } from "@/data/catalogBD"
import Image from "next/image"
import { addToCart, mapProductToCartItem } from "@/utils/cart"

export default function Product({ id }: { id: number }) {
  const product = catalogBd.find((product) => product.id === id)

  const [quantity, setQuantity] = useState<number>(1)

  const incrementQuantity = () => setQuantity((q) => q + 1)
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1))

  if (!product) return

  const addCart = () => {
    addToCart(mapProductToCartItem(product, quantity), quantity)
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__grid}>
          <div className={styles.product__imageWrapper}>
            <Image
              src={product.image}
              width={607}
              height={661}
              alt={product.title}
              priority
            />
          </div>

          <div className={styles.product__content}>
            <div className={styles.product__header}>
              <h1 className={styles.product__title}>{product.title}</h1>
              <p className={styles.product__price}>£{product.price}</p>
            </div>

            <div className={styles.product__divider} />

            <div className={styles.product__section}>
              <h2 className={styles.product__sectionTitle}>
                Product description
              </h2>
              <p className={styles.product__text}>{product.description}</p>
            </div>

            <div className={styles.product__section}>
              <h2 className={styles.product__sectionTitle}>Dimensions</h2>

              <div className={styles.product__dimensions}>
                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Height</span>
                  <span className={styles.product__dimValue}>
                    {product.dimensions.Height}cm
                  </span>
                </div>

                <div className={styles.product__dimDivider} />

                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Width</span>
                  <span className={styles.product__dimValue}>
                    {product.dimensions.Width}cm
                  </span>
                </div>

                <div className={styles.product__dimDivider} />

                <div className={styles.product__dimension}>
                  <span className={styles.product__dimLabel}>Depth</span>
                  <span className={styles.product__dimValue}>
                    {product.dimensions.Depth}cm
                  </span>
                </div>
              </div>
            </div>

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

            <div className={styles.product__buttons}>
              <button
                className={styles.product__addBtn}
                onClick={() => addCart()}
              >
                Add to cart
              </button>
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
