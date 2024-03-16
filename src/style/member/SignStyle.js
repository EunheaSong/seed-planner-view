import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 100px auto;
    border: 0px solid #c0c0c0;
    width: 464px;
    height: 537px;
    font-size: 17px;
    border-radius: 10px;
    padding: 0px 50px 10px 37px;
    font-style: normal;

    //#loginbtn {
    //    background: #72e306;
    //    color: #FFFFFF;
    //    border-radius: 10px;
    //    cursor: pointer;
    //
    //    :disabled {
    //        background: #F4F4F4;
    //        color: #8E8E8E;
    //        border: 1px solid #E4E4E4;
    //        cursor: auto;
    //    }
    //}


    button {
        //font-family: "Pretendard";
        font-style: normal;
        font-size: 18px;
        border: 0px;
        border-radius: 10px;
        cursor: pointer;
    }

    #buttonBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 15px;
        padding-top: 5px;
    }

    #loginbtn {
        margin-left: 70px;
        box-shadow: none;
        width: 157px;
        height: 118px;
        background-color: #6ed00f;
        margin-top: 10px;
        color: white;
        font-style: normal;
        font-size: 25px;
        font-weight: bold;
        :hover {
            transform: scale(0.99);
        }
    }

    /* #kakaobtn {
      box-shadow: none;
      border: 0px;
      width: 464px;
      height: 60px;
      background-color: #fae44d;
      margin-top: 5px;
      color: #212127;
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
    } */

    img {
        margin-top: 5px;
        width: 464px;

        :hover {
            transform: scale(0.99);
            cursor: pointer;
        }
    }

    #signupbtn {
        float: left;
        width: 120px;
        height: 24px;
        background-color: #fff;
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;

        :hover {
            transform: scale(0.99);
        }
    }
`;

export const LoginBox = styled.div`
                 border-radius: 10px;
width: 250px;

#box {
    input {
        border: 1px solid #c0c0c0;
        border-radius: 10px;
        width: 282px;
        height: 48px;
        margin-top: 10px;
        padding-top: 5px;
        padding-left: 16px;
        margin-right: 20px;
    }
}
`;

export const SignUpBox = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 10px 40px 10px;
    
    input {
        border: 1px solid #c0c0c0;
        border-radius: 5px;
        width: 230px;
        height: 35px;
        margin-top: 5px;
        margin-bottom: 18px;
        padding-top: 5px;
        padding-left: 16px;
    }
    
    div {
        text-align: left;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }
    
    label {
        margin-left: 3px;
    }
`;