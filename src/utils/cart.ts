import { Product } from "@/components/ShoppingBasket/ShoppingBasket"
import { CatalogItemBdType } from "@/data/catalogBD"

const CART_KEY = "cart"

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]")
}

export const saveCart = (cart: Product[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export const mapProductToCartItem = (
  product: CatalogItemBdType,
  qty: number
) => ({
  id: product.id,
  title: product.title,
  description: product.description,
  price: product.price,
  image: product.image,
  qty,
})

export const addToCart = (product: Product, qty = 1) => {
  // console.log("qty", qty)
  const cart = getCart()

  const existing = cart.find((item: Product) => item.id === product.id)

  if (existing) {
    existing.qty += qty
  } else {
    cart.push({ ...product, qty })
  }

  saveCart(cart)
}

export const removeFromCart = (id: number) => {
  const cart = getCart().filter((item: Product) => item.id !== id)
  saveCart(cart)
}

export const updateQty = (id: number, qty: number) => {
  const cart = getCart().map((item: Product) =>
    item.id === id ? { ...item, qty } : item
  )

  saveCart(cart)
}
