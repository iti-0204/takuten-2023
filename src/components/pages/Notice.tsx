import React from "react";
import { Header } from "../organisms/layout/Header";
import { Avatar, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

import imgMoney from "../../images/NoticeMoneyIcon.png";

export const Notice = () => {
  return (
    <>
      <Header />
      {/* 支払い催促 */}
      <Text textAlign="center">プロトタイプです🙇</Text>
      <Flex
        justify="space-between"
        align="center"
        mx="35px"
        h="60px"
        borderBottom="1px"
        borderColor="baseColors.gray.50"
      >
        <HStack spacing="9px">
          <Image src={imgMoney} alt="お金ロゴ" boxSize="40px" />
          <Text fontSize="10px">完了していない支払いがあります。</Text>
        </HStack>
        <Button
          backgroundColor="baseColors.blue"
          color="white"
          w="70px"
          h="30px"
          fontSize="12px"
        >
          移動する
        </Button>
      </Flex>
      {/* 招待 */}
      <Flex
        justify="space-between"
        align="center"
        mx="35px"
        h="60px"
        borderBottom="1px"
        borderColor="baseColors.gray.50"
      >
        <HStack spacing="9px">
          <Avatar w="40px" h="40px"></Avatar>
          <Text fontSize="10px">あなたに予定の招待が届いています</Text>
        </HStack>
        <Button
          backgroundColor="baseColors.blue"
          color="white"
          w="70px"
          h="30px"
          fontSize="12px"
        >
          参加する
        </Button>
      </Flex>
    </>
  );
};
