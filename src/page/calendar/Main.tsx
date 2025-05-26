import Calendar from "./Calendar";
import React, { useState } from "react";
import MiniCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarMain = () => {
  const [miniValue, setMiniValue] = useState(new Date());

  return (
    <div className="calendar-main">
      <div className="calendar-left">
        <div style={{ padding: "16px 8px", textAlign: "center" }}>
          <MiniCalendar
            value={miniValue}
            onChange={(value) => setMiniValue(value as Date)}
            locale="ko-KR"
            calendarType="gregory"
            showNeighboringMonth={false}
            tileClassName={() => "mini-calendar-tile"}
            formatDay={(_, date) => String(date.getDate())}
          />
        </div>
        {/* 왼쪽 영역의 다른 내용 */}
      </div>
      <Calendar />
      <div className="calendar-right">오른쪽</div>
    </div>
  );
};

export default CalendarMain;
