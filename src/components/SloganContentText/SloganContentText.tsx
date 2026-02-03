import style from "./SloganContentText.module.scss"
import { ButtonUi } from "@/ui/button-ui/ButtonUi"
export function SloganContentText({
  title,
  text,
  type,
}: {
  title: string
  text: string
  type: string
}) {
  return (
    <div
      className={`${style.SloganContent} ${
        type === "Slogan" ? style.Slogan : ""
      } ${type === "SloganTwo" ? style.SloganTwo : ""}`}
    >
      <h2>{title}</h2>
      <div className={style.SloganContent__text}>{text}</div>
      <ButtonUi className={type} />
    </div>
  )
}
