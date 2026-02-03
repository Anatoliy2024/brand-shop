import style from "./Slogan.module.scss"

import Image from "next/image"
import { SloganContentText } from "../SloganContentText/SloganContentText"

const image = "/img/interior-1.jpg"
export function Slogan() {
  return (
    <div className={style.Slogan}>
      <div
        className={style.Slogan__contentWrapper}
        style={{ backgroundImage: `url(${image})` }}
      >
        <SloganContentText
          title="Luxury homeware for people who love timeless design quality"
          text="Shop the new Spring 2026 collection today"
          type="Slogan"
        />
      </div>
      <div className={style.Slogan__imageWrapper}>
        <Image src={image} width={500} height={500} alt="interior" />
      </div>
    </div>
  )
}
