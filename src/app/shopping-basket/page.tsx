"use client"
// import ShoppingBasket from "@/components/ShoppingBasket/ShoppingBasket"
// import Cart from "@/components/ShoppingBasket/ShoppingBasket"
// import { CatalogContainer } from "@/components/CatalogContainer/CatalogContainer"

import InnerApp from "@/providers/InnerApp"
import { Suspense, useState } from "react"
import { ShoppingBasketDynamic } from "@/components/ShoppingBasket/ShoppingBasketDynamic"

export default function Catalog() {
  return (
    <InnerApp>
      <Suspense fallback={null}>
        <ShoppingBasketDynamic />
        {/* <CatalogOption />
        <CatalogProduct /> */}
        {/* <CatalogProduct catalog={catalogBd} /> */}
      </Suspense>
    </InnerApp>
  )
}
