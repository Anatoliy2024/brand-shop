"use client"
import { SearchIcon } from "@/assets/svg/SearchIcon"
import style from "./Header.module.scss"
import { ShoppingCardIcon } from "@/assets/svg/ShoppingCardIcon"
import { UserAvatarIcon } from "@/assets/svg/UserAvatarIcon"
import { categories } from "@/data/categories"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Header({ hiddenCatalog }: { hiddenCatalog?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const handleShowToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 550px)")

    const updateMedia = () => {
      setMenuOpen(mediaQuery.matches)
      setShowButton(!mediaQuery.matches)
    }

    // const onScroll = () => {
    //   setScrolled(window.scrollY > 0)
    // }

    // начальное состояние (УЖЕ НА КЛИЕНТЕ)
    updateMedia()
    // onScroll()

    mediaQuery.addEventListener("change", updateMedia)
    // window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      mediaQuery.removeEventListener("change", updateMedia)
      // window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen && showButton) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, showButton])

  return (
    <div className={style.Header}>
      <div className={style.Header__top}>
        <div className={style.Header__searchBlock}>
          <div className={style.Header__iconWrapper}>
            <SearchIcon />
          </div>
          {showButton && (
            <div
              onClick={handleShowToggleMenu}
              className={`${style.Header__hamburger} ${
                menuOpen ? style.Header__hamburgerOpen : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        {/* <div className={style.Header__logo}>            */}
        <Link href="/" className={style.Header__logo}>
          Avion
        </Link>
        {/* </div> */}
        {!showButton && (
          <div className={style.Header__userInfo}>
            <Link
              className={style.Header__iconWrapper}
              href={"/shopping-basket"}
            >
              <ShoppingCardIcon />
            </Link>
            <div className={style.Header__iconWrapper}>
              <UserAvatarIcon />
            </div>
          </div>
        )}
      </div>
      <hr className={style.Header__separator} />
      {!hiddenCatalog && (
        <>
          <ul
            className={`${style.Header__categories} ${
              !menuOpen ? style.hidden : ""
            }`}
          >
            {categories.map((item, index) => (
              <li key={index} className={style.Header__categoryItem}>
                <Link href={`/catalog?category=${item.id}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {menuOpen && showButton && (
        <div className={style.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </div>
  )
}
