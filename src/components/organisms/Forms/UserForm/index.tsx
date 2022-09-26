import React, { useState } from "react";

import { useAuth } from "@context/Auth";

import { useAppDispatch } from "@store/hooks";
import { addProfile } from "@store/Profile.store";

import { AnimatedDiv } from "@components/Animated";
import { Input, Separator, SuccessButton, Typography } from "@components/atoms";
import { BaseDiv, BaseForm, BaseSpan } from "@components/Base";
import { ImageSelector } from "@components/organisms/ImageSelector";
import { Modal } from "@components/molecules";

import { EditIcon, ProfileImg, ProfileImgWrapper } from "./styles";

interface IUserFormProps {
  handleSubmit: () => void;
}

export function UserForm({ handleSubmit }: IUserFormProps) {
  const dispatch = useAppDispatch();
  const { fields } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [profileFields, setProfileFields] = useState({
    firstName: "",
    lastName: "",
    email: fields.email || "",
    password: fields.password || "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
  });

  const handleChangeProfileField =
    (fieldKey: keyof typeof profileFields) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setProfileFields({ ...profileFields, [fieldKey]: target.value });

  const handleSaveProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addProfile(profileFields));
    handleSubmit();
  };

  const handleProcessImage = (image: string) => {
    setProfileFields({ ...profileFields, image });
    setOpenModal(false);
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
      <Modal opened={openModal}>
        <ImageSelector onProcess={handleProcessImage} />
      </Modal>
      <BaseDiv fullWidth>
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
            onClick={() => setOpenModal(true)}
          >
            <ProfileImg src={profileFields.image} />
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
