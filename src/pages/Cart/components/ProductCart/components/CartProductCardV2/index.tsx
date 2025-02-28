import { useEffect, useState } from 'react'
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { CartItemProps, useCart } from '@/store'
import { formatPriceForUSA } from '@/utils'

import * as S from './styles'

export const CartProductCardV2 = ({
  id,
  quantity: productQuantity,
  name,
  price,
  imageUrl
}: CartItemProps) => {
  const { addItemToCart, decreaseItemQuantity, removeItemFromCart } = useCart()
  const [quantity, setQuantity] = useState<number>(0)

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
      <div className="cart-product-image">
        <Link to={`/loja/product/${id}`}>
          <img src={imageUrl} alt={name} title={name}/>
        </Link>
      </div>

      <div>
        <div className="cart-product-name">
          <Link to={`/loja/product/${id}`}><h5>{name}</h5></Link>
          <span onClick={() => removeItemFromCart(id)}><IoIosClose /></span>
        </div>

        <div className="cart-product-price">
          <div className='value'>Price:</div>
          {price}
        </div>

        <div className="cart-product-quantity">
          <div className='value'>Quantidade:</div>

          <div className='cart-product-quantity-container'>
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
        </div>

        <div className="cart-product-subtotal">
          <div className='value'>Subtotal:</div>
          {(quantity * formatPriceForUSA(price))
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
    </S.Container >
  )
}
