import ProductCard from '@/components/ProductCard'
import CartItem from '@/components/CartItem'
import ClearCart from '@/components/ClearCart'
import { getTotalPrice } from '@/utils/getTotalPrice'
import { getCartItems } from '@/utils/cartItems'
import { products } from '@/data/products'

export default async function Page() {
  const cartItems = await getCartItems()
  const totalPrice = getTotalPrice(cartItems)
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
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}
            </div>
          )}
        </div>
        <div className='flex justify-between px-6 mt-4 font-semibold text-white'>
          <div>Total</div>
          <div>{totalPrice}</div>
        </div>
        <ClearCart />
      </div>
    </main>
  )
}
