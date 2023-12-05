import * as S from './styles'

import { IoIosClose } from 'react-icons/Io'
import { HiOutlineMinusSm } from 'react-icons/Hi'
import { HiOutlinePlusSm } from 'react-icons/Hi'

import { CartItemProps, useCart } from '../../../../../store/useCart'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { formatPriceForUSA } from '../../../../../utils/format-price-for-usa'

export const CartProductCard = (productData: CartItemProps) => {
  const { addItemToCart, decreaseItemQuantity, removeItemFromCart } = useCart()
  const [quantity, setQuantity] = useState<number>(0)

  const {
    id,
    quantity: productQuantity,
    name,
    price,
    imageUrl
  } = productData

  const handleInputQuantityChange = (newQuantity: number) => {
    if (newQuantity < quantity) {
      decreaseItemQuantity(id, quantity - newQuantity)
    }

    if (newQuantity > quantity) {
      addItemToCart({
        id,
        name,
        price,
        imageUrl,
        quantity: newQuantity - quantity
      })
    }

    setQuantity(newQuantity)
  }

  useEffect(() => {
    setQuantity(productQuantity)
  }, [])

  return (
    <S.Container>
      <div className="cart-product">
        <span onClick={() => removeItemFromCart(id)}><IoIosClose /></span>

        <div className="cart-product-image">
          <Link to={`/loja/product/${id}`}>
            <img src={imageUrl} alt={name} />
          </Link>
        </div>

        <Link to={`/loja/product/${id}`}><h5>{name}</h5></Link>
      </div>

      <div className="cart-product-price">
        {price}
      </div>

      <div className="cart-product-quantity">
        <span onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1)
            decreaseItemQuantity(id, 1)
          }
        }}>
          <HiOutlineMinusSm />
        </span>

        <input
          type="number"
          value={quantity}
          inputMode="numeric"
          min={1}
          onChange={(event) => {
            handleInputQuantityChange(Number(event.target.value))
          }}
        />

        <span onClick={() => {
          setQuantity(quantity + 1)
          addItemToCart({
            id,
            name,
            price,
            imageUrl,
            quantity: 1
          })
        }}>
          <HiOutlinePlusSm />
        </span>
      </div>

      <div className="cart-product-subtotal">
        {(quantity * formatPriceForUSA(price))
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </div>
    </S.Container>
  )
}
