'use server'

import { CartItem } from '@/types'
import { kv } from '@vercel/kv'

export const getCartItems = async () => {
  const cartItems: CartItem[] | null = await kv.get('cartItems')
  return cartItems || []
}

export const setCartItems = async (cartItems: CartItem[]) => {
  await kv.set('cartItems', cartItems)
}

export async function clearCart() {
  await kv.del('cartItems')
}
