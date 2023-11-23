import { DrawerHelp } from "@/components/drawer";
import { Flex, Heading, Highlight } from "@chakra-ui/react";

export const Header = () => {
  return (
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
  );
};
