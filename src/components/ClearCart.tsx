'use client'

import { useRouter } from 'next/navigation'
import { clearCart } from '@/utils/cartItems'

const ClearCart = () => {
  const router = useRouter()

  const handleClick = async () => {
    await clearCart()
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
