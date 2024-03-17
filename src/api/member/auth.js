import axios from 'axios';
import { setToken } from "../Token";
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

const signUp = (props) => {
    return axios.post('http://localhost:8080/member/sign-up', {
            email: props.email,
            password: props.password,
            rePassword: props.rePassword
        })
            .then(response => {
                console.log("회원 가입 성공")
                return response.data; // 예시로 응답 데이터 반환
            }).catch(error => {
            // 오류발생시 실행
            console.error("회원 가입 오류")
            return Promise.reject(error);
        })
}

export const actionCreators = {
    login,
    signUp
};