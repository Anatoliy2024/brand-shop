"use client"
import dynamic from "next/dynamic"

export const ShoppingBasketDynamic = dynamic(
  () =>
    import("@/components/ShoppingBasket/ShoppingBasket").then(
      (m) => m.ShoppingBasket
    ),
  { ssr: false }
)
