import React from 'react'

import { H2 } from './styles'

type TitleProps = React.PropsWithChildren<{
  fontSize: number
}>

export const Title = ({ children, fontSize }: TitleProps) => {
  return (
    <H2 fontSize={fontSize}>
      {children}
    </H2>
  )
}
