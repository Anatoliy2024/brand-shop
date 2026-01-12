import { CheckMarkIconTwo } from "@/assets/svg/CheckMarkIconTwo"
import style from "./Invitation.module.scss"
export function Invitation() {
  const list = ["Exclusive offers", "Free events", "Large discounts"]
  return (
    <div className={style.Invitation}>
      <div className={style.Invitation__wrapperContainer}>
        <h2>Join the club and get the benefits</h2>
        <div className={style.Invitation__text}>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </div>
        <div className={style.Invitation__pros}>
          {list.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </div>
        <div className={style.Invitation__input}>
          <input type="text" placeholder="your@email.com" />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  )
}
function ListItem({ text }: { text: string }) {
  return (
    <div className={style.pros__item}>
      <div className={style.pros__icon}>
        <CheckMarkIconTwo />
      </div>
      <div className={style.pros__text}>{text}</div>
    </div>
  )
}
