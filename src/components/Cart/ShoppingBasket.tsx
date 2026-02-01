"use client"

import style from "./ShoppingBasket.module.scss"
import Image from "next/image"
import { getCart, saveCart } from "@/utils/cart"
import { useEffect, useState } from "react"
import Link from "next/link"

export interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  qty: number
}

export default function ShoppingBasket() {
  const [products, setProducts] = useState<Product[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProducts(getCart())
  }, [])

  const handleDecrease = (productId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      handleQuantityChange(productId, currentQuantity - 1)
    }
  }

  const handleIncrease = (productId: number, currentQuantity: number) => {
    handleQuantityChange(productId, currentQuantity + 1)
  }

  const handleCheckout = () => {
    console.log("Proceeding to checkout...")
  }

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  )

  const handleQuantityChange = (productId: number, newQty: number) => {
    const updated = products.map((p) =>
      p.id === productId ? { ...p, qty: newQty } : p
    )
    setProducts(updated)
    saveCart(updated)
  }

  const removeCart = (productId: number) => {
    const updated = products.filter((p) => p.id !== productId)
    setProducts(updated)
    saveCart(updated)
  }

  if (!mounted) return null

  return (
    <div className={style.shoppingBasket}>
      <div className={style.shoppingBasket__container}>
        <h1 className={style.shoppingBasket__title}>Your shopping cart</h1>

        <div className={style.shoppingBasket__header}>
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <hr className={style.shoppingBasket__divider} />

        <div className={style.shoppingBasket__products}>
          {products.length === 0 && <div>The cart is empty.</div>}
          {products.length > 0 &&
            [...products].reverse().map((product) => {
              const total = product.price * product.qty

              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  total={total}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  removeCart={removeCart}
                />
              )
            })}
        </div>

        <hr className={style.shoppingBasket__divider} />

        <div className={style.shoppingBasket__summary}>
          <div className={style.shoppingBasket__summaryPricing}>
            <div className={style.shoppingBasket__summarySubtotal}>
              <span className={style.shoppingBasket__summarySubtotalLabel}>
                Subtotal
              </span>
              <span className={style.shoppingBasket__summarySubtotalAmount}>
                £{subtotal}
              </span>
            </div>
            <p className={style.shoppingBasket__summaryNote}>
              Taxes and shipping are calculated at checkout
            </p>
          </div>
          <button
            className={style.shoppingBasket__checkoutButton}
            onClick={handleCheckout}
          >
            <span>Go to checkout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const ProductItem = ({
  product,
  total,
  handleDecrease,
  handleIncrease,
  removeCart,
}: {
  product: Product
  total: number
  handleDecrease: (id: number, qty: number) => void
  handleIncrease: (id: number, qty: number) => void
  removeCart: (id: number) => void
}) => {
  return (
    <div key={product.id} className={style.productItem}>
      <Link className={style.productItem__info} href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          className={style.productItem__image}
          width={109}
          height={134}
        />
        <div className={style.productIte__details}>
          <h3 className={style.productItem__name}>{product.title}</h3>
          <div className={style.productItem__description}>
            {product.description}
          </div>
          <p className={style.productItem__price}>£{product.price}</p>
        </div>
      </Link>
      <div className={style.productItem__stepper}>
        <button
          className={style.productItem__button}
          onClick={() => handleDecrease(product.id, product.qty)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className={style.productItem__value}>{product.qty}</span>
        <button
          className={style.productItem__button}
          onClick={() => handleIncrease(product.id, product.qty)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p className={style.productItem__total}>£{total}</p>
      <button
        aria-label="Remove from cart"
        onClick={() => removeCart(product.id)}
        className={`${style.productItem__remove} noSelect`}
      >
        X
      </button>
    </div>
  )
}
