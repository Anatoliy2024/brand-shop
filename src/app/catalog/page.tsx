import { CatalogOption } from "@/components/CatalogOption/CatalogOption"
import { CatalogProduct } from "@/components/CatalogProduct/CatalogProduct"
import { catalogBd } from "@/data/catalogBD"
import InnerApp from "@/providers/InnerApp"

export default function Catalog() {
  // const catalog = catalogBd.slice(0, 10)
  return (
    <InnerApp>
      <CatalogOption />
      <CatalogProduct catalog={catalogBd} />
    </InnerApp>
  )
}
