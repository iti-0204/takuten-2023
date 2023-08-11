import React, { FC, memo } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { styled } from "styled-components";

export const Payment: FC = memo(() => {
  // ボタンの装飾
  const ButtonStyle = styled.button`
    background-color: #e2e2e2;
    color: #585858;
    width: 62px;
    height: 38px;
    font-weight: normal;
    font-size: 11px;
    border-radius: 5px;
  `;

  return (
    <>
      <Flex
        justify="space-between"
        px="14px"
        py="10px"
        borderBottom="1px"
        borderBottomColor="baseColors.gray.50"
      >
        <HStack spacing="4px">
          <ButtonStyle>すべて</ButtonStyle>
          <ButtonStyle>支払い</ButtonStyle>
          <ButtonStyle>受け取り</ButtonStyle>
        </HStack>

        <HStack spacing="4px">
          <ButtonStyle>未完了</ButtonStyle>
          <ButtonStyle>完了</ButtonStyle>
        </HStack>
      </Flex>
      <Flex
        alignItems="center"
        justify="space-between"
        mx="13px"
        pr="20px"
        py="13px"
        borderBottom="1px"
        borderBottomColor="baseColors.gray.200"
      >
        <HStack spacing="11px" alignItems="center">
          <Avatar w="60px" h="60px" />
          <VStack alignItems="flex-start" spacing="5px">
            <Box
              textAlign="center"
              borderRadius="36px"
              backgroundColor="baseColors.yellow"
              color="white"
              w="60px"
              h="14px"
            >
              <Text fontSize="9px">未払い</Text>
            </Box>
            <Box>
              <Text fontSize="14px">Aさんからの請求</Text>
              <Text fontSize="9px">2023年 7月5日 飲み会</Text>
            </Box>
          </VStack>
        </HStack>
        <Text fontSize="27px" fontWeight="semibold">
          5300<Box as={"span"} fontSize="13px">円</Box>
        </Text>
      </Flex>
    </>
  );
});
