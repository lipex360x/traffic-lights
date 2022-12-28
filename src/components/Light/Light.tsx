import * as S from './styles'

export interface LightProps {
  color: string
  lit: string
  setLit: (color: string) => void
}

export const Light = (props: LightProps) => {
  const { color, lit, setLit } = props

  return <S.Wrapper color={color} lit={lit} onClick={() => setLit(color)} />
}
