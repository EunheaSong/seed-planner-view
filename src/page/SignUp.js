import {SignUpBox} from "../style/member/LoginStyle";

export default function SignUp() {
    return (
        <SignUpBox>
            <h1>회원가입</h1>
            <form>
                <div>
                    <label>email</label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호" maxLength={12}/>
                </div>
                <div>
                    <label>비밀번호 재확인</label>
                    <input type="password" placeholder="비밀번호 재확인" maxLength={12}/>
                </div>
                <button type="submit">가입하기</button>
            </form>
        </SignUpBox>
    )
}