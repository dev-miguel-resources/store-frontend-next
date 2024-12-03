'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface HeartFavoriteProps {
  product: ProductType
  // agregar otra prop para más adelante
}

const HeartFavorite = ({ product }: HeartFavoriteProps) => {
  const router = useRouter()
  const { user } = useUser()

  const [loading, setLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const getUser = async () => {
    // pendiente
  }

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    try {
      if (!user) {
        router.push('/sign-in')
        return
      }
      // pendiente de completar
    } catch (err) {
      console.log('[wishlist_POST]', err)
    }
  }

  useEffect(() => {}, []) // pendiente

  return (
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? 'red' : 'white'}`} />
    </button>
  )
}

export default HeartFavorite
