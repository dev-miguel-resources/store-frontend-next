import Image from 'next/image'
import Collections from '@/app/(atoms)/components/Collections'
import ProductList from '@/app/(atoms)/components/ProductList'

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-screen"
      />
      <Collections />
      <ProductList />
    </>
  )
}
