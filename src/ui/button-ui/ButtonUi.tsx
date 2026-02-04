import Link from "next/link"
import style from "./ButtonUi.module.scss"
export function ButtonUi({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  // console.log("className", className)
  // console.log("style[className]", style[className])
  return (
    <button
      className={`${style.ButtonUi} ${className ? style[className] : ""}`}
    >
      <Link href={text === "View collection" ? "/catalog" : "#"}>{text}</Link>
    </button>
  )
}
