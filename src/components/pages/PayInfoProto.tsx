import { Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Header } from "../organisms/layout/Header";
import { MenuDrawer } from "../molecules/MenuDrawer";

import ProtoPayInfoImage from "../../images/payinfoprotoimage.png";
import { useHistory } from "react-router-dom";

export const PayInfoProto: FC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.goBack(), []);
  return (
    <>
      <Flex justify="center" onClick={onClickHome}>
        <Image src={ProtoPayInfoImage} alt="メインロゴ" />
      </Flex>
    </>
  );
});
