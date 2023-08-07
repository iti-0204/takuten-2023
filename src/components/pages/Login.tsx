import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import LoginLogoImage from "../../images/logo_and_moji_2.png";
import { useHistory, useLocation } from "react-router-dom";

export const Login: FC = memo(() => {
  const history = useHistory();
  const onClickSignUp = useCallback(() => history.push("/sign_up"), []);
  const onClickForget = useCallback(() => history.push("/password_forget"), []);

  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={LoginLogoImage} alt="メインロゴ" boxSize="180px" />
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
        <Text
          align="center"
          pt={4}
          fontSize="14px"
          color="baseColors.blue"
          onClick={onClickForget}
        >
          パスワードを忘れた方はこちら
        </Text>
      </Flex>
      <Text
        align="center"
        fontSize="14px"
        color="baseColors.blue"
        onClick={onClickSignUp}
      >
        アカウント登録はこちら
      </Text>
    </>
  );
});
