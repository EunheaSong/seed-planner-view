import { SignUpBox } from "../style/member/SignStyle";
import { useState } from "react";
import { actionCreators as userActions } from "../api/member/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    // 입력 필드 값 변경 핸들러
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const navigate = useNavigate();

    // 폼 제출 핸들러
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await userActions.signUp(formData);
            navigate('/');
        } catch (e) {
            alert("다시!")
        }
    }

    return (
        <SignUpBox>
            <h1>회원가입</h1>
            <div>
                <label>email</label>
                <input type="email"
                       placeholder="Email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                />
            </div>
            <div>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호" maxLength={12}
                       name="password"
                       value={formData.password}
                       onChange={handleChange}
                />
            </div>
            <div>
                <label>비밀번호 재확인</label>
                <input type="password" placeholder="비밀번호 재확인" maxLength={12}
                       name="rePassword"
                       value={formData.rePassword}
                       onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>가입하기</button>
        </SignUpBox>
    )
}