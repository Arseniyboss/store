import ProductCard from '@/components/ProductCard'
import CartItem from '@/components/CartItem'
import { type Cart } from '@/actions/addItem'
import { kv } from '@vercel/kv'
import ClearCart from '@/components/ClearCart'

export type Product = {
  id: number
  name: string
  price: number
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Americano',
    price: 40,
  },
  {
    id: 2,
    name: 'Expresso',
    price: 20,
  },
  {
    id: 3,
    name: 'Arabica',
    price: 10,
  },
]

export default async function AddToCart() {
  const cart: Cart | null = await kv.get('cart')
  const total = cart?.items
    .map((item) => item.quantity * item.price)
    .reduce((sum, current) => (sum = sum + current))
  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-slate-950'>
      <div className='w-full'>
        <h1 className='font-semibold text-xl mb-6 text-left text-white'>
          Products:{' '}
        </h1>
        <div className='flex gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className='mt-6 w-full'>
        <h1 className='font-semibold text-xl text-white'>Cart: </h1>
        <div className='mt-2 border px-6 py-4 rounded-xl border-slate-700 flex flex-col gap-2'>
          {cart?.items ? (
            cart.items.map((item, index) => (
              <CartItem
                key={item.id}
                no={index + 1}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <span className='text-sm text-slate-600'>No Item</span>
          )}
        </div>
        <div className='flex justify-between px-6 mt-4 font-semibold text-white'>
          <div>Total</div>
          <div>{total}</div>
        </div>
        <ClearCart />
      </div>
    </main>
  )
}
