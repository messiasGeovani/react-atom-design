import React from "react";

import { AnimatedBox } from "@components/Animated";

import { Background } from "./styles";

interface IModalProps {
  opened?: boolean;
  children?: React.ReactNode | React.ReactElement | any;
}

export function Modal({ opened = false, children, ...props }: IModalProps) {

  if (!opened) {
    return null;
  }

  return (
    <Background
      flex
      alignItems="center"
      justifyContent="center"
      duration={0.5}
      animation="fadeIn"
      fillMode="both"
      {...props}
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
