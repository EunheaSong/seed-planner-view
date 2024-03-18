import axios from 'axios';
import { setToken } from "../Token";
import {useNavigate} from "react-router-dom";
// import axiosInstance from "../axios";

export const login = (email, password) => {
    axios.post('http://localhost:8080/member/sign-in', {
        email: email,
        password: password,
    })
        .then(response => {
            // response
            const token = response.headers.getAuthorization()
            console.log(token)
            setToken(token)
            console.log("로그인 성공")
        }).catch(error => {
        // 오류발생시 실행
        console.log("로그인 오류")
    }).then(() => {
        // 항상 실행
    });
}

const signUp = async (props) => {
    await axios.post('http://localhost:8080/member/sign-up', {
        email: props.email,
        password: props.password,
        rePassword: props.rePassword
    })
        .then(response => {
            console.log("회원 가입 성공")
            return response.data;
        }).catch(error => {
        // 오류발생시 실행
        console.error("회원 가입 오류" + error)
    })
}

const duplicationEmail = (email) => {
    return axios.get(`http://localhost:8080/member/exist?email=${email}`)
        .then(response => {
            console.log("이메일 중복 확인 성공")
            return Promise.resolve(response.data); // 예시로 응답 데이터 반환
        }).catch(error => {
            // 오류발생시 실행
            console.error("이메일 중복 오류" + error)
        })
}


export const actionCreators = {
    login,
    signUp,
    duplicationEmail
};