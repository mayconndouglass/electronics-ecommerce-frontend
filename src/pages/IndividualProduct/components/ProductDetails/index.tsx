import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { AboutProduct } from './components/AboutProduct'
import { ProductInfo } from './components/ProductInfo'
import { ProductType } from '../../../../types/product'

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<ProductType>()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/product/${id}`)
        const { product } = response.data

        setProductDetails(product)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      {productDetails && (
        <>
          <ProductInfo productDetails={productDetails} />
          <AboutProduct productDetails={productDetails} />
        </>
      )}
    </>
  )
}
