import React, { FC, memo, useCallback } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import img2 from "../../images/homeIcon.png";
import img3 from "../../images/paymentIcon.png";
import img4 from "../../images/roomSearchIcon.png";
import { useHistory } from "react-router-dom";

export const MenuDrawer: FC = memo(() => {
  const homemode = () => {
    alert("Homeモード");
  };

  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickPayment = useCallback(() => history.push("/home/payment"), []);
  const onClickRoomSearch = useCallback(
    () => history.push("/home/room_search"),
    []
  );

  return (
    <>
      <Flex
        as="nav"
        h="70px"
        justify="center"
        align="center"
        borderBottom="1px"
        borderBottomColor="baseColors.gray.50"
        // px="11px"
      >
        <Flex
          as="div"
          align="center"
          direction="column"
          w="50px"
          onClick={onClickHome}
        >
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
        <Flex
          as="div"
          align="center"
          direction="column"
          w="50px"
          mx="60px"
          onClick={onClickPayment}
        >
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
        <Flex
          as="div"
          align="center"
          direction="column"
          w="50px"
          onClick={onClickRoomSearch}
        >
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
