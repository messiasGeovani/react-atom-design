import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Input, SuccessButton, Typography } from "../../../atoms";
import { BaseDiv, BaseForm, BaseSpan } from "../../../Base";

export function UserForm() {
  const { state } = useLocation();
  const history = useHistory();

  const [profileFields, setProfileFields] = useState({
    firstName: "",
    lastName: "",
    email: state?.email || "",
    password: state?.password || "",
  });

  const handleChangeProfileField =
    (fieldKey) =>
    ({ target }) =>
      setProfileFields({ ...profileFields, [fieldKey]: target.value });

  const handleSaveProfile = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <BaseForm
      flex
      column
      alignItems="center"
      justifyContent="center"
      fullWidth
      onSubmit={handleSaveProfile}
    >
      <BaseDiv flex justifyContent="space-between">
        <BaseSpan mr={2}>
          <Typography strong>Nome</Typography>
          <Input
            required
            value={profileFields.firstName}
            onChange={handleChangeProfileField("firstName")}
            placeholder="Isabelly"
          />
        </BaseSpan>
        <span>
          <Typography strong>Sobrenome</Typography>
          <Input
            required
            value={profileFields.lastName}
            onChange={handleChangeProfileField("lastName")}
            placeholder="Dias"
          />
        </span>
      </BaseDiv>
      <BaseDiv fullWidth mt={1}>
        <Typography strong>Email</Typography>
        <Input
          required
          value={profileFields.email}
          onChange={handleChangeProfileField("email")}
          placeholder="mail@website.com"
          fullWidth
        />
      </BaseDiv>
      <BaseDiv fullWidth mt={1}>
        <Typography strong>Senha</Typography>
        <Input
          required
          value={profileFields.password}
          onChange={handleChangeProfileField("password")}
          type="password"
          placeholder="Min. 8 caracteres"
          fullWidth
        />
      </BaseDiv>
      <BaseDiv mt={1}>
        <SuccessButton fullWidth>
          Salvar Perfil
        </SuccessButton>
        <Typography bold clickable color="danger" textAlign="center" mt={1}>
          Cancelar
        </Typography>
      </BaseDiv>
    </BaseForm>
  );
}
