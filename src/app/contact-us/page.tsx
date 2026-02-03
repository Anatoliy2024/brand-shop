import ContactUs from "@/components/ContactUs/ContactUs"
import { Slogan } from "@/components/Slogan/Slogan"
import InnerApp from "@/providers/InnerApp"

export default function ContactUsPage() {
  return (
    <InnerApp>
      <ContactUs />
      <Slogan />
    </InnerApp>
  )
}
