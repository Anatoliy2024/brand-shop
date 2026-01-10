import { SearchIcon } from "@/assets/svg/SearchIcon"
import style from "./Header.module.scss"
import { ShoppingCardIcon } from "@/assets/svg/ShoppingCardIcon"
import { UserAvatarIcon } from "@/assets/svg/UserAvatarIcon"
import { categories } from "@/data/categories"

export function Header() {
  // return <div>Header</div>
  return (
    <div className={style.Header}>
      <div className={style.Header__top}>
        <div className={style.Header__iconWrapper}>
          <SearchIcon />
        </div>
        <div className={style.Header__logo}>Avion</div>
        <div className={style.Header__userInfo}>
          <div className={style.Header__iconWrapper}>
            <ShoppingCardIcon />
          </div>
          <div className={style.Header__iconWrapper}>
            <UserAvatarIcon />
          </div>
        </div>
      </div>
      <hr className={style.Header__separator} />
      <ul className={style.Header__categories}>
        {categories.map((item, index) => (
          <li key={index} className={style.Header__categoryItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
