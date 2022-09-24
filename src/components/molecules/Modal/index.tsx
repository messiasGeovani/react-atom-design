import React from "react";

import { AnimatedBox } from "../../Animated";

import { Background } from "./styles";

interface IModalProps {
  opened: boolean;
  children: React.ReactNode | React.ReactElement | any;
}

export function Modal({ opened = false, children }: IModalProps) {
  const animationType = opened ? "fadeIn" : "fadeOut";

  if (!opened) {
    return;
  }

  return (
    <Background
      flex
      alignItems="center"
      justifyContent="center"
      duration={0.5}
      animation={animationType}
      fillMode="both"
    >
      <AnimatedBox
        duration={1}
        animation="fadeInTop"
        fillMode="backwards"
        padding={1}
      >
        {children}
      </AnimatedBox>
    </Background>
  );
}
