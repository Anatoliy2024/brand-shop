import { Different } from "@/components/Different/Different"
import { Slogan } from "@/components/MainPage/Slogan"
import InnerApp from "@/providers/InnerApp"

export default function Home() {
  return (
    <InnerApp>
      <Slogan />
      <Different />
    </InnerApp>
  )
}
