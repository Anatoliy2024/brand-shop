"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { CatalogOption } from "../CatalogOption/CatalogOption"
import { CatalogProduct } from "../CatalogProduct/CatalogProduct"
import { catalogBd, CatalogBdType, DiscoverType } from "@/data/catalogBD"
import { priceOption } from "@/data/categories"
import { Paginator } from "../Paginator/Paginator"

const ITEMS_PER_PAGE = 12

export function CatalogContainer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filters = {
    category: searchParams.get("category")?.split(",") || [],
    brand: searchParams.get("brand")?.split(",") || [],
    price: searchParams.get("price") || null,

    // page: Number(searchParams.get("page")) || 1,
    discover: searchParams.get("discover") as DiscoverType | null,
  }

  const page = Number(searchParams.get("page")) || 1

  const sort = searchParams.get("sort") || "Date added"

  const catalogItems = catalogBd.filter((item) => {
    if (filters.discover && filters.discover !== item.discover) {
      return false
    }

    if (filters.category.length && !filters.category.includes(item.category))
      return false

    if (filters.brand.length && !filters.brand.includes(item.brand))
      return false

    if (filters.price) {
      const range = priceOption.find((el) => el.id === filters.price)

      if (range) {
        const minOk = item.price >= range.min
        const maxOk = range.max === null ? true : item.price <= range.max

        if (!minOk || !maxOk) return false
      }
    }

    return true
  }) as CatalogBdType

  const sortCatalog = (catalog: CatalogBdType) => {
    const sorted = [...catalog]
    if (sort === "Date added") {
      return sorted.sort(
        (a, b) => a.creationDate.getTime() - b.creationDate.getTime()
      )
    } else if (sort === "Descending price") {
      return sorted.sort((a, b) => b.price - a.price)
    } else if (sort === "Ascending price") {
      return sorted.sort((a, b) => a.price - b.price)
    }
    return sorted
  }

  const setFilter = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (type !== "price" && type !== "discover") {
      const current = params.get(type)?.split(",").filter(Boolean) || []

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]

      if (updated.length) {
        params.set(type, updated.join(","))
      } else {
        params.delete(type)
      }
    } else if (type === "price" || type === "discover") {
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

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    router.push(`/catalog?${params.toString()}`)
  }

  const start = (page - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const currentItems = sortCatalog(catalogItems).slice(start, end)

  return (
    <>
      <CatalogOption
        filters={filters}
        // page={page}
        onChange={setFilter}
        sort={sort}
        setSort={setSort}
        resetFilter={resetFilter}
      />
      <CatalogProduct catalogItems={currentItems} />
      <Paginator
        totalItems={catalogItems.length}
        currentPage={page}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </>
  )
}
