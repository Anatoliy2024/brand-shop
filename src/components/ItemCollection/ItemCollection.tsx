import Image from "next/image"
import style from "./ItemCollection.module.scss"
import Link from "next/link"
export function ItemCollection({
  title,
  price,
  image,
  // showProduct,

  id,
}: {
  title: string
  price: number
  image: string
  // showProduct: (value: number) => void

  id: number
}) {
  return (
    <Link
      href={`/product/${id}`}
      className={`${style.ItemCollection}`}
      //  onClick={() => showProduct(id)}
    >
      {/* <div className={`${style.ItemCollection} noSelect`}> */}
      <div className={style.ItemCollection__imageWrapper}>
        <Image src={image} width={305} height={375} alt={title} />
      </div>
      <h4>{title}</h4>
      <div className={style.ItemCollection__price}>£{price}</div>
    </Link>
  )
}
