"use client"
import InnerApp from "@/providers/InnerApp"
import { Suspense } from "react"
import { ShoppingBasketDynamic } from "@/components/ShoppingBasket/ShoppingBasketDynamic"

import { CollectionDynamic } from "@/components/Collection/CollectionDynamic"

export default function ShoppingBasketPage() {
  return (
    <InnerApp>
      <Suspense fallback={null}>
        <ShoppingBasketDynamic />
      </Suspense>
      <CollectionDynamic />
    </InnerApp>
  )
}
