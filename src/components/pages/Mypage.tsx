import React, { useState } from "react";
import { Header } from "../organisms/layout/Header";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Mypage = () => {
  const [userName, setUserName] = useState("しゃりしゃり");
  return (
    <>
      <Header />
      <Text textAlign="center">プロトタイプです🙇</Text>
      <Flex direction="column" align="center" mt="30px">
        <Box h="530px" w="338px" backgroundColor="white" borderRadius="10px">
          <VStack spacing="26px">
            <Box
              w="100%"
              h="45px"
              backgroundColor="baseColors.blue"
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
              color="white"
              fontSize="20px"
              py="8px"
              pl="18px"
            >
              プロフィール
            </Box>
            <Avatar w="105px" h="105px" my="7px" />
            <Box>
              <Text color="#808080" fontSize="16px">
                ユーザー名
              </Text>
              <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                w="295px"
                h="45px"
                borderColor="baseColors.gray.300"
                borderWidth="1px"
                // color="red"
                // opacity="0"
                _placeholder={{ opacity: 1 }}
                // _disabled={{ opacity: 1 }}
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
              mt="27px"
            >
              更新
            </Button>
          </VStack>
        </Box>
      </Flex>
      <Flex direction="column" align="center" mt="30px">
        <Box h="240px" w="338px" backgroundColor="white" borderRadius="10px">
          <VStack>
            <Box
              w="100%"
              h="45px"
              backgroundColor="baseColors.blue"
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
              color="white"
              fontSize="20px"
              py="8px"
              pl="18px"
            >
              友だち
            </Box>
            <Flex
              w="316px"
              h="46"
              borderBottom="1px"
              borderColor="baseColors.gray.50"
              direction="row"
              align="center"
              px="10px"
            >
              <Avatar w="35px" h="35px" />
              <Text mx="10px">ひろき</Text>
            </Flex>
            <Flex
              w="316px"
              h="46"
              borderBottom="1px"
              borderColor="baseColors.gray.50"
              direction="row"
              align="center"
              px="10px"
            >
              <Avatar w="35px" h="35px" />
              <Text mx="10px">たかひろ</Text>
            </Flex>
            <Flex
              w="316px"
              h="46"
              borderBottom="1px"
              borderColor="baseColors.gray.50"
              direction="row"
              align="center"
              px="10px"
            >
              <Avatar w="35px" h="35px" />
              <Text mx="10px">かんな</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};
