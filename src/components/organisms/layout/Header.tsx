import React, { FC, memo } from "react";
import { Box, Flex, Image, Heading, Avatar, Text } from "@chakra-ui/react";

import theme from "../../../theme/theme";
import img1 from "../../../images/サービスロゴ.png";
import img2 from "../../../images/homeIcon.png";
import img3 from "../../../images/paymentIcon.png";
import img4 from "../../../images/roomSearchIcon.png";

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
        <Image src={img1} alt="サービスロゴ" />
        <Avatar size="sm" />
      </Flex>
      <Flex
        as="nav"
        h="70px"
        justify="center"
        align="center"
        borderBottom="1px"
        borderBottomColor="baseColors.gray.50"
        // px="11px"
      >
        <Flex as="div" align="center" direction="column" w="50px">
          <Image src={img2} alt="homeアイコン" boxSize="35px" />
          <Text
            fontSize="10px"
            color="baseColors.gray.100"
            fontWeight="semibold"
            fontFamily="Inter"
          >
            HOME
          </Text>
        </Flex>
        <Flex as="div" align="center" direction="column" w="50px" mx="60px">
          <Image src={img3} alt="paymentアイコン" boxSize="35px" />
          <Text
            fontSize="10px"
            color="baseColors.gray.100"
            fontWeight="semibold"
            fontFamily="Inter"
          >
            支払い
          </Text>
        </Flex>
        <Flex as="div" align="center" direction="column" w="50px">
          <Image src={img4} alt="roomSearchアイコン" boxSize="35px" />
          <Text
            fontSize="10px"
            color="baseColors.gray.100"
            fontWeight="semibold"
            fontFamily="Inter"
          >
            ルーム検索
          </Text>
        </Flex>
      </Flex>
    </>
  );
});
