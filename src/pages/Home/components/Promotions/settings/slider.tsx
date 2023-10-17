import { Arrow } from '../../../../../components/Arrow'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/Hi'

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <Arrow $right='73px' $top='-52px' $arrowAnimation='left' icon={< HiOutlineArrowNarrowLeft />} />,
  nextArrow: <Arrow $right='15px' $top='-52px' $arrowAnimation='right' icon={<HiOutlineArrowNarrowRight />} />,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1250,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <Arrow $right='62px' $top='-52px' $arrowAnimation='left' icon={< HiOutlineArrowNarrowLeft />} />,
      }
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow $right='62px' $top='45px' $arrowAnimation='left' icon={< HiOutlineArrowNarrowLeft />} />,
        nextArrow: <Arrow $right='15px' $top='45px' $arrowAnimation='right' icon={< HiOutlineArrowNarrowRight />} />,
      }
    },
  ]
}
