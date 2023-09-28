'use client'

import { useRouter } from 'next/navigation'
import { clearCart } from '@/utils/cart'

const ClearCart = () => {
  const router = useRouter()

  const handleClick = () => {
    clearCart()
    router.refresh()
  }
  return (
    <button
      className='mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-center w-full'
      onClick={handleClick}
    >
      Clear Cart
    </button>
  )
}

export default ClearCart
