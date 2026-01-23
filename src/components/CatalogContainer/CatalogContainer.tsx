"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { CatalogOption } from "../CatalogOption/CatalogOption"
import { CatalogProduct } from "../CatalogProduct/CatalogProduct"
import { catalogBd, CatalogBdType } from "@/data/catalogBD"
import { priceOption } from "@/data/categories"

export function CatalogContainer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filters = {
    category: searchParams.get("category")?.split(",") || [],
    brand: searchParams.get("brand")?.split(",") || [],
    price: searchParams.get("price") || null,
    // price: searchParams.get("price")?.split(",") || [],
    page: Number(searchParams.get("page")) || 1,
  }

  const sort = searchParams.get("sort") || "Date added"
  console.log("sort", sort)
  // const catalogItems = catalogBd

  const catalogItems = catalogBd.filter((item) => {
    // console.log("item", item)
    // console.log("filters", filters)
    // Категория
    if (filters.category.length && !filters.category.includes(item.category))
      return false

    // Бренд
    if (filters.brand.length && !filters.brand.includes(item.brand))
      return false

    // Цена (если фильтр пустой — пропускаем)
    if (filters.price) {
      const range = priceOption.find((el) => el.id === filters.price)

      if (range) {
        const minOk = item.price >= range.min
        const maxOk = range.max === null ? true : item.price <= range.max

        if (!minOk || !maxOk) return false
      }
    }

    return true
  })

  const sortCatalog = (catalog: CatalogBdType) => {
    if (sort === "Date added") {
      return catalog.sort(
        (a, b) => a.creationDate.getTime() - b.creationDate.getTime()
      )
    } else if (sort === "Descending price") {
      return catalog.sort((a, b) => b.price - a.price)
    } else if (sort === "Ascending price") {
      return catalog.sort((a, b) => a.price - b.price)
    }
    return catalog
  }

  const setFilter = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (type !== "price") {
      const current = params.get(type)?.split(",").filter(Boolean) || []

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]

      if (updated.length) {
        params.set(type, updated.join(","))
      } else {
        params.delete(type)
      }
    } else if (type === "price") {
      const current = params.get(type)
      if (current && current === value) {
        params.delete(type)
      } else {
        params.set(type, value)
      }
    }

    params.set("page", "1")
    router.push(`/catalog?${params.toString()}`, { scroll: false })
  }

  const setSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)

    params.set("page", "1")
    router.push(`/catalog?${params.toString()}`, { scroll: false })
  }

  const resetFilter = () => {
    router.push(`/catalog`, { scroll: false })
  }

  return (
    <>
      <CatalogOption
        // searchParams={searchParams}
        filters={filters}
        onChange={setFilter}
        sort={sort}
        setSort={setSort}
        resetFilter={resetFilter}
      />
      <CatalogProduct catalogItems={sortCatalog(catalogItems)} />
    </>
  )
}
