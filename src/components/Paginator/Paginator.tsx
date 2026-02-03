"use client"
import { useState } from "react"
import style from "./Paginator.module.scss"
export const Paginator = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (num: number) => void
}) => {
  // const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // const handleClick = (page: number) => {
  //   setCurrentPage(page)
  //   onPageChange(page)
  // }

  return (
    <div className={style.pagination}>
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1

        return (
          <button
            key={page}
            className={currentPage === page ? style.active : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
