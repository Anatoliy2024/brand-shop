import Image from "next/image"
import style from "./SloganTwo.module.scss"
import { SloganContentText } from "../SloganContentText/SloganContentText"

export function SloganTwo() {
  return (
    <div className={style.SloganTwo}>
      <SloganContentText
        title="It started with a small idea"
        text="A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014"
        type="SloganTwo"
      />
      {/* <div className={style.SloganTwo__content}>
        <h2>It started with a small idea</h2>
        <div className={style.SloganTwo__text}>
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </div>
        <button>View collection</button>
      </div> */}
      <div className={style.SloganTwo__ImageWrapper}>
        <Image
          src="/img/interior-2.png"
          width={630}
          height={478}
          alt="interior"
        />
      </div>
    </div>
  )
}
