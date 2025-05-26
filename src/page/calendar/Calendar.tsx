import React, { useState } from "react";
import "./calendar.css";
import CalendarHeader from "./CalendarHeader";

function getMonthMatrix(year: number, month: number) {
  // month: 0-based
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  const firstDayOfWeek = firstDay.getDay(); // 0: Sun, 6: Sat
  const daysInMonth = lastDay.getDate();
  const daysInPrevMonth = prevLastDay.getDate();

  // 6주(42칸) 필요할 수도 있음
  const totalCells = firstDayOfWeek + daysInMonth > 35 ? 42 : 35;
  const weeks: { date: number; type: "prev" | "current" | "next" }[][] = [];

  let day = 1;
  let nextMonthDay = 1;

  for (let i = 0; i < totalCells / 7; i++) {
    const week: { date: number; type: "prev" | "current" | "next" }[] = [];
    for (let j = 0; j < 7; j++) {
      const cell = i * 7 + j;
      if (cell < firstDayOfWeek) {
        // 이전 달
        week.push({
          date: daysInPrevMonth - firstDayOfWeek + cell + 1,
          type: "prev",
        });
      } else if (day > daysInMonth) {
        // 다음 달
        week.push({ date: nextMonthDay++, type: "next" });
      } else {
        // 이번 달
        week.push({ date: day++, type: "current" });
      }
    }
    weeks.push(week);
  }
  return weeks;
}

const Calendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1); // 1~12

  // month: 1~12 → 0~11로 변환
  const weeks = getMonthMatrix(year, month - 1);

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  // 오늘 날짜 정보
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  return (
    <div className="calendar-container">
      <CalendarHeader
        year={year}
        month={month}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <div className="calendar">
        <div className="calendar-grid calendar-header">
          {days.map((d) => (
            <div key={d} className="calendar-cell calendar-header-cell">
              {d}
            </div>
          ))}
        </div>
        <div className="calendar-grid calendar-body">
          {weeks.flat().map((cell, idx) => {
            const isToday =
              year === todayYear &&
              month === todayMonth &&
              cell.type === "current" &&
              cell.date === todayDate;
            return (
              <div
                key={idx}
                className={`calendar-cell calendar-day-cell ${cell.type} ${
                  isToday ? "today" : ""
                }`}
              >
                {isToday ? (
                  <span className="today-circle">{cell.date}</span>
                ) : (
                  cell.date
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
