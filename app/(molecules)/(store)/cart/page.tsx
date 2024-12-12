'use client'

import Image from 'next/image'
//import { useUser } from '@clerk/nextjs'
import useCart from '@/lib/hooks/useCart'
import { useRouter } from 'next/navigation'
import { MinusCircle, PlusCircle, Trash } from 'lucide-react'

const Cart = () => {
  const router = useRouter()
  //const { user } = useUser()
  const cart = useCart()

  // total acumulado
  // handleCheckout

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>
        <hr className="my-6" />
      </div>
    </div>
  )
}

export default Cart
