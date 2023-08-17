import { Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Header } from "../organisms/layout/Header";
import { MenuDrawer } from "../molecules/MenuDrawer";

import ProtoSearchImage from "../../images/searchproto.png";
import { useHistory } from "react-router-dom";

export const SearchProto: FC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(
    () => history.push("/home"),
    []
  );
  return (
    <>
      <Flex justify="center" onClick={onClickHome}>
        <Image src={ProtoSearchImage} alt="メインロゴ" />
      </Flex>
    </>
  );
});
