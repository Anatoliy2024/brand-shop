// "use client"
import { CatalogContainer } from "@/components/CatalogContainer/CatalogContainer"
import { Collection } from "@/components/Collection/Collection"
import { Different } from "@/components/Different/Different"
import { InvitationTwo } from "@/components/InvitationTwo/InvitationTwo"
import Product from "@/components/Product/Product"

import InnerApp from "@/providers/InnerApp"
import { Suspense } from "react"
// import { useState } from "react"

export default function Catalog() {
  // const [option, setOption] = useState({ category: [], price: "", brand: [] })

  // const catalog = catalogBd.slice(0, 10)
  return (
    <InnerApp>
      <Suspense fallback={null}>
        <Product />
        <Collection />
        <Different />
        <InvitationTwo />
        {/* <CatalogOption />
        <CatalogProduct /> */}
        {/* <CatalogProduct catalog={catalogBd} /> */}
      </Suspense>
    </InnerApp>
  )
}
