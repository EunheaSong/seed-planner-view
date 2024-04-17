import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import React, {useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./page/Main";
import Calendar from "./layout/Calender";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

export default function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<SignIn />}></Route>
                    <Route path={"/sign-up"} element={<SignUp />}></Route>
                    <Route path={"/main"} element={<Main />}></Route>
                    <Route path={"/calender"} element={<Calendar />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

