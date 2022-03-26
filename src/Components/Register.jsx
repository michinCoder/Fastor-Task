import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffdfba;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
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
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
// const LoggedIn = styled.p`
//   font-size: 12px;
//   color: black;
//   margin-top: 10px;
// `;

const Register = () => {
  const [phoneNum, setPhoneNum] = useState("");

  return (
    <Container>
      <Wrapper>
        <Heading>Register</Heading>
        <Input
          placeholder="Enter mobile number.."
          name="phoneNum"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <Link to='/verifyotp' state={{phoneNum: phoneNum}}>
        <Button>Get OTP</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
