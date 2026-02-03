import { Invitation } from "@/components/Invitation/Invitation"
import Privacy from "@/components/Privacy/Privacy"
import InnerApp from "@/providers/InnerApp"

export default function PrivacyPage() {
  return (
    <InnerApp>
      <Privacy />
      <Invitation />
    </InnerApp>
  )
}
