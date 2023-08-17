import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";

export const RoomSearch: FC = memo(() => {
  const history = useHistory();
  const onClickSearchProto = useCallback(
    () => history.push("/searchproto"),
    []
  );
  return (
    <>
      <Flex align="center" justify="center" direction="column" height="70vh">
        <Text fontSize="16px">ルームIDを入力してください</Text>
        <Input placeholder="ルームID" w="316px" />
        {/* <PrimaryButton children="検索" />
         */}
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
