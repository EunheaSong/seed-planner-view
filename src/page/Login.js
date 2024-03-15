import React from 'react';
// import center from '/style'
import {Button, Center, Input} from '../style/StyleComponet';

const Login = () => {
    return (
        <Center>
            <form style={{
                display: 'flex', flexDirection: 'column', width: '40%', height: '50%',
                backgroundColor: 'green'
            }}>
                <label>Email</label>
                <Input type={"email"} placeholder={"이메일을 입력하세요"}/>
                <label style={{paddingTop:'10px'}}>Password</label>
                <Input type={"password"} placeholder={"비밀번호를 입력하세요"}/>
                <Button>Login</Button>
                <Button style={{backgroundColor:'#fff900', color:'black'}}>카카오톡 간편로그인</Button>
            </form>

        </Center>
    );
};

export default Login;
