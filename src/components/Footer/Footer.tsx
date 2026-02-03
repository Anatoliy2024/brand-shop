import Link from "next/link"
import style from "./Footer.module.scss"
import { categories, discoverOption } from "@/data/categories"
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

  const ourCompanyList = [
    { text: "About us", link: "/about-us" },
    { text: "Vacancies", link: "/vacancies" },
    { text: "Contact us", link: "/contact-us" },
    { text: "Privacy", link: "/privacy" },
    { text: "Returns policy", link: "/returns-policy" },
  ]
  return (
    <div className={style.Footer}>
      <div className={style.Footer__top}>
        <div className={style.Footer__linksMenu}>
          <ListItem title="Menu" arrayItem={discoverOption} />
          <ListItem title="Categories" arrayItem={categories} />
          <ListItem title="Our company" arrayItem={ourCompanyList} />
        </div>
        <div className={style.Footer__invitationBlock}>
          <h3>Join our mailing list</h3>
          <div className={style.Footer__content}>
            <div className={style.Footer__inputWrapper}>
              <input type="text" placeholder="your@email.com" />
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
      <hr className={style.Footer__separator} />
      <div className={style.Footer__bottom}>
        <div className={style.Footer__copyright}>Copyright 2026 Avion LTD</div>

        <ul className={style.Footer__socialMedia}>
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
    <div className={style.Footer__ListItem}>
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
