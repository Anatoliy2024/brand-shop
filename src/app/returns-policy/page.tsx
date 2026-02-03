import ReturnsPolicy from "@/components/ReturnsPolicy/ReturnsPolicy"
import { SloganTwo } from "@/components/SloganTwo/SloganTwo"
import InnerApp from "@/providers/InnerApp"

export default function ReturnsPolicyPage() {
  return (
    <InnerApp>
      <ReturnsPolicy />
      <SloganTwo />
    </InnerApp>
  )
}
