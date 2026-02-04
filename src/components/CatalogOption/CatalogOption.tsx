"use client"
import {
  brandOption,
  categories,
  priceOption,
  discoverOption,
} from "@/data/categories"
import style from "./CatalogOption.module.scss"
import { ArrowBottom } from "@/assets/svg/ArrowBottom"
import { DiscoverType } from "@/data/catalogBD"

type OptionType = { text: string; id: string; link?: string }[]

export function CatalogOption({
  filters,
  // page,
  onChange,
  resetFilter,
  sort,
  setSort,
}: {
  filters: {
    brand: string[]
    category: string[]
    price: string | null
    discover: DiscoverType | null
    // page: number
  }
  // page:string
  onChange: (type: string, value: string) => void
  resetFilter: () => void
  sort: string
  setSort: (value: string) => void
}) {
  // let count = 0

  // Object.values(filters).forEach((value) => {
  //   if (typeof value === "string") {
  //     count += 1
  //   } else if (Array.isArray(value)) {
  //     count += value.length
  //   }
  // })

  // if (selected) {
  //   if (Array.isArray(selected)) {
  //     if (selected.length > 0) {
  //       count = selected.length
  //     }
  //   } else {
  //     count = 1
  //   }
  // }
  return (
    <div className={style.CatalogOption}>
      <div className={style.CatalogOption__content}>
        <div className={style.Filters}>
          <button className={style.Filters__triggerMobile}>
            <div>Filters</div>
            <ArrowBottom />
          </button>
          <div className={style.Filters__wrapperItems}>
            <MenuOption
              title="category"
              option={categories}
              selected={filters.category}
              onChange={onChange}
            />
            <MenuOption
              title="price"
              option={priceOption}
              selected={filters.price}
              onChange={onChange}
            />
            <MenuOption
              title="brand"
              option={brandOption}
              selected={filters.brand}
              onChange={onChange}
            />
            <MenuOption
              title="discover"
              option={discoverOption.slice(0, 4)}
              selected={filters.discover}
              onChange={onChange}
            />
            <button
              onClick={resetFilter}
              className={style.Filters__buttonReset}
            >
              reset
            </button>
          </div>
        </div>
        <div className={style.Sort}>
          <div className={style.Sort__title}>Sorting by:</div>
          <div className={style.Sort__wrapper}>
            <button className={style.Sort__titleMobile}>Sorting</button>
            <button className={style.Sort__trigger}>{sort}</button>
            <ArrowBottom />
            <ul className={style.Sort__optionsList}>
              <SortItem sortItem="Date added" sort={sort} setSort={setSort} />
              <SortItem
                sortItem="Descending price"
                sort={sort}
                setSort={setSort}
              />
              <SortItem
                sortItem="Ascending price"
                sort={sort}
                setSort={setSort}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SortItem({
  sortItem,
  sort,
  setSort,
}: {
  sortItem: string
  sort: string
  setSort: (value: string) => void
}) {
  return (
    <li onClick={() => setSort(sortItem)} className={style.Sort__options}>
      <input type="radio" id={sortItem} checked={sortItem === sort} readOnly />
      <label htmlFor="sortItem">{sortItem}</label>
    </li>
  )
}

function MenuOption({
  title,
  option,
  onChange,
  selected,
}: {
  title: string
  option: OptionType
  onChange: (type: string, value: string) => void
  selected: string[] | string | null
}) {
  let count
  if (selected) {
    if (Array.isArray(selected)) {
      if (selected.length > 0) {
        count = selected.length
      }
    } else {
      count = 1
    }
  }

  return (
    <div className={`${style.Filters__item} noSelect`}>
      <button
        className={`${style.Filters__trigger} ${
          count ? style.Filters__triggerActive : ""
        }`}
      >
        {title}
        {count && <span>:{count}</span>}
      </button>
      <ArrowBottom />
      <ul className={style.Filters__optionsList}>
        {option.map((optionItem) => (
          <li
            className={style.Filters__option}
            key={optionItem.id}
            onClick={(e) => {
              e.stopPropagation()
              onChange(title, optionItem.id)
            }}
          >
            <input
              type={"checkbox"}
              id={optionItem.id}
              checked={
                Array.isArray(selected)
                  ? selected.includes(optionItem.id)
                  : selected === optionItem.id
              }
              readOnly
            />
            <label htmlFor={optionItem.id}>{optionItem.text}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
