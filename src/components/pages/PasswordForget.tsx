import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import LoginLogoImage from "../../images/logo_and_moji_2.png";

export const PasswordForget: FC = memo(() => {
  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={LoginLogoImage} alt="サービスロゴ" boxSize="180pxz" />
        <Stack spacing={8} py="70px">
          <Input placeholder="メールアドレス" w="316px" h="44px"></Input>
          <Input placeholder="パスワード" w="316px" h="44px"></Input>
        </Stack>
        <Button
          w="316px"
          h="44px"
          backgroundColor="baseColors.blue"
          color="white"
        >
          ログイン
        </Button>
        <Text align="center" pt={4} fontSize="14px">
          パスワードを忘れた方はこちら
        </Text>
      </Flex>
      <Text align="center" fontSize="14px">
        アカウント登録はこちら
      </Text>
      <Text align="center" fontSize="14px">
        メールアドレスを入力してください
      </Text>
    </>
  );
});
