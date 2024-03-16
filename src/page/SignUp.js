import {SignUpBox} from "../style/member/SignStyle";
import {useState} from "react";
import {signUp} from "../api/member/auth";

export default function SignUp() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    // 입력 필드 값 변경 핸들러
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // 폼 제출 핸들러
    const handleSubmit = (event) => {
        console.log(formData.email);
        signUp(formData);
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