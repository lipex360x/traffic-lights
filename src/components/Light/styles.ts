import styled, { css } from 'styled-components'
import { LightProps } from './Light'

type WrapperProps = Omit<LightProps, 'setLit'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ color, lit }) => css`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background: ${color};
    opacity: ${color === lit ? 1 : 0.3};

    border: none;
    cursor: pointer;
  `}
`
