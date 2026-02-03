"use client"

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
  const totalPages = Math.ceil(totalItems / itemsPerPage)

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
