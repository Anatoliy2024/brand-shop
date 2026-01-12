import { Different } from "@/components/Different/Different"
import { Invitation } from "@/components/Invitation/Invitation"
import { Slogan } from "@/components/Slogan/Slogan"
import { SloganTwo } from "@/components/SloganTwo/SloganTwo"
import InnerApp from "@/providers/InnerApp"

export default function Home() {
  return (
    <InnerApp>
      <Slogan />
      <Different />
      <SloganTwo />
      <Invitation />
    </InnerApp>
  )
}
