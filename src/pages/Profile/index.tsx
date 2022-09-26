import React from "react";
import { useRouter } from "next/router";

import { AnimatedBox } from "@components/Animated";
import { UserForm } from "@components/organisms";

import { Background } from "./styles";

export default function Profile() {
  const router = useRouter();
  const handleSaveProfile = () => {
    router.replace("/login");
  };

  return (
    <Background flex alignItems="center" justifyContent="center">
      <AnimatedBox
        duration={0.5}
        animation="fadeInZoomIn"
        fillMode="backwards"
        padding={5}
      >
        <UserForm handleSubmit={handleSaveProfile} />
      </AnimatedBox>
    </Background>
  );
}
