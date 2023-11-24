import { Box, Flex, Button, Text, Tag, TagLabel } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"

export const CardFlip = () => {
  const [deg, setDeg] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [game, setGame] = useState({
    title: "抽選ボタンを押そう！",
    description: {
      overview: "ゲームの説明",
      url: "ゲームのURL"
    }
  })

  const handleFlip = async () => {
    const sleep = (second: number) =>
      new Promise(resolve => setTimeout(resolve, second * 0.1))
    setIsFlipped(false)

    for (let second = 0; second < 720; second++) {
      await sleep(1)
      setDeg(second)
      if (second === 90) {
        setGame({
          title: "抽選中...",
          description: {
            overview: "抽選中...",
            url: "抽選中..."
          }
        })
      }
      if (second === 630) {
        setGame({
          title: "qwe",
          description: {
            overview: "qwe",
            url: "qwe"
          }
        })
      }
    }
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <ReactCardFlip flipDirection={"vertical"} isFlipped={isFlipped}>
        <div onClick={flipCard}>
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
          >
            <Text
              align={"center"}
              color={"gray.600"}
              fontSize={"lg"}
              fontWeight={"bold"}
            >
              {game.title}
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
        <div onClick={flipCard}>
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
          >
            <Tag borderRadius="full" colorScheme="blue">
              <TagLabel>概要</TagLabel>
            </Tag>
            <Text color={"gray.600"} ml={"20px"} my={"5px"} size={"lg"}>
              {game.description.overview}
            </Text>
            <Tag borderRadius="full" colorScheme="red">
              <TagLabel>URL</TagLabel>
            </Tag>
            <Text color={"gray.600"} ml={"20px"} my={"5px"} size={"lg"}>
              {game.description.url}
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
    </>
  )
}
