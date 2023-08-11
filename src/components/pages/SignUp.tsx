import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import logoImage from "../../images/logo_and_moji_2.png";
import { useHistory } from "react-router-dom";

export const SignUp: FC = memo(() => {
  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), []);

  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={logoImage} alt="サービスロゴ" boxSize="180px" />
        <Stack spacing={8} py="70px">
          <Input placeholder="ユーザー名" w="316px" h="44px"></Input>
          <Input placeholder="メールアドレス" w="316px" h="44px"></Input>
          <Input placeholder="パスワード" w="316px" h="44px"></Input>
        </Stack>
        <Button
          w="316px"
          h="44px"
          backgroundColor="baseColors.blue"
          color="white"
        >
          登録する
        </Button>
      </Flex>
      <Text
        align="center"
        fontSize="14px"
        color="baseColors.blue"
        onClick={onClickBack}
      >
        ログインはこちら
      </Text>
    </>
  );
});
