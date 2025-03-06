import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import { Arrow } from '@/components'

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  rows: 2,
  slidesToScroll: 4,
  prevArrow: <Arrow $right='73px' $top='-52px' $arrowAnimation='left' icon={<HiOutlineArrowNarrowLeft />} />,
  nextArrow: <Arrow $right='15px' $top='-52px' $arrowAnimation='right' icon={<HiOutlineArrowNarrowRight />} />,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        prevArrow: <Arrow $right='62px' $top='-52px' $arrowAnimation='left' icon={<HiOutlineArrowNarrowLeft />} />,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 512,
      settings: {
        prevArrow: <Arrow $right='62px' $top='-52px' $arrowAnimation='left' icon={<HiOutlineArrowNarrowLeft />} />,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 4,
      }
    },
    {
      breakpoint: 460,
      settings: {
        prevArrow: <Arrow $right='62px' $top='-32px' $arrowAnimation='left' icon={<HiOutlineArrowNarrowLeft />} />,
        nextArrow: <Arrow $right='15px' $top='-32px' $arrowAnimation='right' icon={<HiOutlineArrowNarrowRight />} />,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 4,
      }
    },
  ]
}
