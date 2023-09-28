import { CartItem as Props } from '@/types'
import { formatPrice } from '@/utils/formatPrice'

export default function CartItem({ name, quantity, price }: Props) {
  return (
    <div className='flex justify-between text-slate-400'>
      <div className='w-[40%] flex gap-2 items-center'>
        <span>{name}</span>
      </div>
      <div className='w-[30%] text-center'>{quantity}</div>
      <div className='w-[30%] text-right'>${formatPrice(quantity * price)}</div>
    </div>
  )
}
