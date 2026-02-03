import { Collection } from "@/components/Collection/Collection"
import Profile from "@/components/Profile/Profile"
import InnerApp from "@/providers/InnerApp"

export default function ProfilePage() {
  return (
    <InnerApp>
      <Profile />
      <Collection />
    </InnerApp>
  )
}
