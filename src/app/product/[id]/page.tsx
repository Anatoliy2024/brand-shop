import { Collection } from "@/components/Collection/Collection"
import { Different } from "@/components/Different/Different"
import { InvitationTwo } from "@/components/InvitationTwo/InvitationTwo"
import Product from "@/components/Product/Product"
import InnerApp from "@/providers/InnerApp"
import React, { Suspense } from "react"

export default function Catalog({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = React.use(params)
  // const id = Number(params.id)

  return (
    <InnerApp>
      <Suspense fallback={null}>
        <Product id={Number(id)} />
        <Collection>
          <h3>You might also love these</h3>
        </Collection>
        <Different />
        <InvitationTwo />
      </Suspense>
    </InnerApp>
  )
}
