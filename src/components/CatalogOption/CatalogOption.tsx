"use client"
import {
  brandOption,
  categories,
  priceOption,
  // productOption,
} from "@/data/categories"
import style from "./CatalogOption.module.scss"
import { ArrowBottom } from "@/assets/svg/ArrowBottom"
// import {
//   ReadonlyURLSearchParams,
//   useRouter,
//   useSearchParams,
// } from "next/navigation"

type OptionType = { text: string; id: string; link?: string }[]

export function CatalogOption({
  filters,

  onChange,
  resetFilter,
  sort,
  setSort,
}: {
  filters: {
    brand: string[]
    category: string[]
    price: string | null
    page: number
  }
  onChange: (type: string, value: string) => void
  resetFilter: () => void
  sort: string
  setSort: (value: string) => void
}) {
  // const router = useRouter()
  // const searchParams = useSearchParams()

  // const page = Number(searchParams.get("page")) || 1

  // const handleFilterChange = (type: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString())

  //   // существующие значения (например "sony,samsung")
  //   const current = params.get(type)?.split(",").filter(Boolean) || []

  //   let updated: string[] = []

  //   if (current.includes(value)) {
  //     // удаляем значение
  //     updated = current.filter((v) => v !== value)
  //   } else {
  //     // добавляем
  //     updated = [...current, value]
  //   }

  //   // если массив пуст — удаляем параметр
  //   if (updated.length) {
  //     params.set(type, updated.join(","))
  //   } else {
  //     params.delete(type)
  //   }

  //   params.set("page", "1")
  //   router.push(`/catalog?${params.toString()}`, { scroll: false })
  // }

  return (
    <div className={style.CatalogOption}>
      {/* <h3>Catalog</h3> */}
      <div className={style.CatalogOption__content}>
        <div className={style.Filters}>
          <MenuOption
            title="category"
            option={categories}
            selected={filters.category}
            onChange={onChange}
          />
          {/* <MenuOption title="Product type" option={productOption} /> */}
          {/* searchParams={searchParams} */}
          <MenuOption
            title="price"
            option={priceOption}
            selected={filters.price}
            onChange={onChange}
          />
          {/* searchParams={searchParams} */}
          <MenuOption
            title="brand"
            option={brandOption}
            selected={filters.brand}
            onChange={onChange}
          />
          <button onClick={resetFilter}>reset</button>
        </div>
        <div className={style.Sort}>
          <div>Sorting by:</div>
          <div className={style.Sort__wrapper}>
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
              {/* <SortItem/>
              <SortItem/> */}
              {/* <li onClick={() => setSort("Date added")}>
                <input /> Date added
              </li>
              <li onClick={() => setSort("Descending price")}>
                Descending price
              </li>
              <li onClick={() => setSort("Ascending price")}>
                Ascending price
              </li> */}
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

// function ListSort(setSort:(value: string) => void){
//   return (
//     <li onClick={() => setSort("Date added")}>Date added</li>
//   )
// }
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
  // const searchParams = useSearchParams()
  // const selected = searchParams.get(title)?.split(",") || []
  // console.log("searchParams.get(title)", searchParams.get(title))
  // console.log("searchParams", searchParams)

  return (
    <div className={`${style.Filters__item} noSelect`}>
      <button className={style.Filters__trigger}>{title}</button>
      <ArrowBottom />
      <ul className={style.Filters__optionsList}>
        {option.map((optionItem) => (
          <li
            className={style.Filters__option}
            key={optionItem.id}
            onClick={() => onChange(title, optionItem.id)}
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
