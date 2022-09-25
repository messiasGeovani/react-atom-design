import React from "react";

import { useAuth } from "@context/Auth";

import { AnimatedDiv } from "@components/Animated";
import {
  GoogleIcon,
  Input,
  Label,
  OutlinedButton,
  PrimaryButton,
  PrimaryCheckBox,
  ThunderIcon,
  Title,
  Typography,
} from "@components/atoms";
import { BaseSpan } from "@components/Base";
import { Hidden } from "@components/Helpers";

import { FormWrapper, Separator } from "./styles";

interface IAuthFormProps {
  isRegister?: boolean;
  alternateForm: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function AuthForm({
  isRegister,
  alternateForm,
  handleSubmit,
}: IAuthFormProps) {
  const { fields, setFields } = useAuth();

  const texts = {
    title: isRegister ? "Registre-se" : "Login",
    googleButton: isRegister
      ? "Registrar-se com o Google"
      : "Logar com o Google",
    submitButton: isRegister ? "Registre-se" : "Login",
    alternateAuthType: isRegister
      ? ["Já possui uma conta", "Login"]
      : ["Não tem conta", "Registre-se"],
  };

  const handleChangeField =
    (fieldKey: keyof typeof fields) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setFields({ ...fields, [fieldKey]: target.value });

  const handleCheckField =
    (fieldKey: keyof typeof fields) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setFields({ ...fields, [fieldKey]: target.checked });

  const ConfirmPasswordInput = isRegister && (
    <AnimatedDiv
      duration={0.6}
      animation="fadeInRight"
      fillMode="backwards"
      fullWidth
    >
      <Typography semibold mt={1}>
        Confirmar senha*
      </Typography>
      <Input
        required
        type="password"
        placeholder="Min. 8 caracteres"
        fullWidth
        value={fields.confirmPassword}
        onChange={handleChangeField("confirmPassword")}
      />
    </AnimatedDiv>
  );

  const RememberLoginOption = !isRegister && (
    <AnimatedDiv
      flex
      alignItems="center"
      justifyContent="space-between"
      mt={1}
      mb={1}
      duration={0.6}
      animation="fadeInRight"
      fillMode="backwards"
    >
      <span>
        <PrimaryCheckBox
          id="rememberPassword"
          checked={fields.rememberLogin}
          onChange={handleCheckField("rememberLogin")}
        />
        <Label semibold htmlFor="rememberPassword">
          Lembrar-me &nbsp;
        </Label>
      </span>

      <Typography color="primary" bold clickable>
        Esqueceu a senha?
      </Typography>
    </AnimatedDiv>
  );

  const AcceptTermsOption = isRegister && (
    <AnimatedDiv
      flex
      alignItems="center"
      mt={1}
      mb={1}
      duration={0.5}
      animation="fadeInRight"
      fillMode="backwards"
    >
      <PrimaryCheckBox
        required
        id="acceptTerms"
        checked={fields.acceptTerms}
        onChange={handleCheckField("acceptTerms")}
      />
      <Label semibold htmlFor="acceptTerms">
        Eu aceito os &nbsp;
      </Label>
      <Label color="primary" htmlFor="acceptTerms" bold clickable>
        Termos e condições
      </Label>
    </AnimatedDiv>
  );

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Hidden>
        <AnimatedDiv
          duration={1.1}
          animation="fadeInRight"
          fillMode="backwards"
        >
          <ThunderIcon size={50} />
        </AnimatedDiv>
      </Hidden>
      <AnimatedDiv
        fullWidth
        duration={1}
        animation="fadeInRight"
        fillMode="backwards"
      >
        <Title mb={1}>{texts.title}</Title>
        <Typography semibold mb={1}>
          Qui aliquip enim dolore pariatur dolor ad.
        </Typography>
      </AnimatedDiv>
      <AnimatedDiv
        fullWidth
        duration={0.9}
        animation="fadeInRight"
        fillMode="backwards"
      >
        <OutlinedButton fullWidth>
          <BaseSpan flex alignItems="center" justifyContent="center">
            <GoogleIcon size={20} mr={1} />
            {texts.googleButton}
          </BaseSpan>
        </OutlinedButton>
      </AnimatedDiv>
      <Separator
        flex
        alignItems="center"
        justifyContent="center"
        mt={1}
        duration={0.9}
        animation="fadeInRight"
        fillMode="backwards"
      >
        Ou logar com Email
      </Separator>
      <AnimatedDiv
        duration={0.8}
        animation="fadeInRight"
        fillMode="backwards"
        fullWidth
      >
        <Typography semibold mt={1}>
          Email*
        </Typography>
        <Input
          required
          placeholder="mail@website.com"
          fullWidth
          value={fields.email}
          onChange={handleChangeField("email")}
        />
      </AnimatedDiv>
      <AnimatedDiv
        duration={0.7}
        animation="fadeInRight"
        fillMode="backwards"
        fullWidth
      >
        <Typography semibold mt={1}>
          Senha*
        </Typography>
        <Input
          required
          type="password"
          placeholder="Min. 8 caracteres"
          fullWidth
          value={fields.password}
          onChange={handleChangeField("password")}
        />
      </AnimatedDiv>
      {ConfirmPasswordInput}
      {RememberLoginOption}
      {AcceptTermsOption}
      <AnimatedDiv
        fullWidth
        duration={isRegister ? 0.5 : 0.6}
        animation="fadeInRight"
        fillMode="backwards"
      >
        <PrimaryButton type="submit" fullWidth>
          {texts.submitButton}
        </PrimaryButton>
      </AnimatedDiv>
      <AnimatedDiv
        flex
        alignItems="center"
        mt={1}
        duration={isRegister ? 0.4 : 0.5}
        animation="fadeInRight"
        fillMode="backwards"
      >
        <Typography semibold>{texts.alternateAuthType[0]} &nbsp;</Typography>
        <Typography color="primary" bold clickable onClick={alternateForm}>
          {texts.alternateAuthType[1]}
        </Typography>
      </AnimatedDiv>
    </FormWrapper>
  );
}
