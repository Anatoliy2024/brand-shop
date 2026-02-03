"use client"

import style from "./Collection.module.scss"

import { ButtonUi } from "@/ui/button-ui/ButtonUi"
import { ItemCollection } from "../ItemCollection/ItemCollection"

import { catalogBd } from "@/data/catalogBD"
import { shuffleArray } from "@/utils/shuffle"
import { useState } from "react"
export function Collection({ children }: { children?: React.ReactNode }) {
  const [collectionSlice] = useState(() => shuffleArray(catalogBd).slice(0, 4))

  return (
    <div className={style.Collection}>
      {children}
      <div className={style.Collection__list}>
        {collectionSlice.map((item) => (
          <ItemCollection
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <ButtonUi className="Collection" />
    </div>
  )
}
