'use server'

import { CartItem } from '@/types'
import { kv } from '@vercel/kv'

export const getCartItems = async () => {
  const cartItems = await kv.get<CartItem[]>('cartItems')
  return cartItems || []
}

export const setCartItems = async (cartItems: CartItem[]) => {
  await kv.set('cartItems', cartItems)
}

export const clearCart = async () => {
  await kv.del('cartItems')
}
