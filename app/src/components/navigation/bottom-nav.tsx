import { CustomIcon } from "@/components/icon"
import { Flex, Center, Divider } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const BottomNav = () => {
  const router = useRouter()

  return (
    <Flex
      align={"center"}
      bottom={"20px"}
      justify={"space-evenly"}
      position={"sticky"}
      w={"100%"}
    >
      <CustomIcon
        fill={router.pathname === "/home" ? "#4FD1C5" : "white"}
        h={"30px"}
        icon={"gohome"}
        w={"30px"}
        onClick={() => router.push("/home")}
      />
      <Center h={"40px"}>
        <Divider borderWidth={"0.5px"} orientation="vertical"></Divider>
      </Center>
      <CustomIcon
        fill={router.pathname === "/lists" ? "#4FD1C5" : "white"}
        h={"30px"}
        icon={"list"}
        w={"30px"}
        onClick={() => router.push("/lists")}
      />
    </Flex>
  )
}
