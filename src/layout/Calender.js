import React, { useState } from "react";
import "../style/Calender.css";

//TODO : 공휴일 데이터 가져오기

export default function Calendar() {
  const currentDate = new Date();
  const [selectDay, setSelectDay] = useState(currentDate);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const [selectMonth, setSelectMonth] = useState(currentMonth);

  // 해당 월의 첫 번째 날을 가져오기
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  // 해당 월의 마지막 날을 가져오기
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  // 각 요일에 해당하는 날짜를 배열에 채움
  const daysInMonth = [];
  let day = new Date(firstDayOfMonth);

  // 해당 월의 첫 번째 날 이전의 공백을 채움
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    daysInMonth.push("");
  }
  // 해당 월의 날짜를 채움
  while (day <= lastDayOfMonth) {
    daysInMonth.push(new Date(day).getDate());
    day.setDate(day.getDate() + 1);
  }

  // 배열을 크기별로 나누는 함수
  function chunkArray() {
    const chunkedArray = [];
    for (let i = 0; i < daysInMonth.length; i += 7) {
      chunkedArray.push(daysInMonth.slice(i, i + 7));
    }
    return chunkedArray;
  }

  // 년 월을 표시하는 span 태그 클릭시 년,월 선택 박스 활성화.
  return (
    <div className="container">
      <div className="calendar">
        <p>
          <button>{` < `}</button>
          <span role="button" onClick={() => alert("yayayayay")}>
            {`${selectDay.getFullYear()}년 ${selectDay.getMonth() + 1}월`}
          </span>
          <button>{` > `}</button>
        </p>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red" }}>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th style={{ color: "blue" }}>토</th>
            </tr>
          </thead>
          <tbody>
            {chunkArray().map((week, index) => (
              <tr key={index}>
                {week.map((date) => (
                  <Day date={date} key={date} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Day({ date }) {
  //TODO : onClick event
  function 일정상세보기() {
    //날짜에 맞는 일정 상세 보기 API 요청
  }

  return (
    <td key={date}>
      <div
        role="button"
        // onMouseOver={}
        onClick={() => alert("tttt")}
      >
        {date}
        {/* 
             날짜에 해당하는 일정 표시.
             카테고리 컬러 + 일정 제목 8글자 + ... 
              */}
      </div>
    </td>
  );
}

//년 월을 표기하는 캘린더의 헤더 컴포넌트.
function CalendarHeader({ selectDay, selectMonth }) {
  return (
    <>
      <span>{`${selectDay.getFullYear()}년`}</span>
      {/* {`${
          selectDay.getMonth() + 1
        }월`}
        <span> */}
      <select defaultValue={selectDay.getMonth() + 1}>
        <option>1</option>
      </select>
      {/* </span> */}
    </>
  );
}

//년, 월을 선택할 수 있도록 하는 셀렉트 박스. 년월을 p 태그를 클릭하면 활성화.
function SelectDate() {
  return (
    <span>
      {/* 년 . 몇년부터 몇년까지 표기해줄것인가?.... */}
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      {/* 월 */}
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </span>
  );
}

//전, 후 달로 넘기는 버튼 + 당일로 리셋하는 버튼
// 온클릭 이벤트 함수를 따로 받아와서 전,후 달 이동과 당일 날짜로 리셋하는 것을 각각 사용.
function MoveDateButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
