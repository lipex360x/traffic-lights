import { useState } from 'react'
import { Light } from '../Light'

import * as S from './styles'

export const TrafficLight = () => {
  const [lit, setLit] = useState('')
  const colors = ['red', 'yellow', 'green']

  return (
    <S.Wrapper>
      {colors.map((color) => (
        <Light key={color} lit={lit} setLit={setLit} color={color} />
      ))}
    </S.Wrapper>
  )
}
