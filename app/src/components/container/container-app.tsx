import { Container } from "@chakra-ui/react"
import React from "react"

type ContainerAppProps = {
  children: React.ReactNode
}

export const ContainerApp = ({ children }: ContainerAppProps) => {
  return (
    <>
      <Container h={"100vh"} mt={"50px"}>
        {children}
      </Container>
    </>
  )
}
