import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"

export default function InnerApp({
  children,
  hiddenCatalog,
}: {
  children: React.ReactNode
  hiddenCatalog?: boolean
}) {
  return (
    <div className="innerAppContainer">
      <Header hiddenCatalog={hiddenCatalog} />
      <div className="innerAppContainer__contentPage">{children}</div>
      <Footer />
    </div>
  )
}
