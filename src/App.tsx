import React from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CalendarMain from "./page/calendar/Main";
import AccountMain from "./page/account/Main";
import Main from "./page/Main";
import Login from "./page/auth/Login";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="calendar" element={<CalendarMain />} />
            <Route path="account" element={<AccountMain />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
