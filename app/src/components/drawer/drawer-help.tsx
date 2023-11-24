import {
  Flex,
  Text,
  Heading,
  Highlight,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure
} from "@chakra-ui/react"
import { QuestionIcon } from "@chakra-ui/icons"

export const DrawerHelp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <QuestionIcon ml={"10px"} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement={"bottom"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex>
              <Heading>
                <Highlight
                  query="ノミ"
                  styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
                >
                  ノミタイ
                </Highlight>
              </Heading>
              <Text mt={"auto"}>って？</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Text my={"10px"}>
              飲み会で盛り上がるゲームをランダムに抽選するアプリです。
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
