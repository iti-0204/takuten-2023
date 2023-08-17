import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import React, { FC, memo, useCallback, useContext } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../../providers/ModeProvider";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const RoomSearch: FC = memo(() => {
  const { setModeInfo } = useContext(ModeContext);
  setModeInfo("roomsearch");
  const history = useHistory();
  const onClickSearchProto = useCallback(
    () => history.push("/searchproto"),
    []
  );
  return (
    <>
      <MenuDrawer />
      <Flex
        align="center"
        justify="center"
        direction="column"
        height="70vh"
        gap="80px"
      >
        <VStack spacing="30px">
          <Text fontSize="16px">ルームIDを入力してください</Text>
          <Input placeholder="ルームID" w="316px" />
          {/* <PrimaryButton children="検索" />
           */}
        </VStack>

        <Button
          bgColor="baseColors.yellow"
          w="90px"
          h="36px"
          fontWeight="medium"
          fontSize="14px"
          color="white"
          onClick={onClickSearchProto}
        >
          検索
        </Button>
      </Flex>
    </>
  );
});
