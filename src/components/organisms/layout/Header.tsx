import React, { FC, memo, useCallback } from "react";
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
import { useHistory } from "react-router-dom";

export const Header: FC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/home");
  }, []);

  const onClickLogin = useCallback(() => {
    history.push("/");
  }, []);

  const onClickMypage = useCallback(() => {
    history.push("/mypage");
  }, []);

  const onClickNotice = useCallback(() => {
    history.push("/notice");
  }, []);
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
        <Image src={img1} alt="サービスロゴ" w="100px" onClick={onClickHome} />

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
              onClick={onClickMypage}
            >
              マイページ
            </MenuItem>
            <MenuItem py="6px" onClick={onClickNotice}>
              お知らせ
            </MenuItem>
            <MenuItem
              py="6px"
              borderBottomLeftRadius="15px"
              borderBottomRightRadius="15px"
              onClick={onClickLogin}
            >
              ログアウト
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      
    </>
  );
});
