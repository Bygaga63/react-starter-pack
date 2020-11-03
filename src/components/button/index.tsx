import React, { FC } from 'react'
import styled from 'styled-components'

type TProps = {
  disabled: boolean
}

export const Button: FC<TProps> = ({ children }) => {
  return <StyledButton disabled>{children}</StyledButton>
}

const StyledButton = styled.button<Pick<TProps, 'disabled'>>`
  color: red;

  ${({ disabled }) =>
    disabled &&
    `
    color: red;
  `}
`
