import React from "react";
import { UserForm } from "../../components/organisms/Forms/UserForm";

import { Background, Box } from "./styles";

export default function Profile() {
  return (
    <Background flex alignItems="center" justifyContent="center">
      <Box
        duration={0.5}
        animation="fadeInZoomIn"
        fillMode="backwards"
        padding={5}
      >
        <UserForm />
      </Box>
    </Background>
  );
}
