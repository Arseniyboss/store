'use client'

import { CartItem as Props } from '@/types'
import { useRouter } from 'next/navigation'
import { formatPrice } from '@/utils/formatPrice'
import { ChangeEvent } from 'react'
import { updateCartItem } from '@/actions/updateCartItem'
import { deleteCartItem } from '@/actions/deleteCartItem'

export default function CartItem({ id, name, quantity, price }: Props) {
  const router = useRouter()

  const handleUpdate = async (e: ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(e.target.value)
    await updateCartItem(id, quantity)
    router.refresh()
  }

  const handleDelete = async () => {
    await deleteCartItem(id)
    router.refresh()
  }
  return (
    <div className='flex justify-between text-slate-400'>
      <div className='w-[40%] flex gap-2 items-center'>
        <span>{name}</span>
      </div>
      <div className='w-[30%] text-center'>{quantity}</div>
      <div className='w-[30%] text-center'>
        ${formatPrice(quantity * price)}
      </div>
      <select className='w-[30%] text-right' onChange={handleUpdate}>
        {[...new Array(5)].map((_, index) => (
          <option key={index}>{index + 1}</option>
        ))}
      </select>
      <button className='w-[30%] text-right' onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
