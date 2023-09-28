'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { formatPrice } from '@/utils/formatPrice'
import { addCartItem } from '@/actions/addCartItem'
import { Product } from '@/types'
import { ChangeEvent, useState } from 'react'

export default function ProductCard({ id, name, price }: Product) {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const cartItem = { id, name, price, quantity }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(e.target.value)
    setQuantity(quantity)
  }

  const handleClick = async () => {
    await addCartItem(cartItem)
    router.refresh()
  }
  return (
    <div className='border p-3 rounded-xl border-slate-700'>
      <div className='bg-gray-300 rounded-md mb-2'>
        <Image
          src='/airpods.jpg'
          width={100}
          height={100}
          alt='coffee'
          className='w-[180px] h-[180px] rounded object-cover'
        />
      </div>
      <h2 className='text-slate-400'>{name}</h2>
      <h2 className='font-semibold text-green-400'>$ {formatPrice(price)}</h2>
      <select
        className='w-[30%] text-right'
        value={quantity}
        onChange={handleChange}
      >
        {[...new Array(5)].map((_, index) => (
          <option key={index}>{index + 1}</option>
        ))}
      </select>
      <button
        className='mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-center w-full'
        onClick={handleClick}
      >
        Add To Cart
      </button>
    </div>
  )
}
