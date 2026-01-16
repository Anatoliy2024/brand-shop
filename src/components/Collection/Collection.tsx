import Image from "next/image"
import style from "./Collection.module.scss"
import Link from "next/link"
import { ButtonUi } from "@/ui/button-ui/ButtonUi"
export function Collection() {
  const CollectionBD = [
    {
      title: "The Dandy chair",
      price: "250",
      image: "/img/itemCollection-1.png",
    },
    {
      title: "Rustic Vase Set",
      price: "155",
      image: "/img/itemCollection-2.png",
    },
    {
      title: "The Silky Vase",
      price: "125",
      image: "/img/itemCollection-3.png",
    },
    {
      title: "The Lucy Lamp",
      price: "399",
      image: "/img/itemCollection-4.png",
    },
  ]

  return (
    <div className={style.Collection}>
      <div className={style.Collection__list}>
        {CollectionBD.map((item, i) => (
          <ItemCollection
            key={i}
            title={item.title}
            price={item.price}
            image={item.image}
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

function ItemCollection({
  title,
  price,
  image,
}: {
  title: string
  price: string
  image: string
}) {
  return (
    <div className={`${style.Collection__ItemCollection} noSelect`}>
      <div className={style.Collection__imageWrapper}>
        <Image src={image} width={305} height={375} alt={title} />
      </div>
      <h4>{title}</h4>
      <div className={style.Collection__price}>£{price}</div>
    </div>
  )
}
