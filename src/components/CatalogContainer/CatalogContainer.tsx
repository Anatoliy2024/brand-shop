"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { CatalogOption } from "../CatalogOption/CatalogOption"
import { CatalogProduct } from "../CatalogProduct/CatalogProduct"
import { catalogBd, CatalogBdType } from "@/data/catalogBD"

export function CatalogContainer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // function findMissingByTitle(arr1, arr2) {
  //   const titles2 = new Set(arr2.map((item) => item.title))
  //   return arr1.filter((item) => !titles2.has(item.title))
  // }
  // const result = findMissingByTitle(catalogBd1, catalogBd)
  // console.log("result", result)
  //   const page = Number(searchParams.get("page")) || 1
  //   const brand = searchParams.get("brand")?.split(",") || []
  //   const category = searchParams.get("category")?.split(",") || []

  const filters = {
    category: searchParams.get("category")?.split(",") || [],
    brand: searchParams.get("brand")?.split(",") || [],
    price: searchParams.get("price")?.split(",") || [],
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
    if (filters.price.length && !filters.price.includes(item.price.toString()))
      return false

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

  const setSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    // const current = params.get(type)?.split(",").filter(Boolean) || []

    // const updated = current.includes(value)
    //   ? current.filter((v) => v !== value)
    //   : [...current, value]

    // const sort = params.get("Sort")
    // if (sort) {
    params.set("sort", value)
    // }
    // else {
    //   params.delete('Sort')
    // }

    params.set("page", "1")
    router.push(`/catalog?${params.toString()}`, { scroll: false })
  }

  const resetFilter = () => {
    // const params = new URLSearchParams()

    // params.set("page", "1")
    // router.push(`/catalog?${params.toString()}`, { scroll: false })
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
