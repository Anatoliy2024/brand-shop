import {
  brandOption,
  categories,
  priceOption,
  productOption,
} from "@/data/categories"
import style from "./CatalogOption.module.scss"

type OptionType = { text: string; id: string; link?: string }[]

export function CatalogOption() {
  return (
    <div className={style.CatalogOption}>
      <h3>Catalog</h3>
      <div className={style.CatalogOption__content}>
        <div className={style.Filters}>
          <MenuOption title="Category" option={categories} />
          <MenuOption title="Product type" option={productOption} />
          <MenuOption title="Price" option={priceOption} />
          <MenuOption title="Brand" option={brandOption} />
        </div>
        <div className={style.Sort}></div>
      </div>
    </div>
  )
}

function MenuOption({
  title,
  option,
  callback,
}: {
  title: string
  option: OptionType
  callback?: () => void
}) {
  return (
    <div className={`${style.Filters__item} noSelect`}>
      <button className={style.Filters__trigger}>{title}</button>
      <ul className={style.Filters__optionsList}>
        {option.map((optionItem) => (
          <li className={style.Filters__option} key={optionItem.id}>
            <input type="checkbox" id={optionItem.id} />{" "}
            <label htmlFor={optionItem.id}>{optionItem.text}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
