// "use client"
import Cart from "@/components/Cart/Cart"
import { CatalogContainer } from "@/components/CatalogContainer/CatalogContainer"

import InnerApp from "@/providers/InnerApp"
import { Suspense } from "react"

export default function Catalog() {
  return (
    <InnerApp>
      <Suspense fallback={null}>
        <Cart />
        {/* <CatalogOption />
        <CatalogProduct /> */}
        {/* <CatalogProduct catalog={catalogBd} /> */}
      </Suspense>
    </InnerApp>
  )
}
