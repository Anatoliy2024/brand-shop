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
    { text: "New arrivals", link: "#" },
    { text: "Best sellers", link: "#" },
    { text: "Recently viewed", link: "#" },
    { text: "Popular this week", link: "#" },
    { text: "All products", link: "#" },
  ]
  const ourCompanyList = [
    { text: "About us", link: "#" },
    { text: "Vacancies", link: "#" },
    { text: "Contact us", link: "#" },
    { text: "Privacy", link: "#" },
    { text: "Returns policy", link: "#" },
  ]
  return (
    <div className={style.Footer}>
      <div className={style.Footer_top}>
        <div className={style.Footer__linksMenu}>
          <ListItem title="Menu" arrayItem={menuList} />
          <ListItem title="Categories" arrayItem={categories} />
          <ListItem title="Our company" arrayItem={ourCompanyList} />
        </div>
        <div className={style.Footer__invitationBlock}>
          <h3>Join our mailing list</h3>
          <div className={style.invitationBlock__content}>
            <div className={style.invitationBlock__inputWrapper}>
              <input type="text" placeholder="your@email.com" />
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
      <hr className={style.Footer__separator} />
      <div className={style.Footer__bottom}>
        <div className={style.bottom_copyright}>Copyright 2026 Avion LTD</div>

        <ul className={style.bottom_socialMedia}>
          {ListSocialMedia.map((Icon, index) => (
            <li key={index}>
              <Link href="#">
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ListItem({
  title,
  arrayItem,
}: {
  title: string
  arrayItem: Record<string, string>[]
}) {
  return (
    <div className={style.Footer_ListItem}>
      <h3>{title}</h3>
      <ul>
        {arrayItem.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
