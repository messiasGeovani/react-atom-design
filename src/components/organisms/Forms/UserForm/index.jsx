import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../context/Auth";
import { AnimatedDiv } from "../../../Animated";
import { Input, Separator, SuccessButton, Typography } from "../../../atoms";
import { BaseDiv, BaseForm, BaseSpan } from "../../../Base";

import { ProfileImgWrapper, ProfileImg, EditIcon } from "./styles";

export function UserForm() {
  const history = useHistory();

  const { fields } = useAuth();

  const [profileFields, setProfileFields] = useState({
    firstName: "",
    lastName: "",
    email: fields.email || "",
    password: fields.password || "",
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
      justifyContent="space-between"
      fullWidth
      fullHeight
      onSubmit={handleSaveProfile}
    >
      <BaseDiv>
        <Typography textAlign="center" bold size={18} color="gray">
          Editar perfil
        </Typography>
        <Separator background="lightgray" mt={0.1} mb={5} />
      </BaseDiv>
      <BaseDiv>
        <BaseDiv flex alignItems="center" justifyContent="center">
          <ProfileImgWrapper
            flex
            alignItems="center"
            justifyContent="center"
            delay={0.1}
            duration={1.1}
            animation="fadeInRight"
            fillMode="both"
          >
            <ProfileImg src="https://preview.redd.it/dolotg3z61p81.jpg?auto=webp&s=a63d01c46e3deaa5621eed2c20ff3dc4e657a2c8" />
            <EditIcon size={28} />
          </ProfileImgWrapper>
        </BaseDiv>
        <AnimatedDiv
          flex
          justifyContent="space-between"
          mt={10}
          delay={0.1}
          duration={1}
          animation="fadeInRight"
          fillMode="both"
        >
          <BaseSpan mr={2}>
            <Typography semibold>Nome</Typography>
            <Input
              required
              value={profileFields.firstName}
              onChange={handleChangeProfileField("firstName")}
              placeholder="Isabelly"
            />
          </BaseSpan>
          <span>
            <Typography semibold>Sobrenome</Typography>
            <Input
              required
              value={profileFields.lastName}
              onChange={handleChangeProfileField("lastName")}
              placeholder="Dias"
            />
          </span>
        </AnimatedDiv>
        <AnimatedDiv
          fullWidth
          mt={1}
          delay={0.1}
          duration={0.8}
          animation="fadeInRight"
          fillMode="both"
        >
          <Typography semibold>Email</Typography>
          <Input
            required
            value={profileFields.email}
            onChange={handleChangeProfileField("email")}
            placeholder="mail@website.com"
            fullWidth
          />
        </AnimatedDiv>
        <AnimatedDiv
          fullWidth
          mt={1}
          delay={0.1}
          duration={0.7}
          animation="fadeInRight"
          fillMode="both"
        >
          <Typography semibold>Senha</Typography>
          <Input
            required
            value={profileFields.password}
            onChange={handleChangeProfileField("password")}
            type="password"
            placeholder="Min. 8 caracteres"
            fullWidth
          />
        </AnimatedDiv>
        <BaseDiv mt={1}>
          <AnimatedDiv
            delay={0.1}
            duration={0.6}
            animation="fadeInRight"
            fillMode="both"
          >
            <SuccessButton fullWidth>Salvar Perfil</SuccessButton>
          </AnimatedDiv>
          <AnimatedDiv
            delay={0.1}
            duration={0.5}
            animation="fadeInRight"
            fillMode="both"
          >
            <Typography bold clickable color="danger" textAlign="center" mt={1}>
              Cancelar
            </Typography>
          </AnimatedDiv>
        </BaseDiv>
      </BaseDiv>
    </BaseForm>
  );
}