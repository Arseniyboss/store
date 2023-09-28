'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { formatNumber } from '@/utils/formatNumber'
import { addItem } from '@/actions/addItem'

type ProductCartProps = {
  id: number
  name: string
  price: number
}

export default function ProductCard({ id, name, price }: ProductCartProps) {
  const router = useRouter()
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
      <h2 className='font-semibold text-green-400'>$ {formatNumber(price)}</h2>
      <button
        className='mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-center w-full'
        // onClick={() => addItem(id)}
        onClick={() => {
          addItem(id)
          router.refresh()
        }}
      >
        Add To Cart
      </button>
    </div>
  )
}
