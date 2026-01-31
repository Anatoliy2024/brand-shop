const CART_KEY = "cart"

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]")
}

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export const mapProductToCartItem = (product, qty) => ({
  id: product.id,
  title: product.title,
  description: product.description,
  price: product.price,
  image: product.image,
  qty,
})

export const addToCart = (product, qty = 1) => {
  console.log("qty", qty)
  const cart = getCart()

  const existing = cart.find((item) => item.id === product.id)

  if (existing) {
    existing.qty += qty
  } else {
    cart.push({ ...product, qty })
  }

  saveCart(cart)
}

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id)
  saveCart(cart)
}

export const updateQty = (id, qty) => {
  const cart = getCart().map((item) =>
    item.id === id ? { ...item, qty } : item
  )

  saveCart(cart)
}
