import React, { FC, memo, useContext } from "react";
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
import { ModeContext } from "../../providers/ModeProvider";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Payment: FC = memo(() => {
  const { setModeInfo } = useContext(ModeContext);
  setModeInfo("payment");
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

  const ButtonStyle2 = styled.button`
    background-color: #76bef3;
    color: #ffffff;
    width: 62px;
    height: 38px;
    font-weight: normal;
    font-size: 11px;
    border-radius: 5px;
  `;

  return (
    <>
      <MenuDrawer />
      <Text textAlign="center">プロトタイプです🙇‍♀️</Text>
      <Flex
        justify="space-between"
        px="14px"
        py="10px"
        borderBottom="1px"
        borderBottomColor="baseColors.gray.50"
      >
        <HStack spacing="4px">
          <ButtonStyle2>すべて</ButtonStyle2>
          <ButtonStyle>支払い</ButtonStyle>
          <ButtonStyle>受け取り</ButtonStyle>
        </HStack>

        <HStack spacing="4px">
          <ButtonStyle2>未完了</ButtonStyle2>
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
          5300
          <Box as={"span"} fontSize="13px">
            円
          </Box>
        </Text>
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
              backgroundColor="baseColors.blue"
              color="white"
              w="66px"
              h="14px"
            >
              <Text fontSize="9px">支払い済</Text>
            </Box>
            <Box>
              <Text fontSize="14px">Bさんからの請求</Text>
              <Text fontSize="9px">2023年 7月5日 飲み会</Text>
            </Box>
          </VStack>
        </HStack>
        <Text fontSize="27px" fontWeight="semibold">
          6100
          <Box as={"span"} fontSize="13px">
            円
          </Box>
        </Text>
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
              w="66px"
              h="14px"
            >
              <Text fontSize="9px">未受け取り</Text>
            </Box>
            <Box>
              <Text fontSize="14px">Cさんからの受け取り</Text>
              <Text fontSize="9px">2023年 7月5日 飲み会</Text>
            </Box>
          </VStack>
        </HStack>
        <Text fontSize="27px" fontWeight="semibold">
          7000
          <Box as={"span"} fontSize="13px">
            円
          </Box>
        </Text>
      </Flex>
    </>
  );
});
