import { ContainerApp } from "@/components/container";
import { Header } from "@/components/header";
import { Box, Flex, Button, Text, Tag, TagLabel } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Home = () => {
  const [deg, setDeg] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFlip = async () => {
    const sleep = (second: number) =>
      new Promise(resolve => setTimeout(resolve, second * 0.1));
    setIsFlipped(false);

    for (let second = 0; second < 360; second++) {
      await sleep(1);
      setDeg(second);
    }
  };

  return (
    <>
      <ContainerApp>
        <Box mb={"20px"}>
          <Header />
        </Box>
        <ReactCardFlip flipDirection={"vertical"} isFlipped={isFlipped}>
          <div>
            <Flex
              alignItems={"center"}
              bg={"pink.50"}
              border={"solid 1px gray/100"}
              borderRadius={"10px"}
              boxShadow={"10px 10px 10px rgba(0, 0, 0, .4)"}
              className={"front"}
              h={"200px"}
              justify={"center"}
              position={"relative"}
              transform={`rotateY(${deg}deg)`}
              onClick={flipCard}
            >
              <Text
                align={"center"}
                color={"gray.600"}
                fontSize={"lg"}
                fontWeight={"bold"}
              >
                抽選ボタンを押そう！
              </Text>
              <Box
                bottom={"10px"}
                opacity={"0.8"}
                position={"absolute"}
                right={"10px"}
              >
                <Image alt="" height={50} src="/icons/drink.png" width={50} />
              </Box>
            </Flex>
          </div>
          <div>
            <Box
              alignItems={"center"}
              bg={"pink.50"}
              border={"solid 1px gray/100"}
              borderRadius={"10px"}
              boxShadow={"10px 10px 10px rgba(0, 0, 0, .4)"}
              className={"back"}
              h={"200px"}
              p={"10px"}
              transform={`rotateY(${deg}deg)`}
              onClick={flipCard}
            >
              <Tag borderRadius="full" colorScheme="blue">
                <TagLabel>概要</TagLabel>
              </Tag>
              <Text color={"gray.600"} ml={"20px"} my={"5px"} size={"lg"}>
                飲みゲーの概要説明
              </Text>
              <Tag borderRadius="full" colorScheme="red">
                <TagLabel>URL</TagLabel>
              </Tag>
              <Text color={"gray.600"} ml={"20px"} my={"5px"} size={"lg"}>
                飲みゲーの紹介URL
              </Text>
            </Box>
          </div>
        </ReactCardFlip>
        <Flex justify={"center"} mt={"30px"}>
          <Button
            borderRadius={"100px"}
            colorScheme={"teal"}
            w={"80%"}
            onClick={handleFlip}
          >
            抽選する！
          </Button>
        </Flex>
      </ContainerApp>
    </>
  );
};

export default Home;
