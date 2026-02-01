"use client"
// import { Collection } from "@/components/Collection/Collection"
import { Different } from "@/components/Different/Different"
import { InvitationTwo } from "@/components/InvitationTwo/InvitationTwo"
import Product from "@/components/Product/Product"
import InnerApp from "@/providers/InnerApp"
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { CollectionDynamic } from "@/components/Collection/CollectionDynamic"

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
        <CollectionDynamic>
          <h3>You might also love these</h3>
        </CollectionDynamic>
        <Different />
        <InvitationTwo />
      </Suspense>
    </InnerApp>
  )
}
