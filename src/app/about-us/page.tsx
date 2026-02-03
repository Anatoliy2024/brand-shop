import { Features } from "@/components/Features/Features"
import InnerApp from "@/providers/InnerApp"
import "./about-us.scss"
import { Different } from "@/components/Different/Different"
import { Invitation } from "@/components/Invitation/Invitation"
export default function AboutUsPage() {
  return (
    <InnerApp>
      <h1 className="AboutUs__header">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h1>
      <Features
        title="From a studio in London to a global brand with over 400 outlets"
        srcImage={"/img/features-1.png"}
        alt={"features-image"}
      >
        <p>
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. Handmade, and
          lovingly crafted furniture and homeware is what we live, breathe and
          design so our Chelsea boutique become the hotbed for the London
          interior design community.
        </p>
      </Features>
      <Features
        title="Our service isn’t just personal, it’s actually hyper personally exquisite"
        srcImage={"/img/features-2.png"}
        alt={"features-image"}
        type="reverse"
      >
        <p>
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p>
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
      </Features>
      <Different />
      <Invitation />
    </InnerApp>
  )
}
