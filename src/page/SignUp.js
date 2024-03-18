import {SignUpBox} from "../style/member/SignStyle";
import {useState} from "react";
import {actionCreators as userActions} from "../api/member/auth";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rePassword: ''
    });
    const [isDuplicationEmail, setDuplicationEmail] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidRePassword, setIsValidRePassword] = useState(true);

    // 입력 필드 값 변경 핸들러
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const emailHandleBlur = () => {
        if (formData.email.length > 0) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const isValid = emailRegex.test(formData.email);
            setIsValidEmail(isValid);
            if (isValid) {
                try {
                    const res = userActions.duplicationEmail(formData.email)
                    res.then((result) => {
                        console.log(result)
                        if (result === false) {
                            setDuplicationEmail(true)
                        } else {
                            setDuplicationEmail(false)
                        }
                    })
                } catch (e) {
                    alert("이메일 중복 확인 오류!")
                }
            }
        } else {
            setIsValidEmail(true);
        }
    }

    const passwordHandleBlur = () => {
        if (formData.password.length > 0) {
            const passwordReg = /^(?=.*[A-Za-z])[A-Za-z0-9!@#$%^&*]{8,12}$/;
            setIsValidPassword(passwordReg.test(formData.password));
        }
    }

    const rePasswordHandleBlur = () => {
        setIsValidRePassword(formData.password === formData.rePassword);
    }

    const navigate = useNavigate();

    // 폼 제출 핸들러
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("가입하기 클릭")
        if (formData.email === "" || formData.password === "" || formData.rePassword === "") {
            alert("모든 정보를 입력해주세요 :)")
        } else if (!isDuplicationEmail && isValidEmail && isValidPassword && isValidPassword) {
            await userActions.signUp(formData);
            navigate('/');
        } else {
            alert("입력 정보를 확인해주세요")
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
                       onBlur={emailHandleBlur}
                />
            </div>
            {!isValidEmail && <p style={{color: 'red'}}>올바른 이메일 형식이 아닙니다.</p>}
            {formData.email.length > 0 && isDuplicationEmail && <p style={{color: 'red'}}>이미 가입된 이메일입니다.</p>}
            <div>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호" maxLength={12}
                       name="password"
                       value={formData.password}
                       onChange={handleChange}
                       onBlur={passwordHandleBlur}
                />
            </div>
            {!isValidPassword &&
                <p style={{color: 'red'}}>형식에 맞는 비밀번호를 사용해주세요. (8자 이상 12자 이하의 영문, 숫자, !@#$%^&* 의 조합)</p>}

            <div>
                <label>비밀번호 재확인</label>
                <input type="password" placeholder="비밀번호 재확인" maxLength={12}
                       name="rePassword"
                       value={formData.rePassword}
                       onChange={handleChange}
                       onBlur={rePasswordHandleBlur}
                />
            </div>
            {!isValidRePassword && <p style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</p>}

            <button type="submit" onClick={handleSubmit}>가입하기</button>
        </SignUpBox>
    )
}