import { catalogBd, CatalogBdType } from "@/data/catalogBD"
import { ItemCollection } from "../ItemCollection/ItemCollection"
import style from "./CatalogProduct.module.scss"

export function CatalogProduct({
  catalogItems,
}: // showProduct,
{
  catalogItems: CatalogBdType
  // showProduct: (value: number) => void
}) {
  // const { showProduct } = useShowProduct()
  return (
    <div className={style.CatalogProduct}>
      {catalogItems.map((product) => (
        <ItemCollection
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          // showProduct={showProduct}
        />
      ))}
    </div>
  )
}
// import { catalogBd, CatalogBdType } from "@/data/catalogBD"
// import { ItemCollection } from "../ItemCollection/ItemCollection"
// import style from "./CatalogProduct.module.scss"

// export function CatalogProduct({ catalog }: { catalog: CatalogBdType }) {

//   return (
//     <div className={style.CatalogProduct}>
//       {catalog.map((product) => (
//         <ItemCollection
//           key={product.id}
//           title={product.title}
//           price={product.price}
//           image={product.image}
//         />
//       ))}
//     </div>
//   )
// }
