import React, { FC, memo } from "react";
import {
  Flex,
  Image,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

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
        <Image src={img1} alt="サービスロゴ" w="100px" />

        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="baseColors.beige"
            _hover={{ bg: "baseColors.beige" }}
            _active={{ bg: "baseColors.beige" }}
          >
            <Avatar size="sm" />
          </MenuButton>
          <MenuList
            minW="0"
            w="125px"
            h="105px"
            fontSize="16px"
            py="0px"
            border="none"
            borderRadius="15px"
          >
            <MenuItem
              py="6px"
              borderTopLeftRadius="15px"
              borderTopRightRadius="15px"
            >
              マイページ
            </MenuItem>
            <MenuItem py="6px">お知らせ</MenuItem>
            <MenuItem
              py="6px"
              borderBottomLeftRadius="15px"
              borderBottomRightRadius="15px"
            >
              ログアウト
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <MenuDrawer />
    </>
  );
});
