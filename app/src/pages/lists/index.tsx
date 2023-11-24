import { ContainerApp } from "@/components/container"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/navigation"
import { Box, Heading } from "@chakra-ui/react"

const Lists = () => {
  return (
    <>
      <ContainerApp>
        <Box mb={"20px"}>
          <Header />
        </Box>
        <Heading mt={"50px"}>Coming soon...</Heading>
      </ContainerApp>
      <BottomNav />
    </>
  )
}

export default Lists
