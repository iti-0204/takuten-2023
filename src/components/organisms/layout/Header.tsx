import React, { FC, memo } from "react";
import { Flex, Image, Avatar } from "@chakra-ui/react";

import img1 from "../../../images/logo_and_moji_1.png";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        as="head"
        h="56px"
        boxShadow="sm"
        justify="space-between"
        align="center"
        px="11px"
      >
        <Image src={img1} alt="サービスロゴ" w="100px"/>
        <Avatar size="sm" />
      </Flex>
      <MenuDrawer />
    </>
  );
});
