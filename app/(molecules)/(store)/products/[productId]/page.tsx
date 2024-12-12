import Gallery from '@/app/(atoms)/components/Gallery'
import ProductInfo from '@/app/(atoms)/components/ProductInfo'
import { getProductDetails } from '@/lib/actions/actions'

const ProductDetails = async ({
  params,
}: {
  params: { productId: string }
}) => {
  const productDetails = await getProductDetails(params.productId)

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>
    </>
  )
}

export const dynamic = 'force-dynamic'

export default ProductDetails
