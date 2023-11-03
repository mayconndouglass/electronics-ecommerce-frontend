import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { AboutProduct } from './components/AboutProduct'
import { ProductInfo } from './components/ProductInfo'
import { ProductType } from '../../../../types/product'

export const ProductDetails = () => {
  const [productDetails, setProducDetails] = useState<ProductType>()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/product/${id}`)
        const { product } = response.data

        setProducDetails(product[0])
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      <ProductInfo productDetails={productDetails} />
      <AboutProduct productDetails={productDetails} />
    </>
  )
}
