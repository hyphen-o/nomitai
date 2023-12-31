import { CardFlip } from "@/components/card"
import { ContainerApp } from "@/components/container"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/navigation"
import { Box } from "@chakra-ui/react"

const Home = () => {
  return (
    <>
      <ContainerApp>
        <Box mb={"20px"}>
          <Header />
        </Box>
        <CardFlip />
      </ContainerApp>
      <BottomNav />
    </>
  )
}

export default Home
