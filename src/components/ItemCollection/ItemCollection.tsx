import Image from "next/image"
import style from "./ItemCollection.module.scss"
import Link from "next/link"
export function ItemCollection({
  title,
  price,
  image,

  id,
}: {
  title: string
  price: number
  image: string

  id: number
}) {
  return (
    <Link href={`/product/${id}`} className={`${style.ItemCollection}`}>
      <div className={style.ItemCollection__imageWrapper}>
        <Image src={image} width={305} height={375} alt={title} />
      </div>
      <h4>{title}</h4>
      <div className={style.ItemCollection__price}>£{price}</div>
    </Link>
  )
}
