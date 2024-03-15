import axios from 'axios';

//TODO : 왜 적용이 안됄까..
const instance = axios.create({
    baseURL: 'http://localhost:8080', // 기본 URL 설정
    timeout: 10000, // 타임아웃 설정
    headers: {
        'Content-Type': 'application/json',// 기본 헤더 설정
        'Authorization': {}
    }
});

export default instance;