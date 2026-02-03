import { CatalogBdType } from "@/data/catalogBD"
import { ItemCollection } from "../ItemCollection/ItemCollection"
import style from "./CatalogProduct.module.scss"

export function CatalogProduct({
  catalogItems,
}: {
  catalogItems: CatalogBdType
}) {
  return (
    <div className={style.CatalogProduct}>
      {catalogItems.map((product) => (
        <ItemCollection
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}
