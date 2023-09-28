import { getCartItems, setCartItems } from '@/utils/cart'

export const deleteCartItem = async (id: number) => {
  const cartItems = await getCartItems()
  const filteredCartItems = cartItems.filter((cartItem) => cartItem.id !== id)
  await setCartItems(filteredCartItems)
}
