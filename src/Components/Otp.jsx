import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffdfba;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  // width: 20%;
  // height: 25%;
  background-color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const Heading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignIn = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { phoneNum } = location.state;

  const LoginHandling = () => {
    const params = new URLSearchParams();
    params.append("phone", phoneNum);
    params.append("otp", "123456");
    params.append("dial_code", "+91");

    axios
      .post("https://staging.fastor.in/v1/pwa/user/login", params, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        const token = res.data.data.token;
        navigate('/reslist', {state: {token: token}});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Input placeholder="Enter OTP" name="otpholder" />
        <Button onClick={LoginHandling}>SUBMIT</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
