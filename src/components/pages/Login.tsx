import { Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";

import LoginLogoImage from "../../images/logo_and_moji_2.png";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login } = useAuth();
  const history = useHistory();
  const onClickSignUp = useCallback(() => history.push("/sign_up"), []);
  const onClickForget = useCallback(() => history.push("/password_forget"), []);

  const [emailAddress, setEmailAddress] = useState("");

  const [password, setPassword] = useState("");

  const onChangeEmailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setEmailAddress(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onClickLogin = () => login(emailAddress, password);
  // ボタンにこの関数を追加する

  return (
    <>
      <Flex align="center" justify="center" direction="column" height="90vh">
        <Image src={LoginLogoImage} alt="メインロゴ" boxSize="180px" />
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
          onClick={onClickLogin}
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
