import { CartItem } from '@/types'
import { getCartItems, setCartItems } from '@/utils/cartItems'

export async function addCartItem(cartItem: CartItem) {
  const cartItems: CartItem[] = await getCartItems()

  const itemInTheCart = cartItems.find(({ id }) => cartItem.id === id)

  if (itemInTheCart) {
    return alert('Item is already in the cart')
  }

  cartItems.push(cartItem)

  await setCartItems(cartItems)
}
