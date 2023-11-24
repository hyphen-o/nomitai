import { DrawerHelp } from "@/components/drawer"
import { Flex, Heading, Highlight, Text, Divider } from "@chakra-ui/react"

export const Header = () => {
  return (
    <>
      <Flex align={"center"}>
        <Heading>
          <Highlight
            query="ノミ"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            ノミタイ
          </Highlight>
        </Heading>
        <DrawerHelp />
      </Flex>
      <Text fontWeight={"bold"} ml={"10px"} my={"5px"}>
        飲みゲージェネレーター
      </Text>
      <Divider />
    </>
  )
}
