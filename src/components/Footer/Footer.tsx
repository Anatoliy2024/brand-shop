import Link from "next/link"
import style from "./Footer.module.scss"
import { categories } from "@/data/categories"
import { LinkedinIcon } from "@/assets/svg/LinkedinIcon"
import { FacebookIcon } from "@/assets/svg/FacebookIcon"
import { InstagramIcon } from "@/assets/svg/InstagramIcon"
import { SkypeIcon } from "@/assets/svg/SkypeIcon"
import { TwitterIcon } from "@/assets/svg/TwitterIcon"
import { PinterestIcon } from "@/assets/svg/PinterestIcon"

export function Footer() {
  const ListSocialMedia = [
    LinkedinIcon,
    FacebookIcon,
    InstagramIcon,
    SkypeIcon,
    TwitterIcon,
    PinterestIcon,
  ]
  const menuList = [
    "New arrivals",
    "Best sellers",
    "Recently viewed",
    "Popular this week",
    "All products",
  ]
  const ourCompanyList = [
    "About us",
    "Vacancies",
    "Contact us",
    "Privacy",
    "Returns policy",
  ]
  return (
    <div className={style.Footer}>
      <div className={style.Footer_top}>
        <div className={style.Footer__linksMenu}>
          <ListItem title="Menu" arrayItem={menuList} />
          <ListItem title="Categories" arrayItem={categories} />
          <ListItem title="Our company" arrayItem={ourCompanyList} />
        </div>
        <div className={style.Footer__inputWrapper}>
          <input type="text" />
          <button>Sign up</button>
        </div>
      </div>
      <hr className={style.Footer__separator} />
      <div className={style.Footer__bottom}>
        <div className={style.bottom_copyright}>Copyright 2022 Avion LTD</div>
        <div>
          <div className={style.bottom_socialMedia}>
            {ListSocialMedia.map((Icon, index) => (
              <li key={index}>
                <Link href="#">
                  <Icon />
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ListItem({
  title,
  arrayItem,
}: {
  title: string
  arrayItem: string[]
}) {
  return (
    <div className={style.Footer_ListItem}>
      <h3>{title}</h3>
      {arrayItem.map((item, index) => (
        <li key={index}>
          <Link href={"#"}>{item}</Link>
        </li>
      ))}
    </div>
  )
}
