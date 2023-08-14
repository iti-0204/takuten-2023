import React from "react";
import { Header } from "../organisms/layout/Header";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Mypage = () => {
  return (
    <>
      <Header />
      <Flex direction="column" align="center">
        <Box h="530px" w="338px" backgroundColor="white" borderRadius="10px">
          <VStack spacing="26px">
            <Avatar w="105px" h="105px" />
            <Box>
              <Text color="#808080" fontSize="16px">
                ユーザー名
              </Text>
              <Input
                value="しゃりしゃり"
                disabled
                w="295px"
                h="45px"
                borderColor="baseColors.gray.300"
                borderWidth="1px"
                // color="red"
                // opacity="0"
                _placeholder={{ opacity: 1, color: "red" }}
                _disabled={{ opacity: 1, color: "red" }}
              ></Input>
            </Box>
            <Box>
              <Text color="#808080" fontSize="16px">
                メールアドレス
              </Text>
              <Input
                type="text"
                value="sarmon.ebi@sea.com"
                w="295px"
                h="45px"
                borderColor="baseColors.gray.300"
                borderWidth="1px"
              ></Input>
            </Box>
            <Button
              backgroundColor="baseColors.blue"
              color="white"
              w="295px"
              h="45px"
            >
              更新
            </Button>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};
