"use client"
// import * as React from "react"
import style from "./ShoppingBasket.module.scss"
import Image from "next/image"
import { getCart, removeFromCart, saveCart, updateQty } from "@/utils/cart"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  qty: number
}

export default function ShoppingBasket() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        setProducts(getCart())
      }
    }, 0)
  }, [])
  // const handleQuantityChange = (productId: string, newQuantity: number) => {
  //   setProducts((prevProducts) => {
  //     const updated = prevProducts.map((product) =>
  //       product.id === productId ? { ...product, qty: newQuantity } : product
  //     )
  //     updateQty(productId, newQuantity) // сохраняем в localStorage
  //     return updated
  //   })
  // }

  const handleDecrease = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      handleQuantityChange(productId, currentQuantity - 1)
    }
  }

  const handleIncrease = (productId: string, currentQuantity: number) => {
    // updateQty(productId, currentQuantity)
    handleQuantityChange(productId, currentQuantity + 1)
  }

  const handleCheckout = () => {
    console.log("Proceeding to checkout...")
  }

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  )

  // // const removeCart = (id) => {
  // //   removeFromCart(id)
  // //   setProducts(getCart())
  // //   // setProducts((prev) => prev.id !== id)
  // // }
  // const removeCart = (id: string) => {
  //   setProducts((prev) => {
  //     const updated = prev.filter((p) => p.id !== id)
  //     removeFromCart(id) // сохраняем в localStorage
  //     return updated
  //   })
  // }

  // useEffect(() => {
  //   if (typeof window === "undefined") return

  //   const cart = getCart() // просто чистая функция, не setState внутри
  //   setProducts(cart)
  // }, [])

  // Обновление количества
  const handleQuantityChange = (productId: string, newQty: number) => {
    setProducts((prev) => {
      const updated = prev.map((p) =>
        p.id === productId ? { ...p, qty: newQty } : p
      )
      saveCart(updated) // синхронизируем localStorage
      return updated
    })
  }

  // Удаление
  const removeCart = (productId: string) => {
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== productId)
      saveCart(updated)
      return updated
    })
  }

  return (
    <section className={style.shoppingBasket}>
      <div className={style.shoppingBasket__container}>
        <header>
          <h1 className={style.shoppingBasket__title}>Your shopping cart</h1>
        </header>

        <main>
          <div className={style.shoppingBasket__header}>
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          <hr className={style.shoppingBasket__divider} />

          <div className={style.shoppingBasket__products}>
            {products.map((product) => {
              const total = product.price * product.qty

              return (
                <div key={product.id} className={style.shoppingBasket__product}>
                  <Link
                    className={style.shoppingBasket__productInfo}
                    href={`/product/${product.id}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      className={style.shoppingBasket__productImage}
                      width={109}
                      height={134}
                    />
                    <div className={style.shoppingBasket__productDetails}>
                      <h3 className={style.shoppingBasket__productName}>
                        {product.name}
                      </h3>
                      <div className={style.shoppingBasket__productDescription}>
                        <div>{product.title}</div>
                        <div>{product.description}</div>
                        {/* {product.description.split("\n").map((line, index) => (
                          <>
                          
                            {line}
                            {index <
                              product.description.split("\n").length - 1 && (
                              <br />
                            )}
                          </>
                        ))} */}
                      </div>
                      <p className={style.shoppingBasket__productPrice}>
                        £{product.price}
                      </p>
                    </div>
                  </Link>
                  {/* <div className={style.shoppingBasket__productControls}> */}
                  <div className={style.shoppingBasket__stepper}>
                    <button
                      className={style.shoppingBasket__stepperButton}
                      onClick={() => handleDecrease(product.id, product.qty)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className={style.shoppingBasket__stepperValue}>
                      {product.qty}
                    </span>
                    <button
                      className={style.shoppingBasket__stepperButton}
                      onClick={() => handleIncrease(product.id, product.qty)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className={style.shoppingBasket__productTotal}>£{total}</p>
                  <div onClick={() => removeCart(product.id)}>X</div>
                  {/* </div> */}
                </div>
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
        </main>
      </div>
    </section>
  )
}
