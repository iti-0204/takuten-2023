import React, { FC, memo } from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";

import theme from "../../../theme/theme";
import img1 from "../../../images/サービスロゴ.png";
import img2 from "../../../images/profile.png";

export const Header: FC = memo(() => {
  return (
    <Flex
      as="head"
      h="56px"
      boxShadow="md"
      justify="space-between"
      align="center"
      px="11px"
    >
      <Image
        src={img1}
        alt="サービスロゴ"
      />
      <Image
        src={img2}
        alt="プロフィール写真"
        borderRadius="full"
        boxSize="34px"
      />
    </Flex>
  );
});
