import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";

import logoImage from "../../images/logo_and_moji_2.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const SignUp: FC = memo(() => {
  const { signup } = useAuth();
  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), []);

  const [emailAddress, setEmailAddress] = useState("");

  const [password, setPassword] = useState("");

  const onChangeEmailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setEmailAddress(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onClickSignUp = () => signup(emailAddress, password);

  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={logoImage} alt="サービスロゴ" boxSize="180px" />
        <Stack spacing={8} py="70px">
          <Input
            placeholder="メールアドレス"
            w="316px"
            h="44px"
            value={emailAddress}
            onChange={onChangeEmailAddress}
          ></Input>
          <Input
            placeholder="パスワード"
            w="316px"
            h="44px"
            value={password}
            onChange={onChangePassword}
          ></Input>
        </Stack>
        <Button
          w="316px"
          h="44px"
          backgroundColor="baseColors.blue"
          color="white"
          onClick={onClickSignUp}
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
