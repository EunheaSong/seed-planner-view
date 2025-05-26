import React, { useState } from "react";
import "./calendar.css";

const CalendarHeader = ({
  userName = "디롱",
  year,
  month,
  view = "month",
  onViewChange,
  onPrevMonth,
  onNextMonth,
}: {
  userName?: string;
  year: number;
  month: number;
  view?: "month" | "week";
  onViewChange?: (view: "month" | "week") => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="calendar-header-bar">
      <div className="calendar-header-left">
        <button className="calendar-nav-btn" onClick={onPrevMonth}>
          &lt;
        </button>
        <button className="calendar-today-btn">오늘</button>
        <button className="calendar-nav-btn" onClick={onNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-header-center">
        <div className="calendar-user-dropdown">
          <button
            className="calendar-user-btn"
            onClick={() => setDropdownOpen((v) => !v)}
          >
            <span className="calendar-user-arrow">&#9660;</span>
            <span className="calendar-user-name">{userName}</span>
          </button>
          {dropdownOpen && (
            <div className="calendar-user-dropdown-list">
              <div>프로필</div>
              <div>로그아웃</div>
            </div>
          )}
        </div>
        <span className="calendar-title">
          의 <span>{year}년</span> <span>{month}월</span>
        </span>
      </div>
      <div className="calendar-header-right">
        <div className="calendar-view-toggle">
          <button
            className={view === "month" ? "active" : ""}
            onClick={() => onViewChange && onViewChange("month")}
          >
            월
          </button>
          <button
            className={view === "week" ? "active" : ""}
            onClick={() => onViewChange && onViewChange("week")}
          >
            주
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
