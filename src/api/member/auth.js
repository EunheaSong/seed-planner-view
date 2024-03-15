import axios from 'axios';
import { setToken } from "../Token";
// import axiosInstance from "../axios";

export const auth = (email, password) => {
    axios.post('http://localhost:8080/member/sign-in', {
        email: email,
        password: password,
    })
        .then(response => {
            // response
            const token = response.headers.getAuthorization()
            console.log(token)
            setToken(token)
            console.log("성공인가?")
        }).catch(error => {
        // 오류발생시 실행
        console.log("오류인가?")
    }).then(() => {
        // 항상 실행
        console.log("항상 실행이건 뭔가? 여긴 뭘 해주면 좋을꼬?")
    });
}