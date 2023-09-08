import { ReactNode } from "react"
import Container from "../container/container"
import Logo from "../logo/logo"

const RootLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <main>
      <Container>
        <Logo />
        {children}
      </Container>
    </main>
  )
}

export default RootLayout
