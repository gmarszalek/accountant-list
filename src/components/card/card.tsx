import { ReactNode } from "react"
import { StyledCard } from "./card.styles"

const Card = ({ children }: { children?: ReactNode }) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
