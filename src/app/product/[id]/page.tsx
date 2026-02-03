"use client"
import { Different } from "@/components/Different/Different"
import { InvitationTwo } from "@/components/InvitationTwo/InvitationTwo"
import Product from "@/components/Product/Product"
import InnerApp from "@/providers/InnerApp"
import React, { Suspense } from "react"
import { CollectionDynamic } from "@/components/Collection/CollectionDynamic"

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = React.use(params)

  return (
    <InnerApp>
      <Suspense fallback={null}>
        <Product id={Number(id)} />
        <CollectionDynamic>
          <h3>You might also love these</h3>
        </CollectionDynamic>
        <Different />
        <InvitationTwo />
      </Suspense>
    </InnerApp>
  )
}
