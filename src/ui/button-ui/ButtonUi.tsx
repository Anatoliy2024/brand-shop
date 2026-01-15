import Link from "next/link"
import style from "./ButtonUi.module.scss"
export function ButtonUi({ className }: { className: string }) {
  console.log("className", className)
  console.log("style[className]", style[className])
  return (
    <button
      className={`${style.ButtonUi} ${className ? style[className] : ""}`}
    >
      <Link href="catalog">View collection</Link>
    </button>
  )
}
