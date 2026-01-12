import { SearchIcon } from "@/assets/svg/SearchIcon"
import style from "./Slogan.module.scss"
import { ShoppingCardIcon } from "@/assets/svg/ShoppingCardIcon"
import { UserAvatarIcon } from "@/assets/svg/UserAvatarIcon"
import { categories } from "@/data/categories"
import Image from "next/image"
import { SloganContentText } from "../SloganContentText/SloganContentText"

export function Slogan() {
  // return <div>Header</div>
  return (
    <div className={style.Slogan}>
      <div className={style.Slogan__imageWrapper}>
        <Image
          src="/img/interior-1.jpg"
          width={500}
          height={500}
          alt="interior"
        />
      </div>

      <div className={style.Slogan__contentWrapper}>
        <SloganContentText
          title="Luxury homeware for people who love timeless design quality"
          text="Shop the new Spring 2022 collection today"
          type="Slogan"
        />
        {/* <div className={style.Slogan__content}>
          <h2>Luxury homeware for people who love timeless design quality</h2>
          <div>Shop the new Spring 2022 collection today</div>
          <button>View collection</button>
        </div> */}
      </div>
    </div>

    // <div className={style.header}>
    //   <div className={style.header__top}>
    //     <div className={style.header__iconWrapper}>
    //       <SearchIcon />
    //     </div>
    //     <div className={style.header__logo}>Avion</div>
    //     <div className={style.header__userInfo}>
    //       <div className={style.header__iconWrapper}>
    //         <ShoppingCardIcon />
    //       </div>
    //       <div className={style.header__iconWrapper}>
    //         <UserAvatarIcon />
    //       </div>
    //     </div>
    //   </div>
    //   <hr className={style.header__separator} />
    //   <ul className={style.header__categories}>
    //     {categories.map((item, index) => (
    //       <li key={index} className={style.header__categoryItem}>
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}
