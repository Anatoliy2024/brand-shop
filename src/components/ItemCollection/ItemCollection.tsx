import Image from "next/image"
import style from "./ItemCollection.module.scss"
export function ItemCollection({
  title,
  price,
  image,
}: {
  title: string
  price: number
  image: string
}) {
  return (
    <div className={`${style.ItemCollection} noSelect`}>
      <div className={style.ItemCollection__imageWrapper}>
        <Image src={image} width={305} height={375} alt={title} />
      </div>
      <h4>{title}</h4>
      <div className={style.ItemCollection__price}>£{price}</div>
    </div>
  )
}
