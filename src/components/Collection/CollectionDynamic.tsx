// components/CollectionDynamic.tsx
"use client"
import dynamic from "next/dynamic"

export const CollectionDynamic = dynamic(
  () => import("@/components/Collection/Collection").then((m) => m.Collection),
  { ssr: false }
)
