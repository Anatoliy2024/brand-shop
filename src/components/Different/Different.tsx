import style from "./Different.module.scss"
import { DeliveryIcon } from "@/assets/svg/DeliveryIcon"
import { CheckMarkIcon } from "@/assets/svg/CheckMarkIcon"
import { PurchaseIcon } from "@/assets/svg/PurchaseIcon"
import { SproutIcon } from "@/assets/svg/SproutIcon"
import { FC, SVGProps } from "react"

export function Different() {
  const blocksData = [
    {
      Icon: DeliveryIcon,
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
    },
    {
      Icon: CheckMarkIcon,
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      Icon: PurchaseIcon,
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      Icon: SproutIcon,
      title: "Recycled packaging",
      text: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ]

  return (
    <div className={style.Different}>
      <h2>What makes our brand different</h2>
      <div className={style.Different__content}>
        {blocksData.map((block, index) => (
          <ContentElem
            key={index}
            title={block.title}
            text={block.text}
            Icon={block.Icon}
          />
        ))}
      </div>
    </div>
  )
}

function ContentElem({
  Icon,
  title,
  text,
}: {
  Icon: FC<SVGProps<SVGSVGElement>>
  title: string
  text: string
}) {
  return (
    <div className={style.Different__contentItem}>
      <div className={style.ContentItem__iconWrapper}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <div className={style.ContentItem__text}>{text}</div>
    </div>
  )
}
