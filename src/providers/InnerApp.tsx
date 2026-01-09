import { Header } from "@/components/Header/Header"

export default function InnerApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="innerAppContainer">
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
