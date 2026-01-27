// "use client"
import { CatalogContainer } from "@/components/CatalogContainer/CatalogContainer"
import { CatalogOption } from "@/components/CatalogOption/CatalogOption"
import { CatalogProduct } from "@/components/CatalogProduct/CatalogProduct"
import { catalogBd } from "@/data/catalogBD"
import InnerApp from "@/providers/InnerApp"
import { Suspense } from "react"
// import { useState } from "react"

export default function Catalog() {
  // const [option, setOption] = useState({ category: [], price: "", brand: [] })

  // const catalog = catalogBd.slice(0, 10)
  return (
    <InnerApp hiddenCatalog={true}>
      <Suspense fallback={null}>
        <CatalogContainer />
        {/* <CatalogOption />
        <CatalogProduct /> */}
        {/* <CatalogProduct catalog={catalogBd} /> */}
      </Suspense>
    </InnerApp>
  )
}
