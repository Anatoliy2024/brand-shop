"use client"
import * as React from "react"
import style from "./ShoppingBasket.module.scss"
import Image from "next/image"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

export default function ShoppingBasket() {
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: "1",
      name: "Graystone vase",
      description: "A timeless ceramic vase with\na tri color grey glaze.",
      price: 85,
      image: "/img/itemCollection-1.png",
      quantity: 1,
    },
    {
      id: "2",
      name: "Basic white vase",
      description: "Beautiful and simple this is\none for the classics",
      price: 125,
      image: "/img/itemCollection-2.png",

      quantity: 1,
    },
  ])

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    )
  }

  const handleDecrease = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      handleQuantityChange(productId, currentQuantity - 1)
    }
  }

  const handleIncrease = (productId: string, currentQuantity: number) => {
    handleQuantityChange(productId, currentQuantity + 1)
  }

  const handleCheckout = () => {
    console.log("Proceeding to checkout...")
  }

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

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
              const total = product.price * product.quantity

              return (
                <div key={product.id} className={style.shoppingBasket__product}>
                  <div className={style.shoppingBasket__productInfo}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      className={style.shoppingBasket__productImage}
                      width={109}
                      height={134}
                    />
                    <div className={style.shoppingBasket__productDetails}>
                      <h3 className={style.shoppingBasket__productName}>
                        {product.name}
                      </h3>
                      <p className={style.shoppingBasket__productDescription}>
                        {product.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            {index <
                              product.description.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                      <p className={style.shoppingBasket__productPrice}>
                        £{product.price}
                      </p>
                    </div>
                  </div>
                  {/* <div className={style.shoppingBasket__productControls}> */}
                  <div className={style.shoppingBasket__stepper}>
                    <button
                      className={style.shoppingBasket__stepperButton}
                      onClick={() =>
                        handleDecrease(product.id, product.quantity)
                      }
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className={style.shoppingBasket__stepperValue}>
                      {product.quantity}
                    </span>
                    <button
                      className={style.shoppingBasket__stepperButton}
                      onClick={() =>
                        handleIncrease(product.id, product.quantity)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className={style.shoppingBasket__productTotal}>£{total}</p>
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

// "use client"
// import { useState } from "react"
// import style from "./Cart.module.scss"

// interface CartItem {
//   id: number
//   title: string
//   description: string
//   price: number
//   quantity: number
//   image: string
// }

// export default function Cart() {
//   const [items, setItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       title: "Graystone vase",
//       description: "A timeless ceramic vase with a tri color grey glaze.",
//       price: 85,
//       quantity: 1,
//       image:
//         "https://api.builder.io/api/v1/image/assets/TEMP/2cbf591338280a3fa3c36b56d4bb802c8184e23b?width=1440",
//     },
//     {
//       id: 2,
//       title: "Basic white vase",
//       description: "Beautiful and simple this is one for the classics",
//       price: 125,
//       quantity: 1,
//       image:
//         "https://api.builder.io/api/v1/image/assets/TEMP/2cbf591338280a3fa3c36b56d4bb802c8184e23b?width=1440",
//     },
//   ])

//   const increment = (id: number) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     )
//   }

//   const decrement = (id: number) => {
//     setItems(
//       items.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//           : item
//       )
//     )
//   }

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   )

//   return (
//     <div className={style.cart}>
//       <h2 className={style.cart__title}>Your shopping cart</h2>
//       <div className={style.cart__list}>
//         {items.map((item) => (
//           <div key={item.id} className={style.cart__item}>
//             <img
//               src={item.image}
//               alt={item.title}
//               className={style.cart__itemImage}
//             />
//             <div className={style.cart__itemInfo}>
//               <h3 className={style.cart__itemTitle}>{item.title}</h3>
//               <p className={style.cart__itemDesc}>{item.description}</p>
//               <p className={style.cart__itemPrice}>£{item.price}</p>
//             </div>
//             <div className={style.cart__itemQuantity}>
//               <button
//                 onClick={() => decrement(item.id)}
//                 disabled={item.quantity === 1}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increment(item.id)}>+</button>
//             </div>
//             <div className={style.cart__itemTotal}>
//               £{item.price * item.quantity}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={style.cart__footer}>
//         <span className={style.cart__subtotal}>Subtotal £{subtotal}</span>
//         <button className={style.cart__checkout}>Go to checkout</button>
//       </div>
//     </div>
//   )
// }
