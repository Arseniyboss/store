'use client'

import { useRouter } from 'next/navigation'
import { clearCart } from '@/actions/clearCart'

const ClearCart = () => {
  const router = useRouter()
  return (
    <button
      className='mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-center w-full'
      onClick={() => {
        clearCart()
        router.refresh()
      }}
    >
      Clear Cart
    </button>
  )
}

export default ClearCart
