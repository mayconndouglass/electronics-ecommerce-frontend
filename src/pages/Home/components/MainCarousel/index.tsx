import { useState } from 'react'
import Slider from 'react-slick'

import shapeCarousel from '/assets/images/shape-carousel.avif'
import { Center } from '@/components'

import { ProductImageCarousel } from './components/ProductImageCarousel'
import { ProductInfoCarousel } from './components/ProductInfoCarousel'
import { productImageData } from './data/product-image-data'
import { ProductInfoData } from './data/product-info-data'
import * as S from './styles'

const beforeChange = (prev: number, next: number) => {
  const prevSlideElement = document.querySelector(`[data-index="${prev}"]`)
  const nextSlideElement = document.querySelector(`[data-index="${next}"]`)

  setTimeout(() => {
    prevSlideElement!.classList.remove('next-slide-anim')
    nextSlideElement!.classList.add('next-slide-anim')
  })
}

export const MainCarousel = () => {
  const [infoNav, setInfoNav] = useState<Slider>()
  const [imageNav, setImageNav] = useState<Slider>()

  const imageSlider = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const infoSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    useTransform: true,
    beforeChange,
    fade: true
  }

  return (
    <S.Container>
      <Center>
        <Slider
          {...infoSlider}
          asNavFor={infoNav}
          ref={(infoSlider: Slider) => setImageNav(infoSlider)}
        >
          {ProductInfoData.map(productInfo => (
            <ProductInfoCarousel key={productInfo.id} {...productInfo} />
          ))}
        </Slider>

        <Slider
          {...imageSlider}
          asNavFor={imageNav}
          ref={(ImageSlider: Slider) => setInfoNav(ImageSlider)}
        >
          <ProductImageCarousel {...productImageData} />
          <ProductImageCarousel {...productImageData} />
          <ProductImageCarousel {...productImageData} />
        </Slider>

        <div className='shape-carousel'>
          <img src={shapeCarousel} alt="" />
        </div>
      </Center>
    </S.Container>
  )
}
