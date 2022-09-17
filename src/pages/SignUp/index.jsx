import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseDiv } from "../../components/Base";
import { AuthForm } from "../../components/organisms/Forms/AuthForm";
import { Background, LoginBanner, WhiteBox } from "./styles";

export default function SignUp() {
  const history = useHistory();

  const [fields, setFields] = useState({
    login: "",
    confirmPassword: "",
    password: "",
    acceptTerms: false,
  });

  const redirectToLogin = () => history.goBack();

  const handleSignUp = () =>
    history.push({ pathname: "/profile", state: fields });

  return (
    <Background>
      <BaseDiv
        flex
        alignItems="center"
        justifyContent="space-between"
        fullHeight
      >
        <WhiteBox
          flex
          column
          alignItems="center"
          justifyContent="center"
          fullWidth
          fullHeight
        >
          <AuthForm
            isRegister
            fields={fields}
            setFields={setFields}
            alternateForm={redirectToLogin}
            handleSubmit={handleSignUp}
          />
        </WhiteBox>
        <WhiteBox fullWidth fullHeight>
          <BaseDiv
            flex
            alignItems="center"
            justifyContent="center"
            fullWidth
            fullHeight
          >
            <LoginBanner />
          </BaseDiv>
        </WhiteBox>
      </BaseDiv>
    </Background>
  );
}
