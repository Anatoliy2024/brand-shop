"use client"
import Image from "next/image"
import style from "./Collection.module.scss"
import Link from "next/link"
import { ButtonUi } from "@/ui/button-ui/ButtonUi"
import { ItemCollection } from "../ItemCollection/ItemCollection"
import { useRouter } from "next/navigation"

import { catalogBd } from "@/data/catalogBD"
import { shuffleArray } from "@/utils/shuffle"
export function Collection({ children }: { children?: React.ReactNode }) {
  // const { showProduct } = useShowProduct()

  const shuffleCollection = shuffleArray(catalogBd)
  const collectionSlice = shuffleCollection.slice(0, 4)

  // const collectionBD = [
  //   {
  //     id: 1,
  //     title: "The Dandy chair",
  //     price: 250,
  //     image: "/img/itemCollection-1.png",
  //   },
  //   {
  //     id: 2,

  //     title: "Rustic Vase Set",
  //     price: 155,
  //     image: "/img/itemCollection-2.png",
  //   },
  //   {
  //     id: 3,

  //     title: "The Silky Vase",
  //     price: 125,
  //     image: "/img/itemCollection-3.png",
  //   },
  //   {
  //     id: 4,

  //     title: "The Lucy Lamp",
  //     price: 399,
  //     image: "/img/itemCollection-4.png",
  //   },
  // ]

  return (
    <div className={style.Collection}>
      {children}
      <div className={style.Collection__list}>
        {collectionSlice.map((item) => (
          <ItemCollection
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            // showProduct={showProduct}
          />
        ))}
      </div>
      <ButtonUi className="Collection" />

      {/* <button>
        <Link href="catalog">View collection</Link>
      </button> */}
    </div>
  )
}

// function ItemCollection({
//   title,
//   price,
//   image,
// }: {
//   title: string
//   price: string
//   image: string
// }) {
//   return (
//     <div className={`${style.Collection__ItemCollection} noSelect`}>
//       <div className={style.Collection__imageWrapper}>
//         <Image src={image} width={305} height={375} alt={title} />
//       </div>
//       <h4>{title}</h4>
//       <div className={style.Collection__price}>£{price}</div>
//     </div>
//   )
// }
