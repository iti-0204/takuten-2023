import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import logoImage from "../../images/ログインロゴ.png";

export const SignUp: FC = memo(() => {
  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={logoImage} alt="サービスロゴ" />
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
    </>
  );
});
