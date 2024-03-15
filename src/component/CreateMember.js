import React, { useState } from "react";
import { LoginContainer, LoginBox } from '../style/member/LoginStyle';
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { history } from "../redux/configureStore";
// import Kakao from "../src_assets/kakao.png"
import { auth } from '../api/member/auth';

export default function CreateMember() {
    // const dispatch = useDispatch();

    const [email, setId] = useState("");
    const [password, setPwd] = useState("");
    // const info = {
    //     email : email,
    //     password: password
    // }

    const handleLogin = () => {
        auth(email, password)
    }
    return (
        <React.Fragment>
            <LoginContainer>
                <form>
                    <center>
                        <h2>로그인</h2>
                        <div id="buttonBox">
                            <LoginBox>
                                <div id="box">
                                    <input
                                        onChange={(e) => {
                                            setId(e.target.value);
                                        }}
                                        maxLength="30"
                                        placeholder="이메일"
                                        value={email}
                                    ></input>

                                    <input
                                        onChange={(e) => {
                                            setPwd(e.target.value);
                                        }}
                                        placeholder="비밀번호"
                                        maxLength="25"
                                        value={password}
                                        type="password"
                                        // onKeyDown={handleEvent}
                                    ></input>
                                </div>
                            </LoginBox>
                            <button
                                disabled={email === "" || password === ""}
                                id="loginbtn"
                                onClick={handleLogin}
                                type="button"
                            >
                                로그인
                            </button>
                        </div>
                        <hr/>
                        {/*<img*/}
                        {/*    src={Kakao}*/}
                        {/*    alt="kakao"*/}
                        {/*    onClick={kakaoLogin}*/}
                        {/*/>*/}
                        <button
                            id="signupbtn"
                            onClick={() => {
                                // history.push("/SignUp");
                            }}
                            type="button"
                        >
                            간편 회원가입
                        </button>
                    </center>
                </form>
            </LoginContainer>
        </React.Fragment>
    );
};