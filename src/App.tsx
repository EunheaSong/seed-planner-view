import React from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CalendarMain from "./page/calendar/Main";
import AccountMain from "./page/account/Main";
import Main from "./page/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="calendar" element={<CalendarMain />} />
            <Route path="account" element={<AccountMain />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
