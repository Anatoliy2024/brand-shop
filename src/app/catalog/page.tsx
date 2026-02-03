import { CatalogContainer } from "@/components/CatalogContainer/CatalogContainer"
import InnerApp from "@/providers/InnerApp"
import { Suspense } from "react"

export default function CatalogPage() {
  return (
    <InnerApp hiddenCatalog={true}>
      <Suspense fallback={null}>
        <CatalogContainer />
      </Suspense>
    </InnerApp>
  )
}
