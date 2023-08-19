import FullCalendar from "@fullcalendar/react";
import {
  DayCellContentArg,
  EventInput,
  DateSelectArg,
  CalendarApi,
} from "@fullcalendar/core";
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
  Center,
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
  Spinner,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { styled } from "styled-components";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSchedule } from "../../../hooks/useSchedule";
import { start } from "repl";
import { useAllSchedules } from "../../../hooks/useAllSchedules";
import { useHistory } from "react-router-dom";
import { useMessage } from "../../../hooks/useMessage";
import {
  ScheduleContext,
  ScheduleProvider,
} from "../../../providers/ScheduleProvider";

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

const InputFormNum = (props: any) => {
  return (
    <>
      <ModalStyle>
        <FormLabel fontSize="16px" flexBasis="25%" margin="0px">
          {props.lavel}
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
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const onClickClose = modal1.onClose;
  const { showMessage } = useMessage();

  const { scheduleInfo, setScheduleInfo } = useContext(ScheduleContext);

  const onClickEvent = modal2.onOpen;
  // type schedules = {
  //   id: number;
  //   title: string;
  //   started_at: string;
  //   finished_at: string;
  //   budget: number;
  //   scheduled_by: number;
  //   password: number;
  // };
  const { PostSchedule, loading2, schedules } = useSchedule();

  const { getAllSchedules, loading, allschedules } = useAllSchedules();

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

  const [eventlist, setEventlist] = useState<object[]>([]);

  const [effectNum, setEffectNum] = useState(1);

  // const [eventapi, setEventapi] = useState<any>();

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

  const onClickSelect = useCallback((selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar;
    console.log(calendarApi);
    console.log("愛あいあいあいあいあいあい");
    // setEventapi(calendarApi);
  }, []);

  // const onChangeStartDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setStartDate(e.target.value);
  // }, []);

  const onClickPostSchedule = () => {
    if (title === "") {
      showMessage({ title: "タイトルを入力してください", status: "error" });
    } else if (stringstartdate === "") {
      showMessage({ title: "開始日付を選択してください", status: "error" });
    } else if (stringenddate === "") {
      showMessage({ title: "終了日付を選択してください", status: "error" });
    } else if (budget === "") {
      showMessage({ title: "予算を数値で入力してください", status: "error" });
    } else if (password === "") {
      showMessage({
        title: "部屋番号を数値で設定してください",
        status: "error",
      });
    } else {
      PostSchedule(
        title,
        stringstartdate,
        stringenddate,
        Number(budget),
        Number(password)
      );
      {
        loading2 ? (
          <Center h="100vh">
            <Spinner />
          </Center>
        ) : (
          // window.location.reload()
          onClickClose()
          // console.log("リロード入る")
        );
      }
    }
  };

  const history = useHistory();
  const onClickContribute = useCallback(
    () => history.push("/contributeproto"),
    []
  );

  const onClickPayInfo = useCallback(() => history.push("/payinfoproto"), []);

  const changeEffectNum = () => {
    setEffectNum(effectNum + 1);
  };

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
    },
    // 省略
  ];

  //useallスケジュールでeventsのオブジェクトを作っちゃう

  useEffect(() => getAllSchedules, []);

  const addevents = [...allschedules];

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
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
              // events={[{ title: "あ", date: "2023-08-11" }]}
              // events={allschedules}
              events={scheduleInfo}
              selectable={true}
              headerToolbar={{
                start: "prev",
                center: "title",
                end: "next",
              }}
              dateClick={modal1.onOpen}
              select={onClickSelect}
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
          <Flex direction="row-reverse" mr="20px">
            <Button
              w="60px"
              h="60px"
              borderRadius="50%"
              fontSize="30px"
              backgroundColor="baseColors.blue"
              color="white"
              boxShadow="lg"
              onClick={modal1.onOpen}
            >
              ＋
            </Button>
          </Flex>
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
                    <InputFormNum
                      lavel="予算"
                      placeholder="予算(半角数値で入力)"
                      value={budget}
                      onChange={onChangeBudget}
                    />
                  </FormControl>
                  {/* 部屋番号 */}
                  <FormControl>
                    <InputFormNum
                      lavel="部屋番号"
                      placeholder="部屋番号(半角数値で入力)"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </FormControl>
                  <FormControl>
                    <InputForm2 title="貢献度" placeholder="2   >" />
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
                    onClick={() => {
                      // changeEffectNum();
                      onClickPostSchedule();
                      // onClickClose();

                      // onClickAddEvent();
                    }}
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
                  <FormControl onClick={onClickContribute}>
                    <InputForm2 title="貢献度" placeholder="2   >" />
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
                    onClick={onClickPayInfo}
                  >
                    支払い入力画面へ
                  </Button>
                </VStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};
