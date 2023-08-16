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
import { ChangeEvent, useCallback, useState } from "react";
import { useSchedule } from "../../../hooks/useSchedule";
import { start } from "repl";

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

const InputForm = (props: any) => {
  return (
    <>
      <ModalStyle>
        <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
          {props.placeholder}
        </FormLabel>
        <Input
          placeholder={props.placeholder}
          variant="unstyled"
          flexBasis="75%"
          textAlign="right"
          value={props.value}
          onChange={props.onChange}
        ></Input>
      </ModalStyle>
    </>
  );
};

const InputForm2 = (props: any) => {
  return (
    <>
      <ModalStyle>
        <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
          {props.title}
        </FormLabel>
        <Input
          placeholder={props.placeholder}
          variant="unstyled"
          flexBasis="75%"
          textAlign="right"
          disabled
          _placeholder={{ opacity: 1, color: "black" }}
          _disabled={{ opacity: 1 }}
        ></Input>
      </ModalStyle>
    </>
  );
};

const InputInUnder = (props: any) => {
  return (
    <>
      <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
        {props.title}
      </FormLabel>
      <Input
        placeholder={props.placeholder}
        variant="unstyled"
        flexBasis="75%"
        textAlign="right"
        // value={props.value}
        // onChange={props.onChange}
        disabled
        _placeholder={{ opacity: 1, color: "black" }}
        _disabled={{ opacity: 1 }}
      ></Input>
    </>
  );
};

export const Calendar = (): JSX.Element => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const onClickSelect = modal1.onOpen;

  const onClickEvent = modal2.onOpen;

  const { PostSchedule } = useSchedule();

  const Today = new Date();
  // 開始時間と終了時間
  const [startdate, setStartDate] = useState(Today);
  const [stringstartdate, setStringStartDate] = useState("");
  const [event_start, setEvent_start] = useState(Today);

  const [enddate, setEndDate] = useState(Today);
  const [stringenddate, setStringEndDate] = useState("");
  const [event_end, setEvent_end] = useState(Today);
  //タイトル
  const [title, setTitle] = useState("");
  const [event_title, setEvent_title] = useState("");
  //予算
  const [budget, setBudget] = useState("");
  const [event_budget, setEvent_budget] = useState("");
  //部屋番号
  const [password, setPassword] = useState("");
  const [event_password, setEvent_password] = useState("");

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);
  const onChangeBudget = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setPassword(e.target.value);
  }, []);

  const onChangeStringStartDate = (e: any) => {
    setStartDate(e);
    const result = new Date(e).toLocaleDateString("ja-JP");
    const stringvalue = result.replace(/\u002f/g, "-");
    console.log(stringvalue);
    setStringStartDate(stringvalue);
  };

  const onChangeStringEndDate = (e: any) => {
    setEndDate(e);
    const result = new Date(e).toLocaleDateString("ja-JP");
    const stringvalue = result.replace(/\u002f/g, "-");
    console.log(stringvalue);
    setStringEndDate(stringvalue);
  };

  // const onChangeStartDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setStartDate(e.target.value);
  // }, []);

  const onClickPostSchedule = () =>
    PostSchedule(
      title,
      stringstartdate,
      stringenddate,
      Number(budget),
      Number(password)
    );

  const ModalStyleUnderbar = styled(ModalStyle)`
    border-bottom: 1px solid #d9d9d9;
  `;

  const events = [
    {
      id: "a", // ユニークID
      start: "2023-08-02", // イベント開始日
      end: "2023-08-02", // イベント終了日
      starttime: "2023-08-02", // イベント開始日
      endtime: "2023-08-02", // イベント終了日
      title: "節分", // イベントのタイトル
      password: "4040",
      budget: "10000",
      backgroundColor: "red", // 背景色
      borderColor: "red", // 枠線色
      editable: true, // イベント操作の可否
    },
    // 省略
  ];

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
          // eventClick={onClickEvent}
          eventClick={(e) => {
            // event_title = e.event._def.title;
            setEvent_title(e.event._def.title);
            setEvent_start(e.event._def.extendedProps.starttime);
            setEvent_end(e.event._def.extendedProps.endtime);
            setEvent_budget(e.event._def.extendedProps.budget);
            setEvent_password(e.event._def.extendedProps.password);
            console.log(typeof event_title);
            onClickEvent();
          }}
          height="600px"
        />
      </StyleWrapper>
      <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
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
                <InputForm
                  placeholder="タイトル"
                  value={title}
                  onChange={onChangeTitle}
                />
              </FormControl>
              {/* 開始時間 */}
              <Box w="100%">
                <FormControl>
                  <ModalStyleUnderbar>
                    <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                      開始
                    </FormLabel>
                    <DatePicker
                      dateFormat="yyyy-MM-dd"
                      selected={startdate}
                      minDate={Today}
                      onChange={onChangeStringStartDate}
                    />
                  </ModalStyleUnderbar>
                </FormControl>
                {/* 終了時間 */}
                <FormControl>
                  <ModalStyle>
                    <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
                      終了
                    </FormLabel>
                    <DatePicker
                      locale="ja"
                      dateFormat="yyyy-MM-dd"
                      selected={enddate}
                      minDate={Today}
                      onChange={onChangeStringEndDate}
                    />
                  </ModalStyle>
                </FormControl>
              </Box>
              {/* 予算 */}
              <FormControl>
                <InputForm
                  placeholder="予算"
                  value={budget}
                  onChange={onChangeBudget}
                />
              </FormControl>
              {/* 部屋番号 */}
              <FormControl>
                <InputForm
                  placeholder="部屋番号"
                  value={password}
                  onChange={onChangePassword}
                />
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
                onClick={onClickPostSchedule}
              >
                決定
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* 登録した予定のモーダル --------------------------------------------------------------*/}

      <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
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
            {event_title}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody padding="0px" mt="45px">
            <VStack spacing="15px">
              {/* 開始時間 */}
              <Box w="100%">
                <FormControl>
                  <ModalStyleUnderbar>
                    <InputInUnder title="開始" placeholder={event_start} />
                  </ModalStyleUnderbar>
                </FormControl>
                {/* 終了時間 */}
                <FormControl>
                  <InputForm2 title="終了" placeholder={event_end} />
                </FormControl>
              </Box>
              {/* 予算 */}
              <FormControl>
                <InputForm2 title="予算" placeholder={event_budget} />
              </FormControl>
              {/* 部屋番号 */}
              <FormControl>
                <InputForm2 title="部屋番号" placeholder={event_password} />
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
                編集
              </Button>
              <Button
                bgColor="baseColors.yellow"
                w="130px"
                h="36px"
                fontWeight="medium"
                fontSize="14px"
                color="white"
              >
                支払い入力画面へ
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
