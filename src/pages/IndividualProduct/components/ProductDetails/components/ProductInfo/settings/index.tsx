import { ProductType } from '../../../../../../../types/product'

export const getSliderSettings = (productDetails?: ProductType) => ({
  customPaging: function (i: number) {
    const productImages = productDetails?.images

    if (productImages && i >= 0 && i < productImages.length) {
      return <img src={productImages[i].url ?? ''} alt={productDetails?.name} />
    }

    return <img src={''} alt={''} />
  },
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
})
