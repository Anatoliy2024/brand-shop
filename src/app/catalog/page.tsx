import { CatalogOption } from "@/components/CatalogOption/CatalogOption"
import { CatalogProduct } from "@/components/CatalogProduct/CatalogProduct"
import InnerApp from "@/providers/InnerApp"

export default function Catalog() {
  return (
    <InnerApp>
      <CatalogOption />
      <CatalogProduct />
    </InnerApp>
  )
}
