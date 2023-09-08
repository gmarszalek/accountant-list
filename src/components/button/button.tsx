import React, { HTMLAttributes } from "react"
import { StyledButton } from "./button.styled"

interface ButtonProps {
  label: string
  disabled?: boolean
}

const Button = ({
  label,
  disabled = false,
  ...rest
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      <span>{label}</span>
    </StyledButton>
  )
}

export default Button
