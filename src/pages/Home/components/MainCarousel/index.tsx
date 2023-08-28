import * as S from './styles'

import { Center } from '../../../../components/Center'

import { useState } from 'react'

import { FaFire } from 'react-icons/Fa'
import { HiOutlineShoppingCart } from 'react-icons/Hi'
import { AiFillStar } from 'react-icons/Ai'
import { CiStar } from 'react-icons/Ci'

import userOne from '/assets/images/userOne.png'
import userTwo from '/assets/images/userTwo.png'
import userThree from '/assets/images/userThree.png'
import userFor from '/assets/images/userFor.png'

import headPhone from '/assets/images/main-image-headphone.png'
import shapeCarousel from '/assets/images/shape-carousel.png'

import Slider from 'react-slick'
/* https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-slick */

const beforeChange = (prev: number, next: number) => {
  const prevSlideElement = document.querySelector(`[data-index="${prev}"]`)
  const nextSlideElement = document.querySelector(`[data-index="${next}"]`)
  console.log(prevSlideElement, nextSlideElement)

  setTimeout(() => {
    prevSlideElement!.classList.remove('next-slide-anim')
    nextSlideElement!.classList.add('next-slide-anim')
  })
  console.log('testando')
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
          <div className="product-info">
            <span>
              <div className="icon-container">
                <FaFire />
              </div>
              Hot Deal In This Week
            </span>

            <h1>
              Roco Wireless<br /> Headphone
            </h1>

            <div className="more-info">
              <a href="#">
                <HiOutlineShoppingCart /> Shop Now
              </a>

              <div className="users">
                <ul>
                  <li>
                    <img src={userFor} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userTwo} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userThree} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userOne} alt="Usuário" />
                  </li>
                </ul>
              </div>

              <div className="reviews">
                <div className="rating-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <CiStar />
                </div>

                <span>100+</span> Reviews
              </div>
            </div>
          </div>

          <div className="product-info">
            <span>
              <div className="icon-container">
                <FaFire />
              </div>
              Hot Deal In This Week
            </span>

            <h1>
              Roco Wireless Headphone
            </h1>

            <div className="more-info">
              <a href="#">
                <HiOutlineShoppingCart /> Shop Now
              </a>

              <div className="users">
                <ul>
                  <li>
                    <img src={userFor} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userTwo} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userThree} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userOne} alt="Usuário" />
                  </li>
                </ul>
              </div>

              <div className="reviews">
                <div className="rating-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <CiStar />
                </div>

                <span>100+</span> Reviews
              </div>
            </div>
          </div>

          <div className="product-info">
            <span>
              <div className="icon-container">
                <FaFire />
              </div>
              Hot Deal In This Week
            </span>

            <h1>
              Roco Wireless Headphone
            </h1>

            <div className="more-info">
              <a href="#">
                <HiOutlineShoppingCart /> Shop Now
              </a>

              <div className="users">
                <ul>
                  <li>
                    <img src={userFor} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userTwo} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userThree} alt="Usuário" />
                  </li>
                  <li>
                    <img src={userOne} alt="Usuário" />
                  </li>
                </ul>
              </div>

              <div className="reviews">
                <div className="rating-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <CiStar />
                </div>

                <span>100+</span> Reviews
              </div>
            </div>
          </div>
        </Slider>


        <Slider
          {...imageSlider}
          asNavFor={imageNav}
          ref={(ImageSlider: Slider) => setInfoNav(ImageSlider)}
        >
          <div className="product-image" >
            <img src={headPhone} alt="" />
            <div className="product-price">
              <span>From</span>
              <span>$49.00</span>
            </div>
          </div>
          <div className="product-image">
            <img src={headPhone} alt="" />
            <div className="product-price">
              <span>From</span>
              <span>$49.00</span>
            </div>
          </div>
          <div className="product-image">
            <img src={headPhone} alt="" />
            <div className="product-price">
              <span>From</span>
              <span>$49.00</span>
            </div>
          </div>
        </Slider>
        <div className='shape-carousel'>
          <img src={shapeCarousel} alt="" />
        </div>
      </Center>
    </S.Container>
  )
}
