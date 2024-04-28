import * as S from './styles'
import { ReactNode, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

type TogleProps = React.PropsWithChildren<{
  $icon: ReactNode
  $text: string
  $clickableText: string
  $containerSize: number
}>

export const Togle = (data: TogleProps) => {
  const [togleState, setTogleState] = useState(false)

  return (
    <S.Container open={togleState} size={data.$containerSize}>
      <div className="togle">
        {data.$icon}
        <p>{data.$text}&nbsp;&nbsp;</p>
        <span onClick={() => {
          setTogleState(!togleState)
        }}>
          {data.$clickableText}
          <IoIosArrowDown />
        </span>
      </div>

      <div className="togle-form">
        {data.children}
      </div>
    </S.Container>
  )
}
