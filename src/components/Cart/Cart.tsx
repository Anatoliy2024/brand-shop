"use client"
import { useState } from "react"
import style from "./Cart.module.scss"

interface CartItem {
  id: number
  title: string
  description: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      quantity: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2cbf591338280a3fa3c36b56d4bb802c8184e23b?width=1440",
    },
    {
      id: 2,
      title: "Basic white vase",
      description: "Beautiful and simple this is one for the classics",
      price: 125,
      quantity: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2cbf591338280a3fa3c36b56d4bb802c8184e23b?width=1440",
    },
  ])

  const increment = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decrement = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>Your shopping cart</h2>
      <div className={style.cart__list}>
        {items.map((item) => (
          <div key={item.id} className={style.cart__item}>
            <img
              src={item.image}
              alt={item.title}
              className={style.cart__itemImage}
            />
            <div className={style.cart__itemInfo}>
              <h3 className={style.cart__itemTitle}>{item.title}</h3>
              <p className={style.cart__itemDesc}>{item.description}</p>
              <p className={style.cart__itemPrice}>£{item.price}</p>
            </div>
            <div className={style.cart__itemQuantity}>
              <button
                onClick={() => decrement(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
            </div>
            <div className={style.cart__itemTotal}>
              £{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>
      <div className={style.cart__footer}>
        <span className={style.cart__subtotal}>Subtotal £{subtotal}</span>
        <button className={style.cart__checkout}>Go to checkout</button>
      </div>
    </div>
  )
}
