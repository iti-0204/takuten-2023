import { Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Header } from "../organisms/layout/Header";
import { MenuDrawer } from "../molecules/MenuDrawer";

import ProtoContributeImage from "../../images/貢献度プロト.png";
import { useHistory } from "react-router-dom";

export const ContributeProto: FC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.goBack(), []);
  return (
    <>
      <Flex justify="center" onClick={onClickHome}>
        <Image src={ProtoContributeImage} alt="メインロゴ" />
      </Flex>
    </>
  );
});
