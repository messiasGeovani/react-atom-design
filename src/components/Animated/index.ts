import styled, { css, SimpleInterpolation } from "styled-components";

import * as Animations from "../../styles/Animations";
import { Box } from "../atoms";
import { BaseDiv, BaseSpan } from "../Base";

type TAnimation = keyof typeof Animations;

interface IAnimationProps {
  duration: number;
  animation: TAnimation;
  fillMode: "none" | "forwards" | "backwards" | "both";
  delay: number;
}

function setAnimation(animation: TAnimation): SimpleInterpolation | void {
  const animations = Object.keys(Animations);

  if (!animations.includes(animation)) {
    return;
  }

  return Animations[animation];
}

const animationAttrs = ({
  duration,
  animation,
  fillMode,
  delay,
}: IAnimationProps) => css`
  animation-name: ${setAnimation(animation) as SimpleInterpolation};
  animation-duration: ${duration}s;
  animation-fill-mode: ${fillMode};
  animation-delay: ${delay}s;
`;

export const AnimatedDiv = styled(BaseDiv)`
  ${animationAttrs}
`;

export const AnimatedSpan = styled(BaseSpan)`
  ${animationAttrs}
`;

export const AnimatedBox = styled(Box)`
  ${animationAttrs}
`;
