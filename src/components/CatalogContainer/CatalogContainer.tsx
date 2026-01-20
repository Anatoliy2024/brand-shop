"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { CatalogOption } from "../CatalogOption/CatalogOption"
import { CatalogProduct } from "../CatalogProduct/CatalogProduct"
import { catalogBd } from "@/data/catalogBD"

export function CatalogContainer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  //   const page = Number(searchParams.get("page")) || 1
  //   const brand = searchParams.get("brand")?.split(",") || []
  //   const category = searchParams.get("category")?.split(",") || []

  const filters = {
    category: searchParams.get("category")?.split(",") || [],
    brand: searchParams.get("brand")?.split(",") || [],
    price: searchParams.get("price")?.split(",") || [],
    page: Number(searchParams.get("page")) || 1,
  }
  // const catalogItems = catalogBd

  const catalogItems = catalogBd
    //   .slice(0, 10)
    .filter((item) => {
      console.log("item", item)
      console.log("filters", filters)
      // Категория
      if (filters.category.length && !filters.category.includes(item.category))
        return false

      // Бренд
      if (filters.brand.length && !filters.brand.includes(item.brand))
        return false

      // Цена (если фильтр пустой — пропускаем)
      if (
        filters.price.length &&
        !filters.price.includes(item.price.toString())
      )
        return false

      return true
    })

  const setFilter = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const current = params.get(type)?.split(",").filter(Boolean) || []

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]

    if (updated.length) {
      params.set(type, updated.join(","))
    } else {
      params.delete(type)
    }

    params.set("page", "1")
    router.push(`/catalog?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      <CatalogOption
        // searchParams={searchParams}
        filters={filters}
        onChange={setFilter}
      />
      <CatalogProduct catalogItems={catalogItems} />
    </>
  )
}
