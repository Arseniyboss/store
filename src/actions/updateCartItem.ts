import { getCartItems, setCartItems } from '@/utils/cartItems'

export const updateCartItem = async (id: number, quantity: number) => {
  const cartItems = await getCartItems()
  const index = cartItems.findIndex((cartItem) => cartItem.id === id)
  cartItems[index].quantity = quantity
  await setCartItems(cartItems)
}
