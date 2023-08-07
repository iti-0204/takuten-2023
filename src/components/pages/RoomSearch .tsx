import { Flex, Input, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const RoomSearch: FC = memo(() => {
  return (
    <>
      <Flex align="center" justify="center" direction="column" height="70vh">
        <Text fontSize="16px">ルームIDを入力してください</Text>
        <Input placeholder="ルームID" w="316px" />
        <PrimaryButton children="検索" />
      </Flex>
    </>
  );
});
