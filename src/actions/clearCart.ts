'use server'

import { kv } from '@vercel/kv'
// import { revalidatePath } from 'next/cache'

export async function clearCart() {
  await kv.del('cartItems')
  // revalidatePath('/add-to-cart')
}
