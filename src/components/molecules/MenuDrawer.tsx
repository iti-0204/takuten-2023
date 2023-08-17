import React, { FC, memo, useCallback, useContext } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import img2 from "../../images/homeIcon.png";
import img3 from "../../images/paymentIcon.png";
import img4 from "../../images/roomSearchIcon.png";
import img5 from "../../images/homeIcon2.png";
import img6 from "../../images/paymentIcon2.png";
import img7 from "../../images/roomSearchIcon2.png";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../../providers/ModeProvider";

export const MenuDrawer: FC = memo(() => {
  const { modeInfo, setModeInfo } = useContext(ModeContext);
  const homemode = () => {
    alert("Homeモード");
  };

  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/home");
    setModeInfo("home");
  }, []);
  const onClickPayment = useCallback(() => {
    history.push("/home/payment");
    setModeInfo("payment");
  }, []);
  const onClickRoomSearch = useCallback(() => {
    history.push("/home/room_search");
    setModeInfo("roomsearch");
  }, []);

  const srcHome = modeInfo == "home" ? img5 : img2;
  const srcPayment = modeInfo == "payment" ? img6 : img3;
  const srcRoomSearch = modeInfo == "roomsearch" ? img7 : img4;
  console.log(modeInfo);

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
          <Image src={srcHome} alt="homeアイコン" boxSize="35px" />
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
          <Image src={srcPayment} alt="paymentアイコン" boxSize="35px" />
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
          <Image src={srcRoomSearch} alt="roomSearchアイコン" boxSize="35px" />
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
