'use server'

import { kv } from '@vercel/kv'
// import { revalidatePath } from 'next/cache'

export async function clearCart() {
  await kv.del('cart')
  // revalidatePath('/add-to-cart')
}
