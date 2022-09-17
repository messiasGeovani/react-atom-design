import React from "react";

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
} from "../../../atoms";
import { BaseSpan } from "../../../Base";
import { Hidden } from "../../../Helpers";

import { FormWrapper, Separator } from "./styles";

export function AuthForm({
  isRegister,
  fields,
  setFields,
  alternateForm,
  handleSubmit,
}) {
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
    (fieldKey) =>
    ({ target }) => {
      setFields({ ...fields, [fieldKey]: target.value });
    };

  const handleCheckField =
    (fieldKey) =>
    ({ target }) => {
      setFields({ ...fields, [fieldKey]: target.checked });
      console.log(target.checked);
    };

  const RememberLoginOption = () =>
    !isRegister && (
      <BaseSpan
        flex
        alignItems="center"
        justifyContent="space-between"
        mt={1}
        mb={1}
      >
        <span>
          <PrimaryCheckBox
            id="rememberPassword"
            checked={fields.rememberLogin}
            onChange={handleCheckField("rememberLogin")}
          />
          <Label strong htmlFor="rememberPassword">
            Lembrar-me &nbsp;
          </Label>
        </span>

        <Typography color="primary" bold clickable>
          Esqueceu a senha?
        </Typography>
      </BaseSpan>
    );

  const AcceptTermsOption = () =>
    isRegister && (
      <BaseSpan flex alignItems="center" mt={1} mb={1}>
        <PrimaryCheckBox
          required
          id="acceptTerms"
          checked={fields.acceptTerms}
          onChange={handleCheckField("acceptTerms")}
        />
        <Label strong htmlFor="acceptTerms">
          Eu aceito os &nbsp;
        </Label>
        <Label color="primary" htmlFor="acceptTerms" bold clickable>
          Termos e condições
        </Label>
      </BaseSpan>
    );

  return (
    <FormWrapper flex onSubmit={handleSubmit}>
      <Hidden>
        <ThunderIcon size={50} color="primary" />
      </Hidden>
      <Title mb={1}>{texts.title}</Title>
      <Typography strong mb={1}>
        Qui aliquip enim dolore pariatur dolor ad.
      </Typography>
      <OutlinedButton fullWidth>
        <BaseSpan flex alignItems="center" justifyContent="center">
          <GoogleIcon size={20} mr={1} />
          {texts.googleButton}
        </BaseSpan>
      </OutlinedButton>
      <Separator flex alignItems="center" justifyContent="center" mt={1}>
        Ou logar com Email
      </Separator>
      <BaseSpan fullWidth>
        <Typography strong mt={1}>
          Email*
        </Typography>
        <Input
          required
          placeholder="mail@website.com"
          fullWidth
          value={fields.email}
          onChange={handleChangeField("email")}
        />
      </BaseSpan>
      <BaseSpan fullWidth>
        <Typography strong mt={1}>
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
      </BaseSpan>
      {isRegister && (
        <BaseSpan fullWidth>
          <Typography strong mt={1}>
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
        </BaseSpan>
      )}
      <RememberLoginOption />
      <AcceptTermsOption />
      <PrimaryButton type="submit" fullWidth>
        {texts.submitButton}
      </PrimaryButton>
      <BaseSpan flex alignItems="center" mt={1}>
        <Typography strong>{texts.alternateAuthType[0]} &nbsp;</Typography>
        <Typography color="primary" bold clickable onClick={alternateForm}>
          {texts.alternateAuthType[1]}
        </Typography>
      </BaseSpan>
    </FormWrapper>
  );
}
