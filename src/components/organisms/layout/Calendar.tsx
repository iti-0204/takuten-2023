import FullCalendar from "@fullcalendar/react";
import { DayCellContentArg, EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { styled } from "styled-components";
import { useState } from "react";
const events: EventInput[] = [
  {
    title: "飲み会",
    start: format(new Date(), "yyyy-MM-dd"),
  },
  {
    title: "旅行",
    start: format(new Date(), "yyyy-MM-dd"),
  },
];

export const Calendar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickSelect = () => onOpen();

  const Today = new Date();
  const [startdate, setStartDate] = useState(Today);
  const [enddate, setEndDate] = useState(Today);

  // カレンダーモーダルの装飾
  const ModalStyle = styled.div`
    display: flex;
    height: 36px;
    width: 100%;
    padding-left: 14px;
    padding-right: 30px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  `;

  const ModalStyleUnderbar = styled(ModalStyle)`
    border-bottom: 1px solid #d9d9d9;
  `;

  // カレンダーの見た目装飾
  const StyleWrapper = styled.div`
    .fc .fc-daygrid-day-top {
      justify-content: center;
      font-size: 10px;
    }
    .fc .fc-col-header-cell-cushion {
      font-size: 10px;
      font-weight: 100;
    }

    .fc th {
      border: none;
    }

    .fc .fc-scrollgrid-section > * {
      border-width: 0px;
    }

    .fc .fc-col-header-cell {
      border: none;
    }
    .fc .fc-scrollgrid {
      border-width: 0 0 0 0;
    }

    .fc .fc-scrollgrid-sync-table {
      border: 1px;
    }

    th.fc-day-sat .fc-col-header-cell-cushion {
      color: #4c9bca;
    }
    th.fc-day-sun .fc-col-header-cell-cushion {
      color: #eb6452;
    }
    td.fc-day-sat .fc-daygrid-day-number {
      color: #4c9bca;
    }
    td.fc-day-sun .fc-daygrid-day-number {
      color: #eb6452;
    }

    .fc .fc-button .fc-icon {
      font-size: 26px;
    }

    .fc .fc-button {
      &:focus {
        box-shadow: none;
      }
    }

    .fc-h-event {
      background-color: #f7cb59;
      border: none;
      border-radius: 4px;
    }

    .fc-h-event .fc-event-main-frame {
      border-color: #f7cb59;
      /* border-radius: 20px; */
    }

    .fc-h-event .fc-event-title-container {
      background-color: #f7cb59;
      border-radius: 4px;
    }

    .fc-h-event .fc-event-main-frame {
      text-align: center;
    }

    .fc .fc-button-primary {
      background-color: #fdfbf6;
      &:hover {
        border: none;
      }
      &:not(:disabled):active {
        background-color: #fdfbf6;
        border-color: #fdfbf6;
        color: #fdfbf6;
        box-shadow: none;
      }
      &:focus {
        box-shadow: none;
      }
      border: none;
    }
    .fc-icon-chevron-right {
      /* color: red; */
      color: #cecece;
    }
    .fc-icon-chevron-left {
      /* color: red; */
      color: #cecece;
    }
  `;

  return (
    <>
      <StyleWrapper>
        <FullCalendar
          dayCellContent={(event: DayCellContentArg) =>
            (event.dayNumberText = event.dayNumberText.replace("日", ""))
          }
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
          initialEvents={events}
          selectable={true}
          headerToolbar={{
            start: "prev",
            center: "title",
            end: "next",
          }}
          select={onClickSelect}
          height="600px"

          // businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
          // weekends={true}
        />
      </StyleWrapper>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w="350px"
          backgroundColor="baseColors.beige"
          borderRadius="15px"
        >
          <ModalHeader
            textAlign="center"
            backgroundColor="baseColors.blue"
            color="white"
            height="48px"
            borderTopLeftRadius="15px"
            borderTopRightRadius="15px"
            fontSize="18px"
            alignItems="center"
            py="10px"
          >
            作成
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody padding="0px" mt="45px">
            <VStack spacing="15px">
              {/* タイトル */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    タイトル
                  </FormLabel>
                  <Input
                    placeholder="タイトル"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
              {/* 開始時間 */}
              <Box w="100%">
                <FormControl>
                  <ModalStyleUnderbar>
                    <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                      開始
                    </FormLabel>
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={startdate}
                      minDate={Today}
                      onChange={(selectedDate) => {
                        setStartDate(selectedDate || Today);
                      }}
                    />
                    {/* <Input
                      placeholder="開始時間"
                      variant="unstyled"
                      flexBasis="75%"
                      textAlign="right"
                    ></Input> */}
                  </ModalStyleUnderbar>
                </FormControl>
                {/* 終了時間 */}
                <FormControl>
                  <ModalStyle>
                    <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                      終了
                    </FormLabel>
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={enddate}
                      minDate={Today}
                      onChange={(selectedDate) => {
                        setEndDate(selectedDate || Today);
                      }}
                    />
                    {/* <Input
                      placeholder="終了時間"
                      variant="unstyled"
                      flexBasis="75%"
                      textAlign="right"
                    ></Input> */}
                  </ModalStyle>
                </FormControl>
              </Box>
              {/* 予算 */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    予算
                  </FormLabel>
                  <Input
                    placeholder="予算"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
              {/* メンバー */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    メンバー
                  </FormLabel>
                  <Input
                    placeholder="メンバー"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
              {/* 貢献度 */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    貢献度
                  </FormLabel>
                  <Input
                    placeholder="貢献度"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
              {/* 場所 */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    場所
                  </FormLabel>
                  <Input
                    placeholder="場所"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
              {/* 集合 */}
              <FormControl>
                <ModalStyle>
                  <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                    集合
                  </FormLabel>
                  <Input
                    placeholder="集合"
                    variant="unstyled"
                    flexBasis="75%"
                    textAlign="right"
                  ></Input>
                </ModalStyle>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <VStack spacing="34px" align="center">
              <Button
                bgColor="baseColors.gray.100"
                w="106px"
                h="34px"
                fontWeight="medium"
                fontSize="14px"
              >
                項目を追加
              </Button>
              <Button
                bgColor="baseColors.yellow"
                w="90px"
                h="36px"
                fontWeight="medium"
                fontSize="14px"
                color="white"
              >
                決定
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
