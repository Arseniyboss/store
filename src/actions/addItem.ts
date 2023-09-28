'use server'

import { kv } from '@vercel/kv'
import { CartItem } from '@/types'

// return throwError({ error: 'Item is already in the cart', status: 400 })

export async function addItem(cartItem: CartItem) {
  const cartItems: CartItem[] = (await kv.get('cartItems')) || []

  const index = cartItems.findIndex(({ id }) => cartItem.id === id)

  if (index !== -1) {
    cartItems[index].quantity += 1
    await kv.set('cartItems', cartItems)
    return
  }

  cartItems.push(cartItem)

  await kv.set('cartItems', cartItems)
}
